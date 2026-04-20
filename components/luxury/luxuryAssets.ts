import type { StaticImageData } from 'next/image';
import burberry1 from '../../ref_img/burberry_1.jpg';
import burberry2 from '../../ref_img/burberry_2.jpg';
import cartier1 from '../../ref_img/cartier_1.jpg';
import cartier2 from '../../ref_img/cartier_2.jpg';
import dior1 from '../../ref_img/dior_1.jpg';
import dior2 from '../../ref_img/dior_2.jpg';
import gucci1 from '../../ref_img/gucci_1.jpg';
import gucci2 from '../../ref_img/gucci_2.jpg';
import louisVuitton2 from '../../ref_img/louis_vuitton_2.jpg';
import prada1 from '../../ref_img/prada_1.jpg';
import prada2 from '../../ref_img/prada_2.jpg';

export type LuxuryBrandSlug =
  | 'louis_vuitton'
  | 'gucci'
  | 'prada'
  | 'burberry'
  | 'cartier'
  | 'dior';

export type BrandImagePair = {
  primary: StaticImageData;
  secondary: StaticImageData;
};

export const luxuryImageBySlug: Record<LuxuryBrandSlug, BrandImagePair> = {
  louis_vuitton: { primary: louisVuitton2, secondary: louisVuitton2 },
  gucci: { primary: gucci1, secondary: gucci2 },
  prada: { primary: prada1, secondary: prada2 },
  burberry: { primary: burberry1, secondary: burberry2 },
  cartier: { primary: cartier1, secondary: cartier2 },
  dior: { primary: dior1, secondary: dior2 }
};

export const luxuryBrandOrder: { slug: LuxuryBrandSlug; displayName: string; line: string }[] = [
  { slug: 'louis_vuitton', displayName: 'Louis Vuitton', line: 'Flagship savoir-faire at destination scale.' },
  { slug: 'gucci', displayName: 'Gucci', line: 'House codes, editorial presence, high dwell.' },
  { slug: 'prada', displayName: 'Prada', line: 'Intellectual luxury with sharp visual identity.' },
  { slug: 'burberry', displayName: 'Burberry', line: 'British heritage, modern retail theater.' },
  { slug: 'cartier', displayName: 'Cartier', line: 'High-jewelry adjacency and VIP service paths.' },
  { slug: 'dior', displayName: 'Dior', line: 'Couture spirit anchored in premium footfall.' }
];
