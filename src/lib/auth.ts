import db from '@/src/db'; 
import CredentialsProvider from 'next-auth/providers/credentials';
import { NextAuthOptions } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import bcrypt from 'bcryptjs';
import { SignJWT, importJWK, JWTPayload } from 'jose';
import { randomUUID } from 'crypto';

interface HelperBuddySession {
  user: {
    id: string;
    email: string;
    name: string;
    role: string;
    jwtToken: string;
  };
}

interface HelperBuddyToken extends JWT {
  uid: string;
  jwtToken: string;
}

interface HelperBuddyUser {
  id: string;
  email: string;
  name: string;
  role: string;
  token: string;
}

/**
 * Generates a JWT token for authentication
 */
const generateJWT = async (payload: JWTPayload) => {
  const secret = process.env.JWT_SECRET || 'supersecretkey';

  const jwk = await importJWK({ k: secret, alg: 'HS256', kty: 'oct' });

  return new SignJWT({
    ...payload,
    iat: Math.floor(Date.now() / 1000),
    jti: randomUUID(),
  })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('30d')
    .sign(jwk);
};

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Helper Buddy Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'example@email.com' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials: any) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Missing email or password');
        }

        // Fetch user from DB
        const user = await db.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user) {
          throw new Error('User not found');
        }

        // Verify password
        const isValidPassword = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isValidPassword) {
          throw new Error('Invalid password');
        }

        // Generate JWT Token
        const jwt = await generateJWT({ id: user.id });

        // Update user token in DB
        await db.user.update({
          where: { id: user.id },
          data: { token: jwt },
        });

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role || 'user',
          token: jwt,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET || 'secr3tkey',
  callbacks: {
    async session({ session, token }) {
      const newSession: HelperBuddySession = session as HelperBuddySession;

      if (newSession.user && token.uid) {
        newSession.user.id = token.uid;
        newSession.user.jwtToken = token.jwtToken;
        newSession.user.role = token.role;
      }

      return session;
    },
    jwt: async ({ token, user }) => {
      const newToken: HelperBuddyToken = token as HelperBuddyToken;

      if (user) {
        newToken.uid = user.id;
        newToken.jwtToken = user.token;
        newToken.role = (user as HelperBuddyUser).role;
      }

      return newToken;
    },
  },
  pages: {
    signIn: '/login',
  },
};
