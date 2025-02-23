import { OpenAI } from "openai";

const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true });

export const horoscopeCall = async () => {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          '오늘의 종합 운세를 한 문장으로 알려줘, 부정적인 운세는 없었으면 좋겠어. 그 후 이 운세에 어울리는 명언 하나도 알려줘. 반드시 아래 형식으로 JSON만 반환해: ```json {"fortune": "내용", "quote": "내용"} ```',
      },
    ],
    model: "gpt-3.5-turbo",
  });

  // OpenAI의 응답 내용
  const responseContent = completion.choices[0].message.content;

  // JSON 추출 로직
  const jsonMatch = responseContent.match(/```json\s*([\s\S]+?)\s*```/);
  let parsedResponse = {};

  // 응답 문자열을 JSON 형태로 변환
  try {
    const jsonString = jsonMatch ? jsonMatch[1] : responseContent;
    parsedResponse = JSON.parse(jsonString);
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
