/**
 * University Logos Data
 * 
 * IMPORTANT: Use logos of universities where you've successfully placed students.
 * Do NOT claim partnerships if you don't have them.
 * 
 * These are placeholder paths - replace with actual university logo files.
 * 
 * Logo Guidelines:
 * - Format: SVG or PNG (transparent background)
 * - Size: ~200-300px width, maintaining aspect ratio
 * - Style: Official university wordmark or logo
 * - Grayscale: Will be converted via CSS filter
 * - Location: public/universities/
 * 
 * Legal Note: University logos are trademarks. Use only to indicate where your
 * students have been accepted, not to imply official partnerships.
 */

export interface University {
  id: string;
  name: string;
  logo: string;
  alt: string;
  width: number;
  height: number;
}

// Top-tier universities where StudyFrontier students have been accepted
// These are placeholders - replace with your actual placements
export const universities: University[] = [
  {
    id: 'berkeley',
    name: 'UC Berkeley',
    logo: '/universities/uc-berkeley.svg',
    alt: 'University of California, Berkeley logo',
    width: 200,
    height: 60,
  },
  {
    id: 'boston',
    name: 'Boston University',
    logo: '/universities/boston-university.svg',
    alt: 'Boston University logo',
    width: 200,
    height: 60,
  },
  {
    id: 'hopkins',
    name: 'Johns Hopkins',
    logo: '/universities/johns-hopkins.svg',
    alt: 'Johns Hopkins University logo',
    width: 200,
    height: 60,
  },
  {
    id: 'michigan',
    name: 'University of Michigan',
    logo: '/universities/university-michigan.svg',
    alt: 'University of Michigan logo',
    width: 200,
    height: 60,
  },
  {
    id: 'nyu',
    name: 'NYU',
    logo: '/universities/nyu.svg',
    alt: 'New York University logo',
    width: 200,
    height: 60,
  },
  {
    id: 'purdue',
    name: 'Purdue University',
    logo: '/universities/purdue.svg',
    alt: 'Purdue University logo',
    width: 200,
    height: 60,
  },
  {
    id: 'northeastern',
    name: 'Northeastern',
    logo: '/universities/northeastern.svg',
    alt: 'Northeastern University logo',
    width: 200,
    height: 60,
  },
  {
    id: 'usc',
    name: 'USC',
    logo: '/universities/usc.svg',
    alt: 'University of Southern California logo',
    width: 200,
    height: 60,
  },
];

// Note: You'll need to add actual logo files to public/universities/
// Download official logos from university brand guidelines pages
// Or use placeholder text-based logos initially
