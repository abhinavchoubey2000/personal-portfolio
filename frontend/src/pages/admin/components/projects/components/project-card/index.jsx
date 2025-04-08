import { Delete, Edit, GitHub, Save, Visibility } from "@mui/icons-material";
import {
	Box,
	Button,
	Chip,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	FormControlLabel,
	Grid,
	IconButton,
	Switch,
	TableCell,
	TableRow,
	TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	deleteProjectInState,
	updateProjectInState,
} from "../../../../../../redux/profileSlice";

export function ProjectCard({ id, title, technologies, isLive, gitHubLink }) {
	// States and Hooks
	const [openDialog, setOpenDialog] = useState(false);
	const { profileData } = useSelector((state) => state.Profile);
	const dispatch = useDispatch();
	const matchedProject = profileData.projects.find(
		(project) => project.id === id
	);
	const [data, setData] = useState({
		id: matchedProject.id,
		title: matchedProject.title,
		description: matchedProject.description,
		image: matchedProject.image,
		technologies: matchedProject.technologies.join(","),
		githubLink: matchedProject.githubLink,
		demoLink: matchedProject.demoLink,
		isLive: matchedProject.isLive,
	});

	// Handlers
	const handleCloseDialog = () => {
		setOpenDialog(false);
	};
	const handleOpenDialog = () => {
		setOpenDialog(true);
	};
	const handleDeleteProject = (projectId) => {
		dispatch(deleteProjectInState(projectId));
	};
	const handleDataChange = (event) => {
		const { name, value, type, checked } = event.target;
		setData((prev) => {
			return { ...prev, [name]: type === "checkbox" ? checked : value };
		});
	};
	const handleUpdateProject = (projectId) => {
		dispatch(
			updateProjectInState({
				projectId,
				newData: {
					id: data.id,
					title: data.title,
					description: data.description,
					technologies: data.technologies.split(","),
					image: data.image,
					githubLink: data.githubLink,
					demoLink: data.demoLink,
					isLive: data.isLive,
				},
			})
		);
		handleCloseDialog();
	};

	// DOM
	return (
		<>
			<TableRow key={id}>
				<TableCell>{id}</TableCell>
				<TableCell>{title}</TableCell>
				<TableCell>
					<Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
						{technologies.slice(0, 3).map((tech) => (
							<Chip key={tech} label={tech} size="small" />
						))}
						{technologies.length > 3 && (
							<Chip label={`+${technologies.length - 3}`} size="small" />
						)}
					</Box>
				</TableCell>
				<TableCell>
					<Chip
						label={isLive ? "Live" : "GitHub Only"}
						color={isLive ? "primary" : "default"}
						size="small"
					/>
				</TableCell>
				<TableCell>
					<IconButton
						onClick={() => {
							handleOpenDialog();
						}}
						color="primary"
						size="small"
					>
						<Edit />
					</IconButton>
					<IconButton
						onClick={() => {
							handleDeleteProject(id);
						}}
						color="error"
						size="small"
					>
						<Delete />
					</IconButton>
					<IconButton color="info" size="small" onClick={()=>{window.open(gitHubLink,"_blank")}}>
						<Visibility />
					</IconButton>
				</TableCell>
			</TableRow>
			<Dialog
				open={openDialog}
				onClose={handleCloseDialog}
				fullWidth
				maxWidth="md"
			>
				<DialogTitle>Edit Project</DialogTitle>
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
								label="Technologies (comma separated without spaces)"
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
								onChange={handleDataChange}
								value={data.githubLink}
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
						variant="contained"
						color="primary"
						onClick={() => {
							handleUpdateProject(id);
						}}
						startIcon={<Save />}
					>
						Update
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}
