import {
	Avatar,
	Box,
	Card,
	CardContent,
	Grid,
	Typography,
	useTheme,
} from "@mui/material";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Person, Business } from "@mui/icons-material";

export function PersonalApproach() {
	const theme = useTheme();
	const approach1Ref = useRef(null);
	const approach2Ref = useRef(null);
	const containerRef = useRef(null);

	useGSAP(() => {
		gsap.from(approach1Ref.current, {
			opacity: 0,
			x: -200,
			duration: 1,
			delay: 1,
			scrollTrigger: {
				scroller: "body",
				trigger: containerRef.current,
				start: "top 20%",
				end: "bottom 50%",
				scrub: 1,
			},
		});
		gsap.from(approach2Ref.current, {
			opacity: 0,
			x: 200,
			duration: 1,
			delay: 1,
			scrollTrigger: {
				scroller: "body",
				trigger: containerRef.current,
				start: "top 20%",
				end: "bottom 50%",
				scrub: 1,
			},
		});
	});
	return (
		<Box sx={{ mb: 8 }} ref={containerRef.current}>
			<Typography
				variant="h3"
				component="h2"
				align="center"
				gutterBottom
				fontWeight="bold"
				sx={{ mb: 6 }}
			>
				Personal Approach
			</Typography>

			<Grid container spacing={4}>
				<Grid ref={approach1Ref} item xs={12} md={6}>
					<Card
						sx={{
							height: "100%",
							borderRadius: 4,
						}}
					>
						<CardContent>
							<Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
								<Avatar sx={{ bgcolor: theme.palette.primary.main, mr: 2 }}>
									<Person />
								</Avatar>
								<Typography variant="h5" component="h3" fontWeight="bold">
									My Philosophy
								</Typography>
							</Box>
							<Typography variant="body1" paragraph>
								I believe in creating clean, efficient, and maintainable code
								that solves real-world problems. My approach to development is
								user-centered, focusing on creating intuitive and accessible
								interfaces.
							</Typography>
							<Typography variant="body1" paragraph>
								I'm passionate about continuous learning and staying up-to-date
								with the latest technologies and best practices in web
								development.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid ref={approach2Ref} item xs={12} md={6}>
					<Card
						sx={{
							height: "100%",
							borderRadius: 4,
						}}
					>
						<CardContent>
							<Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
								<Avatar sx={{ bgcolor: theme.palette.primary.main, mr: 2 }}>
									<Business />
								</Avatar>
								<Typography variant="h5" component="h3" fontWeight="bold">
									Work Ethic
								</Typography>
							</Box>
							<Typography variant="body1" paragraph>
								I pride myself on my strong work ethic, attention to detail, and
								ability to work effectively both independently and as part of a
								team.
							</Typography>
							<Typography variant="body1" paragraph>
								I'm a problem-solver at heart and enjoy tackling complex
								challenges. I communicate effectively with stakeholders and
								believe in transparent, collaborative development processes.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Box>
	);
}
