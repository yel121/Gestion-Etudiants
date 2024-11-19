import React from 'react';

const StudentList = ({ students, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id} style={{ marginBottom: '1rem' }}>
            <strong>Name:</strong> {student.name} <br />
            <strong>Last Name:</strong> {student.last_name} <br />
            <strong>Age:</strong> {student.age} <br />
            <strong>CIN:</strong> {student.cin} <br />
            <strong>Specialty:</strong> {student.spec} <br />

            <div style={{ marginTop: '0.5rem' }}>
              <button
                onClick={() => onEdit(student)}  // Assurez-vous que onEdit est passé correctement
                style={{ marginRight: '0.5rem', backgroundColor: '#4CAF50', color: '#fff', border: 'none', padding: '0.5rem', cursor: 'pointer' }}
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(student.id)}  // Assurez-vous que onDelete est passé correctement
                style={{ backgroundColor: '#f44336', color: '#fff', border: 'none', padding: '0.5rem', cursor: 'pointer' }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
