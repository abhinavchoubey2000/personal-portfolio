import { Delete, Edit, Save } from "@mui/icons-material";
import {
	Box,
	Button,
	Card,
	CardContent,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Divider,
	Grid,
	IconButton,
	TextField,
	Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	deleteExperienceInState,
	updateExperienceInState,
} from "../../../../../../redux/profileSlice";

export function ExperienceCard({ id, title, company, period, description }) {
	const { profileData } = useSelector((state) => state.Profile);
	const dispatch = useDispatch();
	const [openDialog, setOpenDialog] = useState(false);
	const [data, setData] = useState({
		id,
		title,
		company,
		period,
		description,
	});

	const handleOpenDialog = () => {
		setOpenDialog(true);
	};
	const handleCloseDialog = () => {
		setOpenDialog(false);
	};
	const handleDataChange = (event) => {
		const { name, value } = event.target;
		setData((prev) => {
			return { ...prev, [name]: value };
		});
	};
	const handleDeleteExperience = (experienceId) => {
		dispatch(deleteExperienceInState(experienceId));
	};
	const handleUpdateExperience = (experienceId) => {
		dispatch(updateExperienceInState({ experienceId, newData: data }));
		handleCloseDialog();
	};

	return (
		<>
			<Grid item xs={12}>
				<Card sx={{ borderRadius: 2 }}>
					<CardContent>
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
								mb: 1,
							}}
						>
							<Typography variant="h6" fontWeight="bold">
								{title}
							</Typography>
							<Box>
								<IconButton
									color="primary"
									size="small"
									onClick={handleOpenDialog}
								>
									<Edit />
								</IconButton>
								<IconButton
									color="error"
									size="small"
									onClick={() => handleDeleteExperience(id)}
								>
									<Delete />
								</IconButton>
							</Box>
						</Box>
						<Typography variant="subtitle1" color="primary">
							{company}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{period}
						</Typography>
						<Divider sx={{ my: 1 }} />
						<Typography variant="body2">{description}</Typography>
					</CardContent>
				</Card>
			</Grid>

			<Dialog
				open={openDialog}
				onClose={handleCloseDialog}
				fullWidth
				maxWidth="md"
			>
				<DialogTitle>Edit Experience</DialogTitle>
				<DialogContent dividers>
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<TextField
								fullWidth
								label="Position/Title"
								name="title"
								value={data.title}
								onChange={handleDataChange}
								required
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								fullWidth
								label="Company/Organization"
								name="company"
								value={data.company}
								onChange={handleDataChange}
								required
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								fullWidth
								label="Time Period"
								name="period"
								value={data.period}
								onChange={handleDataChange}
								required
								helperText="E.g. 2020 - Present"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								fullWidth
								label="Description"
								name="description"
								multiline
								value={data.description}
								onChange={handleDataChange}
								rows={4}
								required
							/>
						</Grid>
					</Grid>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleCloseDialog}>Cancel</Button>
					<Button
						onClick={() => {
							handleUpdateExperience(id);
						}}
						variant="contained"
						color="primary"
						startIcon={<Save />}
					>
						Update
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}
