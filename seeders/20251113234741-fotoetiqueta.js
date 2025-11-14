'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let [fotos, fotos_metadata] = await queryInterface.sequelize.query('SELECT id FROM fotos;');
    let [etiquetas, etiquetas_metadata] = await queryInterface.sequelize.query('SELECT id FROM etiquetas;');
    
    let fotoEtiquetas = [];
    for (let i = 0; i < 10; i++) {
      fotoEtiquetas.push({
        foto_id: fotos[i % fotos.length].id,
        etiqueta_id: etiquetas[i % etiquetas.length].id,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    
    await queryInterface.bulkInsert('fotoetiquetas', fotoEtiquetas, {});
  },


  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('fotoetiquetas', null, {});
  }
};