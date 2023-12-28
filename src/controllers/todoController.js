import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// NOTE - this is createTodo function
export const createTodo = async (req, res) => {
  const { title, description } = req.body;
  try {
    const todo = await prisma.todo.create({ data: { title, description } });
    res.status(201).json({ message: "create successful", data: todo });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating the todo." });
  }
};

// NOTE - this is getTodos function
export const getTodos = async (req, res) => {
  try {
    const todos = await prisma.todo.findMany();
    res.status(200).json({ message: "get successful", data: todos });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while retrieving todos." });
  }
};

// NOTE - this is getTodo function
export const getTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await prisma.todo.findUnique({ where: { id } });
    if (todo) {
      res.status(200).json({ message: "get successful", data: todo });
    } else {
      res.status(404).json({ error: "Todo not found." });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while retrieving the todo." });
  }
};

// NOTE - this is updateTodo function
export const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, description, done } = req.body;
  try {
    const todo = await prisma.todo.update({
      where: { id },
      data: { title, description, done },
    });
    res.status(200).json({ message: "update successful", data: todo });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while updating the todo." });
  }
};

// NOTE - this is deleteTodo function
export const deleteTodo = async (req, res) => {
  const { id } = req.params;

  try {
    const todo = await prisma.todo.delete({ where: { id: id } });

    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while deleting the todo." });
  }
};
