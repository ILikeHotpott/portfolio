import React, {useRef, useEffect, useState} from "react";
import {
    Button,
    Input,
    Textarea,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
} from "@nextui-org/react";
import emailjs from "@emailjs/browser";
import {Icon} from "@iconify/react";

export default function SendMessage() {
    const form = useRef();
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const [errors, setErrors] = useState({});

    useEffect(() => {
        emailjs.init("aiTYekjYZIGPDJ2UI");
    }, []);

    // Form validation logic
    const validateForm = () => {
        let valid = true;
        const newErrors = {};

        if (!firstName.trim()) {
            newErrors.firstName = "First name is required";
            valid = false;
        }

        if (!lastName.trim()) {
            newErrors.lastName = "Last name is required";
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

        // Remove submissions older than 1 hour
        const recentSubmissions = submissions.filter(
            (timestamp) => now - timestamp < 3600000
        );

        if (recentSubmissions.length >= 3) {
            alert(
                "You have reached the maximum number of submissions per hour. Please try again later."
            );
            return false;
        } else {
            // Add current timestamp
            recentSubmissions.push(now);
            localStorage.setItem("submissions", JSON.stringify(recentSubmissions));
            return true;
        }
    };

    const sendEmail = (e) => {
        e.preventDefault();
        console.log("SendMessage component rendered");

        if (!validateForm()) {
            return;
        }

        if (!checkRateLimit()) {
            return;
        }

        const templateParams = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            subject: subject,
            message: message,
        };

        emailjs
            .send("service_7hkeayp", "template_a3y3cze", templateParams)
            .then(
                (result) => {
                    console.log("EmailJS Result:", result.text);
                    // Clear form
                    setFirstName("");
                    setLastName("");
                    setEmail("");
                    setSubject("");
                    setMessage("");
                    setErrors({});
                    // Open modal
                    onOpen();
                },
                (error) => {
                    console.error("EmailJS Error:", error.text);
                    alert("Failed to send message, please try again.");
                }
            );
    };

    return (
        <div
            className="flex h-[90vh] w-screen justify-end overflow-hidden rounded-small bg-content1 p-2 sm:p-4 lg:p-8"
            style={{
                backgroundImage:
                    "url(https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/danielhaha.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute left-10 hidden md:block">
                <span className="text-3xl leading-loose text-white">Drop a line...</span>
                <p className="max-w-xl text-white text-2xl leading-relaxed">
                    if you have questions, want to work together, wish to know more about
                    me or just feel like chatting! Fill out the form or write to
                    yitong1210@gmail.com <br/>
                </p>
            </div>

            <div
                className="flex w-full max-w-lg flex-col gap-6 rounded-large bg-content1 px-8 pb-6 pt-8 shadow-small text-md">
                <p className="pb-4 text-3xl text-default-600 font-semibold">
                    Send Message
                </p>
                <form ref={form} className="flex flex-col gap-5" onSubmit={sendEmail}>
                    <div className="flex gap-4">
                        <Input
                            label="First Name"
                            name="first_name"
                            type="text"
                            variant="bordered"
                            isRequired
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            validationState={errors.firstName ? "invalid" : undefined}
                            errorMessage={errors.firstName}
                            classNames={{
                                input: "w-2/5 text-md text-default-600",
                                label: "text-md text-default-600",
                            }}
                        />
                        <Input
                            label="Last Name"
                            name="last_name"
                            type="text"
                            variant="bordered"
                            isRequired
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            validationState={errors.lastName ? "invalid" : undefined}
                            errorMessage={errors.lastName}
                            classNames={{
                                input: "w-2/5 text-md text-default-600",
                                label: "text-md text-default-600",
                            }}
                        />
                    </div>

                    <Input
                        label="Email"
                        name="email"
                        type="email"
                        variant="bordered"
                        isRequired
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        validationState={errors.email ? "invalid" : undefined}
                        errorMessage={errors.email}
                        classNames={{
                            input: "w-full text-md text-default-600",
                            label: "text-md text-default-600",
                        }}
                    />

                    <Input
                        label="Subject"
                        name="subject"
                        type="text"
                        variant="bordered"
                        isRequired
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        validationState={errors.subject ? "invalid" : undefined}
                        errorMessage={errors.subject}
                        classNames={{
                            input: "w-full text-md text-default-600",
                            label: "text-md text-default-600",
                        }}
                    />

                    <Textarea
                        label="Message"
                        name="message"
                        variant="bordered"
                        isRequired
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        validationState={errors.message ? "invalid" : undefined}
                        errorMessage={errors.message}
                        className="w-full text-md"
                        minRows={5}
                        classNames={{
                            input: "w-full text-md text-default-600",
                            label: "text-md text-default-600",
                        }}
                    />

                    <Button
                        color="primary"
                        type="submit"
                        className="mt-2 text-md px-6 py-3"
                    >
                        Submit
                    </Button>
                    <a href={"https://www.linkedin.com/in/yitong-liu-0239552b4/"}>
                        <Icon className="text-default-400" icon="skill-icons:linkedin" width={56}/>
                    </a>
                </form>
            </div>

            <Modal
                backdrop="opaque"
                size={"lg"}
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                motionProps={{
                    variants: {
                        enter: {
                            y: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.3,
                                ease: "easeOut",
                            },
                        },
                        exit: {
                            y: -20,
                            opacity: 0,
                            transition: {
                                duration: 0.2,
                                ease: "easeIn",
                            },
                        },
                    },
                }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 text-default-700">
                                Your message has been sent successfully!
                            </ModalHeader>
                            <ModalBody>
                                <p className={"text-default-700"}>
                                    Thank you for your message. I'll get back to you as soon as
                                    possible.
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onPress={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}
