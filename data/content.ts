// Barrel: single import point kept for backwards compatibility.
// Source of truth lives in the sibling data modules.
export * from './programs';
export * from './transformationStories';
export * from './coaches';
export * from './testimonials';
export * from './membership';
export * from './navigation';

import { img } from './programs';

export const HERO_IMAGE = img('photo-1534438327276-14e5300c3a48', 1800);
export const HERO_SIDE = img('photo-1517836357463-d25dfeac3438', 1000);
export const FINAL_IMAGE = img('photo-1571902943202-507ec2618e8f', 1800);

export const communityImages = [
  img('photo-1534438327276-14e5300c3a48', 900),
  img('photo-1517836357463-d25dfeac3438', 900),
  img('photo-1526506118085-60ce8714f8c5', 900),
  img('photo-1571902943202-507ec2618e8f', 900),
  img('photo-1540497077202-7c8a3999166f', 900),
  img('photo-1517963879433-6ad2b056d712', 900),
  img('photo-1605296867304-46d5465a13f1', 900),
  img('photo-1552674605-db6ffd4facb5', 900),
];
