import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import {
	AppBar,
	Box,
	Toolbar,
	IconButton,
	Typography,
	Container,
	Button,
	useTheme,
	useMediaQuery,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Link as RouterLink } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const pages = [
	{ name: "Home", path: "/" },
	{ name: "About", path: "/about" },
	{ name: "Projects", path: "/projects" },
	{ name: "Contact", path: "/contact" },
];

const Navbar = () => {
	const [drawerOpen, setDrawerOpen] = useState(false);
	const theme = useTheme();
	const location = useLocation();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));
	const navLogoRef = useRef(null);
	const navLinksRef = useRef([]);
	const sidebarLogoRef = useRef(null);
	const sidebarLinksRef = useRef([]);

	const handleDrawerToggle = () => {
		setDrawerOpen(!drawerOpen);
	};

	const drawerContent = (
		<Box sx={{ p: 2, width: 250 }} onClick={handleDrawerToggle}>
			<Typography
				ref={sidebarLogoRef}
				variant="h6"
				component="div"
				sx={{
					backgroundImage: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
					WebkitBackgroundClip: "text",
					WebkitTextFillColor: "transparent",
				}}
			>
				Abhinav Choubey
			</Typography>
			<List>
				{pages.map((page, index) => (
					<ListItem
						ref={(link) => (sidebarLinksRef.current[index] = link)}
						key={page.name}
						disablePadding
					>
						<ListItemButton
							component={RouterLink}
							to={page.path}
							sx={{
								borderRadius: 1,
								"&:hover": {
									backgroundColor: "rgba(187, 134, 252, 0.1)",
									color: theme.palette.primary.main,
								},
							}}
						>
							<ListItemText primary={page.name} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	const tl = gsap.timeline();
	const tl2 = gsap.timeline();
	useGSAP(() => {
		gsap.from(navLogoRef.current, {
			y: -20,
			opacity: 0,
		});
		gsap.from(sidebarLogoRef.current, {
			y: -20,
			opacity: 0,
		});

		tl.from(navLinksRef.current, {
			y: -20,
			opacity: 0,
			duration: 1,
			stagger: 0.1,
		});
		tl2.from(sidebarLinksRef.current, {
			y: -20,
			opacity: 0,
			duration: 1,
			stagger: 0.1,
		});
	});

	return (
		<AppBar
			position="sticky"
			elevation={0}
			sx={{ backdropFilter: "blur(8px)" }}
		>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Typography
						ref={navLogoRef}
						variant="h6"
						noWrap
						component={RouterLink}
						to="/"
						sx={{
							mr: 2,
							display: { xs: "none", md: "flex" },
							fontWeight: 700,
							backgroundImage: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
							textDecoration: "none",
						}}
					>
						Abhinav Choubey
					</Typography>

					{isMobile ? (
						<>
							<Typography
								variant="h6"
								noWrap
								component={RouterLink}
								to="/"
								sx={{
									flexGrow: 1,
									position: "sticky",
									backgroundImage: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
									WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent",
								}}
							>
								Abhinav Choubey
							</Typography>

							<IconButton
								aria-label="open drawer"
								edge="end"
								onClick={handleDrawerToggle}
								sx={{ color: "white" }}
							>
								<MenuIcon />
							</IconButton>

							<Drawer
								anchor="right"
								open={drawerOpen}
								onClose={handleDrawerToggle}
								PaperProps={{
									sx: {
										backgroundColor: theme.palette.background.paper,
									},
								}}
							>
								{drawerContent}
							</Drawer>
						</>
					) : (
						<>
							<Box
								sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}
							>
								{pages.map((page, index) =>
									location.pathname === page.path ? (
										<Button
											ref={(link) => (navLinksRef.current[index] = link)}
											key={page.name}
											component={RouterLink}
											to={page.path}
											sx={{
												my: 2,
												mx: 1,
												color: theme.palette.primary.main,
												display: "block",
											}}
										>
											{page.name}
										</Button>
									) : (
										<Button
											ref={(link) => (navLinksRef.current[index] = link)}
											key={page.name}
											component={RouterLink}
											to={page.path}
											sx={{
												my: 2,
												mx: 1,
												color: "white",
												display: "block",
												"&:hover": {
													color: theme.palette.primary.main,
												},
											}}
										>
											{page.name}
										</Button>
									)
								)}
							</Box>

							<Box sx={{ flexGrow: 0 }}>
								<DarkModeIcon sx={{ color: "#121212" }} />
							</Box>
						</>
					)}
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export { Navbar };
