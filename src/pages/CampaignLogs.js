import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CampaignLogs.css';  // Add this line to import styles

function CampaignLogs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/campaigns/logs');
        setLogs(res.data);
      } catch (err) {
        console.error('Failed to fetch logs', err);
      }
    };
    fetchLogs();
  }, []);

  return (
    <div className="logs-container">
      <h2 className="logs-title">Campaign Communication Logs</h2>
      {logs.length === 0 ? (
        <p className="no-logs">No logs available yet.</p>
      ) : (
        <div className="table-wrapper">
          <table className="logs-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Customer</th>
                <th>Message</th>
                <th>Status</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log, index) => (
                <tr key={log._id} className="log-row">
                  <td>{index + 1}</td>
                  <td>{log.customerName || 'Unknown'}</td>
                  <td className="message-cell">{log.message}</td>
                  <td className={`status-cell ${log.status === 'SENT' ? 'sent' : 'failed'}`}>
                    {log.status}
                  </td>
                  <td>{new Date(log.timestamp).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default CampaignLogs;
