import React, { useState } from "react";
import { Box, Container, Typography, Paper, Tabs, Tab } from "@mui/material";
import { Projects, Experience, Profile } from "./components";

const AdminPanel = () => {
	const [activeTab, setActiveTab] = useState(0);

	const handleTabChange = (event, newValue) => {
		setActiveTab(newValue);
	};

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
					sx={{ mb: 2 }}
				>
					Admin Panel
				</Typography>
				<Typography
					variant="h6"
					align="center"
					color="text.secondary"
					paragraph
					sx={{ mb: 6, maxWidth: "800px", mx: "auto" }}
				>
					Manage your portfolio content, projects, and personal information.
				</Typography>

				<Paper elevation={3} sx={{ mb: 4, borderRadius: 2 }}>
					<Tabs
						value={activeTab}
						onChange={handleTabChange}
						indicatorColor="primary"
						textColor="primary"
						variant="fullWidth"
					>
						<Tab label="Projects" />
						<Tab label="Experience" />
						<Tab label="Profile" />
					</Tabs>
				</Paper>

				{activeTab === 0 && <Projects />}

				{activeTab === 1 && <Experience />}

				{activeTab === 2 && <Profile />}
			</Box>
		</Container>
	);
};

export { AdminPanel };
