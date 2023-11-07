import fs from 'fs';
import path from 'path';
import { cheerio } from 'meteor/mrt:cheerio';
import { Articles } from '../../api/articles/Articles';
/* eslint-disable no-console */
// Initialize the database with  all articles
// addArticle is a helper function that adds an article to the Articles collection
const addArticle = (subject, content) => {
  Articles.collection.insert({ subject: subject, content: content });
};
// Get the current working directory (Meteor project's root directory)
const projectDir = process.env.PWD;

// Define the relative path to the articles directory
const relativeArticlesPath = 'public/articles';

// Construct the full path to the articles directory
const ArticlesDir = path.join(projectDir, relativeArticlesPath);
// Initialize the Articles collection if empty.
if (Articles.collection.find().count() === 0) {
  console.log('Loading articles');
  // Read HTML files and add them to the Articles collection
  fs.readdirSync(ArticlesDir).forEach((article) => {
    const body = fs.readFileSync(path.join(ArticlesDir, article), 'utf8');
    const $ = cheerio.load(body);
    const subject = $('title').text();
    const content = $('div#content').text();
    addArticle(subject, content);
    // console.log(`  Adding: ${subject}`);
  });
  console.log('All articles loaded!');

}
