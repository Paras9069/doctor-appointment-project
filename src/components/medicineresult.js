import React from 'react';
import { useLocation } from 'react-router-dom';

const MedicineResults = () => {
  const location = useLocation();
  const { medicines } = location.state || { medicines: [] };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Recommended Medicines</h2>
      
      {medicines.length > 0 ? (
        <div style={styles.medicineGrid}>
          {medicines.map(medicine => (
            <div key={medicine._id} style={styles.medicineCard}>
              <h3 style={styles.medicineName}>{medicine.name}</h3>
              <p style={styles.medicineDesc}>{medicine.description}</p>
              <p><strong>Dosage:</strong> {medicine.dosage}</p>
              <p><strong>Precautions:</strong> {medicine.precautions}</p>
              <p>
                <strong>Treats:</strong> {medicine.symptoms.map(s => s.name).join(', ')}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p style={styles.noResults}>No medicine recommendations found for your symptoms.</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1000px',
    margin: '2rem auto',
    padding: '20px',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  },
  heading: {
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: '30px',
  },
  medicineGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
    marginTop: '20px'
  },
  medicineCard: {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  medicineName: {
    color: '#3498db',
    marginTop: 0
  },
  medicineDesc: {
    color: '#7f8c8d'
  },
  noResults: {
    textAlign: 'center',
    color: '#e74c3c',
    fontSize: '1.2rem'
  }
};

export default MedicineResults;