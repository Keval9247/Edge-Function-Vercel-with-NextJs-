"use client";

import { useState } from 'react';

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
    form: {
        marginTop: '20px',
    },
    inputFocus: {
        borderColor: '#007BFF',
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
    buttonHover: {
        backgroundColor: '#0056b3',
    },
    messageStyle: {
        fontSize: '20px',
        color: '#008000',
        marginTop: '20px',
    },
    responseContainer: {
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#eaf4ff',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        border: '1px solid #007BFF',
        width: '100%',
        maxWidth: '400px',
        display: 'flex',
        flexDirection: 'column',
    },
    responseHeading: {
        fontSize: '18px',
        fontWeight: '500',
        color: '#333',
        marginBottom: '10px',
    },
    response: {
        fontFamily: 'monospace',
        fontSize: '14px',
        color: '#555',
        backgroundColor: '#f4f4f4',
        padding: '15px',
        borderRadius: '5px',
        overflowX: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
    clearButton: {
        marginTop: '15px',
        padding: '10px 15px',
        backgroundColor: '#FF4F58',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        fontSize: '14px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
};

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const credentials = {
        email: 'example@example.com',
        password: 'password123',
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        if (email === credentials.email && password === credentials.password) {
            setMessage('Login successful!');
            window.location.href = '/protected';
        } else {
            setMessage('Error: Invalid credentials');
        }
    };

    const messageStyle = {
        fontSize: '20px',
        color: message.startsWith('Error') ? '#ff0000' : '#008000',
        marginTop: '10px',
    };

    return (
        <div style={styles.container}>
            <div style={styles.formContainer}>
                <h1 style={styles.heading}>Login</h1>
                <p style={{ fontSize: '16px', color: '#666' }}>
                    Please log in with the credentials below:
                </p>
                <div style={styles.responseContainer}>
                    <h3 style={styles.responseHeading}>Test Credentials:</h3>
                    <pre style={styles.response}>
                        <span>Email: {credentials.email}</span>
                        <span>Password: {credentials.password}</span>
                    </pre>
                </div>
                <form onSubmit={handleSubmit} style={styles.form}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={styles.input}
                        onFocus={(e) => (e.target.style.borderColor = '#007BFF')}
                        onBlur={(e) => (e.target.style.borderColor = '#ccc')}
                    />
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={styles.input}
                        onFocus={(e) => (e.target.style.borderColor = '#007BFF')}
                        onBlur={(e) => (e.target.style.borderColor = '#ccc')}
                    />
                    <button type="submit" style={styles.button}>
                        Login
                    </button>
                </form>
            </div>

            {message && (
                <p
                    style={{
                        ...styles.messageStyle,
                        color: message.startsWith('Error') ? '#ff0000' : '#008000',
                    }}
                >
                    {message}
                </p>
            )}
        </div>
    );
}
