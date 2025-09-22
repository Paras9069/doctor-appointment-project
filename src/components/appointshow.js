import React, { useState, useEffect } from 'react';

const Appointshow = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: 'date', direction: 'ascending' });

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch('http://localhost:9000/showappointment', {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Response is not JSON');
        }

        const data = await response.json();
        
        if (data.statuscode === 1) {
          setAppointments(data.data);
        } else {
          setError(data.message || 'Failed to fetch appointments');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const sortedAppointments = React.useMemo(() => {
    let sortableItems = [...appointments];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [appointments, sortConfig]);

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '18px',
        color: '#555',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
      }}>
        <div style={{
          padding: '30px 50px',
          backgroundColor: 'white',
          borderRadius: '10px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <div style={{
            width: '50px',
            height: '50px',
            margin: '0 auto 20px',
            border: '5px solid #f3f3f3',
            borderTop: '5px solid #3498db',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }}></div>
          Loading appointments...
        </div>
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
        background: 'linear-gradient(135deg, #fff5f5 0%, #ffcccc 100%)'
      }}>
        <div style={{
          padding: '30px 50px',
          backgroundColor: 'white',
          borderRadius: '10px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          textAlign: 'center',
          maxWidth: '500px'
        }}>
          <div style={{
            fontSize: '48px',
            color: '#ff4444',
            marginBottom: '20px'
          }}>⚠️</div>
          <h2 style={{ color: '#ff4444', marginBottom: '15px' }}>Error Loading Data</h2>
          <p style={{ color: '#555', marginBottom: '25px' }}>{error}</p>
          <button 
            onClick={() => window.location.reload()}
            style={{
              padding: '10px 25px',
              backgroundColor: '#ff4444',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
              transition: 'all 0.3s ease',
              ':hover': {
                backgroundColor: '#cc0000',
                transform: 'translateY(-2px)'
              }
            }}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      maxWidth: '1400px',
      margin: '40px auto',
      padding: '20px',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8ed 100%)',
      minHeight: '100vh'
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '30px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '30px',
          flexWrap: 'wrap'
        }}>
          <h1 style={{
            color: '#2c3e50',
            fontSize: '32px',
            fontWeight: '600',
            margin: '0'
          }}>
            Approved Appointments
          </h1>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '15px'
          }}>
            <div style={{
              padding: '8px 15px',
              backgroundColor: '#f8f9fa',
              borderRadius: '6px',
              fontSize: '14px',
              color: '#555'
            }}>
              Total: {appointments.length}
            </div>
          </div>
        </div>

        {appointments.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '60px 40px',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            margin: '20px 0'
          }}>
            <div style={{
              fontSize: '48px',
              color: '#bdc3c7',
              marginBottom: '20px'
            }}>📅</div>
            <h3 style={{
              color: '#7f8c8d',
              marginBottom: '10px'
            }}>No Appointments Found</h3>
            <p style={{
              color: '#95a5a6',
              maxWidth: '500px',
              margin: '0 auto'
            }}>There are currently no approved appointments. Check back later.</p>
          </div>
        ) : (
          <div style={{
            overflowX: 'auto',
            borderRadius: '8px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
            border: '1px solid #e0e0e0'
          }}>
            <table style={{
              width: '100%',
              borderCollapse: 'separate',
              borderSpacing: '0',
              backgroundColor: 'white'
            }}>
              <thead>
                <tr style={{
                  backgroundColor: '#3498db',
                  color: 'white',
                  position: 'sticky',
                  top: '0'
                }}>
                  {['Name', 'Email', 'Contact', 'Date', 'Time', 'Symptoms', 'Assigned Doctor'].map((header) => (
                    <th 
                      key={header}
                      onClick={() => requestSort(header.toLowerCase().replace(' ', ''))}
                      style={{
                        padding: '18px 15px',
                        textAlign: 'left',
                        fontWeight: '500',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        ':hover': {
                          backgroundColor: '#2980b9'
                        },
                        position: 'relative'
                      }}
                    >
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}>
                        {header}
                        {sortConfig.key === header.toLowerCase().replace(' ', '') && (
                          <span style={{
                            marginLeft: '5px',
                            fontSize: '12px'
                          }}>
                            {sortConfig.direction === 'ascending' ? '↑' : '↓'}
                          </span>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sortedAppointments.map((appointment, index) => (
                  <tr key={index} style={{
                    borderBottom: '1px solid #f0f0f0',
                    transition: 'all 0.2s ease',
                    ':hover': {
                      backgroundColor: '#f8fafc',
                      transform: 'scale(1.005)',
                      boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                    }
                  }}>
                    <td style={{
                      padding: '15px',
                      color: '#2c3e50',
                      fontWeight: '500'
                    }}>{appointment.Name}</td>
                    <td style={{
                      padding: '15px',
                      color: '#3498db',
                      textDecoration: 'underline'
                    }}>{appointment.email}</td>
                    <td style={{
                      padding: '15px',
                      color: '#555'
                    }}>{appointment.contact}</td>
                    <td style={{
                      padding: '15px',
                      color: '#27ae60',
                      fontWeight: '500'
                    }}>{appointment.date}</td>
                    <td style={{
                      padding: '15px',
                      color: '#e67e22',
                      fontWeight: '500'
                    }}>{appointment.time}</td>
                    <td style={{
                      padding: '15px',
                      color: '#555'
                    }}>{appointment.symptoms}</td>
                    <td style={{
                      padding: '15px',
                      color: '#9b59b6',
                      fontWeight: '500'
                    }}>{appointment.assignedDoctor || 'Not assigned'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Appointshow;