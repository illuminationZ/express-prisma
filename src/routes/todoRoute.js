import express from "express";
import * as todoController from "../controllers/todoController.js";
const router = express.Router();

// NOTE - this is getTodos function
/**
 * @openapi
 * /todos:
 *   get:
 *     summary: Retrieve a list of todos
 *     responses:
 *       200:
 *         description: A list of todos.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Todo'
 * components:
 *   schemas:
 *     Todo:
 *       type: object
 *       required:
 *         - title
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the todo
 *         title:
 *           type: string
 *           description: The title of the todo
 *         description:
 *           type: string
 *           description: The description of the todo
 *         done:
 *           type: boolean
 *           description: The status of the todo
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The auto-generated datetime of the todo
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The auto-updated datetime of the todo
 */
router.get("/", todoController.getTodos);

// NOTE - this is createTodo function
/**
 * @openapi
 * /todos:
 *   post:
 *     summary: Create a new todo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Todo'
 *     responses:
 *       201:
 *         description: The created todo.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 */
router.post("/", todoController.createTodo);

// NOTE - this is getTodo function
/**
 * @openapi
 * /todos/{id}:
 *   get:
 *     summary: Retrieve a specific todo
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The todo id
 *     responses:
 *       200:
 *         description: The retrieved todo.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 */
router.get("/:id", todoController.getTodo);

// NOTE - this is updateTodo function
/**
 * @openapi
 * /todos/{id}:
 *   patch:
 *     summary: Update a specific todo
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The todo id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Todo'
 *     responses:
 *       200:
 *         description: The updated todo.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 */
router.patch("/:id", todoController.updateTodo);

// NOTE - this is deleteTodo function
/**
 * @openapi
 * /todos/{id}:
 *   delete:
 *     summary: Delete a specific todo
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The todo id
 *     responses:
 *       200:
 *         description: The deleted todo.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 */
router.delete("/:id", todoController.deleteTodo);

export default router;
