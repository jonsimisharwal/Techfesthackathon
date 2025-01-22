import React, { useState } from 'react';

const ReminderForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !time || !description) {
      alert('Please fill in all fields!');
      return;
    }

    onSubmit({ title, time, description, category });
    setTitle('');
    setTime('');
    setDescription('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter reminder title"
          required
        />
      </div>
      <div>
        <label>Time:</label>
        <input
          type="datetime-local"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter reminder description"
          required
        ></textarea>
      </div>
      <div>
        <label>Category:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="Task">Task</option>
          <option value="Event">Event</option>
          <option value="Appointment">Appointment</option>
        </select>
      </div>
      <button type="submit">Add Reminder</button>
    </form>
  );
};

export default ReminderForm;
