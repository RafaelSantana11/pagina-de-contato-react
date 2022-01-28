import { Request, Response } from "express";
import { DeleteMessagesService } from "../services/DeleteMessagesService";

class DeleteMessagesController {
  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const deleteMessageService = new DeleteMessagesService();

      const message = await deleteMessageService.execute(id);

      response.json(message);
    } catch (error) {
      console.log(error);
      response.status(500).json(error);
    }
  }
}

export { DeleteMessagesController };
