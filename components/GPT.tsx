import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';

const GPT = ({ article }: { article: string }) => {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  const requestApi = () => {
    setLoading(true);
    return fetch(`/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ article }),
    });
  };

  const parseResult = async (response: Response) => {
    const reader = response.body
      ?.pipeThrough(new TextDecoderStream())
      .getReader();

    let result = '';
    while (reader) {
      const { value, done } = await reader.read();
      if (done) {
        break;
      }
      if (value.includes('data: [DONE]')) {
        break;
      }

      const lines = value.split('\n\n').filter(Boolean);

      const chunks = lines.map((data) => data).filter(Boolean);

      chunks.forEach((chunk) => {
        result += chunk;
        setContent(result);
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    if (article) {
      requestApi().then((response) => parseResult(response));
    }
  }, []);

  return (
    <GPTContainer>
      <GPTTitle>GPT 요약</GPTTitle>
      <GPTAnswer>
        {loading ? (
          <div className="flex justify-center items-center w-full h-full">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          <div className="whitespace-pre-wrap">{content}</div>
        )}
      </GPTAnswer>
    </GPTContainer>
  );
};

export default GPT;

const GPTContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

const GPTAnswer = styled.div`
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 5px;
  }
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  placeholder {
    color: #333333;
  }
  height: 200px;
  resize: none;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
`;

const GPTTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding: 5px;
`;
