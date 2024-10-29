import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        // Validate name
        if (!formData.name) newErrors.name = "Name is required";

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) newErrors.email = "Email is required";
        else if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email address";

        // Validate message
        if (!formData.message) newErrors.message = "Message is required";

        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            alert("Form submitted successfully!");
            // Reset form after submission
            setFormData({ name: '', email: '', message: '' });
        }
    };

    return (
        <section id="contact">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                    {errors.name && <span className="error">{errors.name}</span>}
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    {errors.email && <span className="error">{errors.email}</span>}
                </label>
                <label>
                    Message:
                    <textarea name="message" value={formData.message} onChange={handleChange} />
                    {errors.message && <span className="error">{errors.message}</span>}
                </label>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default Contact;
