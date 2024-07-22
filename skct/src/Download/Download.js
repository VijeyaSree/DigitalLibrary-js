import React, { useState } from 'react';
import './Download.css'; 
import { useNavigate } from 'react-router-dom';

const Download = () => {
  const navigate = useNavigate();

  // Sample data for library items
  const libraryItems = [
    { id: 1, title: 'Book 1', author: 'Author 1', url: 'https://www.ece.uvic.ca/~frodo/sigsysbook/downloads/signals_and_systems-3.0.pdf' },
    { id: 2, title: 'Book 2', author: 'Author 2', url: 'https://idriesshahfoundation.org/pdfviewer/after-a-swim/?auto_viewer=true#page=&zoom=auto&pagemode=none' },
    { id: 3, title: 'Book 3', author: 'Author 3', url: 'https://idriesshahfoundation.org/pdfviewer/the-ants-and-the-pen/?auto_viewer=true#page=&zoom=auto&pagemode=none' },
    // Add more items as needed
  ];

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    selectedBook: '',
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleDownload = (url) => {
    setLoading(true);
    // Simulate download action with a delay of 2 seconds
    setTimeout(() => {
      setLoading(false);
      console.log('Downloading book:', url);
      // Create an anchor element to trigger the download
      const downloadAnchor = document.createElement('a');
      downloadAnchor.href = url;
      downloadAnchor.download = `book1.pdf`; // Change the filename as needed
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      document.body.removeChild(downloadAnchor);
      navigate('/feedback');
    }, 2000); // Reduced the delay to 2 seconds for demonstration
  };

  return (
    <div className="download-container">
      <h1>Digital Library</h1>
      <div className="library-container">
        {libraryItems.map(item => (
          <div key={item.id} className="library-item">
            <h2>{item.title}</h2>
            <p>Author: {item.author}</p>
            <button onClick={() => setFormData(prevState => ({ ...prevState, selectedBook: item.url }))}>
              {loading ? 'Selected' : 'Select'}
            </button>
          </div>
        ))}
      </div>
      <div className="user-details">
        <h2>User Details</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} required />
          <label htmlFor="selectedBook">Select Book:</label>
          <select id="selectedBook" name="selectedBook" value={formData.selectedBook} onChange={handleInputChange} required>
            <option value="">Select a book</option>
            {libraryItems.map(item => (
              <option key={item.id} value={item.url}>{item.title}</option>
            ))}
          </select>
          <button onClick={() => handleDownload(formData.selectedBook)}>
            {loading ? 'Downloading...' : 'Download'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Download;
