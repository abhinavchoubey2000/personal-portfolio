import React,{useRef} from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { ContactForm, ContactInfo, FreelanceServices } from "./components";
import {profileData} from "../../assets/data/profileData"
import { useGSAP } from "@gsap/react";
import gsap from "gsap"

const Contact = () => {
	document.title = "Contact | Abhinav Choubey";

	const headingRef = useRef(null)
	const descriptionRef = useRef(null)

	useGSAP(()=>{
		const tl = gsap.timeline()
		tl.from([headingRef.current, descriptionRef.current],{
			opacity:0,
			y:50,
			stagger:0.3,
		})
	})

	return (
		<Container maxWidth="lg">
			<Box sx={{ mb: 8 }}>
				<Typography
					component="h1"
					variant="h2"
					color="text.primary"
					gutterBottom
					fontWeight="bold"
					align="center"
					ref={headingRef}
					sx={{ mb: 2 }}
				>
					Get In Touch
				</Typography>
				<Typography
					variant="h6"
					align="center"
					color="text.secondary"
					paragraph
					ref={descriptionRef}
					sx={{ mb: 6, maxWidth: "800px", mx: "auto" }}
				>
					I'm currently available for freelance work and full-time
					opportunities. If you have a project that needs some creative work,
					I'd love to hear about it.
				</Typography>

				<Grid container spacing={6}>
					<ContactInfo profileData={profileData} />
					<ContactForm />
				</Grid>
			</Box>

			<FreelanceServices />
		</Container>
	);
};

export { Contact };
