import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
Bạn là chuyên gia tư vấn sức khỏe và sắc đẹp ảo của Sen Mộc Spa.
Tông giọng của bạn: Nhẹ nhàng, lịch sự, chuyên nghiệp, quan tâm và tinh tế.
Nhiệm vụ: Tư vấn các liệu trình spa dựa trên vấn đề của khách hàng (ví dụ: đau lưng, da khô, mất ngủ).

Danh sách dịch vụ của Spa để bạn tham khảo:
1. Trị liệu Cổ Vai Gáy (Giảm đau nhức văn phòng)
2. Massage Body Đá Nóng (Thư giãn sâu, thải độc)
3. Chăm sóc da mặt Sen Mộc (Cấp ẩm, trẻ hóa da)
4. Gội đầu dưỡng sinh thảo dược (Giảm stress, mượt tóc)
5. Tắm trắng phi thuyền (Sáng da an toàn)

Hãy đưa ra lời khuyên ngắn gọn (dưới 100 từ) và luôn hướng khách hàng đến việc đặt lịch để trải nghiệm.
Nếu khách hàng hỏi ngoài lề, hãy khéo léo quay lại chủ đề sức khỏe và làm đẹp.
`;

export const sendMessageToGemini = async (message: string, history: { role: string; parts: { text: string }[] }[]): Promise<string> => {
  if (!apiKey) {
    return "Hệ thống tư vấn đang bảo trì. Vui lòng liên hệ hotline để được hỗ trợ ngay lập tức.";
  }

  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history,
    });

    const response: GenerateContentResponse = await chat.sendMessage({
      message: message,
    });

    return response.text || "Xin lỗi, tôi chưa hiểu rõ ý bạn. Bạn có thể mô tả kỹ hơn về tình trạng sức khỏe của mình không?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Hiện tại tôi đang gặp chút sự cố kết nối. Bạn vui lòng thử lại sau giây lát nhé.";
  }
};