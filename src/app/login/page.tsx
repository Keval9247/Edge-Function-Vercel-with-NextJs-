"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f2f5',
        padding: '20px',
        flexDirection: 'column',
        width: '100%',
        minHeight: '100vh',
    },
    formContainer: {
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '40px',
        width: '100%',
        maxWidth: '400px',
        textAlign: 'center',
    },
    heading: {
        marginBottom: '20px',
        fontSize: '24px',
        fontWeight: '600',
        color: '#333',
    },
    input: {
        width: '80%',
        padding: '12px',
        marginBottom: '15px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        fontSize: '16px',
        color: '#333',
        outline: 'none',
        transition: 'border-color 0.3s',
    },
    button: {
        width: '60%',
        padding: '12px',
        backgroundColor: '#007BFF',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
    messageStyle: {
        fontSize: '20px',
        marginTop: '20px',
    },
};

export default function LoginForm() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();
            if (res.ok) {
                setMessage('Login successful!');
                router.push('/protected'); // Navigate to the protected route
            } else {
                setMessage(`Error: ${data.error}`);
            }
        } catch (err: any) {
            console.error("🚀🚀 Your selected text is => err: ", err);
            setMessage('Error: Something went wrong.');
        }

        setLoading(false);
    };

    return (
        <div style={styles.container}>
            <div style={styles.formContainer}>
                <h1 style={styles.heading}>Login</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={styles.input}
                    />
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={styles.input}
                    />
                    <button type="submit" style={styles.button} disabled={loading}>
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
            </div>

            {message && (
                <p style={{ ...styles.messageStyle, color: message.startsWith('Error') ? '#ff0000' : '#008000' }}>
                    {message}
                </p>
            )}
        </div>
    );
}
