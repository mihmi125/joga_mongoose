module.exports = {
  async up(articleModel, authorModel) {
    const patrick = await authorModel.findOne({ name: 'Patrick Beach' });
    const mackenzie = await authorModel.findOne({ name: 'MacKenzie Miller' });

    if (!patrick || !mackenzie) {
      throw new Error('Run AuthorSeeder first');
    }

    const articles = [
      {
        name: 'Introduction to Ashtanga',
        slug: 'introduction-to-ashtanga',
        image: 'ashtanga.jpg',
        body: '<p>Lorem ipsum dolor sit amet.</p>',
        published: new Date('2020-01-08T15:02:30Z'),
        author_id: mackenzie._id
      },
      {
        name: 'Morning vinyasa flow routine',
        slug: 'morning-vinyasa-flow-routine',
        image: 'morning.jpg',
        body: '<p>Lorem ipsum dolor sit amet.</p>',
        published: new Date('2020-04-14T15:02:41Z'),
        author_id: patrick._id
      },
      {
        name: 'Secrets of a yoga teacher',
        slug: 'secrets-of-a-yoga-teacher',
        image: 'yoga-teacher.jpg',
        body: '<p>Lorem ipsum dolor sit amet.</p>',
        published: new Date('2060-05-28T15:02:55Z'),
        author_id: mackenzie._id
      }
    ];

    for (const article of articles) {
      await articleModel.updateOne(
        { slug: article.slug },
        { $setOnInsert: article },
        { upsert: true, runValidators: true }
      );
    }
  }
};