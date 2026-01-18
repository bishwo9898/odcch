import Link from "next/link";

export const metadata = {
  title: "Donate — Support Children with Disabilities | ODCCH",
  description:
    "Your donation helps provide care, therapy, education, and medical support for children with disabilities at ODCCH.",
};

export default function Donate() {
  return (
    <main>
      {/* Hero Section */}
      <section className="section bg-linear-to-b from-amber-50 to-white">
        <div className="container max-w-4xl text-center">
          <p className="eyebrow">Make a Difference</p>
          <h1 className="text-4xl sm:text-5xl font-bold mt-2">
            Support Our Mission
          </h1>
          <p className="lead mt-4 max-w-2xl mx-auto">
            Your donation sustains daily care, therapy, education, and medical
            support for children with disabilities. Every contribution, big or
            small, makes a lasting impact.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section-sm">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600">₨5,000</div>
              <div className="text-sm mt-2 text-slate-600">
                Covers monthly therapy for one child
              </div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600">₨10,000</div>
              <div className="text-sm mt-2 text-slate-600">
                Provides educational materials
              </div>
            </div>
            <div className="text-center p-4 bg-amber-50 rounded-lg">
              <div className="text-3xl font-bold text-amber-600">₨25,000</div>
              <div className="text-sm mt-2 text-slate-600">
                Supports medical checkups & care
              </div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-3xl font-bold text-purple-600">₨50,000</div>
              <div className="text-sm mt-2 text-slate-600">
                Covers housing & utilities
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bank Transfer Section */}
      <section className="section bg-slate-50">
        <div className="container max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold">Bank Transfer</h2>
            <p className="mt-2 text-slate-600">
              Direct bank transfer is the most reliable way to donate
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Bank Details */}
            <div className="card p-8">
              <h3 className="text-xl font-semibold mb-6">
                Bank Account Details
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-start border-b pb-3">
                  <span className="text-sm font-medium text-slate-600">
                    Account Name:
                  </span>
                  <span className="text-sm font-semibold text-right">
                    Om Disabled Child Care Home
                  </span>
                </div>
                <div className="flex justify-between items-start border-b pb-3">
                  <span className="text-sm font-medium text-slate-600">
                    Account Number:
                  </span>
                  <span className="text-sm font-mono font-semibold">
                    0123456789012345
                  </span>
                </div>
                <div className="flex justify-between items-start border-b pb-3">
                  <span className="text-sm font-medium text-slate-600">
                    Bank Name:
                  </span>
                  <span className="text-sm font-semibold text-right">
                    Nepal Bank Limited
                  </span>
                </div>
                <div className="flex justify-between items-start border-b pb-3">
                  <span className="text-sm font-medium text-slate-600">
                    Branch:
                  </span>
                  <span className="text-sm font-semibold">
                    Kathmandu Main Branch
                  </span>
                </div>
                <div className="flex justify-between items-start border-b pb-3">
                  <span className="text-sm font-medium text-slate-600">
                    SWIFT Code:
                  </span>
                  <span className="text-sm font-mono font-semibold">
                    NEBLNPKA
                  </span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-sm font-medium text-slate-600">
                    Bank Address:
                  </span>
                  <span className="text-sm font-semibold text-right">
                    New Road, Kathmandu, Nepal
                  </span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm leading-relaxed text-blue-900">
                  <strong>Note:</strong> After making a transfer, please email
                  us at{" "}
                  <a
                    href="mailto:info@odcch.org"
                    className="underline font-semibold"
                  >
                    info@odcch.org
                  </a>{" "}
                  with your transaction details so we can acknowledge your
                  donation.
                </p>
              </div>
            </div>

            {/* QR Code */}
            <div className="card p-8 flex flex-col items-center justify-center">
              <h3 className="text-xl font-semibold mb-4">
                Scan to Donate (Mobile Banking)
              </h3>
              <div className="w-64 h-64 bg-linear-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center border-2 border-slate-300">
                <div className="text-center text-slate-500">
                  <svg
                    className="w-16 h-16 mx-auto mb-3 opacity-40"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                    />
                  </svg>
                  <p className="text-sm font-medium">QR Code</p>
                  <p className="text-xs mt-1 opacity-75">
                    Image will be added here
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm text-center text-slate-600">
                Use your mobile banking app to scan and transfer directly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Donation Methods */}
      <section className="section">
        <div className="container max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold">Other Ways to Donate</h2>
            <p className="mt-2 text-slate-600">
              We accept various forms of support to make giving convenient for
              you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Cash Donation */}
            <Link
              href="/contact"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-lg">Cash Donation</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Deliver cash donations in person or arrange collection. Contact
                us for details.
              </p>
              <div className="mt-4 text-sm font-medium text-green-600 group-hover:underline">
                Contact Us →
              </div>
            </Link>

            {/* International Donation */}
            <Link
              href="/contact"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-lg">International Donation</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Donating from abroad? We'll help you with wire transfer and
                international payment options.
              </p>
              <div className="mt-4 text-sm font-medium text-blue-600 group-hover:underline">
                Contact Us →
              </div>
            </Link>

            {/* In-Kind Donation */}
            <Link
              href="/contact"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-lg">In-Kind Donations</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Donate supplies, equipment, educational materials, or other
                items. Contact us to discuss needs.
              </p>
              <div className="mt-4 text-sm font-medium text-purple-600 group-hover:underline">
                Contact Us →
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Tax & Transparency */}
      <section className="section-sm bg-blue-50">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-3">
                Tax Receipts & Documentation
              </h3>
              <p className="text-sm leading-relaxed text-slate-700">
                As a registered non-profit organization, we provide official
                receipts for all donations. These can be used for tax purposes
                where applicable. Contact us after your donation to request
                documentation.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-3">
                Transparency & Accountability
              </h3>
              <p className="text-sm leading-relaxed text-slate-700">
                We are committed to responsible financial stewardship. All
                donations go directly toward supporting our children and
                programs. Annual reports and financial statements are available
                upon request.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Message */}
      <section className="section">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-semibold">
            We Welcome All Forms of Support
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-700 max-w-2xl mx-auto">
            Whether it's a financial contribution, donated supplies,
            volunteering your time, or spreading awareness about our mission —
            every form of support helps us continue our work. We are grateful
            for any assistance you can provide to make a difference in the lives
            of children with disabilities.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-md bg-amber-500 px-8 text-white font-medium hover:bg-amber-600 transition-colors"
            >
              Contact Us for More Options
            </Link>
            <Link
              href="/volunteer"
              className="inline-flex h-12 items-center justify-center rounded-md border border-slate-300 px-8 font-medium hover:bg-slate-50 transition-colors"
            >
              Volunteer Instead
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
