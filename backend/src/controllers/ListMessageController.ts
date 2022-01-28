import { Request, Response } from "express";
import { ListMessageService } from "../services/ListMessagesService";

class ListMessageController {
  async hanle(request: Request, response: Response) {
    try {
      const listMessageService = new ListMessageService();

      const allMessages = await listMessageService.execute();

      response.json(allMessages);
    } catch (error) {
      console.log(error);
      response.status(500).json(error);
    }
  }
}

export { ListMessageController };
