// const { Configuration, OpenAIApi } = require("openai");

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// const response = openai.createCompletion({
//   model: "text-davinci-003",
//   prompt:
//     "you are a professor of english and you need to write an introduction for an essay about chocolate about 200 word",
//   temperature: 0.7,
//   max_tokens: 4000,
//   top_p: 1,
//   frequency_penalty: 0,
//   presence_penalty: 0,
// });

// response.then((e) => console.log(e.data["choices"][0]["text"]));

const express = require("express");
const bodyParser = require("body-parser");

const assignmentRoute = require("./routes/assignment-route");

const app = express();

var cors = require("cors");
app.use(cors());

app.use(bodyParser.json());

app.use("/openAi/assignment", assignmentRoute);

app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});
