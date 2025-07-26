import React, { useState } from 'react';
import styles from './TableBooking.module.css'; // Import CSS module

const TableBooking = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    guests: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(formData.guests) <= 0) {
      alert("Please enter a valid number of guests.");
      return;
    }
    console.log("Table booked:", formData);
    alert("Table booked successfully!");
    setFormData({ name: '', date: '', time: '', guests: '' });
  };

  return (
    <div className={styles.container}>
      <h2>Book a Table</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          type="date"
          name="date"
          required
          value={formData.date}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          type="time"
          name="time"
          required
          value={formData.time}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          type="number"
          name="guests"
          placeholder="Number of Guests"
          required
          value={formData.guests}
          onChange={handleChange}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Book Now</button>
      </form>
    </div>
  );
};

export default TableBooking;
