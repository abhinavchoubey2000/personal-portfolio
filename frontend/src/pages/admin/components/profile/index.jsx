import { Save, UploadFile } from "@mui/icons-material";
import {
	Alert,
	Avatar,
	Box,
	Button,
	Grid,
	Paper,
	Snackbar,
	TextField,
	Typography,
	useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";

export function Profile() {
	const theme = useTheme();
	const { profileData } = useSelector((state) => state.Profile);
	const [snackbar, setSnackbar] = useState({
		open: false,
		message: "",
		severity: "success",
	});

	const handleCloseSnackbar = () => {
		setSnackbar({
			...snackbar,
			open: false,
		});
	};
	return (
		<>
			<Paper elevation={3} sx={{ p: 4, borderRadius: 4 }}>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						mb: 3,
					}}
				>
					<Typography variant="h4" fontWeight="bold">
						Manage Profile
					</Typography>
					<Button variant="contained" color="primary" startIcon={<Save />}>
						Save Changes
					</Button>
				</Box>

				<Grid container spacing={4}>
					<Grid
						item
						xs={12}
						md={4}
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						<Avatar
							src={profileData.profilePicture}
							alt={profileData.name}
							sx={{
								width: 200,
								height: 200,
								mb: 2,
								border: `4px solid ${theme.palette.primary.main}`,
							}}
						/>
						<Button
							variant="outlined"
							component="label"
							startIcon={<UploadFile />}
						>
							Upload Picture
							<input
								type="file"
								hidden
								accept="image/*"
								onChange={(e) => {
									// In a real app, this would upload the file
									console.log("File selected:", e.target.files[0]);
									// Show a message for demo purposes
									setSnackbar({
										open: true,
										message:
											"This feature would upload a new profile picture in a real app.",
										severity: "info",
									});
								}}
							/>
						</Button>
					</Grid>

					<Grid item xs={12} md={8}>
						<Grid container spacing={3}>
							<Grid item xs={12}>
								<TextField
									fullWidth
									label="Name"
									name="name"
									value={profileData.name}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									fullWidth
									label="Title"
									name="title"
									value={profileData.title}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									fullWidth
									label="Short Bio"
									name="shortBio"
									value={profileData.shortBio}
									multiline
									rows={2}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									fullWidth
									label="Full Bio"
									name="fullBio"
									value={profileData.fullBio}
									multiline
									rows={4}
								/>
							</Grid>
						</Grid>

						<Typography variant="h5" fontWeight="bold" sx={{ mt: 4, mb: 2 }}>
							Social Links
						</Typography>
						<Grid container spacing={3}>
							<Grid item xs={12} sm={6}>
								<TextField
									fullWidth
									label="GitHub"
									name="socialLinks.github"
									value={profileData.socialLinks.github}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									fullWidth
									label="LinkedIn"
									name="socialLinks.linkedin"
									value={profileData.socialLinks.linkedin}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									fullWidth
									label="Twitter"
									name="socialLinks.twitter"
									value={profileData.socialLinks.twitter}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									fullWidth
									label="Email"
									name="socialLinks.email"
									value={profileData.socialLinks.email}
								/>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Paper>
			<Snackbar
				open={snackbar.open}
				autoHideDuration={6000}
				onClose={handleCloseSnackbar}
			>
				<Alert
					onClose={handleCloseSnackbar}
					severity={snackbar.severity}
					sx={{ width: "100%" }}
				>
					{snackbar.message}
				</Alert>
			</Snackbar>
		</>
	);
}
