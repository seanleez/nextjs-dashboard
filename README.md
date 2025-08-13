# Acme Dashboard - Next.js App Router

A modern, full-stack dashboard application built with Next.js 15, featuring authentication, database integration, and a beautiful UI.

## 🌐 Live Demo

**Deployed at:** [https://nextjs-dashboard-sandy-ten-72.vercel.app/](https://nextjs-dashboard-sandy-ten-72.vercel.app/)

## ✨ Features

- **Modern UI/UX**: Clean, responsive design with Tailwind CSS
- **Authentication**: Secure login system with NextAuth.js
- **Database Integration**: PostgreSQL database with Prisma ORM
- **Dashboard Analytics**: Revenue charts and data visualization
- **Customer Management**: Complete CRUD operations for customers
- **Invoice System**: Create, edit, and manage invoices
- **Search & Pagination**: Advanced filtering and search capabilities
- **TypeScript**: Full type safety throughout the application
- **Responsive Design**: Optimized for desktop and mobile devices

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: NextAuth.js
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Icons**: Heroicons
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm
- PostgreSQL database

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd nextjs-dashboard
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:

   ```env
   DATABASE_URL="your-postgresql-connection-string"
   AUTH_SECRET="your-auth-secret"
   ```

4. **Set up the database**

   ```bash
   pnpm run seed
   ```

5. **Run the development server**

   ```bash
   pnpm dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
nextjs-dashboard/
├── app/                    # Next.js App Router pages
│   ├── dashboard/         # Dashboard pages and components
│   ├── login/            # Authentication pages
│   ├── ui/               # Reusable UI components
│   └── lib/              # Utility functions and data
├── public/               # Static assets
├── auth.config.ts        # NextAuth configuration
├── auth.ts              # Authentication setup
└── middleware.ts        # Next.js middleware
```

## 🔧 Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm run seed` - Seed the database with sample data

## 🎨 Key Components

- **Dashboard**: Overview with revenue charts and latest invoices
- **Customers**: Manage customer information with search and pagination
- **Invoices**: Create, edit, and track invoices with status management
- **Authentication**: Secure login system with protected routes

## 📱 Responsive Design

The application is fully responsive and optimized for:

- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (< 768px)

## 🔐 Authentication

The app uses NextAuth.js for authentication with:

- Secure session management
- Protected routes
- Login/logout functionality

## 📊 Database Schema

The application includes tables for:

- Users
- Customers
- Invoices
- Revenue data

## 🚀 Deployment

This application is deployed on Vercel and can be easily deployed by:

1. Connecting your GitHub repository to Vercel
2. Setting up environment variables
3. Deploying automatically on push to main branch

## 📚 Learning Resources

This project is based on the [Next.js Learn Course](https://nextjs.org/learn) and demonstrates:

- Next.js 15 App Router features
- Server and Client Components
- Data fetching patterns
- Authentication best practices
- Database integration
- Modern React patterns

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using Next.js and deployed on Vercel
