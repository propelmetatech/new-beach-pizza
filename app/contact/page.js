import Image from "next/image";
import { MENU_GALLERY_IMAGES } from "@/lib/menu";

export const metadata = {
  title: "Contact"
};

const gmbHref =
  "https://www.google.com/search?q=New+Beach+Pizza+5411+Seminole+Blvd+Seminole%2C+FL+33772&oq=New+Beach+Pizza+5411+Seminole+Blvd+Seminole%2C+FL+33772&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIKCAEQABiABBiiBDIKCAIQABiABBiiBDIKCAMQABiABBiiBNIBCDExMDhqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8";
const contactFormHref =
  "https://docs.google.com/forms/d/e/1FAIpQLSewJCWH4IfpYCbbijusl2CWfBleW7qoubv7EMf6fCS3WK-MYQ/viewform?usp=publish-editor";

const contactInfo = [
  {
    label: "Phone",
    value: "727 800 2888",
    helper: "Best for live orders, pickup timing, and today's hours.",
    href: "tel:+17278002888",
    action: "Call now"
  },
  {
    label: "Email",
    value: "Pizzainseminole@gmail.com",
    helper: "Best for feedback, events, catering, and general questions.",
    href: "mailto:Pizzainseminole@gmail.com",
    action: "Send email"
  },
  {
    label: "Address",
    value: "5411 Seminole Blvd, Seminole, FL 33772",
    helper: "Open Google Business for directions and location details.",
    href: gmbHref,
    action: "Open directions",
    external: true
  }
];

export default function ContactPage() {
  return (
    <div className="pb-20">
      <section className="page-shell pt-8">
        <div className="surface-card photo-spotlight overflow-hidden border border-brand-secondary/10">
          <div className="relative min-h-[300px] bg-brand-black sm:min-h-[360px]">
            <Image
              src={MENU_GALLERY_IMAGES[6]}
              alt="New Beach Pizza banner"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/20" />
            <div className="absolute inset-0 flex items-end p-6 sm:p-8 lg:p-10">
              <div className="max-w-2xl">
                <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-white">
                  Contact Us
                </p>
                <h1 className="mt-4 font-heading text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
                  Get in touch with New Beach Pizza.
                </h1>
                <p className="mt-4 max-w-xl text-base leading-8 text-white sm:text-lg">
                  Call us directly for anything urgent, or use the Contact Us button for messages
                  that need a reply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell pt-8">
        <div className="grid gap-6 lg:grid-cols-[0.92fr,1.08fr]">
          <div className="surface-card border border-brand-secondary/10 p-6 sm:p-8">
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-brand-secondary">
              Contact Info
            </p>

            <div className="mt-6 space-y-4">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[24px] border border-brand-primary/10 bg-brand-cream px-5 py-5"
                >
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-brand-primary/70">
                    {item.label}
                  </p>
                  <p className="mt-2 break-words text-xl font-semibold leading-8 text-brand-black">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-black/68">{item.helper}</p>
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold normal-case text-brand-primary transition hover:text-brand-secondary"
                  >
                    {item.action}
                    <span aria-hidden="true">-&gt;</span>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="surface-card border border-brand-secondary/10 p-6 sm:p-8">
            <div className="rounded-[24px] bg-brand-cream/80 p-6 sm:p-8">
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-brand-secondary">
                Google Form
              </p>
              <h2 className="brand-title mt-4 font-heading text-3xl leading-tight sm:text-4xl">
                Send us a message.
              </h2>
              <p className="mt-4 text-base leading-7 text-black/68">
                Use the form for feedback, events, catering, and general questions.
              </p>
              <a
                href={contactFormHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex rounded-full bg-brand-primary px-5 py-3 text-sm font-extrabold normal-case text-white shadow-lg shadow-brand-primary/20 transition hover:-translate-y-0.5 hover:bg-brand-primaryDark"
              >
                Contact Us
              </a>
              {/* <p className="mt-4 text-sm leading-7 text-black/60">
                This opens the Google Form in a new tab.
              </p> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
