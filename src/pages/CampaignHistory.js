import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CampaignHistory.css';

function CampaignHistory() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/campaigns');
        setCampaigns(res.data);
      } catch (err) {
        console.error('Failed to fetch campaigns', err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="history-container">
      <h2 className="history-title">Campaign History</h2>
      {campaigns.length === 0 ? (
        <p className="no-campaigns">No campaigns yet.</p>
      ) : (
        <div className="table-wrapper">
          <table className="history-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Audience Size</th>
                <th>Rules</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((c, i) => (
                <tr key={c._id} className="campaign-row">
                  <td>{i + 1}</td>
                  <td>{c.audienceSize}</td>
                  <td className="rules-cell">
                    {c.rules.map((r, idx) => (
                      <div key={idx} className="rule-item">
                        <span className="rule-field">{r.field}</span>{' '}
                        <span className="rule-operator">{r.operator}</span>{' '}
                        <span className="rule-value">{r.value}</span>
                      </div>
                    ))}
                  </td>
                  <td>{new Date(c.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default CampaignHistory;
