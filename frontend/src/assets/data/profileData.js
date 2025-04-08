import ProfilePicture from "../../assets/images/profile/profile-picture.jpg";
import ChatAlong from "../../assets/images/project/chatalong.jpeg";
import CommunionHub from "../../assets/images/project/communionhub.jpeg";
import LinkManager from "../../assets/images/project/linkmanager.jpeg";
import Notify from "../../assets/images/project/notify.jpeg";
import IBES from "../../assets/images/project/ibes.jpeg";
import WashAtDoor from "../../assets/images/project/wash@door.jpeg";
import KodraTheme from "../../assets/images/project/kodra-theme.jpeg";
import InvoiceGenerator from "../../assets/images/project/ibes-invoice-generator.jpeg";

export const profileData = {
	name: "Abhinav Choubey",
	title: "Frontend | Backend | Full Stack Developer",
	location: "Agra, Uttar Pradesh, India",
	shortBio:
		"Passionate about building high-performance, scalable, and user-friendly web applications. Focused on creating seamless digital experiences with optimized speed, accessibility, and efficiency. Skilled in crafting intuitive UIs, developing robust backend solutions, and ensuring smooth API integrations.",
	fullBio: `I am a Full Stack Developer driven by a passion for building modern, efficient, and scalable web applications. My focus is on delivering seamless user experiences through clean, optimized, and accessible code. I enjoy solving complex problems, enhancing application performance, and ensuring smooth integration between frontend and backend technologies.
\n
I thrive on creating responsive, visually appealing UIs while ensuring robust backend architectures that support real-time functionality and secure data management. My expertise extends to state management, API handling, animations creation, and PWA development, allowing me to build complete, end-to-end solutions tailored to user needs.`,
	profilePicture: ProfilePicture,
	skills: [
		{ name: "Next.Js", level: 90, category: "fullstack" },
		{ name: "React.Js", level: 85, category: "frontend" },
		{ name: "TypeScript", level: 85, category: "frontend" },
		{ name: "Electron.Js", level: 85, category: "frontend" },
		{ name: "React Native", level: 85, category: "frontend" },
		{ name: "JavaScript", level: 90, category: "frontend" },
		{ name: "Framer Motion", level: 90, category: "frontend" },
		{ name: "GSAP", level: 90, category: "frontend" },
		{ name: "Node.Js", level: 80, category: "backend" },
		{ name: "HTML/CSS", level: 90, category: "frontend" },
		{ name: "MongoDB", level: 75, category: "backend" },
		{ name: "Prisma ORM", level: 75, category: "backend" },
		{ name: "MySQL", level: 75, category: "backend" },
		{ name: "Material UI", level: 85, category: "frontend" },
		{ name: "Express.js", level: 80, category: "backend" },
		{ name: "Git", level: 85, category: "fullstack" },
		{ name: "Socket.io", level: 85, category: "fullstack" },
		{ name: "Paper UI", level: 85, category: "frontend" },
		{ name: "Chakra UI", level: 85, category: "frontend" },
		{ name: "Shad CN UI", level: 85, category: "frontend" },
		{ name: "Tailwind CSS", level: 85, category: "frontend" },
		{ name: "Postman", level: 85, category: "backend" },
		{ name: "SEO", level: 85, category: "fullstack" },
		{ name: "Vercel", level: 85, category: "fullstack" },
		{ name: "Render", level: 85, category: "fullstack" },
		{ name: "Aiven", level: 85, category: "fullstack" },
		{ name: "Flask", level: 85, category: "backend" },
		{ name: "Redux", level: 85, category: "frontend" },
	],
	education: [
		{
			degree: "Bachelor of Computer Applications",
			institution: "Indira Gandhi National Open University",
			year: "2022 - 2025",
			description:
				"Specialized in Computer Applications with focus on web technologies, networking models, topologies, algorithims, and software development.",
		},
		{
			degree: "12th Grade, CBSE",
			institution: "Holy Public School",
			year: "2018 - 2019",
			description:
				"Completed my 12th grade with subjects PCMCE (Physics, Chemistry, Mathematics, Computer, and English) and awarded as Student of the month.",
		},
		{
			degree: "10th Grade, CBSE",
			institution: "Holy Public Junior College",
			year: "2016 - 2017",
			description:
				"Completed 10th grade (CBSE) with core subjects including Physics,Chemistry, Mathematics, Hindi, Computer, Social Studies and English.",
		},
	],
	experience: [
		{
			id: 1,
			title: "Full Stack Developer Intern",
			company: "United Mentor Private Limited",
			period: "2025 - Present",
			description:
				"Full Stack Developer Intern at United Mentor Private Limited. Developing and maintaining full-stack web applications using React, Node.js, and MongoDB. Collaborated with designers and product managers to deliver high-quality products.",
		},
		{
			id: 2,
			title: "Technical Support Engineer",
			company: "International Business Expert Solutions",
			period: "2023 - 2025",
			description:
				"Technical Support Engineer at International Business Expert Solutions. Provided technical support to clients and helped them with their queries and issues.",
		},
		{
			id: 3,
			title: "Wordpress Developer Intern",
			company: "Edukul",
			period: "2023-2023",
			description:
				"Wordpress Developer Intern at Edukul. Developed and maintained wordpress websites and plugins. Created several pages, custom animations and footers.",
		},
	],
	socialLinks: {
		github: "https://github.com/abhinavchoubey2000",
		linkedin: "https://www.linkedin.com/in/abhinavchoubey2002/",
		instagram: "https://www.instagram.com/abhi_n_a_v_29/",
		email: "rockingabhinav2000@gmail.com",
	},
	projects: [
		{
			id: 1,
			title: "ChatAlong - A Social Media Platform",
			description:
				"A full-stack social media platform where users can post, like/unlike, comment, follow/unfollow, chat in real-time, and connect seamlessly with realtime notifications. Built with a modern tech stack and features like authentication, responsive design, real-time messaging using Socket.io, and PWA (Progressive Web App) which means one can use it as desktop application, android application or ios application.",
			image: ChatAlong,
			technologies: [
				"Next.Js",
				"Typescript",
				"Node.Js",
				"Express.Js",
				"Socket.io",
				"Mongo DB",
				"Multer",
				"Cloudinary",
				"Material UI",
				"Redux and RTK Query",
				"Dotenv",
				"cors",
			],
			githubLink: "https://github.com/abhinavchoubey2000/chat-along",
			demoLink: "https://chat-along.vercel.app/",
			isLive: true,
		},
		{
			id: 2,
			title: "Communion Hub - A event management platform",
			description:
				"A responsive events manangement platfrom which helps to add, list and organize the events and allows users to add and categorize events while providing seamless filtering and pagination for better usability.",
			image: CommunionHub,
			technologies: [
				"React.Js",
				"Redux",
				"Shad CN UI",
				"GSAP",
				"Tailwind CSS",
				"Lucide React",
			],
			githubLink: "https://github.com/abhinavchoubey2000/communion-hub",
			demoLink: "https://communion-hub-abhinav.vercel.app/",
			isLive: true,
		},
		{
			id: 3,
			title: "Link Manger - Personal Link Managing Platform",
			description:
				"Link Manager is a modern web application designed to help you manage your links effectively. With features like adding, updating, deleting, and differentiating links using colors, this app ensures an intuitive and personal link management experience. The app is account-based, keeping your links private and secure.",
			image: LinkManager,
			technologies: [
				"Next.Js",
				"Typescript",
				"Shad CN UI",
				"GSAP",
				"Prisma ORM",
				"MySQL",
				"Aiven",
				"Lucide React",
				"PWA",
				"Redux",
				"Dotenv",
			],
			githubLink:
				"https://github.com/abhinavchoubey2000/links-manager-account-based",
			demoLink: "https://links-manager-v20.vercel.app/",
			isLive: true,
		},
		{
			id: 4,
			title: "Notify - A notes taking companion",
			description:
				"Notify is a sleek and efficient desktop note-taking app built with Electron.js and React.js, designed to simplify your daily writing and organizing tasks. It features a modern UI powered by Chakra UI and smooth animations using Framer Motion for an enhanced user experience.Data is stored securely using MongoDB, and real-time syncing is handled seamlessly via React Query and Axios.Whether you're jotting down ideas, planning tasks, or capturing quick thoughts—Notify is your reliable companion.",
			image: Notify,
			technologies: [
				"Electron.Js",
				"React.Js",
				"Chakra UI",
				"Framer Motion",
				"Mongo DB",
				"React Query",
				"Axios",
			],
			githubLink:
				"https://github.com/abhinavchoubey2000/notify-note-taking-app",
			demoLink: "",
			isLive: false,
		},
		{
			id: 5,
			title: "IBES - International Business Expert Solutions",
			description:
				"IBES is a professional certification consultancy platform designed to help businesses navigate global compliance standards with ease. Developed using React.js, it features a dynamic and responsive interface styled with Tailwind CSS, and enhanced with smooth animations via Framer Motion.State management is handled using Redux, while Axios powers API integration. React Spinners and React Toastify ensure a polished user experience with elegant loaders and toast notifications. The site also incorporates MUI Icons for a clean, modern feel.",
			image: IBES,
			technologies: [
				"React.Js",
				"Redux",
				"Tailwind CSS",
				"Framer Motion",
				"Axios",
				"React Spinners",
				"React Toastify",
				"MUI Icons",
			],
			githubLink: "https://github.com/abhinavchoubey2000/ibes",
			demoLink: "https://www.ibesgroup.com/",
			isLive: true,
		},
		{
			id: 6,
			title: "Wash@door - A car washing service platform.",
			description:
				"Wash@door is a modern web platform that connects users with convenient car cleaning services right at their doorstep. Built with React.js and styled using Chakra UI, the app offers a clean and responsive user experience enhanced by smooth Framer Motion animations.It features efficient state management via Redux, seamless API handling with Axios, and a polished UI using React Icons. Wash@door simplifies booking and managing car wash services, making the entire process hassle-free and efficient.",
			image: WashAtDoor,
			technologies: [
				"React.Js",
				"Redux",
				"Chakra UI",
				"Framer Motion",
				"Axios",
				"React Icons",
			],
			githubLink: "https://github.com/abhinavchoubey2000/wash-at-the-door",
			demoLink: "https://wash-at-the-door.vercel.app/",
			isLive: true,
		},
		{
			id: 7,
			title: "Kodra - Theme",
			description:
				"Kodra is a clean, minimal, and fully responsive theme template built using pure HTML, CSS, and JavaScript. Designed for personal portfolios, landing pages, or small business websites, it focuses on elegant layout and user-friendly design.Perfect as a lightweight starting point for developers and designers who want a customizable and fast-loading static website.",
			image: KodraTheme,
			technologies: ["HTML", "CSS", "Javascript"],
			githubLink: "https://github.com/abhinavchoubey2000/kodra-theme",
			demoLink: "",
			isLive: false,
		},
		{
			id: 8,
			title: "IBES - Invoice Generator",
			description:
				"The IBES Invoice Generator is a desktop application crafted with Electron.js and React.js, built to simplify the process of generating professional invoices for businesses and consultants. With a sleek and responsive UI styled using Tailwind CSS, the app ensures an intuitive user experience.It leverages Redux for efficient state management and uses React Icons for a polished visual design. Tailored specifically for the needs of IBES (International Business Expert Solutions), this tool allows users to create, preview, and manage invoices seamlessly—all from a lightweight desktop app.",
			image: InvoiceGenerator,
			technologies: [
				"Electron.Js",
				"React.Js",
				"Tailwind CSS, Redux, React Icons",
			],
			githubLink:
				"https://github.com/abhinavchoubey2000/ibes-invoice-generator/tree/master/Original",
			demoLink: "",
			isLive: false,
		},
	],
};
