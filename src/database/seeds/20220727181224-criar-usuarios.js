const bcriptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'usuario1',
          email: 'usuario1@gmail.com',
          password_hash: await bcriptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'usuario2',
          email: 'usuario2@gmail.com',
          password_hash: await bcriptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'usuario3',
          email: 'usuario3@gmail.com',
          password_hash: await bcriptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'usuario4',
          email: 'usuario4@gmail.com',
          password_hash: await bcriptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },

      ],

      {},
    );
  },

  // async down() {
  // },

};
