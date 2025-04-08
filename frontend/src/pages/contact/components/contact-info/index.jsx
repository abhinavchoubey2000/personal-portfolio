import {
	Box,
	Divider,
	Grid,
	IconButton,
	Paper,
	Stack,
	Typography,
	useTheme,
} from "@mui/material";
import React, {useRef} from "react";
import {
	Email,
	GitHub,
	LinkedIn,
	LocationOn,
	Instagram,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import {CustomToolTip} from "../../../../library"
import gsap from "gsap";

export function ContactInfo({ profileData }) {
	const theme = useTheme();
	const contactInfo = useRef(null)
	useGSAP(() => {
			gsap.from(contactInfo.current, {
				x: -150,
				opacity: 0,
				duration: 0.5,
			});
		});
	return (
		<Grid item xs={12} md={5} ref={contactInfo}>
			<Paper elevation={3} sx={{ p: 4, height: "100%", borderRadius: 4 }}>
				<Typography variant="h4" gutterBottom fontWeight="bold">
					Contact Information
				</Typography>
				<Typography
					variant="body1"
					color="text.secondary"
					paragraph
					sx={{ mb: 4 }}
				>
					Feel free to reach out to me through any of these channels. I'm always
					open to discussing new projects, opportunities, or partnerships.
				</Typography>

				<Stack spacing={3}>
					<Box sx={{ display: "flex", alignItems: "center" }}>
						<IconButton
							sx={{ backgroundColor: "rgba(187, 134, 252, 0.1)", mr: 2 }}
						>
							<Email color="primary" />
						</IconButton>
						<Box>
							<Typography variant="subtitle1" fontWeight="bold">
								Email
							</Typography>
							<Typography variant="body2" color="text.secondary">
								<Link
									href={`mailto:${profileData.socialLinks.email}`}
									color="inherit"
									underline="hover"
								>
									{profileData.socialLinks.email}
								</Link>
							</Typography>
						</Box>
					</Box>

					<Box sx={{ display: "flex", alignItems: "center" }}>
						<IconButton
							sx={{ backgroundColor: "rgba(187, 134, 252, 0.1)", mr: 2 }}
						>
							<LocationOn color="primary" />
						</IconButton>
						<Box>
							<Typography variant="subtitle1" fontWeight="bold">
								Location
							</Typography>
							<Typography variant="body2" color="text.secondary">
								{profileData.location}
							</Typography>
						</Box>
					</Box>

					<Divider sx={{ my: 2 }} />

					<Typography variant="h6" fontWeight="bold">
						Social Profiles
					</Typography>

					<Box sx={{ display: "flex", gap: 2 }}>
						<CustomToolTip title="Github">
							<IconButton
								aria-label="github"
								href={profileData.socialLinks.github}
								target="_blank"
								rel="noopener"
								sx={{
									color: "white",
									backgroundColor: theme.palette.background.card,
									"&:hover": {
										backgroundColor: theme.palette.primary.main,
									},
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
									color: "white",
									backgroundColor: theme.palette.background.card,
									"&:hover": {
										backgroundColor: theme.palette.primary.main,
									},
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
									color: "white",
									backgroundColor: theme.palette.background.card,
									"&:hover": {
										backgroundColor: theme.palette.primary.main,
									},
								}}
							>
								<Instagram />
							</IconButton>
						</CustomToolTip>
					</Box>
				</Stack>
			</Paper>
		</Grid>
	);
}
