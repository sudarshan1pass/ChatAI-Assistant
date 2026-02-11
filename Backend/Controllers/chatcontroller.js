import { getAIResponse } from "../services/ai.service.js"


export const chatController = async(req, res) => {
   try {
    const { message, history } = req.body

    if (!message) {
      return res.status(400).json({ error: "Message required" })
    }

    const reply = await getAIResponse(message, history)

    res.json({ reply }) 
  } catch (err) {
     res.status(500).json({
    error: "AI failed",
    details: err.message
  })

  }
}


