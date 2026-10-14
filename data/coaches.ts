import { img } from './programs';

export type Coach = {
  name: string;
  specialty: string;
  experience: string;
  bio: string;
  image: string;
};

export const coaches: Coach[] = [
  {
    name: 'ALEX MORGAN',
    specialty: 'Strength Coach',
    experience: '10 YRS',
    bio: 'Powerlifting background. Builds patient, technical lifters — from first barbell to competition platform.',
    image: img('photo-1567013127542-490d757e51fc', 800),
  },
  {
    name: 'MAYA RAHMAN',
    specialty: 'Functional Training',
    experience: '8 YRS',
    bio: 'Movement specialist. Kettlebells, mobility, and athletic patterns that carry into everyday life.',
    image: img('photo-1571019614242-c5c5dee9f50b', 800),
  },
  {
    name: 'OMAR HASSAN',
    specialty: 'Boxing & Conditioning',
    experience: '12 YRS',
    bio: 'Former amateur boxer. Footwork, pads, and engine work — sharp technique, honest conditioning.',
    image: img('photo-1548690312-e3b507d8c110', 800),
  },
  {
    name: 'LINA KAREEM',
    specialty: 'Performance Coach',
    experience: '7 YRS',
    bio: '1-on-1 specialist. Individual assessment, custom programming, and coaching that meets you where you are.',
    image: img('photo-1534438327276-14e5300c3a48', 800),
  },
  {
    name: 'KARIM H.',
    specialty: 'Endurance / Engine',
    experience: '9 YRS',
    bio: 'Engine-club lead. Intervals, zones, and pacing strategy for people who want lungs that never quit.',
    image: img('photo-1571019614242-c5c5dee9f50b', 800),
  },
];
