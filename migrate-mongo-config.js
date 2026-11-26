const dotenv = require('dotenv');
dotenv.config();

const config = {
  mongodb: {
    url: process.env.MONGO_URI,
    options: {}
  },
  migrationsDir: 'migrations',
  changelogCollectionName: 'changelog',
  migrationFileExtension: '.js',
  useFileHash: false,
  moduleSystem: 'commonjs'
};

module.exports = config;