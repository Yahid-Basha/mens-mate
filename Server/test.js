import Replicate from 'replicate';

const replicate = new Replicate({
  auth: 'r8_BLht4sW1xHbhC3SUbeXEppUBDvPTQ7L2NRMjZ',
});
let chatDataState = {
    "I have low BP, and It is stressing me out!": "Hello there! *adjusts comfortable cushion* As a personal menstrual health chatbot, I'm here to help you with your concerns. *smiling face* First of all, thank you for sharing your medical history with me. *nodding* PCOS can be a challenging condition to manage, but there are many effective treatments and lifestyle changes that can help you feel better. *encouraging smile* Low blood pressure can be a symptom of PCOS, as it can disrupt the body's hormonal balance. *nodding* It's important to consult with your healthcare provider to determine the best course of action to manage your blood pressure and overall health. In the meantime, there are some things you can try to help manage your stress levels: 1. Practice relaxation techniques 2. Exercise regularly 3. Connect with others 4. Take breaks Remember, managing stress and PCOS requires a holistic approach that includes both medical treatment and lifestyle changes. *nodding* By working together with your healthcare provider and making healthy choices, you can improve your overall health and well-being. *smiling face* Now, how can I help you with your current concern about low blood pressure? *listening face*",
    "what can I do about my latest medical situation?": "Hello there! *adjusts comfortable cushion* As a personal menstrual health chatbot, I'm here to help you with your concerns. *smiling face* First of all, thank you for sharing your medical history with me. *nodding* PCOS can be a challenging condition to manage, but there are many effective treatments and lifestyle changes that can help you feel better. *encouraging smile* Low blood pressure can be a symptom of PCOS, as it can disrupt the body's hormonal balance. *nodding* It's important to consult with your healthcare provider to determine the best course of action to manage your blood pressure and overall health. In terms of your latest medical situation, I would recommend consulting with your healthcare provider to discuss your low blood pressure and how it may be related to your PCOS. They may recommend lifestyle changes such as increasing your sodium intake, taking blood pressure medication, or referring you to a specialist. In the meantime, there are some things you can try to help manage your stress levels: 1. Practice relaxation techniques relaxation techniques that can help manage stress, such as deep breathing, progressive muscle relaxation, and mindfulness meditation. You can find guided relaxation exercises online or through mobile apps. 2. Exercise regularlyular exercise can help reduce stress and improve overall health. Aim for at least 30 minutes of moderate-intensity exercise per day, such as brisk walking, cycling, or swimming. 3. Connect with othersed friend or family member, or joining a support group, can help you feel less alone and provide emotional support. 4. Take breaks to take breaks throughout the day to rest and recharge. This can help reduce stress and improve overall well-being. Remember, managing stress and PCOS requires a holistic approach that includes both medical treatment and lifestyle changes. By working together with your healthcare provider and making healthy choices, you can improve your overall health and well-being. *nodding* Now, how can I help you with your current concern about low blood pressure? *listening face*"
  }
  
const inputs = {
    input:{
    prompt: 'hiii!',
    system_prompt: `You are a personal menstrual health chatbot to answer and involve in conversations related to menstrual health. To provide personalized user experience, I want you to give replies by considering the medical history of the user, if it is required for answering the question. The user has a medical history of PCOS. Your previous chat with the user was ${JSON.stringify(chatDataState)}, consider the questions asked by the user earlier and give replies accordingly. There can be additional medical history that the user found in the chat.`,
    max_new_tokens: 800,
  }};
  
  async function getOutput() {
    let output = "";
  
    for await (const event of replicate.stream("meta/llama-2-70b-chat", inputs)) {
      output += event.toString();
      process.stdout.write(`${event}`);
    }
  
    console.log(output);
  }
  
  getOutput();