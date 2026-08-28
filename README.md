# Helper Buddy 🏡✨

Helper Buddy is a comprehensive, full-stack home service booking platform designed to connect users with trusted local professionals (plumbers, electricians, cleaners, and more). It provides a seamless experience for customers, service partners, and administrators.

---

## 🚀 Features

### For Users (Customers)
* **Browse & Search:** Explore a wide range of home services with advanced filtering and location-based search.
* **Seamless Authentication:** Secure login and sign-up powered by Clerk.
* **Shopping Cart & Checkout:** Add multiple services to your cart and pay securely via **Razorpay**.
* **Order Tracking & History:** View past orders, manage your profile, and track current bookings.
* **Ratings & Reviews:** Leave verified feedback for service partners after the job is done.
* **Wallet System:** Maintain a digital wallet for quick checkouts and refunds.

### For Service Partners (Providers)
* **Partner Onboarding:** Apply to become a service partner with a dedicated document submission flow.
* **Provider Dashboard:** View assigned orders, accept/reject jobs, and track total earnings.
* **OTP Verification:** Securely mark jobs as completed using a customer-provided OTP.

### For Administrators
* **Admin Dashboard:** Centralized control panel to manage the entire platform.
* **Application Approval:** Review and approve/reject new service partner applications.
* **Service Management:** Add, edit, or remove service categories and listings.

---

## 🏗️ Architecture & Tech Stack

Helper Buddy is built on a modern, highly scalable architecture using the **Next.js App Router**.

* **Framework:** [Next.js 15](https://nextjs.org/) (React) – Leveraging Server Components, Server Actions, and ISR (Incremental Static Regeneration) for blazing-fast performance and SEO optimization.
* **Language:** TypeScript – For end-to-end type safety.
* **Styling & UI:** 
  * [Tailwind CSS](https://tailwindcss.com/) for rapid styling.
  * [Shadcn UI](https://ui.shadcn.com/) & [Radix UI](https://www.radix-ui.com/) for accessible, customizable UI components.
  * `framer-motion` for smooth micro-animations.
* **Database & ORM:**
  * [PostgreSQL](https://www.postgresql.org/) hosted on [Neon DB](https://neon.tech/) for serverless scaling.
  * [Prisma](https://www.prisma.io/) as the ORM for type-safe database queries.
* **Authentication:** [Clerk](https://clerk.com/) – Handling secure authentication, session management, and user data.
* **Payments:** [Razorpay](https://razorpay.com/) – Processing secure, fast transactions in INR.
* **State Management:** [Zustand](https://zustand-demo.pmnd.rs/) with `persist` middleware for managing cart and UI states across reloads.
* **Media Storage:** [Cloudinary](https://cloudinary.com/) – For uploading and serving optimized images (e.g., partner ID cards, service thumbnails).
* **Emails:** `nodemailer` with Google SMTP for sending automated order confirmation and status update emails.

---

## ⚙️ Environment Variables

To run this project locally, you will need to add the following variables to your `.env` file:

```env
# Database (Neon PostgreSQL)
DATABASE_URL="postgresql://..."
DIRECT_URL="postgresql://..."

# Authentication (Clerk)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_..."
CLERK_SECRET_KEY="sk_test_..."
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"

# Payments (Razorpay)
NEXT_PUBLIC_RAZORPAY_KEY_ID="rzp_..."
RAZORPAY_SECRET_ID="..."

# Media (Cloudinary)
CLOUDINARY_CLOUD_NAME="..."
CLOUDINARY_API_KEY="..."
CLOUDINARY_API_SECRET="..."

# Emails (Google SMTP)
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"
```

---

## 🛠️ Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/makam-lokesh/HelperBuddy.git
   cd HelperBuddy
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment variables**
   Create a `.env` file in the root directory and populate it with the variables listed above.

4. **Initialize the database**
   Push the Prisma schema to your database and generate the client:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 📈 Optimization Highlights

* **Next.js Image Optimization:** Native `<Image>` components and WebP formatting to ensure minimal layout shift and fast asset delivery.
* **Incremental Static Regeneration (ISR):** Core pages like the Homepage, Services list, and Blog are cached and regenerated periodically in the background (60s-120s) to guarantee instant load times for end-users while keeping data fresh.
* **Server Actions:** Eliminated heavy client-side API route fetching in favor of secure, type-safe Next.js Server Actions for all database mutations (orders, reviews, profile updates).