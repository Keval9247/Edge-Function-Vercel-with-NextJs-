"use client";

import { useState, FormEvent } from 'react';

export default function RegisterForm() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Send registration data to the server
        const res = await fetch('/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        const result = await res.json();
        if (res.ok) {
            setMessage('User registered successfully!');
        } else {
            setMessage(`Error: ${result.error}`);
        }
    };

    const formStyle: React.CSSProperties = {
        width: '300px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        textAlign: 'center' as 'center', // Type assertion to ensure it works as expected
    };

    const inputStyle: React.CSSProperties = {
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        fontSize: '14px',
        width: '100%',
    };

    const buttonStyle: React.CSSProperties = {
        padding: '10px',
        border: 'none',
        backgroundColor: '#0070f3',
        color: 'white',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold',
        transition: 'background-color 0.3s ease',
    };

    const buttonHoverStyle: React.CSSProperties = {
        ...buttonStyle,
        backgroundColor: '#005bb5',
    };

    const messageStyle: React.CSSProperties = {
        fontSize: '14px',
        color: message.startsWith('Error') ? '#ff0000' : '#008000',
        marginTop: '10px',
    };

    return (
        <form style={formStyle} onSubmit={handleSubmit}>
            <h2 style={{ marginBottom: '10px' }}>Register</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={inputStyle}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={inputStyle}
            />
            <button
                type="submit"
                style={buttonStyle}
                onMouseOver={(e) => (e.target.style.backgroundColor = '#005bb5')}
                onMouseOut={(e) => (e.target.style.backgroundColor = '#0070f3')}
            >
                Register
            </button>
            <p style={messageStyle}>{message}</p>
        </form>
    );
}
