import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICorrentAnswer, ICorrentAnswerResponse, IQuestion } from "@/common";

export const questionApi = createApi({
  reducerPath: "questionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://cross-platform.rp.devfactory.com",
  }),
  endpoints: (builder) => ({
    getQuestions: builder.query<IQuestion[], number>({
      query: (cursor: number) => `/for_you?cursor=${cursor}`,
      transformResponse: (response: IQuestion) => [
        {
          ...response,
          reactions: {
            likes: Math.floor(Math.random() * 200),
            comments: Math.floor(Math.random() * 200),
            bookmarks: Math.floor(Math.random() * 200),
            shares: Math.floor(Math.random() * 200),
          },
        },
      ],
      merge: (prev, next) => {
        return [...prev, ...next];
      },
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      forceRefetch: ({ currentArg, previousArg }) => {
        return currentArg !== previousArg;
      },
    }),
    getCorrectAnswer: builder.query<ICorrentAnswer[], string>({
      query: (id: string) => `/reveal?id=${id}`,
      transformResponse: (response: ICorrentAnswerResponse) =>
        response.correct_options,
    }),
  }),
});

export const { useGetQuestionsQuery, useGetCorrectAnswerQuery } = questionApi;
