import { Configuration } from 'openai';

export const ConfigureOpenAI = () => {
  const config = new Configuration({
    apiKey: process.env.OPEN_AI_SECRET,
    organization: process.env.OPENAPI_ORGANIZATION_ID,
  });
  return config;
};
