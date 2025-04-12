jkj;
export class ExpressTaskController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const tasks = await ServiceContainer.task.getAll.run();
      return res.json(tasks.map((task) => task.mapToPrimitives())).status(200);
    } catch (error) {
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const task = await ServiceContainer.task.getById.run(req.params.id);
      return res.json(task?.mapToPrimitives()).status(200);
    } catch (error) {
      if (error instanceof TaskNotFoundError) {
        return res.status(404).json({ message: error.message });
      }
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { id, description, isDone, createdAt, updatedAt } = req.body as {
        id: string;
        description: string;
        isDone: boolean;
        createdAt: string;
        updatedAt: string;
      };
      await ServiceContainer.task.create.run(
        id,
        description,
        isDone,
        new Date(createdAt),
        new Date(updatedAt)
      );
      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id, description, isDone, createdAt, updatedAt } = req.body as {
        id: string;
        description: string;
        isDone: boolean;
        createdAt: string;
        updatedAt: string;
      };
      await ServiceContainer.task.edit.run(
        id,
        description,
        isDone,
        new Date(createdAt),
        new Date(updatedAt)
      );
      return res.status(204).send();
    } catch (error) {
      if (error instanceof TaskNotFoundError) {
        return res.status(404).json({ message: error.message });
      }

      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      await ServiceContainer.task.delete.run(req.params.id);
      return res.status(204).send();
    } catch (error) {
      if (error instanceof TaskNotFoundError) {
        return res.status(404).json({ message: error.message });
      }

      next(error);
    }
  }
}
