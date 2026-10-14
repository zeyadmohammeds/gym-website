import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import ContactForm from './ContactForm';
import { Eyebrow, Reveal } from './Reveal';
import { Container } from './ui';
import { contactInfo } from '@/data/navigation';

const info = [
  { icon: Mail, label: 'EMAIL', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
  { icon: Phone, label: 'PHONE', value: contactInfo.phone, href: `tel:${contactInfo.phone.replace(/\s/g, '')}` },
  { icon: MapPin, label: 'VISIT', value: contactInfo.address },
  { icon: Clock, label: 'HOURS', value: contactInfo.hours },
];

export default function Contact() {
  return (
    <section id="contact" aria-label="Contact" className="border-t border-line bg-surface py-20 sm:py-24 md:py-36">
      <Container>
        <Eyebrow>09 / CONTACT</Eyebrow>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <h2 className="font-display text-[clamp(2.75rem,9vw,7rem)] leading-[0.9] text-paper">
                LET&apos;S GET
                <br />
                <span className="text-volt">STARTED.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-muted sm:text-base">
                Tell us a little about yourself and we&apos;ll get back to you.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <ul className="mt-8 divide-y divide-line border-y border-line">
                {info.map((item) => (
                  <li key={item.label} className="flex items-center gap-4 py-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center border border-line text-volt">
                      <item.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-[10px] font-extrabold tracking-[0.28em] text-muted">{item.label}</span>
                      {item.href ? (
                        <a href={item.href} className="mt-0.5 block text-[15px] font-bold text-paper hover:text-volt">
                          {item.value}
                        </a>
                      ) : (
                        <span className="mt-0.5 block text-[15px] font-bold text-paper">{item.value}</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
