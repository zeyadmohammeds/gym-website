export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  program: string;
  duration: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 't-amir',
    quote: 'I finally found a training environment that made consistency feel achievable. My coach adjusted everything around my schedule.',
    name: 'AMIR',
    program: 'Strength',
    duration: '16 WEEKS',
  },
  {
    id: 't-maya',
    quote: 'I move better at thirty-four than I did at twenty-four. The mobility work changed how I train — and how I live.',
    name: 'MAYA',
    program: 'Functional',
    duration: '20 WEEKS',
  },
  {
    id: 't-omar',
    quote: 'The engine club humbled me in week one. By week twelve I was leading the finishers. Best decision I made this year.',
    name: 'OMAR',
    program: 'Conditioning',
    duration: '12 WEEKS',
  },
  {
    id: 't-lina',
    quote: 'One-on-one coaching met me exactly where I was. Every session built confidence, not just capacity.',
    name: 'LINA',
    program: 'Personal Training',
    duration: '24 WEEKS',
  },
  {
    id: 't-adam',
    quote: 'I came for fitness and stayed for the craft. Footwork, pads, conditioning — I have never been sharper.',
    name: 'ADAM',
    program: 'Boxing',
    duration: '18 WEEKS',
  },
  {
    id: 't-sara',
    quote: 'As a beginner I expected to feel invisible. Instead I got a plan, a coach, and a community that knows my name.',
    name: 'SARA',
    program: 'Strength',
    duration: '10 WEEKS',
  },
];
