export interface NavItem {
	label: string;
	href: string;
	icon?: string;
}

export interface ExperienceItem {
	company: string;
	position: string;
	tagline?: string;
	duration: string;
	tech?: string;
	highlights: string[];
}

export interface EducationItem {
	degree: string;
	institution: string;
}

export interface TechStackItem {
	name: string;
	level: number;
}

export interface SkillGroup {
	category: string;
	skills: string[];
}

export interface ProjectItem {
	title: string;
	description: string;
	tags: string[];
	link: string;
}

export interface CvData {
	name: string;
	title: string;
	navItems: NavItem[];
	profile: string;
	experience: ExperienceItem[];
	education: EducationItem[];
	techStack: TechStackItem[];
	skillGroups: SkillGroup[];
	projects: ProjectItem[];
}
