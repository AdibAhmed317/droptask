import { Backend_URL } from '@/lib/constants';
import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOption: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credential',
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
          placeholder: 'ex@gmail.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) return null;

        const { email, password } = credentials;
        const res = await fetch(Backend_URL + '/auth/login', {
          method: 'POST',
          body: JSON.stringify({
            email,
            password,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (res.status === 401) {
          console.log(res.statusText);
          return null;
        }
        const user = await res.json();
        return user;
      },
    }),
  ],
};

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
