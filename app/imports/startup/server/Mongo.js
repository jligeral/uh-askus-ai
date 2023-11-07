import fs from 'fs';
import path from 'path';
import { cheerio } from 'meteor/mrt:cheerio';
import { Meteor } from 'meteor/meteor';
import { Articles } from '../../api/articles/Articles';

/* eslint-disable no-console */

// Initialize the database with a all articles
const addArticle = (fileName, content) => {
  Articles.collection.insert({ subject: fileName, content: content });
};

/* eslint-disable no-console */

Meteor.methods({
  loadArticles() {
    const currentDir = process.cwd();
    const articlesDir = path.join(currentDir, 'public/articles');

    if (fs.existsSync(articlesDir) && Articles.collection.find().count() === 0) {
      console.log('Loading articles');
      fs.readdirSync(articlesDir).forEach((article) => {
        const body = fs.readFileSync(path.join(articlesDir, article), 'utf8');
        const $ = cheerio.load(body);
        const subject = $('title').toString();
        const content = $('body').toString();
        addArticle(subject, content);
        // console.log(`  Adding: ${subject}`);
      });
      console.log('All articles loaded!');
    }
  },
});

// Call the method on the server to load articles
Meteor.call('loadArticles');
