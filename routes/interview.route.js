const express = require("express");
const interviewRouter = express.Router();
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

//post route
interviewRouter.post("/post", async (req, res) => {
  try {
    const text = req.body.text;
    console.log(text);
    const aiCompletion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `the question is-${question} and answer is-${answer}
      provide me the feedback on scale of 10 on basis of answer,and if answer is null or empty string it means you have to give 0 marks for that particular questin only. and suggestion also
      `,
      max_tokens: 2000,
    });
    res.json({ res: aiCompletion.data.choices[0].text });
  } catch (error) {
    console.log("error", error);
  }
});
module.exports = { interviewRouter };
