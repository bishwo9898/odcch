import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="text-base font-semibold">
            Om Disabled Child Care Home (ODCCH)
          </h3>
          <p className="mt-2 text-sm opacity-80">
            Inclusive care and opportunities for every child.
          </p>
        </div>
        <div>
          <h3 className="text-base font-semibold">Contact</h3>
          <p className="mt-2 text-sm opacity-80">Kathmandu, Nepal</p>
          <p className="text-sm opacity-80">info@odcch.com</p>
          <p className="text-sm opacity-80">+977 9849003133, +977 9851072300</p>
        </div>
        <div>
          <h3 className="text-base font-semibold">Quick Links</h3>
          <div className="mt-2 flex flex-wrap gap-3 text-sm">
            <Link href="/donate" className="underline underline-offset-4">
              Donate
            </Link>
            <Link href="/volunteer" className="underline underline-offset-4">
              Volunteer
            </Link>
            <Link href="/children" className="underline underline-offset-4">
              Children Info
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-xs opacity-70">
        © {new Date().getFullYear()} Om Disabled Child Care Home (ODCCH). All
        rights reserved.
      </div>
    </footer>
  );
}
