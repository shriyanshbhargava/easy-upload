import React from "react";
import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaShieldAlt,
  FaUsers,
  FaUpload,
  FaClock,
  FaFileAlt,
} from "react-icons/fa";
import { Button } from "@headlessui/react";

export default function LandingPage() {
  return (
    <div className="flex min-h-[100vh] flex-col">
      <header className="bg-primary px-4 py-3 md:px-6 md:py-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/">
            <div className="flex items-center">
              <span className="sr-only">Acme Document Verification</span>
            </div>
          </Link>
          <nav className="hidden space-x-4 md:flex">
            <Link
              to="/features"
              className="text-sm font-medium text-primary-foreground hover:underline"
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className="text-sm font-medium text-primary-foreground hover:underline"
            >
              Pricing
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-primary-foreground hover:underline"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium text-primary-foreground hover:underline"
            >
              Contact
            </Link>
          </nav>
          <Button className="rounded-md bg-secondary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2">
            Get Started
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-primary py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl">
                Streamline Your Student Company Registration
              </h1>
              <p className="mt-4 text-lg text-primary-foreground">
                Verify your documents quickly and securely with our easy-to-use
                platform.
              </p>
              <div className="mt-8">
                <Link
                  to="/register"
                  className="inline-flex items-center rounded-md bg-primary-foreground px-6 py-3 text-sm font-medium text-primary shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  Start Registration
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-background py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl">
                Benefits of Using Our Service
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our document verification platform offers a range of benefits to
                streamline your student company registration process.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              <div className="rounded-lg bg-card p-6 text-center shadow-sm">
                <FaCheckCircle
                  className="mx-auto h-8 w-8 text-primary"
                  aria-hidden="true"
                />
                <h3 className="mt-4 text-xl font-bold text-foreground">
                  Fast Verification
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Get your documents verified quickly, so you can focus on
                  running your business.
                </p>
              </div>
              <div className="rounded-lg bg-card p-6 text-center shadow-sm">
                <FaShieldAlt
                  className="mx-auto h-8 w-8 text-primary"
                  aria-hidden="true"
                />
                <h3 className="mt-4 text-xl font-bold text-foreground">
                  Secure Platform
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Your data is safe with our robust security measures and
                  encryption.
                </p>
              </div>
              <div className="rounded-lg bg-card p-6 text-center shadow-sm">
                <FaUsers
                  className="mx-auto h-8 w-8 text-primary"
                  aria-hidden="true"
                />
                <h3 className="mt-4 text-xl font-bold text-foreground">
                  Expert Support
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Our team is here to guide you through the registration
                  process.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl">
                How It Works
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our simple 3-step process makes it easy to get your student
                company registered.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="rounded-lg bg-card p-6 text-center shadow-sm">
                <FaUpload
                  className="mx-auto h-8 w-8 text-primary"
                  aria-hidden="true"
                />
                <h3 className="mt-4 text-xl font-bold text-foreground">
                  Upload Documents
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Submit your required documents for verification.
                </p>
              </div>
              <div className="rounded-lg bg-card p-6 text-center shadow-sm">
                <FaClock
                  className="mx-auto h-8 w-8 text-primary"
                  aria-hidden="true"
                />
                <h3 className="mt-4 text-xl font-bold text-foreground">
                  Wait for Approval
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Our team will review your documents and get back to you.
                </p>
              </div>
              <div className="rounded-lg bg-card p-6 text-center shadow-sm">
                <FaCheckCircle
                  className="mx-auto h-8 w-8 text-primary"
                  aria-hidden="true"
                />
                <h3 className="mt-4 text-xl font-bold text-foreground">
                  Get Registered
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Once approved, your student company will be officially
                  registered.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-background py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl">
                Supported Documents
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We accept a wide range of documents for student company
                registration.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              <div className="rounded-lg bg-card p-6 text-center shadow-sm">
                <FaFileAlt
                  className="mx-auto h-8 w-8 text-primary"
                  aria-hidden="true"
                />
                <h3 className="mt-4 text-xl font-bold text-foreground">
                  Business License
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Submit your business license for verification.
                </p>
              </div>
              <div className="rounded-lg bg-card p-6 text-center shadow-sm">
                <FaFileAlt
                  className="mx-auto h-8 w-8 text-primary"
                  aria-hidden="true"
                />
                <h3 className="mt-4 text-xl font-bold text-foreground">
                  Tax Documents
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Provide your tax-related documents for review.
                </p>
              </div>
              <div className="rounded-lg bg-card p-6 text-center shadow-sm">
                <FaFileAlt
                  className="mx-auto h-8 w-8 text-primary"
                  aria-hidden="true"
                />
                <h3 className="mt-4 text-xl font-bold text-foreground">
                  ID Documents
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Upload identification documents for verification.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary px-4 py-6 md:px-6 md:py-8">
        <div className="container mx-auto text-center">
          <p className="text-sm font-medium text-primary-foreground">
            &copy; {new Date().getFullYear()} Acme Document Verification. All
            rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
