import OpenAI from 'openai';
import { OpenAIStream, streamToResponse } from 'ai';
import { NextApiRequest, NextApiResponse } from 'next';
import { ChatCompletionMessageParam } from 'openai/resources/chat';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

type Data = {
  name: string;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (!openai.apiKey) {
    console.error('API 키를 설정해주세요.');
    return;
  }

  const { article } = req.body;

  // article과 4~5줄로 요약해달라는 요청을 OpenAI에 보냅니다.

  const prompt = `원문:${article}\n\nQ.글을 4~5줄로 요약해주세요:`;

  const messages: ChatCompletionMessageParam[] = [
    {
      role: 'user',
      content: prompt,
    },
  ];

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages,
    temperature: 0.7,
    max_tokens: 1000,
    top_p: 1,
    frequency_penalty: 1,
    presence_penalty: 1,
    stream: true,
  });
  const stream = OpenAIStream(response);
  streamToResponse(stream, res);
}
