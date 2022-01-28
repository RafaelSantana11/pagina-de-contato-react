import { Request, Response } from "express";
import { CreateMessageService } from "../services/CreateMessageService";

class CreateMessageController {
  async handle(request: Request, response: Response) {
    try {
      const { email, message } = request.body;

      const createMessageService = new CreateMessageService();

      const newMessage = await createMessageService.execute({ email, message });

      response.json(newMessage);
    } catch (error) {
      console.log(error);
      response.status(500).json(error);
    }
  }
}

export { CreateMessageController };
