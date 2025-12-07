import React, { useEffect, useState } from "react";

function FormPopup() {
  const [show, setShow] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setShow(false);

  const handlePost = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    const target = event.target;
    const date = new Date();

    // Phone validation
    const phoneValue = target.phone.value.trim();
    const phonePattern = /^[0-9]{10,15}$/;
    if (!phonePattern.test(phoneValue)) {
      alert("Please enter a valid phone number (10-15 digits).");
      setSubmitting(false);
      return;
    }

    const inputValue = {
      Name: target.name.value,
      Phone: phoneValue,
      Email: target.email.value,
      Location: target.location.value,
      "Created At": date.toLocaleString(),
    };

    const APP_ID =
      "AKfycbzIVqs-dqu5gANgZGSWRzasqfKYa7t4Hsez0LIkfUzZPbWmCFYTCd3pjolp7TvL9RPVOA";
    const baseURL = `https://script.google.com/macros/s/${APP_ID}/exec`;

    const formData = new FormData();
    Object.keys(inputValue).forEach((key) => {
      formData.append(key, inputValue[key]);
    });

    try {
      const res = await fetch(baseURL, {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (e) {
      alert("Error during submission.");
    } finally {
      setSubmitting(false);
    }
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
              Fill The Details For Better <br />
              Support
            </h2>
            <form onSubmit={handlePost} style={styles.form}>
              <label>
                Name
                <span className="px-2" style={{ color: "red" }}>
                  *
                </span>
                <input
                  style={styles.input}
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  required
                />
              </label>
              <label>
                Phone{" "}
                <span className="px-2" style={{ color: "red" }}>
                  *
                </span>
                <input
                  style={styles.input}
                  type="tel"
                  name="phone"
                  placeholder="Enter Phone Number"
                  required
                  pattern="^[0-9]{10,15}$"
                  title="Please enter a valid phone number (10-15 digits)"
                />
              </label>
              <label>
                Email
                <span className="px-4"></span>
                <input
                  style={styles.input}
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                />
              </label>
              <label>
                Location
                <span className="px-1"></span>
                <input
                  style={styles.input}
                  type="text"
                  name="location"
                  placeholder="Enter Location"
                />
              </label>
              <button
                style={styles.submitBtn}
                type="submit"
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </>
        ) : (
          <div style={styles.successMsg}>
            <h3>Thank you!</h3>
            <p>Your information has been submitted.</p>
            <button style={styles.submitBtn} onClick={handleClose}>
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  popup: {
    background: "#fff",
    borderRadius: "12px",
    padding: "32px 24px 24px 24px",
    minWidth: "320px",
    maxWidth: "90vw",
    boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
    position: "relative",
    animation: "fadeIn 0.3s",
  },
  closeBtn: {
    position: "absolute",
    top: 12,
    right: 16,
    background: "none",
    border: "none",
    fontSize: "1.5rem",
    cursor: "pointer",
    color: "#888",
  },
  title: {
    margin: "0 0 18px 0",
    fontWeight: 600,
    fontSize: "1.4rem",
    textAlign: "center",
    color: "#222",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },
  input: {
    padding: "10px 12px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    fontSize: "1rem",
    outline: "none",
    transition: "border 0.2s",
  },
  submitBtn: {
    marginTop: "10px",
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    background: "#000000",
    color: "#fff",
    fontWeight: 600,
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background 0.2s",
  },
  successMsg: {
    textAlign: "center",
    padding: "20px 0",
  },
};

export default FormPopup;
