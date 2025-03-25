# Next.js Velt App

This is a Next.js application that integrates Firebase authentication and Velt for comments and @mentions. The project demonstrates how to build a modern web application with user authentication, real-time collaboration, and social features.

This is the code demo for [How to Implement @mentions and Comments with Firebase Auth Using Velt.dev](#). Here is the [live demo](#).

Please give this repo a ⭐ if it was helpful to you.

Visit [Timonwa's Notes](https://tech.timonwa.com/blog) for more awesome technical contents like articles, code snippets, tech goodies, community projects and more.

## Features

- User authentication with Firebase
- Real-time comments, @mentions, and user presence using Velt
- Modern UI with Tailwind CSS

## Prerequisites

- Firebase project and API key
- A Velt account and API key

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/timonwa/nextjs-velt-firebase-app.git
cd nextjs-velt-firebase-app
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create a .env.local file in the root directory and add your Firebase and Velt API keys:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
NEXT_PUBLIC_VELT_API_KEY=your-velt-api-key
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

- [Next.js](https://nextjs.org/)
- [Firebase](https://firebase.google.com/)
- [Velt](https://velt.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

## License

This project is licensed under the [MIT License](LICENSE). See the LICENSE file for more information.

## Author

Created by Timonwa.
