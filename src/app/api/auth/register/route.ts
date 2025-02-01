import { createClient } from '@supabase/supabase-js';


export const config = {
    runtime: 'edge',
};

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default async function handler(req) {
    if (req.method !== 'POST') {
        return new Response(JSON.stringify({ error: 'Method not allowed' }), {
            status: 405,
        });
    }

    const { email, password } = await req.json();

    const { data, error } = await supabase.auth.signUp({
        email,
        password,
    });

    if (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 400,
        });
    }

    return new Response(JSON.stringify({ message: 'User registered', data }), {
        status: 200,
    });
}