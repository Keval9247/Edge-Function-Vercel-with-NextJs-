# Next.js Authentication with Vercel Edge Functions 🔐

This project demonstrates how to build **user authentication** (login and signup) using **Vercel Edge Functions** integrated with a **Next.js** app. The app allows users to sign up and log in, while Vercel handles the serverless edge functions, ensuring fast and low-latency requests.

---

## Features: 🚀
- **Login** and **Signup** functionality.
- Serverless **Edge Functions** deployed on **Vercel**.
- Seamless integration with **Next.js** for the frontend.

**Key Characteristics:**
- **Low Latency**: Processes requests closer to the user's location.
- **Dynamic Rendering**: Enables real-time updates and personalized content.
- **Scalability**: Automatically scales to handle high traffic.

---

---

## Setting Up Edge Functions on Vercel ⚙️

### Prerequisites: 📋
#### Before you begin, ensure you have the following installed: 

- **Node.js**: [Download Node.js](https://nodejs.org/) (LTS version is recommended)
- **npm**: Comes installed with Node.js.
- **Vercel CLI**: Install globally with:

  ```bash
  npm install -g vercel

### Getting Started 🚀

#### Follow these steps to set up the project locally:

#### Clone the repository:

 ```bash
 git clone https://github.com/Keval9247/Edge-Function-Vercel-with-NextJs-.git
cd Edge-Function-Vercel-with-NextJs-
```

#### Install dependencies:
```
npm install
```

#### Run the project locally (optional):
To run your Next.js app with edge functions locally:
```
vercel dev
```

Visit http://localhost:3000 to view the app in your browser.

## Login and Signup Features 🔑

### Login Endpoint `(/api/auth/login.js)`:
This edge function handles the login process by validating the provided email and password.

- **Request Type:** POST

- **Request Body:**
```json
{
  "email": "example@example.com",
  "password": "password123"
}
```
**Response :**
- Success:
```json
{
  "message": "Login successful!"
}
```

### Signup Endpoint `(/api/auth/signup.js)`:
This edge function handles the signup process, allowing users to create a new account.

- **Request Type:** POST

- **Request Body:**
```json
{
  "email": "newuser@example.com",
  "password": "newpassword123"
}
```
**Response :**
- Success:
```json
{
  "message": "Signup successful! Please check your email for verification."
}
```

## Troubleshooting 🛠️

- ### Edge Function Issues:
If the edge function is not working correctly, check the logs in the Vercel dashboard for error details. 📜

- ### Login or Signup Failures:
Ensure the frontend and backend are correctly connected and verify that the API endpoints are returning the expected responses. 🔍

- ### Missing Dependencies:
Run `npm install` to ensure all necessary packages are installed.  🔄

### Referral Link 📲


To support the development of this project or gain access to more resources, you can use our referral link:

[https://egde-function.vercel.app/
](https://edge-function-hazel.vercel.app/)
Use this link to sign up and support the ongoing development of this project. Thank you! 🙏
