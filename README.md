<img align="center" src="./public/images/logo.svg" width="100%" height="48px"/>

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js&logoColor=white)](#)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff)](#)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-%2338B2AC.svg?logo=tailwind-css&logoColor=white)](#)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white)](#)

</div>

[Reps](https://reps.arvingarcia.com/) is a spaced repetition flashcard application designed specifically for programmers. Reps provides a simpler alternative to Anki with support for [Markdown](https://www.markdownguide.org/) syntax and syntax highlighting. The algorithm shows cards exponentially (32-day cap) to allow for quicker review times.

### Prerequisites

- Node.js (latest LTS)
- PostgreSQL database
- pnpm package manager

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd reps

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env
# Edit .env with your database URL and OAuth credentials

# Run database migrations
pnpm prisma migrate dev

# Start development server
pnpm dev
```

Visit [`http://localhost:3000`](http://localhost:3000) to see the app in action.

### Project Structure

```
reps/
├── app/                   # Next.js App Router
│   ├── (auth)/              # Authentication routes (login, register)
│   ├── (main)/              # Main application routes
│   ├── api/                 # API routes
│   └── globals.css          # Global styles
├── actions/               # Server actions for data mutations
├── lib/                   # Utility libraries and configurations
├── prisma/                # Database schema and migrations
├── ui/                    # Reusable React components
│   ├── card/                # Card-related components
│   ├── deck/                # Deck-related components
│   └── general/             # General UI components
└── public/                # Static assets
```
