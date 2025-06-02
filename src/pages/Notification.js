// Notification.js
import React from 'react';
import './Notification.css';

export default function Notification({ message, type, onClose }) {
  // type: "success" | "error"
  return (
    <div className={`notification ${type}`}>
      <p>{message}</p>
      <button onClick={onClose} className="close-btn">&times;</button>
    </div>
  );
}
