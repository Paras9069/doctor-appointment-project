import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AddMedicine = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    dosage: '',
    precautions: '',
    symptoms: []
  });
  const [symptomsList, setSymptomsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSymptoms = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('http://localhost:9000/symptoms');
        if (!response.ok) {
          throw new Error('Failed to fetch symptoms');
        }
        const data = await response.json();
        if (data.statuscode === 1) {
          setSymptomsList(data.data);
        } else {
          setError(data.message || 'Failed to load symptoms');
        }
      } catch (err) {
        setError(err.message || 'Error connecting to server');
      } finally {
        setIsLoading(false);
      }
    };

    fetchSymptoms();
  }, []);

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Medicine name is required';
    if (!formData.description.trim()) errors.description = 'Description is required';
    if (!formData.dosage.trim()) errors.dosage = 'Dosage is required';
    if (!formData.precautions.trim()) errors.precautions = 'Precautions are required';
    if (formData.symptoms.length === 0) errors.symptoms = 'Please select at least one symptom';
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear validation error when user starts typing
    if (validationErrors[name]) {
      setValidationErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSymptomSelect = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
    setFormData(prev => ({
      ...prev,
      symptoms: selectedOptions
    }));
    
    // Clear symptoms validation error when user selects something
    if (validationErrors.symptoms) {
      setValidationErrors(prev => ({
        ...prev,
        symptoms: undefined
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:9000/add-medicine', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to add medicine');
      }

      if (data.statuscode === 1) {
        setSuccess(true);
        setTimeout(() => {
          navigate('/symptom-checker');
        }, 1500);
      } else {
        setError(data.message || 'Failed to add medicine');
      }
    } catch (err) {
      setError(err.message || 'Error connecting to server');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Add New Medicine</h2>
      
      {success && (
        <div style={styles.successMessage}>
          Medicine added successfully! Redirecting...
        </div>
      )}
      
      {error && (
        <div style={styles.errorMessage}>
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit} style={styles.form} noValidate>
        <div style={styles.formGroup}>
          <label style={styles.label}>Medicine Name:*</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            style={validationErrors.name ? { ...styles.input, borderColor: '#dc3545' } : styles.input}
            required
          />
          {validationErrors.name && (
            <small style={styles.errorText}>{validationErrors.name}</small>
          )}
        </div>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>Description:*</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            style={validationErrors.description ? { ...styles.textarea, borderColor: '#dc3545' } : styles.textarea}
            required
          />
          {validationErrors.description && (
            <small style={styles.errorText}>{validationErrors.description}</small>
          )}
        </div>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>Dosage:*</label>
          <input
            type="text"
            name="dosage"
            value={formData.dosage}
            onChange={handleInputChange}
            style={validationErrors.dosage ? { ...styles.input, borderColor: '#dc3545' } : styles.input}
            required
          />
          {validationErrors.dosage && (
            <small style={styles.errorText}>{validationErrors.dosage}</small>
          )}
        </div>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>Precautions:*</label>
          <textarea
            name="precautions"
            value={formData.precautions}
            onChange={handleInputChange}
            style={validationErrors.precautions ? { ...styles.textarea, borderColor: '#dc3545' } : styles.textarea}
            required
          />
          {validationErrors.precautions && (
            <small style={styles.errorText}>{validationErrors.precautions}</small>
          )}
        </div>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>Treats Symptoms:*</label>
          {isLoading && symptomsList.length === 0 ? (
            <div style={styles.loadingText}>Loading symptoms...</div>
          ) : (
            <>
              <select
                multiple
                name="symptoms"
                value={formData.symptoms}
                onChange={handleSymptomSelect}
                style={validationErrors.symptoms ? { ...styles.multiSelect, borderColor: '#dc3545' } : styles.multiSelect}
                required
                disabled={symptomsList.length === 0}
              >
                {symptomsList.map(symptom => (
                  <option key={symptom._id} value={symptom._id}>
                    {symptom.name}
                  </option>
                ))}
              </select>
              <small style={styles.helperText}>
                {symptomsList.length === 0 
                  ? 'No symptoms available' 
                  : 'Hold Ctrl/Cmd to select multiple symptoms'}
              </small>
              {validationErrors.symptoms && (
                <small style={styles.errorText}>{validationErrors.symptoms}</small>
              )}
            </>
          )}
        </div>
        
        <button 
          type="submit" 
          style={styles.submitButton}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <span style={styles.spinner}></span> Adding...
            </>
          ) : (
            'Add Medicine'
          )}
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '2rem auto',
    padding: '20px',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  },
  heading: {
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: '30px',
    fontSize: '2rem',
    fontWeight: '600'
  },
  form: {
    backgroundColor: 'white',
    padding: '25px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
  },
  formGroup: {
    marginBottom: '20px'
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontWeight: '600',
    color: '#555',
    fontSize: '1rem'
  },
  input: {
    width: '100%',
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '6px',
    fontSize: '16px',
    boxSizing: 'border-box',
    transition: 'border-color 0.3s'
  },
  textarea: {
    width: '100%',
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '6px',
    fontSize: '16px',
    minHeight: '100px',
    resize: 'vertical',
    boxSizing: 'border-box',
    transition: 'border-color 0.3s'
  },
  multiSelect: {
    width: '100%',
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '6px',
    fontSize: '16px',
    minHeight: '120px',
    boxSizing: 'border-box',
    transition: 'border-color 0.3s'
  },
  helperText: {
    display: 'block',
    marginTop: '5px',
    color: '#666',
    fontSize: '0.8rem'
  },
  errorText: {
    display: 'block',
    marginTop: '5px',
    color: '#dc3545',
    fontSize: '0.8rem'
  },
  submitButton: {
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    padding: '14px 24px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '16px',
    width: '100%',
    fontWeight: '600',
    transition: 'background-color 0.3s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px'
  },
  successMessage: {
    backgroundColor: '#d4edda',
    color: '#155724',
    padding: '15px',
    borderRadius: '6px',
    marginBottom: '20px',
    textAlign: 'center'
  },
  errorMessage: {
    backgroundColor: '#f8d7da',
    color: '#721c24',
    padding: '15px',
    borderRadius: '6px',
    marginBottom: '20px',
    textAlign: 'center'
  },
  loadingText: {
    color: '#666',
    fontStyle: 'italic'
  },
  spinner: {
    display: 'inline-block',
    width: '16px',
    height: '16px',
    border: '2px solid rgba(255,255,255,0.3)',
    borderRadius: '50%',
    borderTopColor: 'white',
    animation: 'spin 1s ease-in-out infinite'
  },
  '@keyframes spin': {
    to: { transform: 'rotate(360deg)' }
  }
};

export default AddMedicine;