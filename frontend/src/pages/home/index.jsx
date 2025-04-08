import React from "react";
import { FeaturedProjects, GetInTouch, Hero, MySkills } from "./components";
import {profileData} from "../../assets/data/profileData"

const Home = () => {
	document.title = "Home | Abhinav Choubey";
	return  (
		<>
			<Hero profileData={profileData} />
			<MySkills skills={profileData.skills}/>
			<FeaturedProjects projectsData={profileData.projects} />
			<GetInTouch />
		</>
	);
};

export { Home };
