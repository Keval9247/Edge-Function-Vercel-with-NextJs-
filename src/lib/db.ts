import { createClient } from '@supabase/supabase-js';
import { NextApiRequest, NextApiResponse } from 'next';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export const config = {
    runtime: 'edge',
};

type UserResponse = {
    success: boolean;
    user?: any;
    error?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<UserResponse>) {
    const { userId } = req.query;

    if (!userId || typeof userId !== 'string') {
        return res.status(400).json({ success: false, error: 'Invalid userId' });
    }

    const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', userId)
        .single();

    if (error || !data) {
        return res.status(401).json({ success: false, error: 'Unauthorized' });
    }

    return res.status(200).json({ success: true, user: data });
}
