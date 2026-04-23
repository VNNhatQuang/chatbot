import { GoogleGenAI } from "@google/genai";


class GoogleGenAIService {

    constructor() {
        this.ai = null;
    }

    initializeAI() {
        if (!this.ai) {
            const apiKey = process.env.GEMINI_API_KEY;
            if (!apiKey) {
                throw new Error("Missing GEMINI_API_KEY");
            }
            this.ai = new GoogleGenAI({ apiKey });
        }
        return this.ai;
    }

    /** Hàm gọi API của Google GenAI để tạo nội dung dựa trên tin nhắn đầu vào
     * @param {string} message 
     * @returns 
     */
    async generateContent(message) {
        try {
            const ai = this.initializeAI();

            const response = await ai.models.generateContent({
                model: "gemini-3-flash-preview",
                contents: message,
            });

            return response.text;

        } catch (error) {
            console.log(error);
            return null;
        }
    }

}

export default new GoogleGenAIService;