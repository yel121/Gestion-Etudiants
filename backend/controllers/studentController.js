const db = require('../models/Student'); // Assurez-vous que ce chemin pointe vers votre module de connexion à la base de données

// Récupérer tous les étudiants
exports.getAllStudents = async (req, res) => {
  try {
    const students = await db.query('SELECT * FROM students');
    res.json(students.rows);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching students', error: error.message });
  }
};

// Créer un nouvel étudiant
exports.createStudent = async (req, res) => {
  const { name, last_name, cin, spec, age } = req.body;
  try {
    await db.query(
      'INSERT INTO students (name, last_name, cin, spec, age) VALUES ($1, $2, $3, $4, $5)',
      [name, last_name, cin, spec, age]
    );
    res.status(201).json({ message: 'Student created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating student', error: error.message });
  }
};

// Mettre à jour un étudiant existant
exports.updateStudent = async (req, res) => {
  const { id } = req.params;
  const { name, last_name, cin, spec, age } = req.body;
  try {
    const result = await db.query(
      'UPDATE students SET name=$1, last_name=$2, cin=$3, spec=$4, age=$5 WHERE id=$6',
      [name, last_name, cin, spec, age, id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.json({ message: 'Student updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating student', error: error.message });
  }
};

// Supprimer un étudiant
exports.deleteStudent = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query('DELETE FROM students WHERE id=$1', [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.json({ message: 'Student deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting student', error: error.message });
  }
};
