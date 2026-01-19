"use client";
import Link from "next/link";
import Image from "next/image";
import HeroCarousel from "../components/HeroCarousel";

export default function Home() {
  return (
    <main>
      {/* 1. Hero Section */}
      <HeroCarousel>
        <p className="eyebrow text-white/95">
          Om Disabled Child Care Home (ODCCH)
        </p>
        <h1 className="mt-2 text-4xl sm:text-5xl font-bold tracking-tight text-white">
          Providing Care, Dignity, and Hope to Children with Disabilities in
          Nepal
        </h1>
        <p className="lead mt-4 text-white/90 max-w-3xl">
          Om Disabled Child Care Home is a non-profit organization dedicated to
          supporting orphaned and vulnerable children with physical and mental
          disabilities through care, therapy, and education.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/donate"
            className="inline-flex h-11 items-center justify-center rounded-md bg-emerald-600 px-5 text-white font-medium shadow-sm"
          >
            Support Our Mission
          </Link>
          <Link
            href="/about"
            className="inline-flex h-11 items-center justify-center rounded-md border px-5 font-medium bg-white/10 text-white/95"
          >
            Learn More
          </Link>
        </div>
      </HeroCarousel>

      {/* 2. Trust & Legitimacy Strip */}
      <section className="section-sm bg-slate-50">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex gap-6 items-center text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <span className="text-green-600">✔</span>
                <span>Registered NGO (Govt. of Nepal)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600">✔</span>
                <span>Serving since 2010</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600">✔</span>
                <span>Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600">✔</span>
                <span>Non-profit & transparent</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. About (short) */}
      <section className="section">
        <div className="container grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold">Who We Are</h2>
            <p className="mt-3 text-sm opacity-90">
              Om Disabled Child Care Home was founded by Ratna Kala Oli with the
              vision of creating a safe and caring home for children with
              disabilities who have been abandoned or left without support.
              Inspired by personal experience and compassion, our organization
              works to give every child dignity, care, and a chance at a better
              life.
            </p>
            <div className="mt-4">
              <Link
                href="/about"
                className="inline-flex h-10 items-center justify-center rounded-md border px-4 font-medium"
              >
                Read Our Full Story
              </Link>
            </div>
          </div>

          <div className="card p-0 overflow-hidden">
            <div className="relative h-64 w-full bg-slate-100">
              <Image
                src="/images/children.jpg"
                alt="Children and caregiver at ODCCH"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. What We Do */}
      <section className="section-sm">
        <div className="container">
          <h2 className="text-2xl font-semibold">What We Do</h2>
          <p className="mt-2 text-sm opacity-90">
            Programs and services tailored to each child's needs.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
            <div className="card p-4">
              <h3 className="font-semibold">Care & Accommodation</h3>
              <p className="mt-2 text-sm opacity-90">
                Safe housing, daily care, and supervision.
              </p>
            </div>
            <div className="card p-4">
              <h3 className="font-semibold">Medical & Physiotherapy</h3>
              <p className="mt-2 text-sm opacity-90">
                Regular medical checkups, therapy, and rehabilitation.
              </p>
            </div>
            <div className="card p-4">
              <h3 className="font-semibold">Special Education</h3>
              <p className="mt-2 text-sm opacity-90">
                Learning programs adapted to each child's ability.
              </p>
            </div>
            <div className="card p-4">
              <h3 className="font-semibold">Emotional Support</h3>
              <p className="mt-2 text-sm opacity-90">
                Counseling, play, and community integration.
              </p>
            </div>
            <div className="card p-4">
              <h3 className="font-semibold">Child Rights Advocacy</h3>
              <p className="mt-2 text-sm opacity-90">
                Protecting the rights of children with disabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Impact Snapshot */}
      <section className="section bg-slate-50">
        <div className="container text-center">
          <h2 className="text-2xl font-semibold">Our Impact</h2>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="py-6">
              <div className="text-3xl font-bold">100+</div>
              <div className="text-sm opacity-90">Children cared for</div>
            </div>
            <div className="py-6">
              <div className="text-3xl font-bold">2010</div>
              <div className="text-sm opacity-90">Founded</div>
            </div>
            <div className="py-6">
              <div className="text-3xl font-bold">Daily</div>
              <div className="text-sm opacity-90">Physiotherapy & care</div>
            </div>
            <div className="py-6">
              <div className="text-3xl font-bold">150+</div>
              <div className="text-sm opacity-90">
                Lives changed through compassion
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. How You Can Help */}
      <section className="section">
        <div className="container">
          <h2 className="text-2xl font-semibold">How You Can Support</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="card p-6 text-center">
              <h3 className="font-semibold">Donate</h3>
              <p className="mt-2 text-sm opacity-90">
                Your support helps provide food, medical care, and therapy.
              </p>
              <div className="mt-4">
                <Link
                  href="/donate"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-amber-500 px-4 text-white font-medium"
                >
                  Donate Now
                </Link>
              </div>
            </div>

            <div className="card p-6 text-center">
              <h3 className="font-semibold">Volunteer</h3>
              <p className="mt-2 text-sm opacity-90">
                Join us and make a direct impact in children’s lives.
              </p>
              <div className="mt-4">
                <Link
                  href="/volunteer"
                  className="inline-flex h-10 items-center justify-center rounded-md border px-4 font-medium"
                >
                  Volunteer With Us
                </Link>
              </div>
            </div>

            <div className="card p-6 text-center">
              <h3 className="font-semibold">Partner With Us</h3>
              <p className="mt-2 text-sm opacity-90">
                Support us as an organization or institution.
              </p>
              <div className="mt-4">
                <Link
                  href="/contact"
                  className="inline-flex h-10 items-center justify-center rounded-md border px-4 font-medium"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Featured Photos / Stories */}
      <section className="section-sm">
        <div className="container">
          <h2 className="text-2xl font-semibold">
            Life at Om Disabled Child Care Home
          </h2>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative h-40 w-full rounded overflow-hidden">
              <Image
                src="/images/children.jpg"
                alt="Children at ODCCH"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="relative h-40 w-full rounded overflow-hidden">
              <Image
                src="/images/santaodcch.jpg"
                alt="Community activities"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="relative h-40 w-full rounded overflow-hidden">
              <Image
                src="/images/santa2.jpg"
                alt="Therapy and care"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="relative h-40 w-full rounded overflow-hidden">
              <Image
                src="/images/ratna-kala-oli.png"
                alt="Founder and team"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. Transparency & Ethics */}
      <section className="section">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-semibold">Transparency & Ethics</h2>
          <p className="mt-3 text-sm opacity-90">
            Registered under Organization Registration Act 2034. Registered at
            District Administration Office, Kathmandu. Non-profit,
            non-political, non-religious. Funds used directly for child welfare.
          </p>
        </div>
      </section>

      {/* 9. Final Call to Action */}
      <section className="section-sm bg-emerald-50">
        <div className="container text-center">
          <h2 className="text-2xl font-semibold">
            Together, We Can Make a Difference
          </h2>
          <p className="mt-3 text-sm opacity-90 max-w-2xl mx-auto">
            Every child deserves love, care, and dignity. Your support helps us
            continue providing a safe home and essential services to children
            with disabilities in Nepal.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link
              href="/donate"
              className="inline-flex h-11 items-center justify-center rounded-md bg-amber-500 px-5 text-white font-medium"
            >
              Donate Now
            </Link>
            <Link
              href="/volunteer"
              className="inline-flex h-11 items-center justify-center rounded-md border px-5 font-medium"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
