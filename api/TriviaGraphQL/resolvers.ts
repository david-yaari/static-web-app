import { Resolvers } from "./generated";

const resolvers: Resolvers = {
    Query: {
        question(_, { id }, { dataStore }) {
            return dataStore.getQuestionById(id);
        },
        async getRandomQuestion(_, __, { dataStore }) {
            const questions = await dataStore.getQuestions()
            return questions[Math.floor(Math.random() * questions.length) + 1];
        }

    },
    Question: {
        id()


    }
}

