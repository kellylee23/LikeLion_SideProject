import { OpenAI } from "openai";

const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true });

export const horoscopeCall = async () => {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "오늘의 종합 운세를 한 문장으로 알려줘, 부정적인 운세는 없었으면 좋겠어. 그 후 이 운세에 어울리는 명언 하나도 알려줘. 답변의 형식은 {fortune: 내용, quote: 내용}의 형식으로 json의 형태로 답해줘.",
      },
    ],
    model: "gpt-3.5-turbo",
  });

  // OpenAI의 응답 내용
  const responseContent = completion.choices[0].message.content;

  // 응답 문자열을 JSON 형태로 변환
  let parsedResponse = {};
  try {
    parsedResponse = JSON.parse(responseContent);
  } catch (error) {
    console.error("응답 파싱 실패:", error);
  }

  // 반환할 데이터 포맷을 fortune, quote, author로 정의
  return {
    fortune: parsedResponse.fortune || "운세 정보를 불러올 수 없습니다.",
    quote: parsedResponse.quote || "명언 정보를 불러올 수 없습니다.",
    author: parsedResponse.author || "– 알 수 없음", // author가 없으면 기본값을 설정
  };
};

export default horoscopeCall;
