import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About — Om Disabled Child Care Home (ODCCH)",
  description:
    "Learn about our mission, vision, and the inspiring story behind Om Disabled Child Care Home.",
};

export default function About() {
  return (
    <main>
      {/* Hero Section */}
      <section className="section bg-linear-to-b from-blue-50 to-white">
        <div className="container max-w-4xl text-center">
          <p className="eyebrow">About Us</p>
          <h1 className="text-4xl sm:text-5xl font-bold mt-2">
            Om Disabled Child Care Home
          </h1>
          <p className="lead mt-4 max-w-2xl mx-auto">
            A non-governmental, non-profit organization dedicated to providing
            care, shelter, and hope to children with disabilities in Nepal.
          </p>
        </div>
      </section>

      {/* Who We Are - with image */}
      <section className="section">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold">Who We Are</h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed">
                <p>
                  Om Disabled Child Care Home is a non-governmental, non-profit
                  organization based in Kathmandu, Nepal. We are dedicated to
                  providing care, shelter, medical support, and a safe living
                  environment for children with physical and mental
                  disabilities.
                </p>
                <p>
                  The children we support are often orphaned, abandoned, or come
                  from families who are unable to provide the long-term care
                  they need. Our organization exists to ensure that these
                  children are treated with dignity, compassion, and respect,
                  and are given the opportunity to live a meaningful and
                  supported life.
                </p>
              </div>

              {/* Quick stats */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">25+</div>
                  <div className="text-xs mt-1 text-slate-600">Children</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">2010</div>
                  <div className="text-xs mt-1 text-slate-600">Founded</div>
                </div>
                <div className="text-center p-4 bg-amber-50 rounded-lg">
                  <div className="text-2xl font-bold text-amber-600">24/7</div>
                  <div className="text-xs mt-1 text-slate-600">Care</div>
                </div>
              </div>
            </div>

            <div className="order-first md:order-last">
              <div className="card p-0 overflow-hidden shadow-lg">
                <div className="relative h-80 w-full bg-slate-100">
                  <Image
                    src="/images/children.jpg"
                    alt="Children at ODCCH"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story - with founder image */}
      <section className="section bg-slate-50">
        <div className="container max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold">Our Story</h2>
            <p className="text-sm text-slate-600 mt-2">
              A journey of compassion, resilience, and hope
            </p>
          </div>

          {/* Founder section with image */}
          <div className="grid md:grid-cols-5 gap-8 items-start mb-12">
            <div className="md:col-span-2">
              <div className="card p-0 overflow-hidden shadow-lg sticky top-24">
                <div className="relative h-72 w-full bg-slate-50">
                  <div className="absolute inset-2">
                    <Image
                      src="/images/ratna-kala-oli.png"
                      alt="Founder Ratna Kala Oli embracing her son"
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-contain rounded-md"
                      priority
                    />
                  </div>
                </div>
                <div className="px-4 py-3 border-t bg-white">
                  <p className="text-sm font-medium">Photo: Ratna Kala Oli</p>
                  <p className="text-xs opacity-75">Founder</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-3 space-y-4 text-base leading-relaxed">
              <p className="font-medium text-lg">
                Om Disabled Child Care Home was founded by Ratna Kala Oli in
                2010.
              </p>
              <p>
                The idea for the organization began from her personal experience
                as a mother. Her first son was born with a disability known as
                cerebral palsy. During the early years, she faced significant
                emotional pressure, social challenges, and a lack of
                understanding from the community. Caring for a child with a
                disability was not easy, especially in a society where support
                systems were limited.
              </p>
              <p>
                Over time, she began to realize that her child was not the only
                one facing such difficulties. Across Nepal, many children with
                disabilities were being neglected or abandoned, often because
                families lacked resources, awareness, or social support. Some of
                these children were found living on the streets or without
                proper care.
              </p>
            </div>
          </div>

          {/* Growth timeline with image */}
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3 space-y-4 text-base leading-relaxed">
              <p className="font-medium text-lg">
                With a strong sense of responsibility and compassion, Ratna Kala
                Oli decided to take action.
              </p>
              <p>
                In 2010, Om Disabled Child Care Home started by supporting just
                one child. At the beginning, the children lived in a shared home
                with limited space and resources. As the number of children
                gradually increased, it became clear that a more suitable and
                dedicated living space was needed. Over time, the organization
                began renting a separate house to better accommodate the growing
                number of children and to provide a safer and more stable
                environment.
              </p>
              <p className="font-medium">
                What started as a small effort has grown steadily through
                dedication, community support, and a deep commitment to the
                well-being of children with disabilities.
              </p>
            </div>

            <div className="md:col-span-2">
              <div className="card p-0 overflow-hidden shadow-lg">
                <div className="relative h-64 w-full bg-slate-100">
                  <Image
                    src="/images/santaodcch.jpg"
                    alt="ODCCH Facility and Community"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do - with icons */}
      <section className="section">
        <div className="container max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold">What We Do</h2>
            <p className="mt-3 text-base leading-relaxed max-w-3xl mx-auto">
              Om Disabled Child Care Home works to identify and support children
              with physical and mental disabilities across Nepal. Our focus is
              on children who are unable to care for themselves and who lack
              proper family or social support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="card p-6 hover:shadow-lg transition-shadow">
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
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-lg">Safe Accommodation</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Safe housing and daily care in a supportive environment
              </p>
            </div>

            <div className="card p-6 hover:shadow-lg transition-shadow">
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
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-lg">Medical Support</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Regular medical checkups, therapy, and rehabilitation
              </p>
            </div>

            <div className="card p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-amber-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-lg">Special Education</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Learning programs adapted to each child's ability
              </p>
            </div>

            <div className="card p-6 hover:shadow-lg transition-shadow">
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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-lg">Emotional Support</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Counseling, play, and community integration
              </p>
            </div>

            <div className="card p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-rose-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-lg">Community Care</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                A stable and loving home environment
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-base leading-relaxed max-w-2xl mx-auto text-slate-700">
              Our goal is not only to meet basic needs, but also to help
              children feel valued, supported, and included in society.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Grid */}
      <section className="section-sm bg-blue-50">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-8">
              <h2 className="text-2xl font-semibold">Our Mission</h2>
              <p className="mt-4 leading-relaxed">
                Our mission is to provide a safe, caring, and supportive home
                for children with disabilities who are orphaned, abandoned, or
                living in vulnerable conditions.
              </p>
              <p className="mt-4 font-medium">We aim to:</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  • Create a suitable living environment where children with
                  disabilities can live with dignity
                </li>
                <li>
                  • Provide necessary medical care, therapy, and education based
                  on individual needs
                </li>
                <li>
                  • Support the emotional and social development of every child
                </li>
                <li>
                  • Advocate for the rights and inclusion of children with
                  disabilities
                </li>
              </ul>
            </div>

            <div className="card p-8">
              <h2 className="text-2xl font-semibold">Our Vision</h2>
              <p className="mt-4 leading-relaxed">
                We envision a society where children with disabilities are not
                neglected or excluded, but are respected, supported, and given
                equal opportunities to live fulfilling lives.
              </p>
              <p className="mt-4 leading-relaxed">
                Our long-term vision is to expand our capacity so that more
                children can find a permanent home, feel a sense of belonging,
                and receive the care they deserve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Approach - with image */}
      <section className="section">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold">Our Values & Approach</h2>
              <p className="mt-3 text-base text-slate-600">
                The principles that guide everything we do
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
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
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Compassion</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      Every child is treated with care, patience, and respect
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
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
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Dignity</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      We believe disability does not define a child's worth
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-amber-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Responsibility</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      We are committed to long-term care and support
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
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
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Transparency</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      We operate as a registered, accountable non-profit
                      organization
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-rose-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Inclusion</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      We work toward a more understanding and inclusive society
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="card p-0 overflow-hidden shadow-xl">
                <div className="relative h-96 w-full bg-slate-100">
                  <Image
                    src="/images/santa2.jpg"
                    alt="ODCCH Team and Community Values"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Status */}
      <section className="section-sm bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-semibold">
            Legal Status & Registration
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed">
            <p className="font-medium">
              Om Disabled Child Care Home is a registered non-governmental,
              non-profit organization in Nepal.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Registered under the Organization Registration Act 2034 of the
                Government of Nepal
              </li>
              <li>
                Registered at the District Administration Office, Kathmandu in
                2067 B.S. (2010 A.D.)
              </li>
            </ul>
            <p>
              All activities and support are directed toward the welfare and
              protection of children with disabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Looking Ahead */}
      <section className="section">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-semibold">Looking Ahead</h2>
          <p className="mt-4 text-base leading-relaxed max-w-3xl mx-auto">
            As the number of children with disabilities in need continues to
            grow, our organization remains committed to expanding its reach and
            improving its facilities. With continued support, we hope to provide
            a permanent home and a better future for many more children in the
            years to come.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/donate" className="btn btn-primary">
              Support Our Work
            </Link>
            <Link href="/volunteer" className="btn btn-secondary">
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
