import { LuxuryBrandBlock } from '@/components/luxury/LuxuryBrandBlock';
import { luxuryBrandOrder, luxuryImageBySlug } from '@/components/luxury/luxuryAssets';

export function LuxuryShowcase() {
  return (
    <section
      id="luxury"
      className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 border-y border-[rgba(214,179,106,0.12)] bg-[#050505] py-20 md:py-28 lg:py-36"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(214,179,106,0.08),transparent_55%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(214,179,106,0.35)] to-transparent" aria-hidden />

      <div className="relative mx-auto max-w-[90rem] px-6 sm:px-10 lg:px-16">
        <header className="mx-auto max-w-3xl text-center lg:max-w-4xl">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.4em] text-[#d6b36a]/85">Luxury precinct</p>
          <h2 className="theme-heading mt-6 text-[clamp(2rem,4.5vw,3.5rem)] font-light leading-[1.08] tracking-tight">
            A dedicated premium environment
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
            Investor-grade presentation of anchor maisons. Hover each vignette to bring the rear card forward—pure
            motion and depth, no fades—while the spatial rhythm alternates left and right for a gallery-like walkthrough.
          </p>
        </header>

        <div className="mt-20 md:mt-28 lg:mt-36">
          {luxuryBrandOrder.map((brand, index) => (
            <LuxuryBrandBlock
              key={brand.slug}
              slug={brand.slug}
              displayName={brand.displayName}
              line={brand.line}
              index={index}
              images={luxuryImageBySlug[brand.slug]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
