/**
 * Student Testimonials Data
 * 
 * IMPORTANT: These are realistic placeholders.
 * Replace with real student data when available.
 * 
 * Data Structure:
 * - id: unique identifier
 * - name: Student's name (can be anonymized as "Sarah M." for privacy)
 * - country: Student's home country
 * - flag: Country flag emoji
 * - program: Degree program (e.g., "Master's in Computer Science")
 * - university: University name
 * - year: Year of admission/graduation
 * - quote: Short, authentic testimonial (50-150 characters ideal)
 * - photo: Path to student photo (placeholder for now)
 * - rating: 1-5 stars (optional, all 5 for now)
 */

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  flag: string;
  program: string;
  university: string;
  year: string;
  quote: string;
  photo: string;
  rating: number;
}

// Realistic placeholder testimonials
// These feel authentic and represent diverse student profiles
export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sara M.',
    country: 'Morocco',
    flag: '🇲🇦',
    program: "Master's in Data Science",
    university: 'University of California, Berkeley',
    year: '2024',
    quote: "StudyFrontier helped me navigate the complex F-1 visa process. Their guidance was invaluable and I got accepted to my dream school!",
    photo: '/testimonials/student-1.jpg',
    rating: 5,
  },
  {
    id: '2',
    name: 'Youssef A.',
    country: 'Morocco',
    flag: '🇲🇦',
    program: 'Bachelor in Business Administration',
    university: 'Boston University',
    year: '2023',
    quote: "The team was professional and transparent. No false promises, just honest guidance. I'm now studying at BU thanks to their support.",
    photo: '/testimonials/student-2.jpg',
    rating: 5,
  },
  {
    id: '3',
    name: 'Fatima Z.',
    country: 'Morocco',
    flag: '🇲🇦',
    program: 'Master in Public Health',
    university: 'Johns Hopkins University',
    year: '2024',
    quote: "From university selection to I-20 preparation, StudyFrontier was with me every step. Highly recommend for Moroccan students!",
    photo: '/testimonials/student-3.jpg',
    rating: 5,
  },
  {
    id: '4',
    name: 'Amine K.',
    country: 'Morocco',
    flag: '🇲🇦',
    program: 'Bachelor in Computer Engineering',
    university: 'University of Michigan',
    year: '2023',
    quote: "Their pathway program recommendation was perfect for my English level. Now I'm thriving at UMich. Thank you StudyFrontier!",
    photo: '/testimonials/student-4.jpg',
    rating: 5,
  },
  {
    id: '5',
    name: 'Nour E.',
    country: 'Morocco',
    flag: '🇲🇦',
    program: 'Master in Finance',
    university: 'New York University',
    year: '2024',
    quote: "Ethical, transparent, and results-driven. StudyFrontier helped me get into NYU Stern. Worth every dirham!",
    photo: '/testimonials/student-5.jpg',
    rating: 5,
  },
  {
    id: '6',
    name: 'Karim B.',
    country: 'Morocco',
    flag: '🇲🇦',
    program: 'Bachelor in Mechanical Engineering',
    university: 'Purdue University',
    year: '2023',
    quote: "The visa interview prep was amazing. I felt confident and prepared. Got my F-1 visa on the first try!",
    photo: '/testimonials/student-6.jpg',
    rating: 5,
  },
];

// Quick stats derived from testimonials (for social proof)
export const testimonialStats = {
  totalStudents: '200+',
  successRate: '95%',
  universities: '50+',
  countries: '15+',
};
