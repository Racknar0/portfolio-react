
// ChatbotMessageParser.js
class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      if (
        lowerCaseMessage.includes("about") || 
        lowerCaseMessage.includes("who are you") || 
        lowerCaseMessage.includes("sobre") || 
        lowerCaseMessage.includes("quien eres") || 
        lowerCaseMessage.includes("quién eres")
      ) {
        this.actionProvider.handleAbout();
      } else if (
        lowerCaseMessage.includes("experience") || 
        lowerCaseMessage.includes("experiencia") || 
        lowerCaseMessage.includes("trabajo") || 
        lowerCaseMessage.includes("empleo")
      ) {
        this.actionProvider.handleExperience();
      } else if (
        lowerCaseMessage.includes("projects") || 
        lowerCaseMessage.includes("proyectos") || 
        lowerCaseMessage.includes("portafolio") || 
        lowerCaseMessage.includes("creaciones")
      ) {
        this.actionProvider.handleProjects();
      } else if (
        lowerCaseMessage.includes("contact") || 
        lowerCaseMessage.includes("contacto") || 
        lowerCaseMessage.includes("correo") || 
        lowerCaseMessage.includes("email") || 
        lowerCaseMessage.includes("escribir")
      ) {
        this.actionProvider.handleContact();
      } else {
        this.actionProvider.handleDefault();
      }
    }
  }
  
  export default MessageParser;
  