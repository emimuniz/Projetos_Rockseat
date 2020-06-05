const axios = require('axios');

module.exports = {
    async store(req, res){s
        const {username} = req.body;
        const {name, bio, avatar_url: avatar} = response.data;

        const dev = await Dev.create({
            name,
            user: username,
            bio,
            avatar
        })
        const response = await axios.get(`https://api.github.com/users/${username}`)

        return res.json(dev)
    }
} 