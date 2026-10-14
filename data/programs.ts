export const img = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

export type Program = {
  id: string;
  index: string;
  title: string;
  category: string;
  description: string;
  image: string;
};

export const programs: Program[] = [
  {
    id: 'strength',
    index: '01',
    title: 'STRENGTH',
    category: 'Barbell / Power',
    description: 'Build real-world strength and physical capability with progressive barbell coaching and bulletproof technique.',
    image: img('photo-1526506118085-60ce8714f8c5'),
  },
  {
    id: 'personal',
    index: '02',
    title: 'PERSONAL TRAINING',
    category: '1-on-1 Coaching',
    description: 'Individual coaching built around your goals — programming, nutrition guidance, and accountability.',
    image: img('photo-1571019614242-c5c5dee9f50b'),
  },
  {
    id: 'boxing',
    index: '03',
    title: 'BOXING',
    category: 'Combat / Conditioning',
    description: 'Technique, conditioning, coordination and confidence. Footwork, pads, bags — learn to move under pressure.',
    image: img('photo-1549719386-74dfcbf7dbed'),
  },
  {
    id: 'functional',
    index: '04',
    title: 'FUNCTIONAL',
    category: 'Move / Mobility',
    description: 'Movement-focused training for everyday performance — kettlebells, sleds, and mobility that carries over.',
    image: img('photo-1517836357463-d25dfeac3438'),
  },
  {
    id: 'conditioning',
    index: '05',
    title: 'CONDITIONING',
    category: 'Engine / Endurance',
    description: 'Improve endurance and overall athletic capacity with intervals, circuits, and zone work scaled to your level.',
    image: img('photo-1552674605-db6ffd4facb5'),
  },
];
