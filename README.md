# DLA Form Assistant

A React application to help users complete questions 40-72 on the Disability Living Allowance (DLA) form, focusing on getting higher rate care and higher rate mobility components.

## Features

- User authentication with Google
- Guided form completion with helpful information for each question
- Progress tracking
- Summary view of all answers
- Firebase backend for secure storage of responses

## Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a Firebase project and enable:
   - Authentication with Google sign-in
   - Firestore database

4. Create a `.env` file in the project root and add your Firebase configuration:
   ```
   VITE_FIREBASE_API_KEY=your-api-key
   VITE_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   VITE_FIREBASE_APP_ID=your-app-id
   ```

5. Start the development server:
   ```
   npm run dev
   ```

## Usage

1. Sign in with your Google account
2. Navigate through questions 40-72 using the navigation buttons
3. Save your progress on each question
4. View a summary of all your answers
5. Submit the completed form

## Technologies Used

- React
- Vite
- Firebase (Authentication and Firestore)
- Material-UI
- React Router
