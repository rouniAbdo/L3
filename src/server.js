import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()
const port = 3000
// serve the public directory
app.use(express.static(path.join(__dirname, '..', 'public')))
app.use('/src', express.static(path.join(__dirname, '..', 'src')))
// serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
