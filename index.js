//Aprendendo tudo sobre Node e Backend!
const express = require('express')
const port = 3000
const app = express()
const uuid = require('uuid')
app.use(express.json())


/*Vamos criar nossas Routes!
- GET: Busca informações no Backend
- POST: Cria informações no Backend
- PUT/PATH: Altera/atualiza informações no Backend
- DELETE: Deleta informações no Backend
*/

const users = []

const checkUserId = (request, response, next) => {

    const { id } = request.params
    const index = users.findIndex(user => user.id === id)

    if (index < 0) {
        return response.status(404).json({ message: "user not found!" })
    }

    request.userIndex = index
    request.userId = id
    next()

}

/*
Middlewares! São Interceptadores => têm o poder de parar ou alterar dados da requisição
*/



app.get('/projects', (request, response) => {
    return response.json(users)
})

app.post('/projects', (request, response) => {
    const { name, age } = request.body
    const user = { id: uuid.v4(), name, age }

    users.push(user)
    return response.status(201).json(user)
})


app.put('/projects/:id', checkUserId, (request, response) => {

    const { name, age } = request.body
    const index = request.userIndex
    const id = request.userId
    const updateUser = { id, name, age }

    users[index] = updateUser

    return response.json(updateUser)
})

app.delete('/projects/:id', checkUserId, (request, response) => {
    const index = request.userIndex

    users.splice(index, 1)

    return response.status(204).json()
})


app.listen(port, () => {
    console.log(`Server started on port ${port} ✅☑️`)
})