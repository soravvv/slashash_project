const express = require("express");
const router = express.Router();
const MovieAccessor = require('../accessors/movieAccessor')

router.post('/favourite/save', async (req, res) => {
    try {
        let { movie } = req.body
        console.log(movie)
        await MovieAccessor.saveFavouriteMovie(movie)
        res.status(200).send('Movie saved to favourite lists')
    }

    catch (err) {
        console.log(err);
        res.status(400).send(err)
    }
})

router.get('/', async (req, res) => {
    try {
        let favouriteMovies = await MovieAccessor.getAllFavouriteMovies()
        res.status(200).send(favouriteMovies)
    }

    catch (err) {
        res.status(400).send(err)
    }
})

module.exports = router;