import { createClient } from '@supabase/supabase-js';

export const config = {
    runtime: 'edge',
};

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default async function handler(req: Request): Promise<Response> {
    if (req.method !== 'POST') {
        return new Response(
            JSON.stringify({ error: 'Method not allowed' }),
            { status: 405 }
        );
    }

    try {
        const { email, password } = await req.json();

        if (!email || !password) {
            return new Response(
                JSON.stringify({ error: 'Email and password are required' }),
                { status: 400 }
            );
        }

        const { data, error } = await supabase.auth.signInWithPassword({
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
            JSON.stringify({ message: 'Login successful', data: data.session }),
            {
                status: 200,
                headers: {
                    'Set-Cookie': `token=${data.session.access_token}; HttpOnly; SameSite=Strict; Path=/; Max-Age=3600`,
                },
            }
        );
    } catch (error: any) {
        return new Response(
            JSON.stringify({ error: 'Internal server error', message: error?.message }),
            { status: 500 }
        );
    }
}
