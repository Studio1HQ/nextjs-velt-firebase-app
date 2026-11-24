<div align="center">

<img src="https://raw.githubusercontent.com/Studio1HQ/Studio1HQ/main/assets/banners/nextjs-velt-firebase-app.webp" alt="Velt Comments with Firebase Auth: Comments, @mentions and presence in a Next.js app using Firebase Auth" width="100%" />

<br />
<br />

# Velt Comments with Firebase Auth

### Comments, @mentions and presence in a Next.js app using Firebase Auth

A Next.js app that signs users in with Firebase Auth and adds Velt comments, @mentions, notifications and presence. It is the code demo for a Velt blog post.

<br />

[![Built by Studio1](https://img.shields.io/badge/Built_by_Studio1-f97316?style=for-the-badge&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNjAgMTYwIiBmaWxsPSJub25lIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgMzVDMCAxNi42ODA3IDE0LjA3NDQgMS42NDg0NCAzMiAwLjEyNjk1M1YxNDFINTEuMDUyM0M1Mi40MzA4IDEzNy4zNDQgNTQuNzQ0NiAxMzMuNjg5IDU3Ljk5MzggMTMwLjAzM0M2MS4xNDQ2IDEyNi41MDggNjQuNjg5MiAxMjMuNDQgNjguNjI3NyAxMjAuODI5QzcyLjU2NjIgMTE4LjM0OSA3Ni4zNTY5IDExNi43ODIgODAgMTE2LjEyOVY4Ni43NTQ0Qzc1LjQ3MDggODcuOTI5MiA3MS4zODQ2IDg5LjY5MTkgNjcuNzQxNSA5Mi4wNDE1QzY0IDk0LjUyMjUgNjAuNzUwOCA5Ny40NiA1Ny45OTM4IDEwMC44NTRDNTYuNTM0NSAxMDIuNzIgNTUuMjU0NSAxMDQuNjU5IDU0LjE1MzkgMTA2LjY3MVYwSDEyNUMxNDQuMzMgMCAxNjAgMTUuNjY5OSAxNjAgMzVWMTI1QzE2MCAxNDQuMzMgMTQ0LjMzIDE2MCAxMjUgMTYwSDEyNFYxOEgxMDQuOTQ4QzEwMy41NjkgMjEuNjgxNiAxMDEuMjU1IDI1LjM2MjggOTguMDA2MiAyOS4wNDQ0Qzk0Ljg1NTQgMzIuNTk0MiA5MS4zMTA4IDM1LjY4NDEgODcuMzcyMyAzOC4zMTRDODMuNDMzOCA0MC44MTIgNzkuNjQzMSA0Mi4zODk2IDc2IDQzLjA0NzRWNzIuNjMwNEM4MC41MjkyIDcxLjQ0NzMgODQuNjE1NCA2OS42NzI0IDg4LjI1ODUgNjcuMzA1N0M5MiA2NC44MDc2IDk1LjI0OTIgNjEuODQ5MSA5OC4wMDYyIDU4LjQzMDdDOTkuNDY1NSA1Ni41NTEzIDEwMC43NDUgNTQuNTk4NiAxMDEuODQ2IDUyLjU3MjNWMTYwSDM1QzE1LjY3IDE2MCAwIDE0NC4zMyAwIDEyNVYzNVoiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4K)](https://studio1hq.com)
[![Built with Velt](https://img.shields.io/badge/Built_with_Velt-141414?style=for-the-badge)](https://velt.dev)
[![Read the blog](https://img.shields.io/badge/Read_the_blog-1c1917?style=for-the-badge&logo=rss&logoColor=white)](https://velt.dev/blog)

[Velt docs](https://docs.velt.dev) &nbsp;·&nbsp; [Velt](https://velt.dev) &nbsp;·&nbsp; [More examples](https://github.com/Studio1HQ) &nbsp;·&nbsp; [studio1hq.com](https://studio1hq.com)

</div>

<br />

## Overview

This Next.js app signs users in with Firebase Authentication and adds collaboration with [Velt](https://velt.dev). It shows how to connect an existing auth provider to Velt so comments, @mentions, notifications and presence work for signed-in users.

It is the code demo for the blog post [How to Implement @mentions and Comments with Firebase Auth Using Velt.dev](https://velt.dev/blog).

<p align="center"><a href="https://github.com/user-attachments/assets/fcf8a8e1-acbf-482e-9f91-b2e29a8b2cbb">Watch the demo video</a></p>

## Features

- **Firebase authentication**: Sign in and protect the dashboard with a `withAuth` wrapper and an auth context.
- **Comments**: Velt comment tool, comments layer and comments sidebar button.
- **@mentions and notifications**: Mention teammates in comments and see updates in the Velt notifications tool.
- **Presence**: Show who is currently on the page with `VeltPresence`.
- **Modern UI**: Styled with Tailwind CSS.

## Tech stack

| Layer | Tool |
| --- | --- |
| Framework | [Next.js](https://nextjs.org) (Pages Router), TypeScript |
| Collaboration | [Velt](https://velt.dev) (`@veltdev/react`) |
| Auth | [Firebase](https://firebase.google.com) |
| Styling | [Tailwind CSS](https://tailwindcss.com) |

## Getting started

### Prerequisites

- A Firebase project and its web app config
- A Velt account and API key from the [Velt console](https://console.velt.dev)

### Installation

```bash
git clone https://github.com/Studio1HQ/nextjs-velt-firebase-app.git
cd nextjs-velt-firebase-app
npm install   # or: yarn install
```

### Environment variables

Create a `.env.local` file in the project root (see `.env.local.example`).

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_FIREBASE_API_KEY` | Firebase web API key. |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | Firebase auth domain. |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | Firebase project ID. |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | Firebase storage bucket. |
| `NEXT_PUBLIC_FIREBASE_MESSAGE_SENDER_ID` | Firebase messaging sender ID, as read in `firebase.ts`. |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | Firebase app ID. |
| `NEXT_PUBLIC_VELT_API_KEY` | Velt API key. |

### Run

```bash
npm run dev   # or: yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

## How it works

```text
firebase.ts               Firebase initialisation
contexts/AuthContext.tsx  Auth state
utils/withAuth.jsx        Route guard for signed-in users
pages/_app.tsx            VeltProvider setup
pages/index.tsx           Landing and sign-in
pages/dashboard.tsx       Velt comments, presence and notifications UI
```

`VeltProvider` is set up in `_app.tsx` with the Velt API key. In `dashboard.tsx` the signed-in user is passed to `client.identify(user)` and the page is set as a Velt document with `client.setDocument("collaborative-article-review", ...)`, so comments and mentions carry the right user and attach to that document.

## Resources

- [How to Implement @mentions and Comments with Firebase Auth Using Velt.dev](https://velt.dev/blog): the blog post this repo accompanies.
- [Demo video](https://github.com/user-attachments/assets/fcf8a8e1-acbf-482e-9f91-b2e29a8b2cbb): walkthrough of the finished app.
- [Velt documentation](https://docs.velt.dev): SDK guides.
- [Velt](https://velt.dev): product site.
- [Firebase Authentication docs](https://firebase.google.com/docs/auth): auth setup.

## License

Released under the [MIT License](LICENSE).

<br />

---

<div align="center">

<a href="https://studio1hq.com">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/Studio1HQ/website/main/brand/studio1-logo-on-dark.svg" />
    <img src="https://raw.githubusercontent.com/Studio1HQ/website/main/brand/studio1-logo-on-light.svg" alt="Studio1" width="160" />
  </picture>
</a>

Built by **[Studio1](https://studio1hq.com)**, the technical content and DevRel partner for devtool teams. Made with [Velt](https://velt.dev).<br />
Browse more open-source examples at [github.com/Studio1HQ](https://github.com/Studio1HQ).

[![Website](https://img.shields.io/badge/studio1hq.com-0b0807?style=for-the-badge&logo=googlechrome&logoColor=white)](https://studio1hq.com)
[![Book a call](https://img.shields.io/badge/Book_a_strategy_call-f97316?style=for-the-badge&logo=googlecalendar&logoColor=white)](https://cal.com/studio1/collab)
[![X](https://img.shields.io/badge/%40Studio1HQ-141414?style=for-the-badge&logo=x&logoColor=white)](https://x.com/Studio1HQ)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0a66c2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/company/studio1hq/)

<sub><a href="https://studio1hq.com">studio1hq.com</a> · Technical content, docs, video and DevRel for devtools</sub>

</div>
