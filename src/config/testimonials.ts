import yamilPhoto from "../assets/testimonial-1.webp";
import luisPhoto from "../assets/testimonial-2.webp";
import arielPhoto from "../assets/testimonial-3.webp";

/*
 * Testimonials shown on the landing page. Public copy is English only.
 *
 * RULES
 * - Only entries in VERIFIED_TESTIMONIALS are shown in production.
 * - Add an entry there ONLY with a real customer's quote, name and role that the customer
 *   has approved. Never invent names, job titles, employers, photos, links or outcomes.
 * - Add `avatar` only with an authentic, authorized photo. Without it the card shows no image.
 * - DEV_PREVIEW is for layout previews of unverified/fictional content. It exists only in
 *   development builds (the production build removes it) and is currently empty.
 */

export type Testimonial = {
  id: string;
  quote: string;
  /** Optional, exactly as approved by the customer. */
  name?: string;
  /** Role / headline shown under the name, exactly as approved. */
  role: string;
  /** Optional: authentic, authorized photo only. */
  avatar?: { src: string; alt: string };
};

/*
 * Supplied by the project owner in Spanish and translated to English for the site.
 * Photos are kept under ~4 KB so the build inlines them instead of emitting loose files.
 */
export const VERIFIED_TESTIMONIALS: Testimonial[] = [
  {
    id: "yamil-divo",
    quote:
      "I didn't know how to write my headline, my About section, or my professional achievements to stand out in the IT industry. With the LinkedIn optimization guide and the bundle's templates, I was able to structure my profile more clearly, highlight my technical skills, and present my experience in a much more professional way.",
    name: "Yamil Divo",
    role: "Senior Java Engineer & Technical Lead",
    avatar: { src: yamilPhoto, alt: "Portrait of Yamil Divo" },
  },
  {
    id: "luis-gato",
    quote:
      "I wasn't sure which keywords to use for the IT roles I was interested in, or which sections of my profile needed attention. The bank of 250+ keywords and the 47-point checklist gave me a concrete reference to review my profile, spot areas for improvement, and align it better with my professional goals.",
    name: "Luis Gato",
    role: "Audio & DSP Software Engineer",
    avatar: { src: luisPhoto, alt: "Portrait of Luis Gato" },
  },
  {
    id: "ariel-diaz",
    quote:
      "My search for opportunities was disorganized, and I often didn't know what my next step should be. The 30-day action plan helped me organize my priorities, while the recruiter outreach scripts gave me a structure to start professional conversations without having to write every message from scratch.",
    name: "Ariel Diaz",
    role: "Network & Security Engineer",
    avatar: { src: arielPhoto, alt: "Portrait of Ariel Diaz" },
  },
];

const DEV_PREVIEW: Testimonial[] = [];

// `import.meta.env.DEV` is replaced by `false` in production builds, so preview content is
// stripped from the shipped bundle rather than merely hidden.
export const PLACEHOLDER_TESTIMONIALS: Testimonial[] = import.meta.env.DEV ? DEV_PREVIEW : [];
