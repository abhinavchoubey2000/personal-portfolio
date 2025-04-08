import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
	name: "Profile",
	initialState: {
		profileData: {
			name: "",
			title: "",
			location: "",
			shortBio: "",
			fullBio: ``,
			profilePicture: "",
			skills: [{ name: "", level: 0, category: "" }],
			education: [
				{
					degree: "",
					institution: "",
					year: "",
					description: "",
				},
			],
			experience: [
				{
					id: 0,
					title: "",
					company: "",
					period: "",
					description: "",
				},
			],
			socialLinks: {
				github: "",
				linkedin: "",
				twitter: "",
				email: "",
			},
			projects: [
				{
					id: 0,
					title: "",
					description: "",
					image: "",
					technologies: [],
					githubLink: "",
					demoLink: "",
					isLive: true,
				},
			],
		},
		loading: false,
	},
	reducers: {
		storeProfileData: (state, action) => {
			state.profileData = action.payload;
		},
		addNewProjectInState: (state, action) => {
			state.profileData.projects.push(action.payload);
		},
		deleteProjectInState: (state, action) => {
			const indexOfProject = state.profileData.projects.findIndex(
				(project) => project.id === action.payload
			);
			state.profileData.projects.splice(indexOfProject, 1);
		},
		updateProjectInState: (state, action) => {
			const indexOfProject = state.profileData.projects.findIndex(
				(project) => project.id === action.payload.projectId
			);
			state.profileData.projects.splice(
				indexOfProject,
				1,
				action.payload.newData
			);
		},
		addNewExperienceInState: (state, action) => {
			state.profileData.experience.push(action.payload);
		},
		deleteExperienceInState: (state, action) => {
			const indexOfExperience = state.profileData.experience.findIndex(
				(exp) => exp.id === action.payload
			);
			state.profileData.experience.splice(indexOfExperience, 1);
		},
		updateExperienceInState: (state, action) => {
			const indexOfExperience = state.profileData.experience.findIndex(
				(exp) => exp.id === action.payload.experienceId
			);
			state.profileData.experience.splice(
				indexOfExperience,
				1,
				action.payload.newData
			);
		},
		handleLoading: (state, action) => {
			state.loading = action.payload;
		},
	},
});

export const {
	storeProfileData,
	handleLoading,

	// Projects
	addNewProjectInState,
	deleteProjectInState,
	updateProjectInState,

	// Experiences
	addNewExperienceInState,
	deleteExperienceInState,
	updateExperienceInState,

	// Profile
} = profileSlice.actions;
