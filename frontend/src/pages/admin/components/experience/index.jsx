import { Add, Delete, Edit, Save } from "@mui/icons-material";
import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Grid,
	Paper,
	TextField,
	Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { ExperienceCard } from "./components/experience-card";
import { addNewExperienceInState } from "../../../../redux/profileSlice";

export function Experience() {
	// States and Hooks
	const { profileData } = useSelector((state) => state.Profile);
	const dispatch = useDispatch();
	const [openDialog, setOpenDialog] = useState(false);
	const [data, setData] = useState({
		title: "",
		description: "",
		company: "",
		period: "",
	});

	// Handlers
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
	const handleAddNewExperience = () => {
		dispatch(
			addNewExperienceInState({
				...data,
				id: profileData.experience.length + 1,
			})
		);
		setData({ title: "", description: "", company: "", period: "" });
		handleCloseDialog();
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
						Manage Experience
					</Typography>
					<Button
						variant="contained"
						color="primary"
						startIcon={<Add />}
						onClick={handleOpenDialog}
					>
						Add Experience
					</Button>
				</Box>

				<Grid container spacing={3}>
					{profileData.experience.map((exp, index) => (
						<ExperienceCard
							key={index}
							id={exp.id}
							title={exp.title}
							description={exp.description}
							company={exp.company}
							period={exp.period}
						/>
					))}
				</Grid>
			</Paper>

			<Dialog
				open={openDialog}
				onClose={handleCloseDialog}
				fullWidth
				maxWidth="md"
			>
				<DialogTitle>Add Experience</DialogTitle>
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
								value={data.description}
								onChange={handleDataChange}
								multiline
								rows={4}
								required
							/>
						</Grid>
					</Grid>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleCloseDialog}>Cancel</Button>
					<Button
						variant="contained"
						color="primary"
						onClick={handleAddNewExperience}
						startIcon={<Save />}
					>
						Save
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}
