const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const getResponse = async (req, res, next) => {
  const prompt = req.params.prompt;
  console.log("yeay");

  let response;
  try {
    response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `begin with hello ${prompt}`,
      temperature: 0.7,
      max_tokens: 4000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
  } catch (e) {
    console.log("error");
  }

  if (!response) {
    return next("Oh no");
  }

  res.json({
    response: response.data["choices"][0]["text"],
  });
};

exports.getResponse = getResponse;
