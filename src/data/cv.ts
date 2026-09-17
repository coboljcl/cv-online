import type { CvData, SocialLink } from "../types/cv";

export const socials: SocialLink[] = [
	{ label: "LinkedIn", href: "https://www.linkedin.com/in/allan-z%C3%BA%C3%B1iga-359957181", icon: "linkedin" },
	{ label: "GitHub", href: "https://github.com/coboljcl", icon: "github" },
];

export const cv: CvData = {
	name: "Allan Zúñiga",
	title: "Programador COBOL",
	navItems: [
		{ label: "Inicio", href: "#inicio", icon: "inicio" },
		{ label: "Sobre mí", href: "#perfil", icon: "perfil" },
		{ label: "Experiencia", href: "#experiencia", icon: "experiencia" },
		{ label: "Proyectos", href: "#proyectos", icon: "tecnologias" },
		{ label: "Stack técnico", href: "#tecnologias", icon: "tecnologias" },
		{ label: "Contacto", href: "#contacto", icon: "contacto" },
	],
	profile: {
		eyebrow: "Desarrollo Mainframe · Sector bancario",
		headline: "Programador COBOL orientado a sistemas bancarios",
		summary: [
			"Más de 3 años de experiencia en entornos Mainframe para el sector bancario, especializado en el desarrollo y mantenimiento de aplicaciones críticas.",
			"He participado en la implementación de más de 100 programas COBOL —batch y CICS online—, principalmente en inversión, carteras y fondos, trabajando con DB2, JCL y transiciones a producción.",
			"Mi enfoque combina el cumplimiento de especificaciones técnicas, pruebas unitarias y funcionales antes de cada despliegue, y documentación clara para facilitar el mantenimiento posterior.",
		],
		clients: [
			{
				name: "Bankinter",
				intermediaries: ["Sopra Steria", "Cypher"],
				description: "Desarrollo de programas COBOL batch y transacciones CICS para inversión, carteras y fondos.",
			},
			{
				name: "MoraBanc",
				intermediaries: ["LUCATIC"],
				description: "Mantenimiento evolutivo y correctivo de aplicaciones COBOL con DB2, JCL y CICS.",
			},
			{
				name: "Deutsche Bank",
				intermediaries: ["COMPUTER SPACE"],
				description: "Soporte y evolución de aplicaciones COBOL, con JCL y validación funcional previa al despliegue.",
			},
		],
		metrics: [
			{
				value: "3+",
				label: "años de experiencia",
				context: "Experiencia",
				description: "Desarrollo y mantenimiento en sistemas bancarios críticos.",
				icon: "calendar",
			},
			{
				value: "100+",
				label: "programas COBOL",
				context: "Batch + CICS",
				description: "Implementados para inversión, carteras y fondos.",
				icon: "code",
			},
			{
				value: "3",
				label: "entidades bancarias",
				context: "Clientes",
				description: "Bankinter, MoraBanc y Deutsche Bank.",
				icon: "bank",
			},
			{
				value: "99.9%",
				label: "fiabilidad operativa",
				context: "SLA & QA",
				description: "Pruebas unitarias exhaustivas antes de PRE/PROD.",
				icon: "mainframe",
			},
		],
		qualityCycle: [
			{ label: "Especificaciones técnicas", description: "Implementación alineada con los requisitos definidos." },
			{ label: "Coordinación con analistas", description: "Ajuste del flujo técnico a la lógica de negocio." },
			{ label: "Implementación COBOL y JCL", description: "Programas, rutinas y procesos batch en mainframe." },
			{ label: "Preparación de datos DB2", description: "Creación y actualización de registros en entorno DEV." },
			{ label: "Pruebas unitarias y funcionales", description: "Validación antes del pase a entornos superiores." },
			{ label: "Documentación y trazabilidad", description: "Registro técnico de los cambios para su mantenimiento." },
		],
	},
	experience: [
		{
			company: "SOPRA STERIA (CLIENTE: BANKINTER)",
			position: "Programador COBOL Junior",
			tagline: "Mantenimiento y evolución de sistemas bancarios",
			duration: "6 meses",
			tech: "COBOL, DB2, JCL, CICS, IBM Mainframe/ISPF, VS Code, Git",
			highlights: [
				"Revisé requisitos y especificaciones técnicas en coordinación con analistas para alinear las soluciones con la lógica de negocio.",
				"Desarrollé y mantuve programas COBOL batch y transacciones CICS online, adaptando COPY y COPYBOOK según las necesidades de cada módulo.",
				"Trabajé con DB2 mediante sentencias SQL y manejo de cursores para consultar y actualizar datos de aplicación.",
				"Elaboré y ejecuté jobs JCL, incluyendo procesos con SORT, IDCAMS y utilidades de ficheros para los flujos batch.",
				"Preparé datos de prueba y realicé pruebas unitarias exhaustivas antes del pase a PRE.",
				"Utilicé VS Code y Git como apoyo para el análisis de fuentes y la validación de sintaxis.",
			],
		},
		{
			company: "CCYPHER (CLIENTE: BANKINTER)",
			position: "Programador COBOL Junior",
			tagline: "Área de Inversión · Carteras y Fondos",
			duration: "9 meses",
			tech: "COBOL, DB2, JCL, CICS, IBM Mainframe, UltraEdit, REMEDY, JIRA, VisualStudio",
			highlights: [
				"Participé en la implementación de más de 100 programas COBOL batch y transacciones CICS online para el área de inversión, carteras y fondos.",
				"Codifiqué y ajusté rutinas, COPYS y sentencias SQL (SELECT, INSERT, UPDATE) para alinear el flujo de los programas con la lógica de negocio.",
				"Desarrollé y monitoricé procedimientos JCL para la ejecución de procesos batch en mainframe.",
				"Ejecuté pruebas unitarias y funcionales de cada elemento modificado antes de su pase a PRE, minimizando incidencias en entornos superiores.",
				"Utilicé el depurador de Visual Studio Code para localizar y corregir errores en programas.",
				"Elaboré documentación técnica detallada de las modificaciones para facilitar el mantenimiento.",
			],
		},
		{
			company: "LUCATIC (CLIENTE: MORABANC)",
			position: "Programador COBOL Junior",
			tagline: "Mantenimiento evolutivo y correctivo",
			duration: "7 meses",
			tech: "COBOL, DB2, JCL, CICS, IBM Mainframe, UltraEdit, REMEDY, JIRA, VisualStudio",
			highlights: [
				"Implementé mejoras evolutivas y correcciones sobre programas COBOL del entorno bancario, siguiendo especificaciones técnicas.",
				"Trabajé con tablas DB2 en entorno DEV, creando y actualizando registros para garantizar la coherencia del ciclo de ejecución.",
				"Analicé programas modificados y ejecuté pruebas unitarias para asegurar la integridad de los datos.",
				"Apliqué y reutilicé COPYS para mantener la consistencia de las estructuras de datos entre programas de un mismo módulo.",
				"Monitoricé procesos batch y documenté los cambios realizados.",
			],
		},
		{
			company: "COMPUTER SPACE (CLIENTE: DEUTSCHE BANK)",
			position: "Programador COBOL Junior",
			tagline: "Soporte y evolución de sistemas",
			duration: "10 meses",
			tech: "COBOL, DB2, JCL, CICS, IBM Mainframe, UltraEdit, REMEDY, JIRA, VisualStudio",
			highlights: [
				"Di soporte y evolución a aplicaciones COBOL del entorno bancario, implementando modificaciones según las necesidades del cliente.",
				"Codifiqué programas, rutinas y JCL, y ejecuté pruebas funcionales antes del despliegue.",
				"Trabajé con estructuras COBOL (Occurs, Performs, cursores OPEN/FETCH/CLOSE) y lectura de ficheros secuenciales.",
				"Ejecuté JCLs de descarga de tablas, sorts y unión de ficheros para los procesos batch.",
				"Actualicé registros DB2 y validé el comportamiento de los programas frente a los datos de prueba.",
			],
		},
	],
	education: [
		{
			degree: "FP2 Grado Superior Desarrollo Aplicaciones Web",
			institution: "Instituto e Innovación Profesional",
		},
		{
			degree: "FP1 Grado Medio Sistemas Informáticos y Redes",
			institution: "IES Liceo Sorolla B",
		},
	],
	techStack: [
		{ name: "COBOL", level: 85 },
		{ name: "DB2", level: 80 },
		{ name: "JCL", level: 78 },
		{ name: "CICS", level: 75 },
		{ name: "SQL", level: 70 },
		{ name: "Mainframe", level: 80 },
	],
	skillGroups: [
		{
			category: "COBOL",
			skills: [
				"Cursores (Open, Fetch, Close)",
				"Performs",
				"Occurs",
				"Llamadas a módulos",
				"COPYS",
				"Ficheros secuenciales",
				"Módulos/rutinas",
			],
		},
		{
			category: "DB2",
			skills: ["SQL (SELECT, INSERT, UPDATE)", "Cursores", "Manipulación de tablas", "Bases de datos en DEV"],
		},
		{
			category: "JCL",
			skills: ["Procesos BATCH", "Descarga de tablas", "Sorts", "Unión de ficheros", "Monitorización de jobs"],
		},
		{
			category: "CICS",
			skills: ["Transacciones online", "Programas online"],
		},
		{
			category: "Mainframe",
			skills: ["IBM Mainframe", "ISPF", "HOST"],
		},
		{
			category: "Herramientas",
			skills: ["VisualStudio", "UltraEdit", "JIRA", "REMEDY"],
		},
		{
			category: "Web & Desarrollo",
			skills: [
				"HTML",
				"CSS",
				"JavaScript",
				"Vibe coding con IA",
				"Agentes IA",
				"Subagentes",
				"LLMs",
				"Skills",
				"Agentes de consola",
				"Deploy online",
				"Arquitectura",
				"Seguridad",
			],
		},
		{
			category: "Idiomas",
			skills: ["Inglés B2"],
		},
	],
	projects: [
		{
			title: "CV Online — Portafolio profesional",
			description:
				"Sitio web personal desarrollado con Astro y Tailwind CSS, usando componentes Astro, TypeScript, estilos responsive y despliegue estático para presentar el perfil profesional y la experiencia técnica.",
			tags: ["Astro", "Tailwind", "Vibe coding", "Agentes IA", "Git", "Deploy"],
			link: "https://github.com/coboljcl",
		},
	],
};

export const { name, title, navItems, profile, experience, education, techStack, skillGroups, projects } = cv;
