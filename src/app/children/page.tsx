import Image from "next/image";

export const metadata = {
  title: "Updates & Stories — ODCCH",
  description:
    "Latest news, updates, and stories from Om Disabled Child Care Home.",
};

// Sample news/updates data structure
const sampleUpdates = [
  {
    id: 1,
    title: "New Therapy Center Opened",
    date: "2026-01-12",
    category: "Milestone",
    excerpt:
      "We are thrilled to announce the opening of our new therapy center, equipped with modern rehabilitation equipment.",
    image: "/images/placeholder-news-1.jpg",
  },
  {
    id: 2,
    title: "Winter Program Success",
    date: "2026-01-08",
    category: "Program",
    excerpt:
      "Our winter education program concluded with excellent progress from all participating children.",
    image: "/images/placeholder-news-2.jpg",
  },
  {
    id: 3,
    title: "Community Outreach Event",
    date: "2026-01-02",
    category: "Community",
    excerpt:
      "We hosted a community awareness event to promote inclusion and understanding of children with disabilities.",
    image: "/images/placeholder-news-3.jpg",
  },
  {
    id: 4,
    title: "Volunteer Appreciation Day",
    date: "2025-12-28",
    category: "Volunteer",
    excerpt:
      "A special event to celebrate and thank all our amazing volunteers for their dedication and hard work.",
    image: "/images/placeholder-news-4.jpg",
  },
  {
    id: 5,
    title: "New Sports Program Launch",
    date: "2025-12-20",
    category: "Program",
    excerpt:
      "Introducing our inclusive sports program designed to promote physical wellness and team building.",
    image: "/images/placeholder-news-5.jpg",
  },
  {
    id: 6,
    title: "Annual Report 2025 Released",
    date: "2025-12-15",
    category: "Milestone",
    excerpt:
      "Our comprehensive annual report showcases another year of impact and growth.",
    image: "/images/placeholder-news-6.jpg",
  },
];

const categoryColors = {
  Milestone: "bg-blue-100 text-blue-700",
  Program: "bg-green-100 text-green-700",
  Community: "bg-amber-100 text-amber-700",
  Volunteer: "bg-purple-100 text-purple-700",
};

export default function UpdatesAndStories() {
  return (
    <main>
      {/* Hero Section */}
      <section className="section bg-linear-to-b from-blue-50 to-white">
        <div className="container max-w-4xl text-center">
          <p className="eyebrow">Stay Connected</p>
          <h1 className="text-4xl sm:text-5xl font-bold mt-2">
            Updates & Stories
          </h1>
          <p className="lead mt-4 max-w-2xl mx-auto">
            Read the latest news, program updates, and inspiring stories from
            our community at Om Disabled Child Care Home.
          </p>
        </div>
      </section>

      {/* Featured Update */}
      <section className="section">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="card p-0 overflow-hidden shadow-lg">
                <div className="relative h-64 md:h-80 w-full bg-slate-100">
                  <Image
                    src="/images/children.jpg"
                    alt="New Therapy Center Opened"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div
                className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
                  categoryColors[
                    sampleUpdates[0].category as keyof typeof categoryColors
                  ]
                }`}
              >
                {sampleUpdates[0].category}
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold">
                {sampleUpdates[0].title}
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                {new Date(sampleUpdates[0].date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p className="mt-6 text-base leading-relaxed text-slate-700">
                {sampleUpdates[0].excerpt}
              </p>
              <button className="mt-6 inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-6 text-white font-medium hover:bg-blue-700 transition-colors">
                Read Full Story
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* All Updates Grid */}
      <section className="section bg-slate-50">
        <div className="container max-w-6xl">
          <div className="mb-10">
            <h2 className="text-3xl font-semibold">Latest Updates</h2>
            <p className="mt-2 text-slate-600">
              Discover what's happening at ODCCH
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleUpdates.slice(1).map((update, idx) => {
              const images = [
                "/images/santaodcch.jpg",
                "/images/santa2.jpg",
                "/images/children.jpg",
              ];
              const imageUrl = images[idx % images.length];
              return (
                <div
                  key={update.id}
                  className="card overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48 w-full bg-slate-100">
                    <Image
                      src={imageUrl}
                      alt={update.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <span
                        className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                          categoryColors[
                            update.category as keyof typeof categoryColors
                          ]
                        }`}
                      >
                        {update.category}
                      </span>
                      <time className="text-xs text-slate-500 whitespace-nowrap">
                        {new Date(update.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </time>
                    </div>
                    <h3 className="font-semibold text-lg leading-tight">
                      {update.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {update.excerpt}
                    </p>
                    <button className="mt-4 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
                      Read More →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-semibold">Stay Updated</h2>
          <p className="mt-3 text-base leading-relaxed text-slate-700">
            Don't miss out on important updates and stories from our community.
            Follow us on social media or check back regularly for the latest
            news.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <button className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-6 text-white font-medium hover:bg-blue-700 transition-colors">
              Follow on Social Media
            </button>
            <button className="inline-flex h-10 items-center justify-center rounded-md border border-slate-300 px-6 font-medium hover:bg-slate-50 transition-colors">
              Subscribe to Updates
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
