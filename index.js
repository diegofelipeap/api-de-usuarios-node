import express from 'express';
import { v4 } from "uuid";
import cors from 'cors';



const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());
app.use(cors())

console.log(PORT)

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




app.get('/projects', (request, response) => {
    return response.json(users)
})

app.post('/projects', (request, response) => {

    const { name, age } = request.body
    const user = { id: v4(), name, age }

    users.push(user)
    return response.status(201).json(user)
})


app.put('/projects/:id', checkUserId, (request, response) => {

    const { name, age } = request.body
    const index = request.userIndex
    const id = request.userId
    const updateUser = { id, name, age }

    users[index] = updateUser

    return response.json(users)
})

app.delete('/projects/:id', checkUserId, (request, response) => {
    const index = request.userIndex

    users.splice(index, 1)

    return response.status(204).json()
})


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT} ✅☑️`)
})
