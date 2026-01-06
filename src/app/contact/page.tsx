"use client";
import React from "react";

export default function Contact() {
  const [sent, setSent] = React.useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  }

  return (
    <div className="section">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <p className="eyebrow">Get in touch</p>
          <h1 className="text-3xl sm:text-4xl font-bold">
            Contact Om Disabled Child Care Home (ODCCH)
          </h1>
          <p className="mt-3 lead opacity-90">
            We welcome enquiries about donations, volunteering, sponsorship, and
            partnerships. Use the form to send a message and our team will get
            back to you.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 items-start">
          <aside className="space-y-6">
            <div className="card p-6">
              <h3 className="text-lg font-semibold">Contact details</h3>
              <p className="mt-2 text-sm opacity-90">
                Email:{" "}
                <a href="mailto:info@odcch.com" className="underline">
                  info@odcch.com
                </a>
              </p>
              <p className="mt-1 text-sm opacity-90">
                Phone:{" "}
                <a href="tel:+9779849003133" className="underline">
                  +977 9849003133
                </a>
                ,{" "}
                <a href="tel:+9779851072300" className="underline">
                  +977 9851072300
                </a>
              </p>
              <p className="mt-3 text-sm opacity-85">
                Office hours: Mon — Fri, 09:00 — 17:00 (NPT)
              </p>
            </div>

            <div className="card p-6">
              <h4 className="text-md font-semibold">Ways we can help</h4>
              <ul className="mt-3 text-sm list-disc pl-5 space-y-2 opacity-90">
                <li>Donation & sponsorship enquiries</li>
                <li>Volunteer placements and short-term stays</li>
                <li>Media and partnership requests</li>
              </ul>
            </div>

            <div className="card p-6">
              <h4 className="text-md font-semibold">Quick links</h4>
              <ul className="mt-3 text-sm space-y-2">
                <li>
                  <a href="/donate" className="underline">
                    Donate
                  </a>
                </li>
                <li>
                  <a href="/volunteer" className="underline">
                    Volunteer
                  </a>
                </li>
                <li>
                  <a href="/children" className="underline">
                    Meet our children
                  </a>
                </li>
              </ul>
            </div>
          </aside>

          <main>
            <form
              className="card shadow-soft p-6 space-y-4"
              onSubmit={handleSubmit}
            >
              <h3 className="text-lg font-semibold">Send us a message</h3>

              <div>
                <label htmlFor="name" className="text-sm font-medium">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="mt-1 w-full rounded-md border px-3 py-2"
                />
              </div>

              <div>
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="e.g. +977 98XXXXXXXX"
                  className="mt-1 w-full rounded-md border px-3 py-2"
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
                  required
                  className="mt-1 w-full rounded-md border px-3 py-2"
                />
              </div>

              <div>
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  className="mt-1 w-full rounded-md border px-3 py-2"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="mt-1 w-full rounded-md border px-3 py-2 min-h-28"
                />
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-amber-500 px-4 text-white font-medium"
                >
                  Send message
                </button>
                {sent && (
                  <div className="text-sm text-green-700">
                    Thanks — we'll contact you soon.
                  </div>
                )}
              </div>

              <p className="text-xs opacity-70">
                We store messages locally for now. Integration with our admin
                panel will be available soon.
              </p>
            </form>
          </main>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-3">Our Location</h3>
          <p className="text-sm opacity-90 mb-4">
            Find us on the map below — open the map to get directions.
          </p>

          <div className="card overflow-hidden">
            <div className="w-full h-64 md:h-96 bg-gray-100">
              <iframe
                title="ODCCH location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  "Om Disabled Child Care Home"
                )}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="p-4 flex items-center justify-between">
              <div className="text-sm">
                <div className="font-medium">
                  Om Disabled Child Care Home (ODCCH)
                </div>
                <div className="opacity-80">Kathmandu, Nepal</div>
              </div>

              <div>
                <a
                  href="https://maps.app.goo.gl/reSfdJm6NSWm1dui6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 items-center px-3 rounded-md bg-slate-50 border"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
