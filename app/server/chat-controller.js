import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { OpenAIApi } from 'openai';
import { ConfigureOpenAI } from './openai-configuration';

Meteor.methods({
  generateChatCompletion(message) {
    check(message, String);

    // Allow both logged-in and non-logged-in users to use the chat
    // No need to check this.userId
    // Remove the unauthorized error

    // Find the user by some identifier (e.g., email or unique identifier)
    const user = Meteor.users.findOne({ /* Add a condition to identify the user */ });

    // If the user is not found, you can create a new user or handle the case as needed

    const chats = user ? user.chats.map(({ role, content }) => ({
      role,
      content,
    })) : [];

    chats.push({ content: message, role: 'user' });

    // You can create a default user if it doesn't exist or handle the case as needed

    const config = new ConfigureOpenAI();
    const openai = new OpenAIApi(config);
    const chatResponse = openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: chats,
    });

    // If the user is not found, you can create a new user or handle the case as needed

    if (user) {
      user.chats.push(chatResponse.data.choices[0].message);
      user.save();
    }

    return user ? user.chats : chatResponse.data.choices[0].message;
  },
});
