export const getAIResponse = async (message) => {
  const msg = message.toLowerCase();

  if (msg.includes("hello") || msg.includes("hi")) {
    return "Hello kaise ho aap 😊";
  }
  if(msg.includes(" How are you") || msg.includes("badiya")) {
    return " yha toh aache baat hai ?";
  }
  if(msg.includes("what is your name") || msg.includes("who are you")) {
    return "Mera naam ChatAI hai, main aapka AI assistant hoon.";
  }
  if(msg.includes("what can you do") || msg.includes("your capabilities")) {
    return "Main aapke sawalon ka jawab de sakta hoon, aapke tasks mein madad kar sakta hoon, aur aapke saath baat cheet kar sakta hoon.";
  }
if(msg.includes("bye") || msg.includes("goodbye")) {
    return "Alvida! Aapka din shubh ho!";
  }
  if (msg.includes("kaise ho")) {
    return "Main bilkul theek hoon, aap kaise ho?";
  }

  return "Samjha nahi, thoda aur explain karo 🙂";
};