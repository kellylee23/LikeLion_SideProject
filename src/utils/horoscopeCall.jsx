import { OpenAI } from "openai";

const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true });

const horoscopeCall = async () => {
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

  console.log(completion.choices[0].message.content);
  return completion.choices[0].message.content;
};

export default horoscopeCall;
