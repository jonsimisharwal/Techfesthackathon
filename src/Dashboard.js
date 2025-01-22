import React, { useState } from 'react';
import ReminderForm from './ReminderForm';
import ReminderList from './ReminderList';

const Dashboard = () => {
  const [reminders, setReminders] = useState([]);

  const addReminder = (reminder) => {
    setReminders([...reminders, reminder]);
  };

  const deleteReminder = (index) => {
    const newReminders = reminders.filter((_, i) => i !== index);
    setReminders(newReminders);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Reminder Bot</h1>
      <ReminderForm onSubmit={addReminder} />
      <ReminderList reminders={reminders} onDelete={deleteReminder} />
    </div>
  );
};

export default Dashboard;
