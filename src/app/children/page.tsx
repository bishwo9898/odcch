export const metadata = {
  title: "Children — ODCCH",
};

export default function Children() {
  // Placeholder list; admin panel will manage real data later
  const sample = Array.from({ length: 25 }).map((_, i) => ({ id: i + 1, name: `Child ${i + 1}`, age: 6 + (i % 8) }));

  return (
    <div className="section">
      <div className="container">
        <p className="eyebrow">Our Community</p>
        <h1 className="text-3xl font-bold">Children at ODCCH</h1>
        <p className="mt-3 opacity-90">We currently support 25 children. Profiles and photos will be available through the admin-managed directory soon.</p>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sample.map((c) => (
            <div key={c.id} className="card overflow-hidden">
              <div className="h-40 bg-[rgba(11,18,32,0.04)]" />
              <div className="p-4">
                <div className="font-semibold">{c.name}</div>
                <div className="text-sm opacity-80">Age: {c.age}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
