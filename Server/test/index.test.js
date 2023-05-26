const { server } = require('../src/app');
const session = require('supertest');
const request = session(server);

const character = {
    id: 923, 
    name: 'Nata', 
    species: "Human", 
    gender: "Male", 
    status: "Alive", 
    origin: {
        name: "Earth (C-137)",
    },
    image: 'image.jpg' 
};

describe('test de RUTAS', ()=>{
    describe('GET /rickandmorty/character/:id', () => {
        it('Responde con status: 200', async () => {
           const response =  await request.get('/rickandmorty/character/1');
           expect(response.statusCode).toBe(200);
        });
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async ()=>{
            const response =  await request.get('/rickandmorty/character/1');
            for(const prop in character){
                expect(response.body).toHaveProperty(prop)
            }
            
        });
        it("Si hay un error responde con status: 500", async () => {
            const response =  await request.get('/rickandmorty/character/3209j');
            expect(response.statusCode).toBe(500);
        });
    })
    describe('GET /rickandmorty/login', () => {
        it("Responde con un objeto con la propiedad access en true si la informacion del usuario es valida", async () => {
            const response = await request.get('/rickandmorty/login?email=nahuelrodriguez_@outlook.com&password=tatengue89');
            const access = { access: true};
            expect(response.body).toEqual(access);
        })
        it("Responde con un objeto con la propiedad access en false si la informacion del usuario no es valida", async () => {
            const response = await request.get('/rickandmorty/login?email=nahuelrodriguez@outlook.com&password=123awsd');
            const access = { access: false};
            expect(response.body).toEqual(access);
        });
    })
    describe("POST /rickandmorty/fav", () => {
        it("Debe guardar el personaje en favoritos", async () => {
            const response = await request.post('/rickandmorty/fav').send(character);
            expect(response.body).toContainEqual(character);
        });

        it("Debe agregar personajes a favoritos sin eliminar los existentes", async ()=>{
            character.id= 1921;
            character.name= "Vale";
            const response = await request.post('/rickandmorty/fav').send(character);
            expect(response.body.length).toBe(2);
        })
    })
})