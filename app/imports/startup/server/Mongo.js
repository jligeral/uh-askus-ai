import { Meteor } from 'meteor/meteor';
// import fs from 'fs';
// import path from 'path';
import { Stuffs } from '../../api/stuff/Stuff.js';
// import { Articles } from '../../api/articles/Articles';

/* eslint-disable no-console */

// Initialize the database with a default data document.
const addData = (data) => {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.collection.insert(data);
};

// Initialize the StuffsCollection if empty.
if (Stuffs.collection.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.forEach(data => addData(data));
  }
}
/*
// Use __dirname to get the directory of the current script
const currentDirectory = __dirname;

// Construct the path to the '/imports/public/articles' directory

const ArticlesDir = path.join(currentDirectory, '../../../public/articles');

// Initialize the HtmlFiles collection if empty.
if (Articles.find().count() === 0) {
  console.log('Creating default data.');

  // Read HTML files and add them to the HtmlFiles collection
  fs.readdirSync(ArticlesDir).forEach((file) => {
    const content = fs.readFileSync(path.join(ArticlesDir, file), 'utf8');
    addData({ name: file, content });
  });
}
*/
