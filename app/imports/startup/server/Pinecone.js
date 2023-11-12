import { Pinecone } from '@pinecone-database/pinecone';
import { Meteor } from 'meteor/meteor';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { OpenAIEmbeddings } from 'langchain/dist/embeddings/openai';
import { Articles } from '../../api/articles/Articles';
// import { getEmbedding } from '../../../server/getEmbedding';

/* eslint-disable no-console */
const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY,
  environment: process.env.PINECONE_ENVIRONMENT,
});
const embeddings = new OpenAIEmbeddings();

const index = pinecone.index(process.env.PINECONE_INDEX);

const articles = Articles.collection.find().fetch();
let docs = '';
for (let i = 0; i < 5; i++) {
  docs += articles[i].content;
  docs = docs.trim();
}

Meteor.methods({
  addEmbeddingstoDatabse: async function () {
    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: 2000,
      chunkOverlap: 200,
    });

    const embeddingArray = [];
    const chunks = await splitter.createDocuments([docs]);

    for (let i = 0; i < 5; i++) {
      const chunk = chunks[i];
      // eslint-disable-next-line no-await-in-loop
      const embedding = await embeddings.embedQuery(chunk.pageContent);
      // Assuming you want to do something with the embedding here
      embeddingArray.push({
        id: i.toString(),
        values: embedding,
        metadata: { content: chunk.pageContent },
      });
      console.log(embeddingArray[i]);
    }
    // eslint-disable-next-line no-await-in-loop
    // Add embedding to Pinecone database
    await index.upsert(embeddingArray);
  },
});

Meteor.call('addEmbeddingstoDatabse');
