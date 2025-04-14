import React, { useRef, useState } from "react";
import {
	Box,
	Container,
	Typography,
	Grid,
	Card,
	CardContent,
	Button,
	Chip,
	TextField,
	InputAdornment,
	Tabs,
	Tab,
	CardActionArea,
	CardActions,
	Divider,
	IconButton,
	Dialog,
	DialogContent,
	DialogTitle,
	DialogActions,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CloseIcon from "@mui/icons-material/Close";
import { profileData } from "../../assets/data/profileData";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Projects = () => {
	document.title = "Projects | Abhinav Choubey";

	const headingRef = useRef(null);
	const timerRef = useRef(null);
	const descriptionRef = useRef(null);
	const projectsRef = useRef([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [searchTermInput, setSearchTermInput] = useState("");
	const [filter, setFilter] = useState("all");
	const [selectedProject, setSelectedProject] = useState(null);
	const [openDialog, setOpenDialog] = useState(false);

	const handleFilterChange = (event, newValue) => {
		setFilter(newValue);
	};

	const handleProjectClick = (project) => {
		setSelectedProject(project);
		setOpenDialog(true);
	};

	const handleCloseDialog = () => {
		setOpenDialog(false);
	};

	// I have used debouncing for better optimization
	const handleDebounceSearch = (() => {
		return (event) => {
			setSearchTermInput(event.target.value);
			if (timerRef.current) clearTimeout(timerRef.current);
			timerRef.current = setTimeout(() => {
				setSearchTerm(event.target.value);
			},1200);
		};
	})();

	const filteredProjects = profileData.projects.filter((project) => {
		// Filter by search term
		const matchesSearch =
			project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			project.technologies.some((tech) =>
				tech.toLowerCase().includes(searchTerm.toLowerCase())
			);

		// Filter by tab
		const matchesFilter =
			filter === "all" ||
			(filter === "live" && project.isLive) ||
			(filter === "github" && !project.isLive);

		return matchesSearch && matchesFilter;
	});

	useGSAP(() => {
		const tl = gsap.timeline();
		const tl2 = gsap.timeline();
		tl.from([headingRef.current, descriptionRef.current], {
			opacity: 0,
			y: 100,
			stagger: 0.3,
			duration: 1,
		});

		tl2.from(projectsRef.current, {
			opacity: 0,
			stagger: 0.3,
			duration: 2,
		});
	});

	return (
		<Container maxWidth="lg">
			<Box sx={{ mb: 8 }}>
				<Typography
					component="h1"
					variant="h2"
					color="text.primary"
					gutterBottom
					fontWeight="bold"
					align="center"
					sx={{ mb: 2 }}
					ref={headingRef}
				>
					My Projects
				</Typography>
				<Typography
					ref={descriptionRef}
					variant="h6"
					align="center"
					color="text.secondary"
					paragraph
					sx={{ mb: 6, maxWidth: "800px", mx: "auto" }}
				>
					Here you'll find a collection of my work, from web applications to
					backend systems. Each project showcases different skills and
					technologies I've learned.
				</Typography>

				{/* Search and Filter */}
				<Box sx={{ mb: 6, width: "100%" }}>
					<Grid container spacing={3} width={"100%"} alignItems="center">
						<Grid item xs={12} md={6} width={"100%"}>
							<TextField
								fullWidth
								placeholder="Search projects by name, description, or technology..."
								variant="outlined"
								value={searchTermInput}
								onChange={handleDebounceSearch}
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<SearchIcon color="action" />
										</InputAdornment>
									),
								}}
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<Tabs
								value={filter}
								onChange={handleFilterChange}
								indicatorColor="primary"
								textColor="primary"
								variant="fullWidth"
							>
								<Tab value="all" label="All Projects" />
								<Tab value="live" label="Live Projects" />
								<Tab value="github" label="GitHub Only" />
							</Tabs>
						</Grid>
					</Grid>
				</Box>

				{/* Project Grid */}
				<Grid container spacing={4}>
					{filteredProjects.length > 0 ? (
						filteredProjects.map((project, index) => (
							<Grid
								item
								key={project.id}
								ref={(pro) => (projectsRef.current[index] = pro)}
								xs={12}
								sm={6}
								md={4}
							>
								<Card
									sx={{
										height: "100%",
										display: "flex",
										flexDirection: "column",
										borderRadius: 4,
										transition: "transform 0.3s, box-shadow 0.3s",
										"&:hover": {
											transform: "translateY(-8px)",
											boxShadow: `0 10px 20px rgba(0,0,0,0.2)`,
										},
									}}
								>
									<CardActionArea onClick={() => handleProjectClick(project)}>
										<Box
											sx={{
												position: "relative",
												pt: "56.25%", // 16:9 aspect ratio
												overflow: "hidden",
											}}
										>
											<Box
												component="img"
												src={project.image}
												alt={project.title}
												sx={{
													position: "absolute",
													top: 0,
													left: 0,
													p: 2,
													borderRadius: 3,
													width: "100%",
													height: "100%",
													objectFit: "cover",
												}}
											/>
											{project.isLive && (
												<Chip
													label="Live"
													color="primary"
													size="small"
													sx={{
														position: "absolute",
														top: 16,
														right: 16,
													}}
												/>
											)}
										</Box>
										<CardContent sx={{ flexGrow: 1 }}>
											<Typography gutterBottom variant="h5" component="h3">
												{project.title}
											</Typography>
											<Typography
												variant="body2"
												color="text.secondary"
												sx={{ mb: 2 }}
											>
												{project.description.substring(0, 100)}...
											</Typography>
											<Box
												sx={{
													display: "flex",
													flexWrap: "wrap",
													gap: 0.5,
													mb: 2,
												}}
											>
												{project.technologies.slice(0, 3).map((tech) => (
													<Chip
														key={tech}
														label={tech}
														size="small"
														variant="outlined"
													/>
												))}
												{project.technologies.length > 3 && (
													<Chip
														label={`+${project.technologies.length - 3}`}
														size="small"
														variant="outlined"
													/>
												)}
											</Box>
										</CardContent>
									</CardActionArea>
									<Divider />
									<CardActions sx={{ justifyContent: "space-between", px: 2 }}>
										<Button
											size="small"
											startIcon={<GitHubIcon />}
											href={project.githubLink}
											target="_blank"
											rel="noopener"
										>
											GitHub
										</Button>
										{project.isLive && (
											<Button
												size="small"
												endIcon={<OpenInNewIcon />}
												href={project.demoLink}
												target="_blank"
												rel="noopener"
											>
												Live Demo
											</Button>
										)}
									</CardActions>
								</Card>
							</Grid>
						))
					) : (
						<Box sx={{ textAlign: "center", width: "100%", py: 8 }}>
							<Typography variant="h5" color="text.secondary">
								No projects found matching your criteria.
							</Typography>
							<Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
								Try adjusting your search or filter settings.
							</Typography>
						</Box>
					)}
				</Grid>
			</Box>

			{/* Project Details Dialog */}
			<Dialog
				open={openDialog}
				onClose={handleCloseDialog}
				fullWidth
				maxWidth="md"
				scroll="body"
			>
				{selectedProject && (
					<>
						<DialogTitle>
							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
								}}
							>
								<Typography variant="h5" component="h2" fontWeight="bold">
									{selectedProject.title}
								</Typography>
								<IconButton onClick={handleCloseDialog} aria-label="close">
									<CloseIcon />
								</IconButton>
							</Box>
						</DialogTitle>
						<DialogContent dividers>
							<Box
								component="img"
								src={selectedProject.image}
								alt={selectedProject.title}
								sx={{
									width: "100%",
									height: "auto",
									maxHeight: "400px",
									objectFit: "cover",
									borderRadius: 2,
									mb: 3,
								}}
							/>

							<Typography variant="body1" paragraph>
								{selectedProject.description}
							</Typography>

							<Typography
								variant="h6"
								gutterBottom
								fontWeight="bold"
								sx={{ mt: 3 }}
							>
								Technologies Used
							</Typography>
							<Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
								{selectedProject.technologies.map((tech) => (
									<Chip key={tech} label={tech} />
								))}
							</Box>

							<Grid container spacing={3} sx={{ mt: 2 }}>
								<Grid item xs={12} sm={6}>
									<Typography variant="subtitle1" fontWeight="bold">
										GitHub Repository
									</Typography>
									<Typography
										variant="body2"
										component="a"
										href={selectedProject.githubLink}
										target="_blank"
										rel="noopener"
										color="primary"
										sx={{ textDecoration: "none" }}
									>
										{selectedProject.githubLink}
									</Typography>
								</Grid>
								{selectedProject.isLive && (
									<Grid item xs={12} sm={6}>
										<Typography variant="subtitle1" fontWeight="bold">
											Live Demo
										</Typography>
										<Typography
											variant="body2"
											component="a"
											href={selectedProject.demoLink}
											target="_blank"
											rel="noopener"
											color="primary"
											sx={{ textDecoration: "none" }}
										>
											{selectedProject.demoLink}
										</Typography>
									</Grid>
								)}
							</Grid>
						</DialogContent>
						<DialogActions sx={{ px: 3, py: 2 }}>
							<Button
								variant="contained"
								startIcon={<GitHubIcon />}
								href={selectedProject.githubLink}
								target="_blank"
								rel="noopener"
							>
								View Code
							</Button>
							{selectedProject.isLive && (
								<Button
									variant="outlined"
									endIcon={<OpenInNewIcon />}
									href={selectedProject.demoLink}
									target="_blank"
									rel="noopener"
								>
									Visit Site
								</Button>
							)}
						</DialogActions>
					</>
				)}
			</Dialog>
		</Container>
	);
};

export { Projects };
