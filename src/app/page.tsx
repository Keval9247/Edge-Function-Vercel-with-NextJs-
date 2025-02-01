"use client";
import { useRouter } from "next/navigation";

export default function EdgeFunctionPage() {
  const navigate = useRouter();

  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center", // Fixed the value to "center"
    minHeight: "100vh",
    backgroundColor: "#f4f7fc",
    paddingTop: "20px", // To ensure content isn't hidden behind fixed header
    fontFamily: "'Roboto', sans-serif",
  };

  const headerStyle: React.CSSProperties = {
    width: "100%",
    display: "flex",
    justifyContent: "space-between", // Proper alignment for the header
    alignItems: "center",
    padding: "20px 40px",
    position: "fixed",
    top: "0",
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Transparent white background
    backdropFilter: "blur(10px)", // Adding blur effect
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    zIndex: "1000",
    transition: "background-color 0.3s ease",
  };

  const buttonContainerStyle: React.CSSProperties = {
    marginTop: "120px", // To ensure the buttons don't overlap the header
    textAlign: "center",
  };

  const buttonStyle: React.CSSProperties = {
    padding: "12px 24px",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "600",
    color: "#ffffff",
    backgroundColor: "#007bff",
    cursor: "pointer",
    margin: "10px",
    transition: "background-color 0.3s ease",
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
    marginTop: "40px", // Adjusted to ensure content isn't hidden behind buttons
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
  };

  return (
    <div style={containerStyle}>

      {/* Login and Signup buttons below header */}
      <div style={buttonContainerStyle}>
        <button
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
          onClick={() => navigate.push("/login")}
        >
          Login
        </button>
        <button
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
          onClick={() => navigate.push("/register")}
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
