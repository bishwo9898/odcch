export const metadata = {
  title: "Donate — ODCCH",
};

export default function Donate() {
  return (
    <div className="section">
      <div className="container">
        <p className="eyebrow">Support</p>
        <h1 className="text-3xl font-bold">Donate to ODCCH</h1>
        <p className="mt-3 opacity-90">
          Your donation sustains daily care, therapy, education, and medical
          needs for our children.
        </p>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="font-semibold">Ways to give</h3>
            <ul className="mt-3 text-sm opacity-90 space-y-2">
              <li>Online donation (integration coming soon)</li>
              <li>Bank transfer: Account details available on request</li>
              <li>Local partners and cash donations</li>
            </ul>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold">Suggested amounts</h3>
            <div className="mt-3 flex flex-wrap gap-3">
              {["₨1,000", "₨5,000", "₨10,000", "₨25,000"].map((a) => (
                <button
                  key={a}
                  className="rounded-md border px-4 py-2 text-sm hover:bg-black/5"
                >
                  {a}
                </button>
              ))}
            </div>
            <p className="mt-4 text-xs opacity-70">
              We will add secure payment options when ready.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
