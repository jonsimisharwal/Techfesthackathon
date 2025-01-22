
import React from 'react';

const ReminderList = ({ reminders, onDelete }) => {
  if (!reminders || reminders.length === 0) {
    return <p>No reminders found. Add a reminder to get started!</p>;
  }

  return (
    <div>
      {reminders.map((reminder, index) => (
        <div key={index} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
          <h3>{reminder.title}</h3>
          <p><strong>Time:</strong> {new Date(reminder.time).toLocaleString()}</p>
          <p><strong>Description:</strong> {reminder.description}</p>
          <p><strong>Category:</strong> {reminder.category || 'None'}</p>
          <button onClick={() => onDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ReminderList;

