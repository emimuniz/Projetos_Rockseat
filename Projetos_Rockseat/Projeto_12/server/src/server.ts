import express from 'express';

const app = express();

const users = [
    'Emillyn',
    'Junior',
    "Alice"
]


app.get('/users', (request, response) => {
    console.log("Listagem de usuario");

  return  response.json(users)
});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user);
})

app.post('/users', (request, response) => {
    const user = {
        nome: "Diego",
        email: "emillyn@hotmail.com"
    }

    return response.json(user)
})


app.listen(3333);