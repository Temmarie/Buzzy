# Buzzy

This is a chat application that uses [Clerk](https://clerk.com) for authentication and user management. It also use Chat Engine for the chat features and OpenAI too.

## Usage

Go to your https://clerk.com dashboard and click on `Developer->API Keys` to copy your keys. Create a file named `.env.local` and add the following:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=YOUR KEY
CLERK_SECRET_KEY=YOUR KEY
```

Install the dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
