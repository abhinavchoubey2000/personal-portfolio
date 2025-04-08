import {
	Box,
	Card,
	CardContent,
	Grid,
	Typography,
	useTheme,
} from "@mui/material";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function FreelanceServices() {
	const theme = useTheme();
	const headingRef = useRef(null);
	const webRef = useRef(null);
	const frontendRef = useRef(null);
	const backendRef = useRef(null);
	const containerRef = useRef(null);

	useGSAP(() => {
		const tl = gsap.timeline();
		gsap.from(headingRef.current, {
			y: 100,
			opacity: 0,
			duration: 0.5,
			scrollTrigger: {
				scroller: "body",
				trigger: containerRef.current,
				start:"top 80%",
				end:"bottom 20%"
			},
		});
		gsap.from([webRef.current, frontendRef.current, backendRef.current], {
			x: -100,
			opacity: 0,
			duration: 0.5,
			stagger:0.3,
			scrollTrigger: {
				scroller: "body",
				trigger: containerRef.current,
				start:"top 60%",
				end:"bottom 20%"
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
				Freelance Services
			</Typography>

			<Grid container spacing={4}>
				<Grid ref={webRef} item xs={12} sm={6} md={4}>
					<Card sx={{ height: "100%", borderRadius: 4 }}>
						<CardContent sx={{ p: 4 }}>
							<Typography
								variant="h5"
								component="h3"
								gutterBottom
								fontWeight="bold"
							>
								Web Development
							</Typography>
							<Typography variant="body2" color="text.secondary" paragraph>
								Custom websites, web applications, and e-commerce solutions
								tailored to your specific needs.
							</Typography>
							<Typography
								variant="body2"
								sx={{
									fontWeight: "medium",
									color: theme.palette.primary.main,
								}}
							>
								Starting at ₹9,999
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid ref={frontendRef} item xs={12} sm={6} md={4}>
					<Card sx={{ height: "100%", borderRadius: 4 }}>
						<CardContent sx={{ p: 4 }}>
							<Typography
								variant="h5"
								component="h3"
								gutterBottom
								fontWeight="bold"
							>
								Frontend Development
							</Typography>
							<Typography variant="body2" color="text.secondary" paragraph>
								Responsive and interactive user interfaces built with modern
								frameworks like React.
							</Typography>
							<Typography
								variant="body2"
								sx={{
									fontWeight: "medium",
									color: theme.palette.primary.main,
								}}
							>
								Starting at ₹4,999
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid ref={backendRef} item xs={12} sm={6} md={4}>
					<Card sx={{ height: "100%", borderRadius: 4 }}>
						<CardContent sx={{ p: 4 }}>
							<Typography
								variant="h5"
								component="h3"
								gutterBottom
								fontWeight="bold"
							>
								Backend Development
							</Typography>
							<Typography variant="body2" color="text.secondary" paragraph>
								API development, database design, and server-side logic to power
								your applications.
							</Typography>
							<Typography
								variant="body2"
								sx={{
									fontWeight: "medium",
									color: theme.palette.primary.main,
								}}
							>
								Starting at ₹5,999
							</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Box>
	);
}
