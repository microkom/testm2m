const express = require('express')

const app = express()
const port = process.env.PORT || 8080

app.use('/src/', express.static('src'))
app.use('/images/', express.static('images'))
app.use('/dist/', express.static('dist'))

app.all('*', (_req, res) => res.sendFile(`${__dirname}/index.html`))

app.listen(port, () => console.info(`App is ready on port ${port}`))