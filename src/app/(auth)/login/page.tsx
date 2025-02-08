import { AuthLayout } from "@/src/components/auth/AuthLayout";
import { LoginForm } from "@/src/components/auth/LoginForm";
// import { authOptions } from '@/srclib/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function LoginPage() {
  // const session = await getServerSession(authOptions);
  // if (session?.user) {
  //   redirect('/');
  // }
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}