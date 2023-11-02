import { Mongo } from 'meteor/mongo';

/**
 * The StuffsCollection. It encapsulates state and variable values for article.
 */

/**
 * The singleton instance of the ArticleCollection.
 * @type {ArticleCollection}
 */
export const Articles = new Mongo.Collection('Articles');
