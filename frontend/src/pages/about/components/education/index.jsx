import {
	Timeline,
	TimelineConnector,
	TimelineContent,
	TimelineDot,
	TimelineItem,
	TimelineOppositeContent,
	TimelineSeparator,
} from "@mui/lab";
import { Box, Paper, Typography } from "@mui/material";
import { School } from "@mui/icons-material";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

export function Education({ profileData }) {
	const headingRef = useRef(null);
	const educationsRef = useRef([]);
	const containerRef = useRef(null);

	useGSAP(() => {
		const tl = gsap.timeline();
		tl.from(headingRef.current, {
			opacity: 0,
			y: 50,
			scrollTrigger: {
				trigger: containerRef.current,
				scroller: "body",
				scrub: 1,
				start: "top 30%",
				end: "bottom 40%",
			},
		});

		tl.from(educationsRef.current, {
			opacity: 0,
			y: 200,
			duration: 1,
			delay: 1,
			stagger: 1,
			scrollTrigger: {
				scroller: "body",
				trigger: containerRef.current,
				start: "top 70%",
				end: "bottom 100%",
				scrub: 1,
			},
		});
	});

	return (
		<Box sx={{ mb: 8 }} ref={containerRef}>
			<Typography
				ref={headingRef}
				variant="h3"
				component="h2"
				align="center"
				gutterBottom
				fontWeight="bold"
				sx={{ mb: 6 }}
			>
				Education
			</Typography>

			<Timeline position="alternate">
				{profileData.education.map((edu, index) => (
					<TimelineItem ref={(edu) => (educationsRef.current[index] = edu)} key={index}>
						<TimelineOppositeContent color="text.secondary">
							<Typography variant="body2">{edu.year}</Typography>
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineDot color="primary">
								<School />
							</TimelineDot>
							{index < profileData.education.length - 1 && (
								<TimelineConnector />
							)}
						</TimelineSeparator>
						<TimelineContent>
							<Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
								<Typography variant="h6" component="h3" fontWeight="bold">
									{edu.degree}
								</Typography>
								<Typography variant="subtitle1" color="primary">
									{edu.institution}
								</Typography>
								<Typography
									variant="body2"
									color="text.secondary"
									sx={{ mt: 1 }}
								>
									{edu.description}
								</Typography>
							</Paper>
						</TimelineContent>
					</TimelineItem>
				))}
			</Timeline>
		</Box>
	);
}
