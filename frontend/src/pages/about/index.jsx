import React from "react";
import { Container } from "@mui/material";
import {
	AboutMe,
	Education,
	Experience,
	PersonalApproach,
	Skills,
} from "./components";
import {profileData} from "../../assets/data/profileData"

const About = () => {
	document.title = "About | Abhinav Choubey";
	return (
		<Container maxWidth="lg">
			<AboutMe profileData={profileData} />
			<Skills profileData={profileData} />
			<Education profileData={profileData} />
			<Experience profileData={profileData} />
			<PersonalApproach />
		</Container>
	);
};

export { About };
