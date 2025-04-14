import { Button, Container, Typography } from "@mui/material";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

export function GetInTouch() {
	const headingRef = useRef(null);
	const subHeadingRef = useRef(null);
	const buttonRef = useRef(null);
	const containerRef = useRef(null);

	const navigate = useNavigate();
	useGSAP(() => {
		const tl = gsap.timeline()
		tl.from(headingRef.current, {
			x: -100,
			delay: 1,
			opacity: 0,
			duration: 1,
			stagger: 0.5,
			scrollTrigger: {
				scroller: "body",
				trigger: containerRef.current,
				scrub:1,
				start:"top 80%",
				end:"bottom 60%",
			},
		});
		tl.from(subHeadingRef.current, {
			x: 100,
			delay: 1,
			opacity: 0,
			duration: 1,
			stagger: 0.5,
			scrollTrigger: {
				scroller: "body",
				trigger: containerRef.current,
				start: "top 80%",
				end: "bottom 60%",
				scrub: 1,
			},
		});
		tl.from(buttonRef.current, {
			y: -100,
			delay: 1,
			opacity: 0,
			duration: 1,
			stagger: 0.5,
			scrollTrigger: {
				scroller: "body",
				trigger: containerRef.current,
				start: "top 80%",
				end: "bottom 60%",
				scrub: 1,
			},
		});
	});
	return (
		<Container
			ref={containerRef}
			maxWidth="md"
			sx={{ textAlign: "center", my: 12 }}
		>
			<Typography
				ref={headingRef}
				component="h2"
				variant="h3"
				color="text.primary"
				gutterBottom
				fontWeight="bold"
			>
				Let's Work Together
			</Typography>
			<Typography
				ref={subHeadingRef}
				variant="h6"
				color="text.secondary"
				paragraph
				sx={{ mb: 4 }}
			>
				I'm currently available for freelance projects and full-time
				opportunities.
			</Typography>
			<Button
				ref={buttonRef}
				variant="contained"
				color="primary"
				size="large"
				onClick={() => navigate("/contact")}
				sx={{ px: 4, py: 1.5 }}
			>
				Get in Touch
			</Button>
		</Container>
	);
}
