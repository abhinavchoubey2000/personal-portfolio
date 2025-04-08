import {
	Box,
	Grid,
	LinearProgress,
	Paper,
	Typography,
	useTheme,
} from "@mui/material";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function Skills({ profileData }) {
	const theme = useTheme();
	const headingRef = useRef(null);
	const skillsRef = useRef([]);
	const containerRef = useRef(null);

	useGSAP(() => {
		const tl = gsap.timeline();
		tl.from(headingRef.current, {
			opacity: 0,
			scrollTrigger: {
				scroller: "body",
				trigger: containerRef.current,
				scrub: 1,
				start:"top 60%",
				bottom:"bottom 20%"
			},
		});
		gsap.from(skillsRef.current, {
			opacity: 0,
			x:20,
			stagger:0.1,
			scrollTrigger: {
				scroller: "body",
				trigger: containerRef.current,
				start:"top 50%",
				bottom:"bottom 80%"
			},
		});
	});
	return (
		<Box sx={{ mb: 8 }} ref={containerRef}>
			<Typography
				variant="h3"
				component="h2"
				align="center"
				gutterBottom
				fontWeight="bold"
				sx={{ mb: 6 }}
				ref={headingRef}
			>
				Skills
			</Typography>

			<Paper elevation={3} sx={{ p: 4, borderRadius: 4 }}>
				<Grid container spacing={2} justifyContent="center" alignItems="center">
					{profileData.skills.map((skill, index) => (
						<Grid
							ref={(sk) => (skillsRef.current[index] = sk)}
							item
							xs="auto"
							key={skill.name}
						>
							<Box
								sx={{
									width: 150,
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
								}}
							>
								<Typography
									variant="subtitle1"
									fontWeight="medium"
									sx={{ mb: 1, textAlign: "center" }}
								>
									{skill.name}
								</Typography>
								<LinearProgress
									variant="determinate"
									value={skill.level}
									sx={{
										height: 8,
										width: "100%",
										borderRadius: 4,
										backgroundColor: "rgba(187, 134, 252, 0.2)",
										"& .MuiLinearProgress-bar": {
											borderRadius: 4,
											backgroundImage: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
										},
									}}
								/>
							</Box>
						</Grid>
					))}
				</Grid>
			</Paper>
		</Box>
	);
}
