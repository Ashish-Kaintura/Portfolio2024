import React, { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function FormPopup() {
  const [show, setShow] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const form = useRef();

  // Show popup after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setShow(false);

  const handlePost = (event) => {
    event.preventDefault();
    setSubmitting(true);

    // Phone validation
    const formData = new FormData(form.current);
    const phoneValue = formData.get("phone");
    const phonePattern = /^[0-9]{10,15}$/;

    if (!phonePattern.test(phoneValue)) {
      alert("Please enter a valid phone number (10-15 digits).");
      setSubmitting(false);
      return;
    }

    // --- EMAILJS CONFIGURATION ---
    // Replace these with your actual keys from https://dashboard.emailjs.com/
    const SERVICE_ID = "service_k8wi7n5";
    const TEMPLATE_ID = "template_k7q8o4i";
    const PUBLIC_KEY = "zVOe2FcOadbMtMxKv";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        (result) => {
          console.log(result.text);
          setSubmitted(true);
          setSubmitting(false);
        },
        (error) => {
          console.log(error.text);
          alert("Submission failed. Please try again.");
          setSubmitting(false);
        }
      );
  };

  if (!show) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <button
          style={styles.closeBtn}
          onClick={handleClose}
          aria-label="Close"
        >
          &times;
        </button>

        {!submitted ? (
          <>
            <h2 style={styles.title}>
              Let's Get in Touch
            </h2>
            <p style={styles.subtitle}>Fill in the details below for better support.</p>

            <form ref={form} onSubmit={handlePost} style={styles.form}>
              {/* Name Field */}
              <div style={styles.fieldGroup}>
                <label style={styles.label}>
                  Name <span style={styles.required}>*</span>
                </label>
                <input
                  style={styles.input}
                  type="text"
                  name="user_name" // Standard EmailJS name convention
                  placeholder="Enter Your Name"
                  required
                />
              </div>

              {/* Phone Field */}
              <div style={styles.fieldGroup}>
                <label style={styles.label}>
                  Phone <span style={styles.required}>*</span>
                </label>
                <input
                  style={styles.input}
                  type="tel"
                  name="phone"
                  placeholder="Enter Phone Number"
                  required
                  pattern="^[0-9]{10,15}$"
                />
              </div>

              {/* Email Field */}
              <div style={styles.fieldGroup}>
                <label style={styles.label}>Email</label>
                <input
                  style={styles.input}
                  type="email"
                  name="user_email" // Standard EmailJS name convention
                  placeholder="Enter Email"
                />
              </div>

              {/* Message Field (New) */}
              <div style={styles.fieldGroup}>
                <label style={styles.label}>Message</label>
                <textarea
                  style={styles.textarea}
                  name="message"
                  rows="3"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                style={styles.submitBtn}
                type="submit"
                disabled={submitting}
              >
                {submitting ? "Sending..." : "Submit Request"}
              </button>
            </form>
          </>
        ) : (
          <div style={styles.successMsg}>
            <div style={styles.checkIcon}>✓</div>
            <h3>Thank you!</h3>
            <p>Your message has been sent successfully.</p>
            <button style={styles.submitBtn} onClick={handleClose}>
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// Updated UI Styles
const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.5)",
    backdropFilter: "blur(4px)", // Adds a modern blur effect behind popup
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  popup: {
    background: "#fff",
    borderRadius: "16px",
    padding: "40px 30px",
    width: "400px",
    maxWidth: "90vw",
    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
    position: "relative",
    animation: "fadeIn 0.4s ease-out",
  },
  closeBtn: {
    position: "absolute",
    top: "15px",
    right: "20px",
    background: "transparent",
    border: "none",
    fontSize: "2rem",
    lineHeight: "1",
    cursor: "pointer",
    color: "#aaa",
    transition: "color 0.2s",
  },
  title: {
    margin: "0 0 10px 0",
    fontWeight: 700,
    fontSize: "1.6rem",
    textAlign: "center",
    color: "#1a1a1a",
  },
  subtitle: {
    margin: "0 0 25px 0",
    fontSize: "0.95rem",
    textAlign: "center",
    color: "#666",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  fieldGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    textAlign: "left",
  },
  label: {
    fontSize: "0.9rem",
    fontWeight: "600",
    color: "#444",
  },
  required: {
    color: "#e53e3e",
  },
  input: {
    padding: "12px 14px",
    borderRadius: "8px",
    border: "1px solid #e0e0e0",
    fontSize: "1rem",
    outline: "none",
    transition: "all 0.2s",
    background: "#f9f9f9",
  },
  textarea: {
    padding: "12px 14px",
    borderRadius: "8px",
    border: "1px solid #e0e0e0",
    fontSize: "1rem",
    outline: "none",
    transition: "all 0.2s",
    background: "#f9f9f9",
    resize: "vertical",
    fontFamily: "inherit",
  },
  submitBtn: {
    marginTop: "12px",
    padding: "14px",
    borderRadius: "8px",
    border: "none",
    background: "linear-gradient(135deg, #1a1a1a 0%, #333 100%)",
    color: "#fff",
    fontWeight: 700,
    fontSize: "1rem",
    cursor: "pointer",
    transition: "transform 0.1s, box-shadow 0.2s",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  successMsg: {
    textAlign: "center",
    padding: "30px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  },
  checkIcon: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    background: "#d1fae5",
    color: "#059669",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2rem",
    marginBottom: "10px",
  },
};

export default FormPopup;