import React, { useState, useEffect } from 'react';

const StudentForm = ({ onSubmit, student }) => {
  const [name, setName] = useState(student?.name || '');
  const [last_name, setLast_name] = useState(student?.last_name || '');
  const [cin, setCin] = useState(student?.cin || '');
  const [spec, setSpec] = useState(student?.spec || '');
  const [age, setAge] = useState(student?.age || '');

  // Reset the form when the student prop changes
  useEffect(() => {
    if (student) {
      setName(student.name || '');
      setLast_name(student.last_name || '');
      setCin(student.cin || '');
      setSpec(student.spec || '');
      setAge(student.age || '');
    }
  }, [student]);

  const handleSubmit = (e) => {
    e.preventDefault();  // Empêche le rechargement de la page
    // Vérification des données avant de les envoyer
    console.log({ name, last_name, cin, spec, age });  // Affiche les données dans la console
    onSubmit({ name, last_name, cin, spec, age });  // Envoie les données au parent
  };
  

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          type="text"
          value={last_name}
          onChange={(e) => setLast_name(e.target.value)}
          placeholder="Last Name"
          required
        />
        <input
          type="text"
          value={cin}
          onChange={(e) => setCin(e.target.value)}
          placeholder="CIN"
          required
        />
        <select value={spec} onChange={(e) => setSpec(e.target.value)} required>
          <option value="" disabled>Select Specialty</option>
          <option value="Informatique">Informatique</option>
          <option value="Civil">Civil</option>
          <option value="Management">Management</option>
        </select>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Age"
          required
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default StudentForm;
