import { createClient } from '@supabase/supabase-js'
import config from './config'

let db = null
export default function connectDB() {
  if (!db) {
    db = createClient(config.dbUrl, config.dbToken)
  }

  return db
}
