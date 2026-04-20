import Image from 'next/image';
import type { BrandImagePair, LuxuryBrandSlug } from '@/components/luxury/luxuryAssets';

type Props = {
  slug: LuxuryBrandSlug;
  displayName: string;
  line: string;
  index: number;
  images: BrandImagePair;
};

function LuxuryImageStack({
  displayName,
  images,
  index,
  isSingleAsset
}: {
  displayName: string;
  images: BrandImagePair;
  index: number;
  isSingleAsset: boolean;
}) {
  const layerTransition =
    'transition-[transform,box-shadow] duration-[420ms] ease-[cubic-bezier(0.45,0,0.2,1)] will-change-transform';

  const cardRadius = 'rounded-2xl';

  return (
    <>
      <div
        className={`relative hidden aspect-[4/5] w-full overflow-hidden sm:aspect-[3/4] motion-reduce:block md:aspect-auto md:h-[min(70vh,38rem)] md:min-h-[min(70vh,38rem)] ${cardRadius}`}
      >
        <Image
          src={images.primary}
          alt={`${displayName} brand visual`}
          fill
          className={`object-cover ${isSingleAsset ? 'object-[center_42%]' : ''}`}
          sizes="(max-width: 1024px) 100vw, 42vw"
          priority={index === 0}
        />
      </div>

      <div
        className="group/stack relative aspect-[4/5] w-full sm:aspect-[3/4] motion-reduce:hidden md:aspect-auto md:h-[min(70vh,38rem)] md:min-h-[min(70vh,38rem)]"
        aria-label={`${displayName} hover to bring the rear card forward`}
      >
        <div
          className={`absolute inset-0 z-[1] overflow-hidden ${cardRadius} shadow-[0_22px_55px_-18px_rgba(0,0,0,0.72)] ${layerTransition} translate-x-[24px] translate-y-[30px] scale-[0.94] group-hover/stack:z-[3] group-hover/stack:translate-x-0 group-hover/stack:translate-y-0 group-hover/stack:scale-100 group-hover/stack:shadow-[0_40px_100px_-28px_rgba(0,0,0,0.88)]`}
        >
          <Image
            src={images.secondary}
            alt=""
            fill
            className={`object-cover ${isSingleAsset ? 'object-[30%_38%]' : ''}`}
            sizes="(max-width: 1024px) 100vw, 42vw"
          />
        </div>

        <div
          className={`absolute inset-0 z-[2] overflow-hidden ${cardRadius} shadow-[0_40px_100px_-28px_rgba(0,0,0,0.88)] ${layerTransition} translate-x-0 translate-y-0 scale-100 group-hover/stack:z-[1] group-hover/stack:translate-x-[24px] group-hover/stack:translate-y-[30px] group-hover/stack:scale-[0.94] group-hover/stack:shadow-[0_22px_55px_-18px_rgba(0,0,0,0.72)]`}
        >
          <Image
            src={images.primary}
            alt={`${displayName} primary visual`}
            fill
            className={`object-cover ${isSingleAsset ? 'object-[center_42%]' : ''}`}
            sizes="(max-width: 1024px) 100vw, 42vw"
            priority={index === 0}
          />
        </div>
      </div>
    </>
  );
}

export function LuxuryBrandBlock({ slug, displayName, line, index, images }: Props) {
  const isSingleAsset = images.primary === images.secondary;

  const imageOnRight = index % 2 === 0;
  const staggerYRem = [0, 4.5, 9, 3.5, 11, 6.5][index % 6];

  return (
    <div
      data-brand={slug}
      className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-0"
      style={{ marginTop: index === 0 ? undefined : `${staggerYRem}rem` }}
    >
      <div
        className={
          imageOnRight
            ? 'order-1 flex flex-col justify-center lg:order-1 lg:col-span-5 lg:col-start-1 lg:pr-6'
            : 'order-2 flex flex-col justify-center lg:order-2 lg:col-span-5 lg:col-start-8 lg:pl-6'
        }
      >
        <p className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-[#c9a962]/90">Maison</p>
        <h3
          className={`theme-heading mt-5 text-3xl font-light tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-[1.05] ${imageOnRight ? 'lg:text-left' : 'lg:text-right'}`}
        >
          {displayName}
        </h3>
        <p
          className={`mt-5 max-w-md text-sm leading-relaxed text-zinc-400 sm:text-base ${imageOnRight ? 'lg:text-left' : 'lg:ml-auto lg:text-right'}`}
        >
          {line}
        </p>
        <div
          className={`mt-9 h-px w-20 bg-gradient-to-r from-transparent via-[#d6b36a]/60 to-transparent ${imageOnRight ? '' : 'lg:ml-auto'}`}
          aria-hidden
        />
      </div>

      <figure
        className={
          imageOnRight
            ? 'order-2 w-full lg:order-2 lg:col-span-6 lg:col-start-7 lg:translate-y-2 lg:justify-self-end'
            : 'order-1 w-full lg:order-1 lg:col-span-6 lg:col-start-1 lg:-translate-y-2 lg:justify-self-start'
        }
      >
        <div className={`relative mx-auto w-full max-w-xl lg:max-w-none lg:mx-0 ${imageOnRight ? 'lg:pl-8' : 'lg:pr-8'}`}>
          <div className="relative overflow-visible rounded-2xl border border-[rgba(214,179,106,0.2)] bg-[#0a0a0a] shadow-[0_40px_140px_-28px_rgba(0,0,0,0.88)]">
            <LuxuryImageStack displayName={displayName} images={images} index={index} isSingleAsset={isSingleAsset} />
            <figcaption className="sr-only">
              {displayName} imagery: stacked cards; hover swaps depth using transforms and stacking only.
            </figcaption>
          </div>
        </div>
      </figure>
    </div>
  );
}
