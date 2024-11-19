import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import axios from 'axios';

const App = () => {
  const [students, setStudents] = useState([]); // List of students
  const [showForm, setShowForm] = useState(false); // Controls the visibility of the form
  const [editingStudent, setEditingStudent] = useState(null); // Holds the student being edited

  // Fetch the list of students when the component mounts
  useEffect(() => {
    fetchStudents();
  }, []);

  // Fetch all students from the backend
  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/students'); // Use the full URL
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error.message);
    }
  };

  // Add a new student
  const addStudent = async (student) => {
    try {
      await axios.post('http://localhost:5000/api/students', student);
      fetchStudents();
      setShowForm(false);
    } catch (error) {
      console.error('Error adding student:', error.message);
    }
  };

  // Edit an existing student
  const editStudent = async (student) => {
    try {
      await axios.put(`http://localhost:5000/api/students/${editingStudent.id}`, student);
      fetchStudents();
      setEditingStudent(null);
      setShowForm(false);
    } catch (error) {
      console.error('Error editing student:', error.message);
    }
  };

  // Delete a student
  const deleteStudent = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/students/${id}`);
      fetchStudents();
    } catch (error) {
      console.error('Error deleting student:', error.message);
    }
  };

  // Handle form submission for both add and edit
  const handleFormSubmit = (student) => {
    if (editingStudent) {
      editStudent(student);
    } else {
      addStudent(student);
    }
  };

  return (
    <div>
      {/* Navbar with a button to open the add form */}
      <Navbar
        onAddClick={() => {
          setEditingStudent(null);
          setShowForm(true);
        }}
      />

      {/* Form for adding or editing a student */}
      {showForm && (
        <StudentForm
          onSubmit={handleFormSubmit}
          student={editingStudent}
          onClose={() => setShowForm(false)}
        />
      )}

      {/* List of students */}
      <StudentList
        students={students}
        onEdit={(student) => {
          setEditingStudent(student);
          setShowForm(true);
        }}
        onDelete={deleteStudent}
      />
    </div>
  );
};

export default App;
