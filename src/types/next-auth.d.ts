import 'next-auth'

declare module 'next-auth' {
    interface HelperBuddySession {
        user: {
            id: string;
            email: string;
            name: string;
            role: string;
            jwtToken: string;
        };
    }
}