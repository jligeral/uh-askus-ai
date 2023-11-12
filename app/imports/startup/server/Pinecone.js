import { Pinecone } from '@pinecone-database/pinecone';
import { Meteor } from 'meteor/meteor';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { PineconeStore } from 'langchain/dist/vectorstores/pinecone';
import { OpenAIEmbeddings } from 'langchain/dist/embeddings/openai';
import { Articles } from '../../api/articles/Articles';
// import { getEmbedding } from '../../../server/getEmbedding';

/* eslint-disable no-console */
const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY,
  environment: process.env.PINECONE_ENVIRONMENT,
});

const index = pinecone.index(process.env.PINECONE_INDEX);

const articles = Articles.collection.find().fetch();
let docs = '';
for (let i = 0; i < articles.length; i++) {
  docs += articles[i].content;
  docs = docs.trim();
}
const embeddingArray = [];

Meteor.methods({
  addEmbeddingstoDatabse: async function () {
    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: 2000,
      chunkOverlap: 200,
    });

    const chunks = await splitter.createDocuments([docs]);

    for (let i = 0; i < chunks.length; i++) {
      const chunk = chunks[i];
      // eslint-disable-next-line no-await-in-loop
      // const embedding = await getEmbedding(chunk.pageContent);
      // Assuming you want to do something with the embedding here
      embeddingArray.push({
        id: i.toString(),
        metadata: { content: chunk.pageContent },
      });
      // console.log('Embedding:', embedding);

      // Add embedding to Pinecone database
      // eslint-disable-next-line no-await-in-loop
    }
    await PineconeStore.fromDocuments(embeddingArray, new OpenAIEmbeddings(), { pineconeIndex: index, maxConcurrency: 5 });
    console.log('Embeddings added to database');
    pinecone.describeIndex('uh-askus-ai');
  },
});

Meteor.call('addEmbeddingstoDatabse');
