import React, { useState } from 'react';
import Footer from './footer';

const Appointment = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    if (!name || !email || !contact || !date || !time || !symptoms) {
      setMessage('Please fill all fields');
      return;
    }

    setIsSubmitting(true);
    setMessage('');

    const data = { name, email, contact, date, time, symptoms };

    try {
      const result = await fetch("http://localhost:9000/appointment", {
        method: "post",
        body: JSON.stringify(data),
        headers: {
          'Content-type': "application/json; charset=UTF-8"
        }
      });

      if (result.ok) {
        const res = await result.json();
        if (res.statuscode === 1) {
          setMessage("Appointment request submitted! Admin will review it shortly.");
          // Clear form
          setName('');
          setEmail('');
          setContact('');
          setDate('');
          setTime('');
          setSymptoms('');
        } else {
          setMessage("Failed to submit appointment. Please try again.");
        }
      } else {
        setMessage("Server error. Please try again later.");
      }
    } catch (err) {
      console.log(err);
      setMessage("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <section style={{
        position: 'relative',
        padding: '80px 0',
        backgroundColor: '#f8f9fa',
        fontFamily: "'Poppins', sans-serif"
      }}>
        {/* Pattern background */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(images/background/pattern-1.png)',
          opacity: 0.1,
          zIndex: 0
        }}></div>

        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 15px',
          position: 'relative',
          zIndex: 1
        }}>
          {/* Title Section */}
          <div style={{
            textAlign: 'center',
            marginBottom: '50px'
          }}>
            <h2 style={{
              fontSize: '36px',
              fontWeight: '600',
              color: '#2c3e50',
              lineHeight: '1.3',
              marginBottom: '20px'
            }}>
              With access to 24 hour emergency assistance, you can continue to help others.
            </h2>
          </div>

          {/* Main Content */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            backgroundColor: '#fff',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
          }}>
            {/* Image Section */}
            <div style={{
              flex: '1',
              minWidth: '300px',
              backgroundImage: 'url(https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '500px'
            }}></div>

            {/* Appointment Form */}
            <div style={{
              flex: '1',
              minWidth: '300px',
              padding: '50px'
            }}>
              <div style={{ marginBottom: '30px' }}>
                <div style={{
                  fontSize: '18px',
                  color: '#3498db',
                  fontWeight: '500',
                  marginBottom: '10px'
                }}>Need emergency?</div>
                <h3 style={{
                  fontSize: '32px',
                  fontWeight: '600',
                  color: '#2c3e50',
                  margin: '0'
                }}>
                  Book an <span style={{ color: '#3498db' }}>Appointment</span>
                </h3>
              </div>

              {message && (
                <div style={{
                  padding: '15px',
                  marginBottom: '20px',
                  backgroundColor: message.includes('success') ? '#d4edda' : '#f8d7da',
                  color: message.includes('success') ? '#155724' : '#721c24',
                  borderRadius: '5px',
                  border: `1px solid ${message.includes('success') ? '#c3e6cb' : '#f5c6cb'}`
                }}>
                  {message}
                </div>
              )}

              <form>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: '500',
                    color: '#555'
                  }}>
                    <span style={{ marginRight: '10px' }}>👤</span> Enter your Name
                  </label>
                  <input 
                    type="text" 
                    placeholder="Type your name" 
                    required 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      border: '1px solid #ddd',
                      borderRadius: '6px',
                      fontSize: '16px',
                      transition: 'all 0.3s'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: '500',
                    color: '#555'
                  }}>
                    <span style={{ marginRight: '10px' }}>✉️</span> Your Mail Address
                  </label>
                  <input 
                    type="email" 
                    placeholder="Email" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      border: '1px solid #ddd',
                      borderRadius: '6px',
                      fontSize: '16px'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: '500',
                    color: '#555'
                  }}>
                    <span style={{ marginRight: '10px' }}>📞</span> Contact number
                  </label>
                  <input 
                    type="tel" 
                    placeholder="Phone" 
                    required 
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      border: '1px solid #ddd',
                      borderRadius: '6px',
                      fontSize: '16px'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: '500',
                    color: '#555'
                  }}>Date</label>
                  <input
                    type="date"
                    placeholder="dd/mm/yyyy"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      border: '1px solid #ddd',
                      borderRadius: '6px',
                      fontSize: '16px'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: '500',
                    color: '#555'
                  }}>Timing</label>
                  <input
                    type="time"
                    required
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      border: '1px solid #ddd',
                      borderRadius: '6px',
                      fontSize: '16px'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: '500',
                    color: '#555'
                  }}>
                    <span style={{ marginRight: '10px' }}>🤒</span> Symptoms
                  </label>
                  <textarea
                    placeholder="Describe your symptoms"
                    required
                    value={symptoms}
                    onChange={(e) => setSymptoms(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      border: '1px solid #ddd',
                      borderRadius: '6px',
                      fontSize: '16px',
                      minHeight: '100px'
                    }}
                  />
                </div>

                <div style={{
                  display: 'flex',
                  gap: '15px'
                }}>
                  <button 
                    type="button"
                    onClick={submit}
                    disabled={isSubmitting}
                    style={{
                      flex: '1',
                      padding: '15px',
                      backgroundColor: isSubmitting ? '#95a5a6' : '#3498db',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      fontSize: '16px',
                      fontWeight: '500',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      transition: 'all 0.3s',
                      ':hover': {
                        backgroundColor: isSubmitting ? '#95a5a6' : '#2980b9',
                        transform: isSubmitting ? 'none' : 'translateY(-2px)'
                      }
                    }}
                  >
                    {isSubmitting ? 'Submitting...' : 'Book Now'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Appointment;