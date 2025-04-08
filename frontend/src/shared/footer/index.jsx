import React from "react";
import {
	Box,
	Container,
	Typography,
	IconButton,
	Link,
	Grid,
	useTheme,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import { profileData } from "../../assets/data/profileData";
import {CustomToolTip} from "../../library"

const Footer = () => {
	const theme = useTheme();
	const year = new Date().getFullYear();

	return (
		<Box
			component="footer"
			sx={{
				py: 6,
				backgroundColor: theme.palette.background.paper,
				borderTop: `1px solid ${theme.palette.divider}`,
				mt: "auto",
			}}
		>
			<Container maxWidth="lg">
				<Grid container spacing={4} justifyContent="space-between">
					<Grid item xs={12} md={4}>
						<Typography
							sx={{
								mr: 2,
								display: { xs: "none", md: "flex" },
								fontWeight: 700,
								backgroundImage: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
								textDecoration: "none",
							}}
							variant="h6"
							color="text.primary"
							gutterBottom
						>
							{profileData.name}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{profileData.title}
						</Typography>
						<Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
							{profileData.shortBio}
						</Typography>
					</Grid>

					<Grid item xs={12} md={4}>
						<Typography variant="h6" color="text.primary" gutterBottom>
							Quick Links
						</Typography>
						<Typography
							variant="body2"
							component={Link}
							href="/"
							color="text.secondary"
							display="block"
							sx={{
								mb: 1,
								textDecoration: "none",
								"&:hover": { color: theme.palette.primary.main },
							}}
						>
							Home
						</Typography>
						<Typography
							variant="body2"
							component={Link}
							href="/about"
							color="text.secondary"
							display="block"
							sx={{
								mb: 1,
								textDecoration: "none",
								"&:hover": { color: theme.palette.primary.main },
							}}
						>
							About
						</Typography>
						<Typography
							variant="body2"
							component={Link}
							href="/projects"
							color="text.secondary"
							display="block"
							sx={{
								mb: 1,
								textDecoration: "none",
								"&:hover": { color: theme.palette.primary.main },
							}}
						>
							Projects
						</Typography>
						<Typography
							variant="body2"
							component={Link}
							href="/contact"
							color="text.secondary"
							display="block"
							sx={{
								textDecoration: "none",
								"&:hover": { color: theme.palette.primary.main },
							}}
						>
							Contact
						</Typography>
					</Grid>

					<Grid item xs={12} md={4}>
						<Typography variant="h6" color="text.primary" gutterBottom>
							Connect
						</Typography>
						<Box sx={{ display: "flex", gap: 2, mb: 2 }}>
							<CustomToolTip title="Github">
								<IconButton
									aria-label="github"
									component={Link}
									href={profileData.socialLinks.github}
									target="_blank"
									rel="noopener"
									sx={{
										color: "text.secondary",
										"&:hover": { color: theme.palette.primary.main },
									}}
								>
									<GitHubIcon />
								</IconButton>
							</CustomToolTip>
							<CustomToolTip title="LinkedIn">
								<IconButton
									aria-label="linkedin"
									component={Link}
									href={profileData.socialLinks.linkedin}
									target="_blank"
									rel="noopener"
									sx={{
										color: "text.secondary",
										"&:hover": { color: theme.palette.primary.main },
									}}
								>
									<LinkedInIcon />
								</IconButton>
							</CustomToolTip>
							<CustomToolTip title="Instagram">
								<IconButton
									aria-label="instagram"
									component={Link}
									href={profileData.socialLinks.instagram}
									target="_blank"
									rel="noopener"
									sx={{
										color: "text.secondary",
										"&:hover": { color: theme.palette.primary.main },
									}}
								>
									<InstagramIcon />
								</IconButton>
							</CustomToolTip>
							<CustomToolTip title="Email">
								<IconButton
									aria-label="email"
									component={Link}
									href={`mailto:${profileData.socialLinks.email}`}
									sx={{
										color: "text.secondary",
										"&:hover": { color: theme.palette.primary.main },
									}}
								>
									<EmailIcon />
								</IconButton>
							</CustomToolTip>
						</Box>
						<Typography variant="body2" color="text.secondary">
							{profileData.socialLinks.email}
						</Typography>
					</Grid>
				</Grid>

				<Typography
					variant="body2"
					color="text.secondary"
					align="center"
					sx={{ mt: 8 }}
				>
					© {year} Abhinav Choubey. All rights reserved.
				</Typography>
			</Container>
		</Box>
	);
};

export { Footer };
