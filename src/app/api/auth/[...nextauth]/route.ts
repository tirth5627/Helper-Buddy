import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name:"Email",
            credentials: {
                username:{label:'email',type:'text', palceholder:'Email'},
                password:{label:'password',type:'password', palceholder:'Password'},
            },
            async authorize(credentials:any) {  
                return {id:"user 1"
                };
            },
        })
    ]
});  

function CredentialProvider(arg0: { name: string; Credentials: { username: any; email: any; type: string; palceholder: string; }; password: { label: string; type: string; palceholder: string; }; }, async: any, arg2: any, arg3: { return: { id: string; }; }): import("next-auth/providers/index").Provider {
    throw new Error("Function not implemented.");
}
