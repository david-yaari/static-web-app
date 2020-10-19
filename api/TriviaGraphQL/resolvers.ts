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
    Mutation: {
        async answerQuestion(_, { id, answer }, { dataStore }) {
            const question = await dataStore.getQuestionById(id);

            return {
                questionId: id,
                question: question.question,
                submittedAnswer: answer,
                correctAnswer: question.correct_answer,
                correct: question.correct_answer === answer,
            }
        }
    },

    Question: {
        id(question) {
            return question.id
        },
        question(question) {
            return (question.question)
        },
        correctAnswer(question) {
            return (question.correct_answer)
        },
        answers(question) {
            return question.incorrect_answers
                .concat([question.correct_answer])
                .sort()

        },
    },
    Answer: {
        questionId({ questionId }) {
            return questionId
        },
        question({ question }) {
            return question
        },
        submittedAnswer({ submittedAnswer }) {
            return submittedAnswer
        },
        correctAnswer({ correctAnswer }) {
            return correctAnswer
        },
        correct({ correct }) {
            return correct
        }
    }
}

export default resolvers