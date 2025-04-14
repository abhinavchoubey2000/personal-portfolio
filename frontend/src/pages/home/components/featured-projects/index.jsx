import {
	Box,
	Button,
	Card,
	CardContent,
	Chip,
	Container,
	Grid,
	Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ArrowForward, GitHub } from "@mui/icons-material";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CustomToolTip } from "../../../../library";
import React, { useRef } from "react";

export function FeaturedProjects({ projectsData }) {
	const navigate = useNavigate();
	const featuredProjects = projectsData.slice(0, 3);
	const headingRef = useRef(null);
	const buttonRef = useRef(null);
	const projectsRef = useRef([]);
	const containerRef = useRef(null);
	useGSAP(() => {
		const tl = gsap.timeline();
		const tl2 = gsap.timeline();

		tl.from(headingRef.current, {
			opacity: 0,
			duration: 1,
			delay: 2,
			stagger: 1,
			scrollTrigger: {
				scroller: "body",
				trigger: headingRef.current,
				start: "top 50%",
				end: "bottom 50%",
				scrub: 1,
			},
		});

		tl.from(buttonRef.current, {
			opacity: 0,
			x: -100,
			duration: 1,
			delay: 2,
			stagger: 1,
			scrollTrigger: {
				scroller: "body",
				trigger: buttonRef.current,
				start: "top 50%",
				end: "bottom 50%",
				scrub: 1,
			},
		});

		tl2.from(projectsRef.current, {
			opacity: 0,
			y: 200,
			duration: 1,
			delay: 1,
			stagger: 1,
			scrollTrigger: {
				scroller: "body",
				trigger: containerRef.current,
				start: "top 90%",
				end: "bottom 100%",
				scrub: 1,
			},
		});
	});
	return (
		<Box sx={{ py: 8, backgroundColor: "background.paper" }}>
			<Container maxWidth="lg">
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						mb: 4,
					}}
				>
					<Typography
						ref={headingRef}
						component="h2"
						variant={"h3"}
						color="text.primary"
						gutterBottom
						fontWeight="bold"
					>
						Featured Projects
					</Typography>
					<Button
						ref={buttonRef}
						variant="outlined"
						color="primary"
						endIcon={<ArrowForward />}
						onClick={() => navigate("/projects")}
					>
						View All
					</Button>
				</Box>

				<Grid ref={containerRef} container spacing={4}>
					{featuredProjects.map((project, index) => (
						<Grid
							ref={(pro) => (projectsRef.current[index] = pro)}
							item
							key={project.id}
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
									<Box sx={{ display: "flex", gap: 1 }}>
										<CustomToolTip title="Go to the respository">
											<Button
												size="small"
												variant="contained"
												href={project.githubLink}
												target="_blank"
												rel="noopener"
												startIcon={<GitHub />}
											>
												Code
											</Button>
										</CustomToolTip>
										{project.isLive && (
											<CustomToolTip title="Visit live site">
												<Button
													size="small"
													variant="outlined"
													href={project.demoLink}
													target="_blank"
													rel="noopener"
												>
													Demo
												</Button>
											</CustomToolTip>
										)}
									</Box>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	);
}
