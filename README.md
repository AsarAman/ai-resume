# AI Resume Builder

A modern, AI-powered resume builder built with Next.js, featuring real-time previews, customizable templates, and intelligent content generation.

## Features

- **AI-Powered Content**: Generate professional summaries and work experience descriptions using OpenAI.
- **Real-Time Preview**: See changes instantly as you type.
- **Customization**: Personalize your resume with different colors and border styles (Pro Plus).
- **Subscription Tiers**:
  - **Free**: Create up to 1 resume.
  - **Pro**: Create up to 3 resumes and access AI tools.
  - **Pro Plus**: Unlimited resumes, AI tools, and full customization options.
- **Drag & Drop**: Easily reorder work experience and education sections.
- **PDF Export**: Download your professional resume in PDF format.
- **Authentication**: Secure login and user management via Clerk.
- **Payments**: Subscription management powered by Stripe.

## Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Database**: [PostgreSQL](https://www.postgresql.org/) with [Prisma ORM](https://www.prisma.io/)
- **Authentication**: [Clerk](https://clerk.com/)
- **AI**: [OpenAI API](https://openai.com/api/)
- **Payments**: [Stripe](https://stripe.com/)
- **File Storage**: [Vercel Blob](https://vercel.com/storage/blob)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/) validation
- **UI Components**: [Radix UI](https://www.radix-ui.com/) and [Lucide React](https://lucide.dev/)

## Getting Started

### Prerequisites

- Node.js 18+
- A PostgreSQL database
- Clerk, OpenAI, and Stripe accounts

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd resumeai
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your environment variables:
   Create a `.env.local` file in the root directory and add the following:

   ```env
   # Database
   POSTGRES_URL=""
   POSTGRES_PRISMA_URL=""
   POSTGRES_URL_NO_SSL=""
   POSTGRES_URL_NON_POOLING=""
   POSTGRES_USER=""
   POSTGRES_HOST=""
   POSTGRES_PASSWORD=""
   POSTGRES_DATABASE=""

   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=""
   CLERK_SECRET_KEY=""
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

   # OpenAI
   OPENAI_API_KEY=""

   # Vercel Blob
   BLOB_READ_WRITE_TOKEN=""

   # Stripe
   STRIPE_SECRET_KEY=""
   STRIPE_WEBHOOK_SECRET=""
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=""
   NEXT_PUBLIC_STRIPE_PRICE_ID_PRO_MONTHLY=""
   NEXT_PUBLIC_STRIPE_PRICE_ID_PRO_PLUS_MONTHLY=""

   # General
   NEXT_PUBLIC_BASE_URL="http://localhost:3000"
   ```

4. Run the database migrations:
   ```bash
   npx prisma db push
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `/src/app`: Next.js App Router pages and API routes.
- `/src/components`: Reusable React components.
- `/src/hooks`: Custom React hooks.
- `/src/lib`: Utility functions, schemas, and shared logic.
- `/prisma`: Database schema and migrations.

## License

This project is private and for internal use only.
