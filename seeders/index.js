require('dotenv').config();
const mongoose = require('mongoose');
const connectToDatabase = require('../database/connection');
const Author = require('../models/Author');
const Article = require('../models/Article');
const AuthorSeeder = require('./author-seeder');
const ArticleSeeder = require('./article-seeder');

const seed = async () => {
  try {
    await connectToDatabase();
    await AuthorSeeder.up(Author);
    await ArticleSeeder.up(Article, Author);
    console.log('Seed completed');
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
};

seed();