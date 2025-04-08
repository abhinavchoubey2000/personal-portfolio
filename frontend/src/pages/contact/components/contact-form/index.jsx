import { Send } from "@mui/icons-material";
import {
	Alert,
	Button,
	Grid,
	Paper,
	Snackbar,
	TextField,
	Typography,
} from "@mui/material";
import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function ContactForm() {
	const contactFormRef = useRef();
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [snackbar, setSnackbar] = useState({
		open: false,
		message: "",
		severity: "success",
	});
	const [errors, setErrors] = useState({});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});

		// Clear error when field is updated
		if (errors[name]) {
			setErrors({
				...errors,
				[name]: "",
			});
		}
	};
	const handleSubmit = (e) => {
		e.preventDefault();

		if (validateForm()) {
			// In a real application, this would send the form data to a server
			console.log("Form data submitted:", formData);

			// Show success message
			setSnackbar({
				open: true,
				message: "Currenty this service is temporarily out of service, kindly contact me via Email, LinkedIn or Instagram",
				severity: "success",
			});

			// Reset form
			setFormData({
				name: "",
				email: "",
				subject: "",
				message: "",
			});
		} else {
			setSnackbar({
				open: true,
				message: "Please fix the errors in the form.",
				severity: "error",
			});
		}
	};
	const validateForm = () => {
		const newErrors = {};

		if (!formData.name.trim()) {
			newErrors.name = "Name is required";
		}

		if (!formData.email.trim()) {
			newErrors.email = "Email is required";
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)
		) {
			newErrors.email = "Invalid email address";
		}

		if (!formData.subject.trim()) {
			newErrors.subject = "Subject is required";
		}

		if (!formData.message.trim()) {
			newErrors.message = "Message is required";
		} else if (formData.message.trim().length < 10) {
			newErrors.message = "Message must be at least 10 characters";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};
	const handleCloseSnackbar = () => {
		setSnackbar({
			...snackbar,
			open: false,
		});
	};
	useGSAP(() => {
		gsap.from(contactFormRef.current, {
			x: 150,
			opacity: 0,
			duration: 0.5,
		});
	});
	return (
		<Grid item xs={12} md={7} width={"100%"} ref={contactFormRef}>
			<Paper elevation={3} sx={{ p: 4, borderRadius: 4 }}>
				<Typography variant="h4" gutterBottom fontWeight="bold">
					Send Me a Message
				</Typography>
				<Typography
					variant="body1"
					color="text.secondary"
					paragraph
					sx={{ mb: 4 }}
				>
					Got a question or proposal, or just want to say hello? Go ahead.
				</Typography>

				<form onSubmit={handleSubmit}>
					<Grid
						container
						spacing={3}
						display={"flex"}
						direction={"column"}
						width={"100%"}
					>
						<Grid item xs={12} sm={6} width={"100%"}>
							<TextField
								fullWidth
								label="Your Name"
								name="name"
								variant="outlined"
								value={formData.name}
								onChange={handleChange}
								error={!!errors.name}
								helperText={errors.name}
								required
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								fullWidth
								label="Your Email"
								name="email"
								variant="outlined"
								value={formData.email}
								onChange={handleChange}
								error={!!errors.email}
								helperText={errors.email}
								required
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								fullWidth
								label="Subject"
								name="subject"
								variant="outlined"
								value={formData.subject}
								onChange={handleChange}
								error={!!errors.subject}
								helperText={errors.subject}
								required
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								fullWidth
								label="Your Message"
								name="message"
								variant="outlined"
								multiline
								rows={6}
								value={formData.message}
								onChange={handleChange}
								error={!!errors.message}
								helperText={errors.message}
								required
							/>
						</Grid>
						<Grid item xs={12}>
							<Button
								type="submit"
								variant="contained"
								color="primary"
								size="large"
								endIcon={<Send />}
								sx={{ py: 1.5, px: 4 }}
							>
								Send Message
							</Button>
						</Grid>
					</Grid>
				</form>
			</Paper>
			<Snackbar
				open={snackbar.open}
				autoHideDuration={6000}
				onClose={handleCloseSnackbar}
			>
				<Alert
					onClose={handleCloseSnackbar}
					severity={snackbar.severity}
					sx={{ width: "100%" }}
				>
					{snackbar.message}
				</Alert>
			</Snackbar>
		</Grid>
	);
}
