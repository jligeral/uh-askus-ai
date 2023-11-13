import OpenAI from 'openai';

/* eslint-disable no-console */
const openai = new OpenAI();
export const getEmbedding = async (text) => {
  try {
    const response = await openai.embeddings.create({
      model: 'text-embedding-ada-002',
      input: text,
    });

    const embedding = response.data[0].embedding;
    return embedding;
  } catch (error) {
    console.error('Error getting embedding:', error);
    throw error; // Rethrow the error for the calling code to handle
  }
};
