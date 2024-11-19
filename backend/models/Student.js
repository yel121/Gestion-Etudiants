const { Pool } = require('pg');

// Initialiser le pool avec la chaîne de connexion
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// Gérer les erreurs de pool
pool.on('error', (err) => {
  console.error('Erreur inattendue sur le pool', err);
  process.exit(-1); // Facultatif : terminer le processus en cas d'erreur critique
});

module.exports = {
  query: async (text, params) => {
    try {
      return await pool.query(text, params);
    } catch (err) {
      console.error('Erreur lors de l\'exécution de la requête :', err.message);
      throw err; // Relancer l'erreur pour la gestion en amont
    }
  },
};
