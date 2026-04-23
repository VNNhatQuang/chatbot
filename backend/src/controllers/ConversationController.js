import GoogleGenAIService from "../services/GoogleGenAIService.js";


class ConversationController {

    /** 
     * @swagger
     * tags:
     *   - name: Conversation
     *     description: Danh sách các API để quản lý cuộc trò chuyện với chatbot
     */

    /** Chat với chatbot
     * @swagger
     *   /api/v1/conversations/chat:
     *   post:
     *     summary: Chat với chatbot
     *     tags: [Conversation]
     *     requestBody:
     *       required: true
     *       content:
     *         application/x-www-form-urlencoded:
     *           schema:
     *             type: object
     *             properties:
     *               message:
     *                 type: string
     *                 description: Nội dung tin nhắn gửi đến chatbot
     *                 example: "Xin chào, bạn có thể giúp tôi không?"
     *             required:
     *               - message
     *     responses:
     *       200:
     *         description: Successful authentication
     *         content:
     *           application/json:
     *             example:
     *               reply: "Hello!"
     */
    async chat(req, res) {
        try {
            const { message } = req.body;

            const reply = await GoogleGenAIService.generateContent(message);

            return res.json({ reply });

        } catch (error) {
            console.error(error.response?.data || error.message);
            return res.status(500).json({ error: "API error" });
        }
    }

}

export default new ConversationController;