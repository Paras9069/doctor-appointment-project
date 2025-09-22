import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SymptomChecker = () => {
  const [symptoms, setSymptoms] = useState([]);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [userData, setUserData] = useState({
    name: '',
    age: '',
    gender: 'male'
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedSymptomId, setSelectedSymptomId] = useState('');

  // Fetch symptoms from backend
  useEffect(() => {
    const fetchSymptoms = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:9000/symptoms');
        const data = await response.json();
        if (data.statuscode === 1) {
          setSymptoms(data.data);
        } else {
          setError('Failed to load symptoms');
        }
      } catch (err) {
        setError('Error connecting to server');
      } finally {
        setIsLoading(false);
      }
    };

    fetchSymptoms();
  }, []);

  const handleUserInput = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  const handleSymptomSelect = (e) => {
    setSelectedSymptomId(e.target.value);
  };

  const addSymptom = () => {
    if (selectedSymptomId && !selectedSymptoms.some(s => s._id === selectedSymptomId)) {
      const symptomToAdd = symptoms.find(s => s._id === selectedSymptomId);
      if (symptomToAdd) {
        setSelectedSymptoms([...selectedSymptoms, symptomToAdd]);
        setSelectedSymptomId('');
      }
    }
  };

  const removeSymptom = (symptomId) => {
    setSelectedSymptoms(selectedSymptoms.filter(s => s._id !== symptomId));
  };

  const checkSymptoms = async () => {
    if (selectedSymptoms.length === 0) {
      setError('Please select at least one symptom');
      return;
    }

    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch('http://localhost:9000/check-symptoms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          symptoms: selectedSymptoms.map(s => s._id),
          userData: userData
        })
      });

      const data = await response.json();
      if (data.statuscode === 1) {
        setRecommendations(data.data);
      } else {
        setError(data.message || 'No recommendations found');
      }
    } catch (err) {
      setError('Error checking symptoms');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{
      maxWidth: '800px',
      margin: '2rem auto',
      padding: '20px',
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
      backgroundColor: '#f5f5f5',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{
        color: '#2c3e50',
        textAlign: 'center',
        marginBottom: '30px',
        fontSize: '2rem',
        fontWeight: '600'
      }}>Health Hub Symptom Checker</h2>
      
      <div style={{
        backgroundColor: 'white',
        padding: '25px',
        borderRadius: '8px',
        marginBottom: '25px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
      }}>
        <h3 style={{
          color: '#3498db',
          borderBottom: '2px solid #eee',
          paddingBottom: '10px',
          marginTop: '0',
          fontSize: '1.5rem'
        }}>Personal Information</h3>
        <div style={{ marginBottom: '20px' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            fontWeight: '600',
            color: '#555',
            fontSize: '1rem'
          }}>Full Name:</label>
          <input 
            type="text" 
            name="name" 
            value={userData.name} 
            onChange={handleUserInput}
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #ddd',
              borderRadius: '6px',
              fontSize: '16px',
              transition: 'border 0.3s',
              boxSizing: 'border-box'
            }}
            placeholder="Enter your name"
          />
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            fontWeight: '600',
            color: '#555',
            fontSize: '1rem'
          }}>Age:</label>
          <input 
            type="number" 
            name="age" 
            value={userData.age} 
            onChange={handleUserInput}
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #ddd',
              borderRadius: '6px',
              fontSize: '16px',
              transition: 'border 0.3s',
              boxSizing: 'border-box'
            }}
            placeholder="Enter your age"
            min="1"
            max="120"
          />
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            fontWeight: '600',
            color: '#555',
            fontSize: '1rem'
          }}>Gender:</label>
          <select 
            name="gender" 
            value={userData.gender} 
            onChange={handleUserInput}
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #ddd',
              borderRadius: '6px',
              fontSize: '16px',
              backgroundColor: 'white',
              cursor: 'pointer'
            }}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div style={{
        backgroundColor: 'white',
        padding: '25px',
        borderRadius: '8px',
        marginBottom: '25px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
      }}>
        <h3 style={{
          color: '#3498db',
          borderBottom: '2px solid #eee',
          paddingBottom: '10px',
          marginTop: '0',
          fontSize: '1.5rem'
        }}>Select Your Symptoms</h3>
        
        {isLoading && !symptoms.length ? (
          <p style={{
            color: '#3498db',
            textAlign: 'center',
            fontSize: '1.1rem',
            padding: '20px'
          }}>Loading symptoms...</p>
        ) : error ? (
          <p style={{
            color: '#e74c3c',
            textAlign: 'center',
            backgroundColor: '#fdecea',
            padding: '15px',
            borderRadius: '6px',
            margin: '15px 0',
            fontWeight: '500'
          }}>{error}</p>
        ) : (
          <>
            <div style={{
              display: 'flex',
              gap: '10px',
              marginBottom: '20px',
              marginTop: "20px",
              alignItems: 'center'
            }}>
              <select 
                value={selectedSymptomId}
                onChange={handleSymptomSelect}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  fontSize: '16px',
                  backgroundColor: 'white',
                  cursor: 'pointer'
                }}
                disabled={isLoading || symptoms.length === 0}
              >
                <option value="">Select a symptom</option>
                {symptoms.map(symptom => (
                  <option key={symptom._id} value={symptom._id}>
                    {symptom.name} - {symptom.description}
                  </option>
                ))}
              </select>
              <button
                onClick={addSymptom}
                style={{
                  backgroundColor: '#2ecc71',
                  color: 'white',
                  border: 'none',
                  padding: '12px 20px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  transition: 'background-color 0.3s',
                  fontWeight: '500',
                  marginTop: "-16px"
                }}
                disabled={!selectedSymptomId || isLoading}
              >
                Add Symptom
              </button>
            </div>
            
            {/* <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              <Link to="/add-symptom" style={{
                backgroundColor: '#3498db',
                color: 'white',
                padding: '10px 15px',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'background-color 0.3s',
              }}>
                Add New Symptom
              </Link>
              <Link to="/addmedicine" style={{
                backgroundColor: '#3498db',
                color: 'white',
                padding: '10px 15px',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'background-color 0.3s',
              }}>
                Add New Medicine
              </Link>
            </div> */}
            
            {selectedSymptoms.length > 0 && (
              <div style={{
                margin: '20px 0',
                backgroundColor: '#f8f9fa',
                padding: '15px',
                borderRadius: '6px'
              }}>
                <h4>Selected Symptoms:</h4>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '10px',
                  marginTop: '10px'
                }}>
                  {selectedSymptoms.map(symptom => (
                    <li key={symptom._id} style={{
                      display: 'flex',
                      alignItems: 'center',
                      backgroundColor: '#e8f4fc',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      color: '#2980b9',
                      fontSize: '0.9rem',
                      fontWeight: '500'
                    }}>
                      {symptom.name}
                      <button 
                        onClick={() => removeSymptom(symptom._id)}
                        style={{
                          marginLeft: '8px',
                          backgroundColor: 'transparent',
                          border: 'none',
                          color: '#e74c3c',
                          cursor: 'pointer',
                          fontWeight: 'bold',
                          fontSize: '16px',
                          padding: '0',
                          lineHeight: '1'
                        }}
                      >
                        ×
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <button 
              onClick={checkSymptoms}
              style={{
                backgroundColor: '#3498db',
                color: 'white',
                border: 'none',
                padding: '14px 24px',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '16px',
                transition: 'all 0.3s',
                width: '100%',
                marginTop: '15px',
                fontWeight: '600',
                letterSpacing: '0.5px'
              }}
              disabled={isLoading || selectedSymptoms.length === 0}
            >
              {isLoading ? 'Checking...' : 'Check Symptoms'}
            </button>
          </>
        )}
      </div>

      {recommendations.length > 0 && (
        <div style={{
          backgroundColor: 'white',
          padding: '25px',
          borderRadius: '8px',
          marginTop: '25px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}>
          <h3 style={{
            color: '#3498db',
            borderBottom: '2px solid #eee',
            paddingBottom: '10px',
            marginTop: '0',
            fontSize: '1.5rem'
          }}>Recommended Medicines</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '20px',
            marginTop: '20px'
          }}>
            {recommendations.map(medicine => (
              <div key={medicine._id} style={{
                border: '1px solid #eee',
                padding: '20px',
                borderRadius: '8px',
                backgroundColor: '#f9f9f9',
                transition: 'transform 0.3s, box-shadow 0.3s',
                boxShadow: '0 2px 4px rgba(0,0,0,0.03)'
              }}>
                <h4 style={{
                  color: '#2c3e50',
                  marginTop: '0',
                  marginBottom: '10px',
                  fontSize: '1.2rem'
                }}>{medicine.name}</h4>
                <p style={{
                  color: '#7f8c8d',
                  marginBottom: '15px',
                  fontSize: '0.9rem'
                }}>{medicine.description}</p>
                <p><strong>Dosage:</strong> {medicine.dosage}</p>
                <p><strong>Precautions:</strong> {medicine.precautions}</p>
                <p>
                  <strong>Treats:</strong> {medicine.symptoms.map(s => s.name).join(', ')}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SymptomChecker;