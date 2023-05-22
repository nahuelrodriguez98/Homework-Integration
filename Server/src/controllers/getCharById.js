const axios = require('axios');
const URL = 'https://rickandmortyapi.com/api/character/';

const getCharById = (req, res) => {
    const { id } = req.params;

    axios(`${URL}/${id}`)
    .then(response => response.data)
    .then(({ name, gender, species, origin, image, status }) => {
        if (name) {
            let character = {
                id,
                name,
                gender,
                species,
                origin,
                image,
                status
            };
            res.status(200).json(character);
        } else {
            res.status(404).json({ message: 'Character not found' });
        }
    })
    .catch((error) => res.status(500).json({ message: 'Internal Server Error' }));
};

module.exports = {
    getCharById
};