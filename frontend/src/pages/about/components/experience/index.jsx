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
import { Work } from "@mui/icons-material";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

export function Experience({ profileData }) {
	const containerRef = useRef(null);
	const headingRef = useRef(null);
	const experiencesRef = useRef([]);
	useGSAP(() => {
		const tl = gsap.timeline();
		tl.from(headingRef.current, {
			opacity: 0,
			y: 50,
			stagger:1,
			scrollTrigger: {
				trigger: containerRef.current,
				scroller: "body",
				scrub: 1,
				start: "top 30%",
				end: "bottom 40%",
			},
		});

		tl.from(experiencesRef.current, {
			opacity: 0,
			y: 200,
			duration: 1,
			delay: 1,
			stagger: 1,
			scrollTrigger: {
				scroller: "body",
				trigger: containerRef.current,
				start: "top 50%",
				end: "bottom 100%",
				scrub: 1,
			},
		});
	});
	return (
		<Box sx={{ mb: 8 }} ref={containerRef}>
			<Typography
				variant="h3"
				component="h2"
				align="center"
				gutterBottom
				fontWeight="bold"
				sx={{ mb: 6 }}
			>
				Work Experience
			</Typography>

			<Timeline position="alternate">
				{profileData.experience.map((exp, index) => (
					<TimelineItem
						ref={(ex) => (experiencesRef.current[index] = ex)}
						key={index}
					>
						<TimelineOppositeContent color="text.secondary">
							<Typography variant="body2">{exp.period}</Typography>
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineDot color="secondary">
								<Work />
							</TimelineDot>
							{index < profileData.experience.length - 1 && (
								<TimelineConnector />
							)}
						</TimelineSeparator>
						<TimelineContent>
							<Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
								<Typography variant="h6" component="h3" fontWeight="bold">
									{exp.title}
								</Typography>
								<Typography variant="subtitle1" color="primary">
									{exp.company}
								</Typography>
								<Typography
									variant="body2"
									color="text.secondary"
									sx={{ mt: 1 }}
								>
									{exp.description}
								</Typography>
							</Paper>
						</TimelineContent>
					</TimelineItem>
				))}
			</Timeline>
		</Box>
	);
}
