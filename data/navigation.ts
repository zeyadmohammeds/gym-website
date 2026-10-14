export type NavLink = {
  label: string;
  href: string;
  id: string;
};

export const navLinks: NavLink[] = [
  { label: 'HOME', href: '#home', id: 'home' },
  { label: 'PROGRAMS', href: '#programs', id: 'programs' },
  { label: 'TRANSFORM', href: '#transform', id: 'transform' },
  { label: 'COACHES', href: '#coaches', id: 'coaches' },
  { label: 'TESTIMONIALS', href: '#testimonials', id: 'testimonials' },
  { label: 'MEMBERSHIP', href: '#membership', id: 'membership' },
  { label: 'CONTACT', href: '#contact', id: 'contact' },
];

export const contactInfo = {
  email: 'hello@voltathletics.com',
  phone: '+20 100 000 0000',
  address: 'New Cairo, Egypt',
  hours: 'Open 24/7 for members',
};
