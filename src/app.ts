import 'dotenv/config'
import express, { Request, Response, NextFunction } from 'express'
import router from "./router/index"
const app = express()


app.get('/welcome', (req: Request, res: Response, next: NextFunction) => {
  res.send('welcome!')
})

app.use("/router", router)

app.listen(process.env.PORT, () => {
  console.log(`
  ################################################
  🛡️  Server listening on port: ${process.env.PORT}🛡️
  ################################################
`)
})