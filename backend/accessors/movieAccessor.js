const getAllFavouriteMovies = () => {
    return new Promise(function (resolve, reject) {
        let query = `SELECT * FROM favourite_movies;`;
        sql.query(query, async function (error, result) {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
};

const saveFavouriteMovie = (movie) => {
    return new Promise(function (resolve, reject) {
        let values = [
            movie.Title,
            movie.Type,
            movie.Poster,
            movie.Year,
        ];
        let query = `INSERT INTO favourite_movies (title, type, poster, year) VALUES (?);`;
        sql.query(query, [values], async function (error, result) {
            if (error) {
                reject(error);
            } else {
                resolve();
            }
        });
    });
};

module.exports = {
    getAllFavouriteMovies,
    saveFavouriteMovie
}