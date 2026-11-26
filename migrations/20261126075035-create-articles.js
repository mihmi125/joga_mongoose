module.exports = {
  async up(db) {
    await db.createCollection('articles');

    await db.collection('articles').createIndex(
      { slug: 1 },
      { unique: true }
    );

    await db.collection('articles').createIndex(
      { author_id: 1 },
      { name: 'article_author_idx' }
    );
  },

  async down(db) {
    await db.collection('articles').drop();
  }
};