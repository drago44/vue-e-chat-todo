import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', () => {
  const todo = ref('')
  const todos = ref([])

  function addTodo() {
    const trimmedText = todo.value.trim()

    if (trimmedText.length > 0) {
      const newTodo = {
        id: todos.value.length + 1,
        text: trimmedText,
        status: 'not-done',
        editing: false
      }
      todos.value.push(newTodo)
      localStorage.setItem('todos', JSON.stringify(todos.value))
      todo.value = ''
    }
  }

  function deleteTodo(todoId) {
    const index = todos.value.findIndex((todo) => todo.id === todoId)
    if (index !== -1) {
      todos.value.splice(index, 1)
      localStorage.setItem('todos', JSON.stringify(todos.value))
    }
  }

  function startEditing(todo) {
    todo.editing = true
  }

  function saveEdited(todo) {
    todo.editing = false
    localStorage.setItem('todos', JSON.stringify(todos.value))
  }

  return { todo, todos, addTodo, deleteTodo, startEditing, saveEdited }
})
