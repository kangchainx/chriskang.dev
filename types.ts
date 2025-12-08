export interface Project {
  title: string;
  description: string;
  points?: string[];
  techStack?: string;
  links: {
    label: string;
    url: string;
    type?: 'primary' | 'secondary' | 'outline';
  }[];
  isFeatured?: boolean;
  status?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '#' }, // Placeholder
  { label: 'Contact', href: '/about#contact' },
];