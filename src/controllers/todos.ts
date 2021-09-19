import { RequestHandler } from "express";
import { Todo } from "../models/todo";

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(Math.random().toString(), text);

  TODOS.push(newTodo);

  res.status(201).json({ messsage: "ok", createTodo: newTodo });
};

export const getTodo: RequestHandler = (req, res, next) => {
  res.json({ todos: TODOS });
};

export const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;
  const updateText = (req.body as { text: string }).text;

  const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);

  if(todoIndex < 0) {
    throw new Error('cannot find this')
  }

  TODOS[todoIndex] = new Todo(todoId, updateText);

  res.json({message: 'update', updateTodo: TODOS[todoIndex]})
};

export const deleteTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;
  
  const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);

  if(todoIndex < 0) {
    throw new Error('cannot find this')
  }

  TODOS.splice(todoIndex, 1);

  res.json({message: 'delete'})
};