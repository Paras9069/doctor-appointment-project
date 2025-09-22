import React, { useState, useEffect } from 'react';

const AdminAppointments = () => {
  const [pendingAppointments, setPendingAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctors, setSelectedDoctors] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPendingAppointments = async () => {
      try {
        const response = await fetch('http://localhost:9000/pending-appointments');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data.statuscode === 1) {
          setPendingAppointments(data.data);
          setDoctors(data.doctors);
        } else {
          setError(data.message || 'Failed to fetch pending appointments');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPendingAppointments();
  }, []);

  const handleDoctorSelect = (appointmentId, doctorId) => {
    setSelectedDoctors(prev => ({
      ...prev,
      [appointmentId]: doctorId
    }));
  };

  const handleStatusUpdate = async (id, status) => {
    try {
      const doctorId = selectedDoctors[id];
      const response = await fetch(`http://localhost:9000/update-appointment/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status, doctorId }),
      });

      if (response.ok) {
        const result = await response.json();
        if (result.statuscode === 1) {
          // Remove the updated appointment from the pending list
          setPendingAppointments(prev => prev.filter(app => app._id !== id));
        }
      }
    } catch (err) {
      console.error('Error updating appointment:', err);
    }
  };

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '18px',
        color: '#555'
      }}>
        Loading pending appointments...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '18px',
        color: 'red'
      }}>
        Error: {error}
      </div>
    );
  }

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '40px auto',
      padding: '20px',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      <h1 style={{
        color: '#2c3e50',
        fontSize: '32px',
        fontWeight: '600',
        marginBottom: '30px',
        borderBottom: '2px solid #3498db',
        paddingBottom: '10px'
      }}>
        Pending Appointment Requests
      </h1>

      {pendingAppointments.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '40px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}>
          <p style={{ fontSize: '18px', color: '#7f8c8d' }}>
            No pending appointment requests at the moment.
          </p>
        </div>
      ) : (
        <div style={{
          overflowX: 'auto',
          borderRadius: '8px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.08)'
        }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            backgroundColor: 'white'
          }}>
            <thead>
              <tr style={{
                backgroundColor: '#3498db',
                color: 'white'
              }}>
                <th style={{ padding: '15px', textAlign: 'left' }}>Name</th>
                <th style={{ padding: '15px', textAlign: 'left' }}>Email</th>
                <th style={{ padding: '15px', textAlign: 'left' }}>Contact</th>
                <th style={{ padding: '15px', textAlign: 'left' }}>Date</th>
                <th style={{ padding: '15px', textAlign: 'left' }}>Time</th>
                <th style={{ padding: '15px', textAlign: 'left' }}>Symptoms</th>
                <th style={{ padding: '15px', textAlign: 'left' }}>Assign Doctor</th>
                <th style={{ padding: '15px', textAlign: 'left' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {pendingAppointments.map((appointment) => (
                <tr key={appointment._id} style={{
                  borderBottom: '1px solid #f0f0f0',
                  ':hover': {
                    backgroundColor: '#f8fafc'
                  }
                }}>
                  <td style={{ padding: '15px' }}>{appointment.Name}</td>
                  <td style={{ padding: '15px' }}>{appointment.email}</td>
                  <td style={{ padding: '15px' }}>{appointment.contact}</td>
                  <td style={{ padding: '15px' }}>{appointment.date}</td>
                  <td style={{ padding: '15px' }}>{appointment.time}</td>
                  <td style={{ padding: '15px' }}>{appointment.symptoms}</td>
                  <td style={{ padding: '15px' }}>
                    <select
                      value={selectedDoctors[appointment._id] || ''}
                      onChange={(e) => handleDoctorSelect(appointment._id, e.target.value)}
                      style={{
                        padding: '8px',
                        borderRadius: '4px',
                        border: '1px solid #ddd',
                        width: '100%'
                      }}
                    >
                      <option value="">Select Doctor</option>
                      {doctors.map(doctor => (
                        <option key={doctor._id} value={doctor._id}>
                          {doctor.name} ({doctor.quali})
                        </option>
                      ))}
                    </select>
                  </td>
                  <td style={{ padding: '15px' }}>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <button
                        onClick={() => handleStatusUpdate(appointment._id, 'approved')}
                        disabled={!selectedDoctors[appointment._id]}
                        style={{
                          padding: '8px 15px',
                          backgroundColor: selectedDoctors[appointment._id] ? '#27ae60' : '#95a5a6',
                          color: 'white',
                          border: 'none',
                          borderRadius: '4px',
                          cursor: selectedDoctors[appointment._id] ? 'pointer' : 'not-allowed',
                          transition: 'all 0.3s',
                          ':hover': {
                            backgroundColor: selectedDoctors[appointment._id] ? '#219653' : '#95a5a6'
                          }
                        }}
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleStatusUpdate(appointment._id, 'rejected')}
                        style={{
                          padding: '8px 15px',
                          backgroundColor: '#e74c3c',
                          color: 'white',
                          border: 'none',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          transition: 'all 0.3s',
                          ':hover': {
                            backgroundColor: '#c0392b'
                          }
                        }}
                      >
                        Reject
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminAppointments;