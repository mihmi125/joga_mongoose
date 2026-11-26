module.exports = {
  async up(db) {
    await db.createCollection('authors');
  },

  async down(db) {
    await db.collection('authors').drop();
  }
};