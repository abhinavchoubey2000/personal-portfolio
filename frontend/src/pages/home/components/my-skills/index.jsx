import {
	Box,
	Card,
	CardContent,
	Chip,
	Container,
	Grid,
	Typography,
} from "@mui/material";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Code, Storage, Web } from "@mui/icons-material";

export function MySkills({ skills }) {
	const frontendSkills = skills.filter(
		(skill) => skill.category === "frontend"
	);
	const backendSkills = skills.filter((skill) => skill.category === "backend");
	const fullstackSkills = skills.filter(
		(skill) => skill.category === "fullstack"
	);
	const headingRef = useRef(null);
	const subHeadingRef = useRef(null);
	const frontendRef = useRef(null);
	const backendRef = useRef(null);
	const fullstackRef = useRef(null);
	const containerRef = useRef(null);

	useGSAP(() => {
		const tl = gsap.timeline();
		const tl2 = gsap.timeline();

		tl.from([headingRef.current, subHeadingRef.current], {
			opacity: 0,
			duration: 1,
			delay: 2,
			stagger: 1,
			scrollTrigger: {
				scroller: "body",
				trigger: [headingRef.current, subHeadingRef.current],
				start: "top 50%",
				end: "bottom 50%",
				scrub: 1,
			},
		});
		tl2.from(frontendRef.current, {
			opacity: 0,
			x: -200,
			duration: 1,
			delay: 1,
			stagger: 1,
			scrollTrigger: {
				scroller: "body",
				trigger: containerRef.current,
				start: "top 70%",
				end: "bottom 100%",
				scrub: 1,
			},
		});
		tl2.from(backendRef.current, {
			opacity: 0,
			y: 200,
			duration: 1,
			delay: 1,
			stagger: 1,
			scrollTrigger: {
				scroller: "body",
				trigger: containerRef.current,
				start: "top 70%",
				end: "bottom 100%",
				scrub: 1,
			},
		});
		tl2.from(fullstackRef.current, {
			opacity: 0,
			x: 200,
			duration: 1,
			delay: 1,
			stagger: 1,
			scrollTrigger: {
				scroller: "body",
				trigger: containerRef.current,
				start: "top 70%",
				end: "bottom 100%",
				scrub: 1,
			},
		});
	});

	return (
		<Container maxWidth="lg" sx={{ mb: 8 }}>
			<Typography
				component="h2"
				variant="h3"
				align="center"
				color="text.primary"
				gutterBottom
				fontWeight="bold"
				ref={headingRef}
			>
				My Skills
			</Typography>
			<Typography
				ref={subHeadingRef}
				variant="h6"
				align="center"
				color="text.secondary"
				paragraph
				sx={{ mb: 6 }}
			>
				Technologies and tools I work with
			</Typography>

			<Grid ref={containerRef} container spacing={4} justifyContent={"center"}>
				<Grid ref={frontendRef} item xs={12} sm={6} md={4} width={"60%"}>
					<Card
						sx={{
							width: "100%",
							height: "100%",
							display: "flex",
							flexDirection: "column",
							borderRadius: 4,
						}}
					>
						<CardContent sx={{ flexGrow: 1, textAlign: "center", p: 4 }}>
							<Code color="primary" sx={{ fontSize: 60, mb: 2 }} />
							<Typography gutterBottom variant="h5" component="h3">
								Frontend Development
							</Typography>
							<Typography variant="body2" color="text.secondary">
								Creating responsive and interactive user interfaces with modern
								frameworks and libraries.
							</Typography>
							<Box
								sx={{
									display: "flex",
									flexWrap: "wrap",
									gap: 1,
									mt: 3,
									justifyContent: "center",
								}}
							>
								{frontendSkills.map((skill, index) => (
									<Chip key={index} label={skill.name} size="small" />
								))}
							</Box>
						</CardContent>
					</Card>
				</Grid>
				<Grid ref={backendRef} item xs={12} sm={6} md={4} width={"60%"}>
					<Card
						sx={{
							height: "100%",
							display: "flex",
							flexDirection: "column",
							borderRadius: 4,
						}}
					>
						<CardContent sx={{ flexGrow: 1, textAlign: "center", p: 4 }}>
							<Storage color="primary" sx={{ fontSize: 60, mb: 2 }} />
							<Typography gutterBottom variant="h5" component="h3">
								Backend Development
							</Typography>
							<Typography variant="body2" color="text.secondary">
								Building robust server-side applications, APIs, and database
								management.
							</Typography>
							<Box
								sx={{
									display: "flex",
									flexWrap: "wrap",
									gap: 1,
									mt: 3,
									justifyContent: "center",
								}}
							>
								{backendSkills.map((skill, index) => (
									<Chip key={index} label={skill.name} size="small" />
								))}
							</Box>
						</CardContent>
					</Card>
				</Grid>
				<Grid ref={fullstackRef} item xs={12} sm={6} md={4} width={"60%"}>
					<Card
						sx={{
							height: "100%",
							display: "flex",
							flexDirection: "column",
							borderRadius: 4,
						}}
					>
						<CardContent sx={{ flexGrow: 1, textAlign: "center", p: 4 }}>
							<Web color="primary" sx={{ fontSize: 60, mb: 2 }} />
							<Typography gutterBottom variant="h5" component="h3">
								Full Stack Development
							</Typography>
							<Typography variant="body2" color="text.secondary">
								End-to-end application development from UI design to server
								implementation.
							</Typography>
							<Box
								sx={{
									display: "flex",
									flexWrap: "wrap",
									gap: 1,
									mt: 3,
									justifyContent: "center",
								}}
							>
								{fullstackSkills.map((skill, index) => (
									<Chip key={index} label={skill.name} size="small" />
								))}
							</Box>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Container>
	);
}
