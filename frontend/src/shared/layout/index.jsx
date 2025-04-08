import React from "react";
import { Box, Container, CssBaseline } from "@mui/material";
import { Navbar, Footer } from "../";

const Layout = ({ children }) => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				minHeight: "100vh",
				backgroundColor: "background.default",
			}}
		>
			<CssBaseline />
			<Navbar />
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					py: { xs: 4, md: 6 },
				}}
			>
				{children}
			</Box>
			<Footer />
		</Box>
	);
};

export { Layout };
