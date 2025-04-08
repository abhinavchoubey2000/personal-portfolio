import {
	Avatar,
	Box,
	Divider,
	Grid,
	Stack,
	Typography,
	useTheme,
} from "@mui/material";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function AboutMe({ profileData }) {
	const nameRef = useRef(null);
	const headingRef = useRef(null);
	const titleRef = useRef(null);
	const descriptionRef = useRef(null);
	const profilePictureRef = useRef(null);
	useGSAP(() => {
		const tl = gsap.timeline();
		tl.from(headingRef, {
			opacity: 0,
			duration: 1,
		});
		tl.from([nameRef.current, titleRef.current, descriptionRef.current], {
			x: 100,
			opacity: 0,
			duration: 0.5,
			stagger: 0.2,
		});
		tl.from(profilePictureRef.current, {
			x: -60,
			rotate: 180,
			duration: 2,
			ease: "elastic.out(0.5)",
			opacity: 0,
		});
	});
	return (
		<Box sx={{ mb: 8 }}>
			<Typography
				ref={headingRef}
				component="h1"
				variant="h2"
				color="text.primary"
				gutterBottom
				fontWeight="bold"
				align="center"
				sx={{ mb: 4 }}
			>
				About Me
			</Typography>

			<Grid container spacing={6} alignItems="center">
				<Grid
					item
					xs={12}
					md={4}
					className="bounce-animation"
					sx={{ display: "flex", justifyContent: "center" }}
				>
					<Avatar
						ref={profilePictureRef}
						src={profileData.profilePicture}
						alt={profileData.name}
						className="shadow-animation"
						sx={{
							width: { xs: 220, md: 280 },
							height: { xs: 220, md: 280 },
							border: `4px solid #ababab`,
						}}
					/>
				</Grid>
				<Grid item xs={12} md={8}>
					<Typography ref={nameRef} variant="h4" gutterBottom fontWeight="bold">
						{profileData.name}
					</Typography>
					<Typography ref={titleRef} variant="h6" gutterBottom color="primary">
						{profileData.title}
					</Typography>
					<Box sx={{ mb: 3 }}>
						<Typography ref={descriptionRef} variant="body1" paragraph>
							{profileData.fullBio}
						</Typography>
					</Box>
					<Divider sx={{ mb: 3 }} />
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<Stack spacing={1}>
								<Typography variant="subtitle1" fontWeight="bold">
									Email:
								</Typography>
								<Typography variant="body2" color="text.secondary">
									{profileData.socialLinks.email}
								</Typography>
							</Stack>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Stack spacing={1}>
								<Typography variant="subtitle1" fontWeight="bold">
									Based in:
								</Typography>
								<Typography variant="body2" color="text.secondary">
									{profileData.location}
								</Typography>
							</Stack>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Stack spacing={1}>
								<Typography variant="subtitle1" fontWeight="bold">
									GitHub:
								</Typography>
								<Typography variant="body2" color="text.secondary">
									{profileData.socialLinks.github}
								</Typography>
							</Stack>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Stack spacing={1}>
								<Typography variant="subtitle1" fontWeight="bold">
									LinkedIn:
								</Typography>
								<Typography variant="body2" color="text.secondary">
									{profileData.socialLinks.linkedin}
								</Typography>
							</Stack>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
}
