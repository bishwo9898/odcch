"use client";
import React from "react";

export default function Volunteer() {
  const [submitted, setSubmitted] = React.useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // For now, just show a success message. Admin integration will come later.
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  }

  return (
    <div className="section">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <p className="eyebrow">Get involved</p>
          <h1 className="text-3xl sm:text-4xl font-bold">
            Volunteer With Om Disabled Child Care Home (ODCCH)
          </h1>
          <p className="mt-3 lead opacity-90">
            Join a caring team supporting children with disabilities. We welcome
            both short-term and long-term volunteers — your skills and time help
            us create meaningful impact.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-6">
            <div className="card p-6">
              <h2 className="text-xl font-semibold">What volunteers do</h2>
              <ul className="mt-3 list-disc pl-5 text-sm opacity-90 space-y-2">
                <li>Support inclusive education and classroom activities</li>
                <li>Assist therapists during rehabilitation sessions</li>
                <li>Help organise community events and outreach</li>
                <li>Provide administrative or fundraising support</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-lg font-semibold">
                Accommodations & Support
              </h3>
              <p className="mt-2 text-sm opacity-90">
                Accommodations will be provided as needed, especially for
                volunteers arriving from abroad. We can help arrange short-term
                housing, local orientation, and transport assistance. If you
                have specific accessibility needs, tell us in the application
                and we will make every reasonable effort to support you.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg font-semibold">Benefits & Expectations</h3>
              <p className="mt-2 text-sm opacity-90">
                Volunteers gain hands-on experience working in inclusive
                education and child care, mentorship from our staff, and a
                supportive community. Typical time commitments vary from 2 weeks
                to 6 months depending on the role.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg font-semibold">Get more information</h3>
              <p className="mt-2 text-sm opacity-90">
                For more details or bespoke arrangements, contact our volunteer
                coordinator:
              </p>
              <ul className="mt-3 text-sm">
                <li>
                  Email:{" "}
                  <a href="mailto:info@odcch.com" className="underline">
                    info@odcch.com
                  </a>
                </li>
                <li>
                  Phone: <span className="">+977 9849003133</span>
                </li>
              </ul>
              <p className="mt-3 text-xs opacity-70">
                Prefer a phone or video call? Mention your timezone and
                preferred times in the form and we'll reach out.
              </p>
            </div>
          </div>

          <aside>
            <form
              className="card shadow-soft p-6 space-y-4"
              onSubmit={handleSubmit}
            >
              <h3 className="text-lg font-semibold">Volunteer Application</h3>
              <div>
                <label htmlFor="name" className="text-sm font-medium">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  className="mt-1 w-full rounded-md border px-3 py-2"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="mt-1 w-full rounded-md border px-3 py-2"
                  required
                />
              </div>
              <div>
                <label htmlFor="country" className="text-sm font-medium">
                  Country
                </label>
                <input
                  id="country"
                  name="country"
                  className="mt-1 w-full rounded-md border px-3 py-2"
                />
              </div>
              <div>
                <label htmlFor="interest" className="text-sm font-medium">
                  Area of interest
                </label>
                <input
                  id="interest"
                  name="interest"
                  className="mt-1 w-full rounded-md border px-3 py-2"
                  placeholder="e.g. education, therapy, events"
                />
              </div>
              <div>
                <label htmlFor="dates" className="text-sm font-medium">
                  Availability
                </label>
                <input
                  id="dates"
                  name="dates"
                  className="mt-1 w-full rounded-md border px-3 py-2"
                  placeholder="e.g. 1 July — 30 Sept 2026"
                />
              </div>
              <div>
                <label htmlFor="notes" className="text-sm font-medium">
                  Additional notes / accessibility needs
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  className="mt-1 w-full rounded-md border px-3 py-2 min-h-20"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex h-10 items-center justify-center rounded-md bg-amber-500 px-4 text-white font-medium"
              >
                Apply to Volunteer
              </button>
              {submitted && (
                <div className="text-sm text-green-700">
                  Thank you — your application has been noted. We'll contact you
                  soon.
                </div>
              )}
              <p className="text-xs opacity-70">
                Applications are stored locally for now. Admin panel integration
                will enable management and follow-up.
              </p>
            </form>
          </aside>
        </div>
      </div>
    </div>
  );
}
