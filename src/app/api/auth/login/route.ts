import { createClient, Session } from '@supabase/supabase-js';

export const runtime = 'edge';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface LoginRequestBody {
    email: string;
    password: string;
}

export async function POST(req: Request): Promise<Response> {
    try {
        const { email, password }: LoginRequestBody = await req.json();

        if (!email || !password) {
            return new Response(
                JSON.stringify({ error: 'Email and password are required' }),
                { status: 400 }
            );
        }

        const { data, error }: { data: Session | any; error: any | null } =
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
    } catch (error: any) {
        return new Response(
            JSON.stringify({ error: 'Internal server error', message: error?.message }),
            { status: 500 }
        );
    }
}
