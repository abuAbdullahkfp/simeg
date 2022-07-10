import express from 'express'

const app = express()

const start = async (): Promise<void> => {
  try {
    app.listen(3000, () => console.log("listening on port 3000"));
  } catch (error) {}
};


start()