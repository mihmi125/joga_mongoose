module.exports = {
  async up(authorModel) {
    const names = [
      'Ashley Galvin',
      'Patrick Beach',
      'MacKenzie Miller'
    ];

    for (const name of names) {
      await authorModel.updateOne(
        { name },
        { $setOnInsert: { name } },
        { upsert: true, runValidators: true }
      );
    }
  }
};