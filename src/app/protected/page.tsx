"use client";

import { useEffect, useState } from "react";

interface UserMetadata {
    email: string;
    name: string;
    id: string;
}

interface Data {
    data: {
        user_metadata: UserMetadata;
    };
}

interface Error {
    message: string;
}

export default function ProtectedPage() {
    const [data, setData] = useState<Data | null>({
        data: {
            user_metadata: {
                email: 'example@example.com',
                name: 'John Doe',
                id: '123'
            }
        }
    });
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/api/protected");
                if (!res.ok) {
                    throw new Error("Failed to fetch protected content. Please log in again.");
                }
                const json: Data = await res.json();
                setData(json);
            } catch (err: any) {
                console.error("🚀🚀 Fetch error:", err.message);
                setError({ message: err.message });
                setTimeout(() => {
                    window.location.href = "/login";
                }, 2000);
            }
        };

        fetchData();
    }, []);

    if (error) {
        return (
            <div style={styles.errorContainer}>
                <h2 style={styles.errorTitle}>Access Denied</h2>
                <p>{error.message}</p>
                <p>Redirecting to the login page...</p>
            </div>
        );
    }

    if (!data) return <div style={styles.loadingContainer}>Loading protected content...</div>;

    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1>Welcome, {data.data.user_metadata.email && data.data.user_metadata.email.split('@')[0]} !</h1>
                <p style={styles.subText}>You’ve successfully accessed the protected content.</p>
            </header>
            <main style={styles.mainContent}>
                <section style={styles.card}>
                    <h2 style={styles.cardTitle}>Account Details</h2>
                    <p><strong>Username:</strong> {data.data.user_metadata.email}</p>
                    <p><strong>User ID:</strong> {data.data.user_metadata.id}</p>
                </section>
                <section style={styles.card}>
                    <h2 style={styles.cardTitle}>Next Steps</h2>
                    <ul style={styles.list}>
                        <li>Explore the platform's features.</li>
                        <li>Update your profile information.</li>
                        <li>Check out the latest updates.</li>
                    </ul>
                </section>
            </main>
        </div>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        backgroundColor: "#fff", // White background
        color: "#333", // Dark text for contrast
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "'Arial', sans-serif",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Subtle shadow for emphasis
    },
    header: {
        textAlign: "center",
        marginBottom: "30px",
    },
    subText: {
        color: "#555",
        fontSize: "16px",
    },
    mainContent: {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
    },
    card: {
        padding: "15px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        backgroundColor: "#f7f7f7",
    },
    cardTitle: {
        color: "#333",
        fontSize: "18px",
        marginBottom: "10px",
    },
    list: {
        listStyle: "disc",
        marginLeft: "20px",
        color: "#333",
    },
    footer: {
        marginTop: "30px",
        textAlign: "center",
        color: "#777",
        fontSize: "14px",
    },
    loadingContainer: {
        textAlign: "center",
        fontSize: "18px",
        color: "#555",
    },
    errorContainer: {
        textAlign: "center",
        color: "#d9534f", // Red for error
        fontSize: "18px",
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow for error
    },
    errorTitle: {
        fontSize: "24px",
        marginBottom: "10px",
    },
};
