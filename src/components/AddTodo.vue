<script setup>
import { storeToRefs } from 'pinia'
import { useTodoStore } from '@/stores/todo.store'

const todoStore = useTodoStore()
const { todo } = storeToRefs(todoStore)
const { addTodo } = todoStore
</script>
<template>
  <div class="add-todo">
    <input v-model="todo" placeholder="Add a new todo..." @keyup.enter="addTodo" />
    <BaseButton variant="add" @click="addTodo">
      <BaseIcon variant="add" />
      <span>Add</span>
    </BaseButton>
  </div>
</template>

<style lang="scss">
.add-todo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
}
</style>
