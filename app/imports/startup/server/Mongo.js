import { Meteor } from 'meteor/meteor';
import fs from 'fs';
import path from 'path';
import { cheerio } from 'meteor/mrt:cheerio';
import { Articles } from '../../api/articles/Articles';

/* eslint-disable no-console */

// Initialize the database with a all articles
const addArticle = (fileName, content) => {
  Articles.collection.insert({ subject: fileName, content: content });
};
// Use Absolute Path here for now
const ArticlesDir = ('CHANGE TO ABSOLUTE PATH OF YOUR ARTICLES DIRECTORY');
// Initialize the Articles collection if empty.
if (Articles.collection.find().count() === 0) {
  console.log('Loading articles');
  // Read HTML files and add them to the Articles collection
  fs.readdirSync(ArticlesDir).forEach((article) => {
    const body = fs.readFileSync(path.join(ArticlesDir, article), 'utf8');
    const $ = cheerio.load(body);
    const subject = $('title').toString();
    const content = $('body').toString();
    addArticle(subject, content);
    console.log(`  Adding: ${subject}`);
  });
  console.log('All articles loaded!');

}
