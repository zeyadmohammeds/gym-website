export type MembershipTier = {
  id: string;
  name: string;
  tagline: string;
  price: string;
  per: string;
  features: string[];
  featured: boolean;
};

export const membershipTiers: MembershipTier[] = [
  {
    id: 'open',
    name: 'OPEN',
    tagline: 'Gym access',
    price: '500 EGP',
    per: '/ MONTH',
    features: ['24/7 gym floor access', 'Locker room', 'App tracking', '1 guest pass / month'],
    featured: false,
  },
  {
    id: 'performance',
    name: 'PERFORMANCE',
    tagline: 'Gym + classes',
    price: '900 EGP',
    per: '/ MONTH',
    features: ['Everything in Open', 'Unlimited classes', 'Quarterly assessment', 'Recovery zone', 'Nutrition baseline'],
    featured: true,
  },
  {
    id: 'elite',
    name: 'ELITE',
    tagline: 'Gym + classes + personal coaching',
    price: '1500 EGP',
    per: '/ MONTH',
    features: ['Everything in Performance', '4x PT sessions / month', 'Custom programming', 'Priority booking'],
    featured: false,
  },
];
