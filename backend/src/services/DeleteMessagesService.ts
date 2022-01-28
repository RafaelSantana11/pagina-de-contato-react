import { getCustomRepository } from "typeorm";
import { Message } from "../entities/Messages";
import { MessagesRepository } from "../repository/MessagesRepository";

class DeleteMessagesService {
  execute(id: string) {
    const messageRepository = getCustomRepository(MessagesRepository);

    messageRepository
      .createQueryBuilder()
      .delete()
      .from(Message)
      .where("id = :id", { id: id })
      .execute();

    return { message: "Success!" };
  }
}

export { DeleteMessagesService };
