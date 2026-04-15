export const metadata = {
  title: "Contact"
};

const contactCards = [
  {
    title: "Call The Restaurant",
    description: "Add your live restaurant phone number here for direct guest calls and quick ordering help."
  },
  {
    title: "Store Address",
    description: "Add your full address, nearby landmark, and parking notes for easy walk-in visits."
  },
  {
    title: "Opening Hours",
    description: "Add your daily hours here so guests can quickly see when the kitchen is open."
  }
];

export default function ContactPage() {
  return (
    <div className="pb-16">
      <section className="page-shell pt-6">
        <div className="surface-card overflow-hidden">
          <div className="grid gap-0 xl:grid-cols-[0.95fr,1.05fr]">
            <div className="hero-shell relative overflow-hidden p-6 text-white sm:p-8 lg:p-10">
              <div className="hero-dots absolute inset-0 opacity-20" />
              <div className="absolute -left-20 top-10 h-56 w-56 rounded-full bg-white/12 blur-3xl" />
              <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-brand-accent/20 blur-3xl" />

              <div className="relative max-w-2xl">
                <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-white/72">
                  Contact
                </p>
                <h1 className="mt-4 font-heading text-4xl uppercase leading-[0.94] text-white sm:text-5xl">
                  Contact SEMINOLE favourites.
                </h1>
                <p className="mt-5 max-w-xl text-base leading-8 text-white/82 sm:text-lg">
                  Keep this page simple and clear so guests can quickly find your phone, address,
                  hours, and any ordering help they need.
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-8 lg:p-10">
              <div className="grid gap-4">
                {contactCards.map((card) => (
                  <article key={card.title} className="rounded-[26px] bg-brand-cream p-6">
                    <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-brand-secondary">
                      Contact Detail
                    </p>
                    <h2 className="mt-3 font-heading text-2xl uppercase leading-none text-brand-black sm:text-[1.7rem]">
                      {card.title}
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-black/68">{card.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
