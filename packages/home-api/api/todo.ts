import connectDB from '../connectDB'
import { $ApiInfo, Reply } from './base'
import { z } from 'zod'

const supabase = connectDB()

const Todo = z.object({
  task: z.string(),
  user_id: z.string().optional(),
  is_complete: z.boolean().optional(),
  inserted_at: z.string().optional(),
})

type $Todo = z.infer<typeof Todo>

/**
 * Retreive all todo for the signed in user
 */
export async function fetchTodos() {
  try {
    const { data, error } = await supabase.from('todos').select('*').order('id')
    return Reply.success(data || [])
  } catch (err) {
    return Reply.fail([])
  }
}

/**
 *  Add a new todo to supabase
 */
export async function addTodo(info: $ApiInfo<$Todo>) {
  const todo = info.body.data

  try {
    Todo.parse(todo)

    console.log(todo)
    const { data, error } = await supabase.from('todos').insert(todo).single()
    if (error) throw error

    return Reply.success(data)
  } catch (err) {
    return Reply.fail(err.message)
  }
}
