<template>
  <div>
    <div class="flex"></div>
    <div>
      <input v-model="todoState.newTodo" type="text" />
      <button @click="addTodo">Add</button>
    </div>
    <ul style="list-style: none; padding-left: 0">
      <li v-for="(item, index) in todoState.list">{{ index + 1 }}、{{ item.task }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue'

const todoState = reactive({
  newTodo: '',
  list: [],
})
const addTodo = () => {
  if (!todoState.newTodo) {
    alert('请先输入...')
    return
  }

  if (todoState.newTodo.length <= 3) {
    alert('太短了...')
    return
  }

  console.log(todoState.newTodo, typeof todoState.newTodo)
  fetch('/api/todo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      code: 'addTodo',
      data: {
        task: todoState.newTodo,
      },
    }),
  }).then(
    async (res: any) => {
      res = await res.json()

      if (res.code !== 200) return

      todoState.newTodo = ''

      getTodoList()
    },
    (err) => {},
  )
}
const getTodoList = () => {
  fetch('/api/todo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      code: 'fetchTodos',
    }),
  }).then(
    async (res: any) => {
      res = await res.json()

      if (res.code !== 200) return

      todoState.list = res.data
    },
    (err) => {},
  )

  todoState.list = []
}

onMounted(() => {
  getTodoList()
})
</script>

<style scoped></style>
