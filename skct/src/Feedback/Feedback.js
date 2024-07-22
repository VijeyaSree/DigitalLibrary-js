import React, { useState } from 'react';
import '../Feedback/Feedback.css';


const Feedback = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    feedback: '',
    rating: 0 // Initialize rating to 0
  });

  const [isSubmitted, setIsSubmitted] = useState(false);  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleRatingChange = (rating) => {
    setFormData(prevState => ({
      ...prevState,
      rating: rating
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if all required fields are filled
    if (formData.fullName && formData.email && formData.feedback) {
      console.log(formData);
      setFormData({
        fullName: '',
        email: '',
        feedback: '',
        rating: 0 // Reset rating to 0 after submission
      });
      setIsSubmitted(true);
      alert("Feedback submitted successfully!");
    } else {
      alert("Please fill in all required fields.");
    }
  };

  const handleMail = () => {
    const { fullName, email, feedback, rating } = formData;
    const subject = 'Feedback Submission';
    const body = `Name: ${fullName}%0D%0AEmail: ${email}%0D%0AFeedback: ${feedback}%0D%0ARating: ${rating}`;
    const mailtoLink = `mailto:receiver@example.com?subject=${subject}&body=${body}`;
    window.open(mailtoLink);
  };

  // Star Component
  const Star = ({ selected = false, onClick = () => {} }) => (
    <span className={selected ? "fas fa-star checked" : "far fa-star"} onClick={onClick}></span>
  );

  // Star Rating Component
  const StarRating = ({ totalStars, selectedStars, onRate }) => (
    <div className="rating-container">
      {[...Array(totalStars)].map((_, index) => (
        <Star
          key={index}
          selected={index < selectedStars}
          onClick={() => onRate(index + 1)}
        />
      ))}
    </div>
  );

  return (
    <div className="feedback-con">
      <h2>FEEDBACK</h2>
      {isSubmitted ? (
        <p className='submission-message'>
        <button onClick={handleMail}>If Any Queries Email Us</button><br></br>Visit Again!!!</p>):(
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name:</label>
            <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="feedback">Feedback:</label>
            <textarea id="feedback" name="feedback" value={formData.feedback} onChange={handleChange} rows="5" required />
          </div>
          <div className="form-group">
            <label>Rating:</label>
            <StarRating
              totalStars={5}
              selectedStars={formData.rating}
              onRate={handleRatingChange}
            />
          </div>
          <button type="submit">Send</button>
        </form>
      )}
    </div>
  );
};

export default Feedback;
