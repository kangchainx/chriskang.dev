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
