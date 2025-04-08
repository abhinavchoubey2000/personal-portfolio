import { Add, Save } from "@mui/icons-material";
import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	FormControlLabel,
	Grid,
	Paper,
	Switch,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TextField,
	Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { ProjectCard } from "./components";
import { addNewProjectInState } from "../../../../redux/profileSlice";

export function Projects() {
	//States and Hooks
	const { profileData } = useSelector((state) => state.Profile);
	const dispatch = useDispatch();
	const [openDialog, setOpenDialog] = useState(false);
	const [data, setData] = useState({
		id: 0,
		title: "",
		description: "",
		image: "",
		technologies: "",
		githubLink: "",
		demoLink: "",
		isLive: false,
	});

	//Handlers
	const handleCloseDialog = () => {
		setOpenDialog(false);
	};
	const handleOpenDialog = () => {
		setOpenDialog(true);
	};
	const handleDataChange = (event) => {
		const { name, value } = event.target;
		setData((prev) => {
			return { ...prev, [name]: value };
		});
	};
	const handleAddNewProject = () => {
		const projectId = profileData.projects.length + 1;
		dispatch(
			addNewProjectInState({
				id: projectId,
				title: data.title,
				description: data.description,
				technologies: data.technologies.split(","),
				image: data.image,
				githubLink: data.githubLink,
				demoLink: data.demoLink,
				isLive: data.isLive,
			})
		);
		setData({
			id: 0,
			title: "",
			description: "",
			image: "",
			technologies: "",
			githubLink: "",
			demoLink: "",
			isLive: false,
		});
		handleCloseDialog();
	};
	
	//Dom
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
						Manage Projects
					</Typography>
					<Button
						onClick={handleOpenDialog}
						variant="contained"
						color="primary"
						startIcon={<Add />}
					>
						Add New Project
					</Button>
				</Box>

				<TableContainer>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>ID</TableCell>
								<TableCell>Title</TableCell>
								<TableCell>Technologies</TableCell>
								<TableCell>Status</TableCell>
								<TableCell>Actions</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{profileData.projects.map((project, index) => (
								<ProjectCard
									key={index}
									id={project.id}
									title={project.title}
									gitHubLink={project.githubLink}
									technologies={project.technologies}
									isLive={project.isLive}
								/>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Paper>

			<Dialog
				open={openDialog}
				onClose={handleCloseDialog}
				fullWidth
				maxWidth="md"
			>
				<DialogTitle>Add New Project</DialogTitle>
				<DialogContent dividers>
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<TextField
								fullWidth
								label="Project Title"
								name="title"
								value={data.title}
								onChange={handleDataChange}
								required
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
						<Grid item xs={12}>
							<TextField
								fullWidth
								label="Image URL"
								name="image"
								value={data.image}
								onChange={handleDataChange}
								required
								helperText="Enter URL or upload image (upload feature would be implemented in a real app)"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								fullWidth
								label="Technologies (comma separated)"
								name="technologies"
								value={data.technologies}
								onChange={handleDataChange}
								required
								helperText="E.g. React, Node.js, MongoDB"
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								fullWidth
								label="GitHub Link"
								name="githubLink"
								value={data.githubLink}
								onChange={handleDataChange}
								required
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								fullWidth
								label="Demo Link (if available)"
								name="demoLink"
								value={data.demoLink}
								onChange={handleDataChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<FormControlLabel
								control={
									<Switch
										name="isLive"
										onChange={handleDataChange}
										checked={data.isLive}
										color="primary"
									/>
								}
								label="Project is Live"
							/>
						</Grid>
					</Grid>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleCloseDialog}>Cancel</Button>
					<Button
						onClick={handleAddNewProject}
						variant="contained"
						color="primary"
						startIcon={<Save />}
					>
						Save
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}
