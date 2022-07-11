import {app} from './app' 
import { connectToDb } from './db/Mongo'

const start = async() => {
  try {
    await connectToDb("mongodb://127.0.0.1:27017/easgy");
    console.log('connected to db')
    app.listen('3000', () => console.log('server up on 3000'))
  } catch(error) {
    console.log(error)
  }
}

start()