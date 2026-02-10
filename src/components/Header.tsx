"use client";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative h-10 w-10">
            <Image
              src="/images/bgodcch.png"
              alt="ODCCH logo"
              fill
              sizes="40px"
              className="object-contain"
              priority
            />
          </span>
          <span className="text-lg font-semibold">
            Om Disabled Child Care Home
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/about"
            className="text-sm text-[var(--foreground)] hover:text-[var(--brand-strong)]"
          >
            About
          </Link>
          {/* <Link
            href="/children"
            className="text-sm text-[var(--foreground)] hover:text-[var(--brand-strong)]"
          >
            Children
          </Link> */}
          <Link
            href="/volunteer"
            className="text-sm text-[var(--foreground)] hover:text-[var(--brand-strong)]"
          >
            Volunteer
          </Link>
          <Link
            href="/contact"
            className="text-sm text-[var(--foreground)] hover:text-[var(--brand-strong)]"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/donate"
            className="inline-flex h-10 items-center justify-center rounded-md bg-[var(--accent)] px-4 text-white font-medium"
          >
            Donate
          </Link>
        </div>
      </div>
    </header>
  );
}
