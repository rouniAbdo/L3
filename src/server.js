import express from 'express'
import path from 'path'


const app = express()
const port = 3000
const __dirname = path.resolve()
// serve the public directory
app.use(express.static(path.join(__dirname, 'public')))
app.use('/src', express.static(path.join(__dirname, 'src')))
// serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,  'public', 'index.html'))
})
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
