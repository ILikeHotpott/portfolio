"use client";

import React, {useRef, useEffect, useState} from "react";
import {
    Button,
    TextField,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
} from "@mui/material";
import emailjs from "@emailjs/browser";

export default function SendMessage() {
    const form = useRef();
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [organization, setOrganization] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const [errors, setErrors] = useState({});

    useEffect(() => {
        emailjs.init("aiTYekjYZIGPDJ2UI");
    }, []);

    const validateForm = () => {
        let valid = true;
        const newErrors = {};

        if (!name.trim()) {
            newErrors.name = "Name is required";
            valid = false;
        }

        if (!email.trim()) {
            newErrors.email = "Email is required";
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Email is invalid";
            valid = false;
        }

        if (!subject.trim()) {
            newErrors.subject = "Subject is required";
            valid = false;
        }

        if (!message.trim()) {
            newErrors.message = "Message is required";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const checkRateLimit = () => {
        const submissions = JSON.parse(localStorage.getItem("submissions") || "[]");
        const now = Date.now();

        const recentSubmissions = submissions.filter(
            (timestamp) => now - timestamp < 3600000
        );

        if (recentSubmissions.length >= 10) {
            alert(
                "You have reached the maximum number of submissions per hour. Please try again later."
            );
            return false;
        } else {
            recentSubmissions.push(now);
            localStorage.setItem("submissions", JSON.stringify(recentSubmissions));
            return true;
        }
    };

    const sendEmail = (e) => {
        e.preventDefault();
        console.log("SendMessage component rendered");

        if (!validateForm()) return;
        if (!checkRateLimit()) return;

        const templateParams = {
            name,
            organization,
            email,
            subject,
            message,
        };

        emailjs.send("service_7hkeayp", "template_a3y3cze", templateParams).then(
            (result) => {
                console.log("EmailJS Result:", result.text);
                // 清空表单
                setName("");
                setOrganization("");
                setEmail("");
                setSubject("");
                setMessage("");
                setErrors({});
                // 打开弹窗
                setOpen(true);
            },
            (error) => {
                console.error("EmailJS Error:", error.text);
                alert("Failed to send message, please try again.");
            }
        );
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className=" w-full flex justify-start px-4 py-10">
            <div className="max-w-3xl w-full">
                <h1 className="text-5xl font-bold mb-8">Contact Me</h1>

                <p className="text-lg mb-4">
                    Thank you for your interest.
                </p>

                <div
                    className="w-full flex flex-col gap-6 py-6"
                >
                    <form ref={form} className="flex flex-col gap-y-14" onSubmit={sendEmail}>
                        <TextField
                            label="NAME "
                            name="name"
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            error={Boolean(errors.name)}
                            helperText={errors.name}
                            variant="outlined"
                            sx={{
                                "& .MuiInputLabel-root": {color: "#ccc"},
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": {
                                        borderColor: "#aaa",
                                    },
                                    "&:hover fieldset": {
                                        borderColor: "#fff",
                                    },
                                    "&.Mui-focused fieldset": {
                                        borderColor: "#fff",
                                    },
                                },
                                "& .MuiInputBase-input": {
                                    color: "#fff",
                                },
                                "& .MuiFormHelperText-root": {
                                    color: "#ccc",
                                },
                            }}
                        />

                        {/* Email */}
                        <TextField
                            label="EMAIL "
                            name="email"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            error={Boolean(errors.email)}
                            helperText={errors.email}
                            variant="outlined"
                            sx={{
                                "& .MuiInputLabel-root": {color: "#ccc"},
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": {
                                        borderColor: "#aaa",
                                    },
                                    "&:hover fieldset": {
                                        borderColor: "#fff",
                                    },
                                    "&.Mui-focused fieldset": {
                                        borderColor: "#fff",
                                    },
                                },
                                "& .MuiInputBase-input": {
                                    color: "#fff",
                                },
                                "& .MuiFormHelperText-root": {
                                    color: "#ccc",
                                },
                            }}
                        />

                        {/* Organization (可选项） */}
                        <TextField
                            label="ORGANIZATION"
                            name="organization"
                            type="text"
                            value={organization}
                            onChange={(e) => setOrganization(e.target.value)}
                            variant="outlined"
                            sx={{
                                "& .MuiInputLabel-root": {color: "#ccc"},
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": {
                                        borderColor: "#aaa",
                                    },
                                    "&:hover fieldset": {
                                        borderColor: "#fff",
                                    },
                                    "&.Mui-focused fieldset": {
                                        borderColor: "#fff",
                                    },
                                },
                                "& .MuiInputBase-input": {
                                    color: "#fff",
                                },
                                "& .MuiFormHelperText-root": {
                                    color: "#ccc",
                                },
                            }}
                        />

                        <TextField
                            label="SUBJECT "
                            name="subject"
                            type="text"
                            required
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            error={Boolean(errors.subject)}
                            helperText={errors.subject}
                            variant="outlined"
                            sx={{
                                "& .MuiInputLabel-root": {color: "#ccc"},
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": {
                                        borderColor: "#aaa",
                                    },
                                    "&:hover fieldset": {
                                        borderColor: "#fff",
                                    },
                                    "&.Mui-focused fieldset": {
                                        borderColor: "#fff",
                                    },
                                },
                                "& .MuiInputBase-input": {
                                    color: "#fff",
                                },
                                "& .MuiFormHelperText-root": {
                                    color: "#ccc",
                                },
                            }}
                        />

                        {/* Message */}
                        <TextField
                            label="MESSAGE "
                            name="message"
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            error={Boolean(errors.message)}
                            helperText={errors.message}
                            multiline
                            rows={5}
                            variant="outlined"
                            sx={{
                                "& .MuiInputLabel-root": {color: "#ccc"},
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": {
                                        borderColor: "#aaa",
                                    },
                                    "&:hover fieldset": {
                                        borderColor: "#fff",
                                    },
                                    "&.Mui-focused fieldset": {
                                        borderColor: "#fff",
                                    },
                                },
                                "& .MuiInputBase-input": {
                                    color: "#fff",
                                },
                                "& .MuiFormHelperText-root": {
                                    color: "#ccc",
                                },
                            }}
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                mt: 1,
                                color: "#000",
                                width: "30%",
                                height: "50px",
                                backgroundColor: "#fff",
                                "&:hover": {
                                    backgroundColor: "#ddd",
                                },
                            }}
                        >
                            Submit
                        </Button>
                    </form>
                </div>
            </div>

            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
                <DialogTitle
                    sx={{
                        backgroundColor: "#333",
                        color: "#fff",
                    }}
                >
                    Your message has been sent successfully!
                </DialogTitle>
                <DialogContent sx={{backgroundColor: "#333"}}>
                    <DialogContentText sx={{color: "#fff"}}>
                        Thank you for your message. I'll get back to you as soon as possible.
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{backgroundColor: "#333"}}>
                    <Button color="primary" onClick={handleClose} autoFocus sx={{color: "#fff"}}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
