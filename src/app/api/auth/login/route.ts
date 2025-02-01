import { createClient, User, Session } from '@supabase/supabase-js';

export const config = {
    runtime: 'edge',
};

// Create a Supabase client instance
const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface LoginRequestBody {
    email: string;
    password: string;
}

interface LoginResponse {
    message: string;
    data?: User | Session;
    error?: string;
}

export default async function handler(req: Request): Promise<Response> {
    if (req.method !== 'POST') {
        return new Response(
            JSON.stringify({ error: 'Method not allowed' }),
            { status: 405 }
        );
    }

    try {
        const { email, password }: LoginRequestBody = await req.json();

        if (!email || !password) {
            return new Response(
                JSON.stringify({ error: 'Email and password are required' }),
                { status: 400 }
            );
        }

        // Sign in with Supabase
        const { data, error }: { data: Session | any | null; error: any | null } =
            await supabase.auth.signInWithPassword({
                email,
                password,
            });

        if (error) {
            return new Response(
                JSON.stringify({ error: error.message }),
                { status: 400 }
            );
        }

        return new Response(
            JSON.stringify({ message: 'Login successful', data }),
            {
                status: 200,
                headers: {
                    'Set-Cookie': `token=${data?.access_token}; HttpOnly; SameSite=Strict; Path=/; Max-Age=3600`,
                },
            }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({ error: 'Internal server error' }),
            { status: 500 }
        );
    }
}
