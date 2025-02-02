"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EdgeFunctionPage() {
  const navigate = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  console.log("🚀🚀 Your selected text is => isHovered: ", isHovered);

  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#f4f7fc",
    // paddingTop: "20px",
    fontFamily: "'Roboto', sans-serif",
  };

  const buttonContainerStyle: React.CSSProperties = {
    marginTop: "120px",
    textAlign: "center",
  };

  const buttonStyle: React.CSSProperties = {
    padding: "12px 24px",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "600",
    color: "#ffffff",
    backgroundColor: isHovered ? "#0056b3" : "#007bff",
    margin: "10px",
    transition: "background-color 0.3s ease",
    cursor: isHovered ? "not-allowed" : "pointer",
  };

  const buttonHoverStyle: React.CSSProperties = {
    backgroundColor: "#0056b3",
  };

  const mainContentStyle: React.CSSProperties = {
    textAlign: "center",
    padding: "30px",
    backgroundColor: "#ffffff",
    width: "80%",
    maxWidth: "900px",
    borderRadius: "12px",
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
    marginTop: "40px",
  };

  const titleStyle: React.CSSProperties = {
    fontSize: "28px",
    fontWeight: "700",
    color: "#333333",
    marginBottom: "12px",
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: "18px",
    color: "#555555",
    lineHeight: "1.6",
    marginBottom: "20px",
  };

  const sectionStyle: React.CSSProperties = {
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    marginBottom: "20px",
  };

  const sectionTitleStyle: React.CSSProperties = {
    fontSize: "20px",
    fontWeight: "600",
    color: "#333333",
    marginBottom: "12px",
  };

  const sectionContentStyle: React.CSSProperties = {
    fontSize: "16px",
    color: "#666666",
    lineHeight: "1.6",
  };

  const footerStyle: React.CSSProperties = {
    fontSize: "14px",
    color: "#888888",
    textAlign: "center",
    marginTop: "40px",
  };

  const linkStyle: React.CSSProperties = {
    color: "#007bff",
    textDecoration: "none",
    fontWeight: "600",
  };

  const messegeContent: React.CSSProperties = {
    textAlign: "center",
    width: "40%",
    marginTop: "15px",
    fontFamily: "monospace",
    padding: "10px",
    borderRadius: "8px",
    backgroundColor: "#eeeeee",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    border: "1px solid #cccccc",
  };

  return (
    <div style={containerStyle}>

      {/* Login and Signup buttons below header */}
      <div style={buttonContainerStyle}>
        <button
          style={buttonStyle}
          onMouseOver={(e) => ((e.target as HTMLButtonElement | any).style.backgroundColor = buttonHoverStyle.backgroundColor)}
          onMouseOut={(e) => ((e.target as HTMLButtonElement).style.backgroundColor = "#007bff")}
          onClick={() => navigate.push("/login")}
        >
          Login
        </button>

        <button
          style={{ ...buttonStyle, cursor: "default" }} // Added custom cursor style for disabled button
          onMouseOver={(e) => ((e.target as HTMLButtonElement | any).style.backgroundColor = buttonHoverStyle.backgroundColor)}
          onMouseOut={(e) => ((e.target as HTMLButtonElement).style.backgroundColor = "#007bff")}
          onClick={() => navigate.push("/register")}
          disabled
        >
          Signup
        </button>

      </div>
      <div style={messegeContent}>
        <p>
          Hello User, sign-up is currently unavailable due to Supabase integration.<br /> However, you can log in using the test credentials on the login page. Please click the login button to proceed.
        </p>
      </div>

      {/* Main Content */}
      <div style={mainContentStyle}>
        <h1 style={titleStyle}>Edge Functions Overview</h1>
        <p style={subtitleStyle}>
          Learn how edge functions can improve authentication and performance by
          running closer to the user.
        </p>

        {/* Section: What are Edge Functions */}
        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>What are Edge Functions?</h2>
          <p style={sectionContentStyle}>
            Edge functions are lightweight serverless functions that run closer to
            the user, improving performance and scalability.
          </p>
        </section>

        {/* Section: Use in Authentication */}
        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Using Edge Functions for Authentication</h2>
          <p style={sectionContentStyle}>
            Edge functions help secure your app by verifying user authentication
            before accessing protected routes.
          </p>
        </section>

        {/* Footer */}
        <footer style={footerStyle}>
          <p>
            Explore more on <a href="https://vercel.com/blog/edge-functions-generally-available" target="_blank" style={linkStyle}>Edge Functions</a>.
          </p>
        </footer>
      </div>
    </div >
  );
}
