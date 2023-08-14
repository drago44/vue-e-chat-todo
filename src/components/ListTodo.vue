<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useTodoStore } from '@/stores/todo.store'

const todoStore = useTodoStore()
const { todos } = storeToRefs(todoStore)
const { deleteTodo, startEditing, saveEdited } = todoStore

onMounted(() => {
  const savedTodos = localStorage.getItem('todos')
  if (savedTodos) {
    todos.value = JSON.parse(savedTodos)
    todos.value.forEach((todo) => {
      todo.editing = false
    })
  }
})
</script>

<template>
  <template v-if="todos.length > 0">
    <BaseTable>
      <template v-slot:top>
        <tr>
          <th>Todo</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </template>
      <template v-slot:bottom>
        <tr v-for="todo in todos" :key="todo.id">
          <template v-if="!todo.editing">
            <td>
              <h2>Todo:</h2>
              {{ todo.text }}
            </td>
            <td>
              <h2>Status:</h2>
              <BaseIcon
                :class="{
                  green: todo.status === 'done',
                  yellow: todo.status === 'in-progress',
                  red: todo.status === 'not-done'
                }"
                :variant="
                  todo.status === 'done'
                    ? 'check'
                    : todo.status === 'in-progress'
                    ? 'progress'
                    : 'notDone'
                "
                width="40"
                height="40"
              />
              {{ todo.status }}
            </td>
            <td>
              <div class="todo-list__actions">
                <BaseButton variant="delete" @click="deleteTodo(todo.id)">
                  <BaseIcon variant="delete" />
                  <span>Delete</span>
                </BaseButton>
                <BaseButton variant="edit" @click="startEditing(todo)">
                  <BaseIcon variant="edit" />
                  <span>Edit</span>
                </BaseButton>
              </div>
            </td>
          </template>
          <template v-else>
            <td>
              <h2>Todo:</h2>
              <input v-model="todo.text" @keyup.enter="saveEdited(todo)" />
            </td>
            <td>
              <h2>Status:</h2>
              <div class="select">
                <select v-model="todo.status">
                  <option value="not-done">Not in progress</option>
                  <option value="in-progress">In progress</option>
                  <option value="done">Complete</option>
                </select>
                <div class="select__arrow"></div>
              </div>
            </td>
            <td>
              <div class="todo-list__actions">
                <BaseButton variant="save" @click="saveEdited(todo)">
                  <BaseIcon variant="edit" />
                  <span>Save</span>
                </BaseButton>
              </div>
            </td>
          </template>
        </tr>
      </template>
    </BaseTable>
  </template>
  <template v-else>
    <p>No todos</p>
  </template>
</template>

<style lang="scss">
table {
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;

  thead {
    background-color: wheat;

    @media (max-width: 767.98px) {
      border: none;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }
  }

  tr {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    padding: 15px;
    border: 1px solid white;

    h2 {
      display: none;
    }

    th {
      font-size: 18px;
      text-align: center;
      text-transform: uppercase;
      color: black;
    }

    td {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 15px;
      font-size: 16px;
      text-align: left;

      h2:nth-child(1) {
        flex: 0 1 15%;
      }

      @media (max-width: 767.98px) {
        border-bottom: 1px solid white;
        padding: 15px 0;

        &:last-child {
          border-bottom: 0;
        }
      }
    }

    th:nth-child(1),
    td:nth-child(1) {
      flex: 1 1 50%;
      justify-content: flex-start;
    }

    th:nth-child(2),
    td:nth-child(2) {
      flex: 1 1 18%;
      justify-content: center;

      @media (max-width: 767.98px) {
        flex-direction: row;
        justify-content: flex-start;
        gap: 15px;
      }
    }

    th:nth-child(3),
    td:nth-child(3) {
      flex: 1 1 20%;
      justify-content: flex-end;

      div {
        display: flex;
        align-items: center;
        gap: 15px;
      }
    }

    @media (max-width: 767.98px) {
      display: block;
      border-radius: 5px;
      margin-bottom: 15px;
      padding: 0 15px;

      h2 {
        display: block;
      }
    }
  }
}

.select {
  position: relative;
  display: inline-block;
  width: 100%;
  &__arrow {
    position: absolute;
    top: 16px;
    right: 15px;
    color: white;
    pointer-events: none;
    border-style: solid;
    border-width: 8px 5px 0px 5px;
    border-color: #7b7b7b transparent transparent transparent;
  }

  select:hover ~ .select__arrow,
  select:focus ~ .select__arrow {
    border-top-color: wheat;
  }

  select:disabled ~ .select__arrow {
    border-top-color: #cccccc;
  }
}
</style>
