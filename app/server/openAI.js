import openai from 'openai';

openai.apiKey = process.env.OPEN_AI_SECRET;

export const getEmbedding = async (text) => {
  const response = await openai.Embedding.create({
    input: text,
    model: 'text-embedding-ada-002',
  });
  return response.data[0].embedding;
};