import { Meteor } from 'meteor/meteor';
import fs from 'fs';
import path from 'path';
import { Articles } from '../../api/articles/Articles';

/* eslint-disable no-console */

// Initialize the database with a all articles
const addArticle = (article) => {
  Articles.insert(article);
};

// Use Absolute Path here for now
const ArticlesDir = ('/absolute/path/to//uh-askus-ai/app/public/articles');

// Initialize the Articles collection if empty.
if (Articles.find().count() === 0) {
  console.log('Loading articles');

  // Read HTML files and add them to the Articles collection
  fs.readdirSync(ArticlesDir).forEach((article) => {
    const content = fs.readFileSync(path.join(ArticlesDir, article), 'utf8');
    addArticle({ fileName: article, content });
    // console.log(`  Adding: ${article}`);
  });
console.log('All articles loaded!');  
}
