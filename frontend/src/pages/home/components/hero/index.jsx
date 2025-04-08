import {
	Avatar,
	Box,
	useTheme,
	Button,
	Container,
	Grid,
	IconButton,
	Stack,
	Typography,
} from "@mui/material";
import { GitHub, LinkedIn, ArrowForward, Email, Instagram } from "@mui/icons-material";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import {CustomToolTip} from "../../../../library"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function Hero({ profileData }) {
	const theme = useTheme();
	const navigate = useNavigate();
	const nameRef = useRef(null);
	const subTitleRef = useRef(null);
	const descriptionRef = useRef(null);
	const profilePictureRef = useRef(null);
	const boxRef = useRef(null);

	useGSAP(() => {
		const tl = gsap.timeline();
		tl.from([nameRef.current, subTitleRef.current, descriptionRef.current], {
			y: 40,
			opacity: 0,
			duration: 1,
			stagger: 0.2,
		});
		tl.from(profilePictureRef.current, {
			x: 60,
			rotate: 180,
			duration: 2,
			ease: "elastic.out(0.5)",
			opacity: 0,
		});
	});

	return (
		<Box
			ref={boxRef}
			sx={{
				backgroundColor: "background.paper",
				position: "relative",
				overflow: "hidden",
				py: { xs: 8, md: 12 },
				mb: 6,
			}}
		>
			<Container maxWidth="lg">
				<Grid container spacing={6} alignItems="center">
					<Grid item xs={12} md={7}>
						<Typography
							component="h1"
							ref={nameRef}
							variant="h2"
							color="text.primary"
							gutterBottom
							fontWeight="bold"
							sx={{
								fontSize: { xs: "2.5rem", md: "3rem" },
								backgroundImage: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
							}}
						>
							Hi, I'm {profileData.name}
						</Typography>
						<Typography
							variant="h5"
							ref={subTitleRef}
							color="text.secondary"
							paragraph
							sx={{ mb: 4 }}
						>
							{profileData.title}
						</Typography>
						<Typography
							ref={descriptionRef}
							variant="body1"
							color="text.secondary"
							paragraph
						>
							{profileData.shortBio}
						</Typography>
						<Stack direction="row" spacing={2} sx={{ mb: 4 }}>
							<Button
								variant="contained"
								color="primary"
								size="large"
								endIcon={<ArrowForward />}
								onClick={() => navigate("/projects")}
							>
								View Projects
							</Button>
							<Button
								variant="outlined"
								color="primary"
								size="large"
								onClick={() => navigate("/contact")}
							>
								Contact Me
							</Button>
						</Stack>
						<Stack direction="row" spacing={1}>
							<CustomToolTip title="Github">
								<IconButton
									aria-label="github"
									href={profileData.socialLinks.github}
									target="_blank"
									rel="noopener"
									sx={{
										color: "text.secondary",
										"&:hover": { color: theme.palette.primary.main },
									}}
								>
									<GitHub />
								</IconButton>
							</CustomToolTip>
							<CustomToolTip title="LinkedIn">
								<IconButton
									aria-label="linkedin"
									href={profileData.socialLinks.linkedin}
									target="_blank"
									rel="noopener"
									sx={{
										color: "text.secondary",
										"&:hover": { color: theme.palette.primary.main },
									}}
								>
									<LinkedIn />
								</IconButton>
							</CustomToolTip>
							<CustomToolTip title="Instagram">
								<IconButton
									aria-label="instagram"
									href={profileData.socialLinks.instagram}
									target="_blank"
									rel="noopener"
									sx={{
										color: "text.secondary",
										"&:hover": { color: theme.palette.primary.main },
									}}
								>
									<Instagram />
								</IconButton>
							</CustomToolTip>
							<CustomToolTip title="Email">
								<IconButton
									aria-label="email"
									href={`mailto:${profileData.socialLinks.email}`}
									sx={{
										color: "text.secondary",
										"&:hover": { color: theme.palette.primary.main },
									}}
								>
									<Email />
								</IconButton>
							</CustomToolTip>
						</Stack>
					</Grid>
					<Grid
						className="bounce-animation"
						item
						xs={12}
						md={5}
						sx={{ display: "flex", justifyContent: "center" }}
					>
						<Avatar
							ref={profilePictureRef}
							src={profileData.profilePicture}
							alt={profileData.name}
							className="shadow-animation"
							sx={{
								width: { xs: 200, md: 300 },
								height: { xs: 200, md: 300 },
								border: `4px solid #ababab`,
							}}
						/>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}
