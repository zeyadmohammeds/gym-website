import { img } from './programs';

export type TransformationMetric = {
  label: string;
  value: string;
};

export type TransformationStory = {
  id: string;
  index: string;
  name: string;
  program: string;
  duration: string;
  weeks: number;
  beforeImage: string;
  afterImage: string;
  quote: string;
  metrics: TransformationMetric[];
};

export const transformationStories: TransformationStory[] = [
  {
    id: 'amir',
    index: '01',
    name: 'AMIR',
    program: 'Strength',
    duration: '16 Weeks',
    weeks: 16,
    beforeImage: img('photo-1605296867304-46d5465a13f1'),
    afterImage: img('photo-1526506118085-60ce8714f8c5'),
    quote: 'I stopped chasing the scale and started chasing the bar. Consistency did the rest.',
    metrics: [
      { label: 'STRENGTH', value: '+18%' },
      { label: 'ENDURANCE', value: '+22%' },
      { label: 'MOBILITY', value: '+14%' },
      { label: 'CONSISTENCY', value: '16 WKS' },
    ],
  },
  {
    id: 'maya',
    index: '02',
    name: 'MAYA',
    program: 'Functional',
    duration: '20 Weeks',
    weeks: 20,
    beforeImage: img('photo-1532029837206-abbe2b7620e3'),
    afterImage: img('photo-1526506118085-60ce8714f8c5'),
    quote: 'Training became my anchor. I move better, breathe better, and I actually look forward to Mondays.',
    metrics: [
      { label: 'STRENGTH', value: '+15%' },
      { label: 'ENDURANCE', value: '+28%' },
      { label: 'MOBILITY', value: '+31%' },
      { label: 'CONSISTENCY', value: '20 WKS' },
    ],
  },
  {
    id: 'omar',
    index: '03',
    name: 'OMAR',
    program: 'Conditioning',
    duration: '12 Weeks',
    weeks: 12,
    beforeImage: img('photo-1571902943202-507ec2618e8f'),
    afterImage: img('photo-1583864697784-a0efc8379f70'),
    quote: 'Twelve weeks of showing up. Sprint work, lifting, sleep. My energy is unrecognizable.',
    metrics: [
      { label: 'STRENGTH', value: '+21%' },
      { label: 'ENDURANCE', value: '+19%' },
      { label: 'MOBILITY', value: '+12%' },
      { label: 'CONSISTENCY', value: '12 WKS' },
    ],
  },
  {
    id: 'lina',
    index: '04',
    name: 'LINA',
    program: 'Personal Training',
    duration: '24 Weeks',
    weeks: 24,
    beforeImage: img('photo-1571902943202-507ec2618e8f'),
    afterImage: img('photo-1583864697784-a0efc8379f70'),
    quote: 'My coach met me exactly where I was. Every session built confidence, not just capacity.',
    metrics: [
      { label: 'STRENGTH', value: '+17%' },
      { label: 'ENDURANCE', value: '+24%' },
      { label: 'MOBILITY', value: '+35%' },
      { label: 'CONSISTENCY', value: '24 WKS' },
    ],
  },
  {
    id: 'adam',
    index: '05',
    name: 'ADAM',
    program: 'Boxing',
    duration: '18 Weeks',
    weeks: 18,
    beforeImage: img('photo-1532029837206-abbe2b7620e3'),
    afterImage: img('photo-1552674605-db6ffd4facb5'),
    quote: 'From winded on the stairs to leading the Saturday engine club. Same person, stronger habits.',
    metrics: [
      { label: 'STRENGTH', value: '+12%' },
      { label: 'ENDURANCE', value: '+34%' },
      { label: 'MOBILITY', value: '+16%' },
      { label: 'CONSISTENCY', value: '18 WKS' },
    ],
  },
];
