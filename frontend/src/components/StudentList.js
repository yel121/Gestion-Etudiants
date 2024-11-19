import React from 'react';
import './StudentList.css';

const StudentList = ({ students, onEdit, onDelete }) => {
  return (
    <div className="student-list">
      <h2 className="student-list-title">Student List</h2>
      <ul className="student-list-items">
        {students.map((student) => (
          <li key={student.id} className="student-list-item">
            <div className="student-info">
              <strong>Name:</strong> {student.name} <br />
              <strong>Last Name:</strong> {student.last_name} <br />
              <strong>Age:</strong> {student.age} <br />
              <strong>CIN:</strong> {student.cin} <br />
              <strong>Specialty:</strong> {student.spec} <br />
            </div>
            <div className="button-group">
              <button
                onClick={() => onEdit(student)}
                className="edit-btn"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(student.id)}
                className="delete-btn"
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
