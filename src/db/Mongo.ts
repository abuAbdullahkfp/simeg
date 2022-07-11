import mongoose from 'mongoose' 

export const connectToDb = async (url: string) => {
  return mongoose.connect(url)
}

