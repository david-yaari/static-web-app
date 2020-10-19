import { gql } from 'apollo-client';
import * as Apollo from 'apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Question = {
  __typename?: 'Question';
  id: Scalars['ID'];
  question: Scalars['String'];
  correctAnswer: Scalars['String'];
  answers: Array<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  question?: Maybe<Question>;
  getRandomQuestion?: Maybe<Question>;
};

export type QueryQuestionArgs = {
  id: Scalars['ID'];
};

export type Answer = {
  __typename?: 'Answer';
  questionId?: Maybe<Scalars['ID']>;
  question: Scalars['String'];
  submittedAnswer: Scalars['String'];
  correctAnswer: Scalars['String'];
  correct?: Maybe<Scalars['Boolean']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  answerQuestion?: Maybe<Answer>;
};

export type MutationAnswerQuestionArgs = {
  id?: Maybe<Scalars['ID']>;
  answer?: Maybe<Scalars['String']>;
};

export const AnswerQuestionDocument = gql`
  mutation answerQuestion($id: ID, $answer: String) {
    answerQuestion(id: $id, answer: $answer) {
      correct
      correctAnswer
    }
  }
`;
export type AnswerQuestionMutationFn = Apollo.MutationFunction<
  AnswerQuestionMutation,
  AnswerQuestionMutationVariables
>;

/**
 * __useAnswerQuestionMutation__
 *
 * To run a mutation, you first call `useAnswerQuestionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAnswerQuestionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [answerQuestionMutation, { data, loading, error }] = useAnswerQuestionMutation({
 *   variables: {
 *      id: // value for 'id'
 *      answer: // value for 'answer'
 *   },
 * });
 */
export function useAnswerQuestionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AnswerQuestionMutation,
    AnswerQuestionMutationVariables
  >
) {
  return Apollo.useMutation<
    AnswerQuestionMutation,
    AnswerQuestionMutationVariables
  >(AnswerQuestionDocument, baseOptions);
}
export type AnswerQuestionMutationHookResult = ReturnType<
  typeof useAnswerQuestionMutation
>;
export type AnswerQuestionMutationResult = Apollo.MutationResult<
  AnswerQuestionMutation
>;
export type AnswerQuestionMutationOptions = Apollo.BaseMutationOptions<
  AnswerQuestionMutation,
  AnswerQuestionMutationVariables
>;
export const RandomQuestionDocument = gql`
  query randomQuestion {
    getRandomQuestion {
      id
      question
      answers
    }
  }
`;

/**
 * __useRandomQuestionQuery__
 *
 * To run a query within a React component, call `useRandomQuestionQuery` and pass it any options that fit your needs.
 * When your component renders, `useRandomQuestionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRandomQuestionQuery({
 *   variables: {
 *   },
 * });
 */
export function useRandomQuestionQuery(
  baseOptions?: Apollo.QueryHookOptions<
    RandomQuestionQuery,
    RandomQuestionQueryVariables
  >
) {
  return Apollo.useQuery<RandomQuestionQuery, RandomQuestionQueryVariables>(
    RandomQuestionDocument,
    baseOptions
  );
}
export function useRandomQuestionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    RandomQuestionQuery,
    RandomQuestionQueryVariables
  >
) {
  return Apollo.useLazyQuery<RandomQuestionQuery, RandomQuestionQueryVariables>(
    RandomQuestionDocument,
    baseOptions
  );
}
export type RandomQuestionQueryHookResult = ReturnType<
  typeof useRandomQuestionQuery
>;
export type RandomQuestionLazyQueryHookResult = ReturnType<
  typeof useRandomQuestionLazyQuery
>;
export type RandomQuestionQueryResult = Apollo.QueryResult<
  RandomQuestionQuery,
  RandomQuestionQueryVariables
>;
export type AnswerQuestionMutationVariables = Exact<{
  id?: Maybe<Scalars['ID']>;
  answer?: Maybe<Scalars['String']>;
}>;

export type AnswerQuestionMutation = { __typename?: 'Mutation' } & {
  answerQuestion?: Maybe<
    { __typename?: 'Answer' } & Pick<Answer, 'correct' | 'correctAnswer'>
  >;
};

export type RandomQuestionQueryVariables = Exact<{ [key: string]: never }>;

export type RandomQuestionQuery = { __typename?: 'Query' } & {
  getRandomQuestion?: Maybe<
    { __typename?: 'Question' } & Pick<Question, 'id' | 'question' | 'answers'>
  >;
};
