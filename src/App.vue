<script setup>
import { useTodoStore } from '@/stores/todo.store'

const todoStore = useTodoStore()
</script>
<template>
  <main>
    <section class="todo">
      <div class="todo__container">
        <div class="todo__title">
          <h1>Todo list</h1>
          {{ todoStore.todos.length }}
        </div>
        <AddTodo />
        <TableTodo />
      </div>
    </section>
  </main>
</template>

<style lang="scss">
.todo {
  &__container {
    max-width: 888px;
    margin: 0 auto;
    padding: 0 15px;

    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  &__title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
  }
}

.green {
  stroke: lightgreen;
}

.yellow {
  stroke: yellow;
}

.red {
  stroke: red;
}
</style>
