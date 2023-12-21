const Artist = require("../../models/encore/Artist");

// get all artists
async function getAllArtists(req, res) {
    const filter = req.query.filter;
    const regex = new RegExp(filter, "i");
    const artists = await Artist.find().sort({ name: 1 });
    if (filter === "") {
        res.status(200).json(artists);
    } else {
        const artistsFiltered = artists.filter(artist => {
            const string = artist.name;
            return regex.test(string);
        });
        res.status(200).json(artistsFiltered);
    }

}

// get single artist
async function getSingleArtist(req, res) {
    const artist_id = req.params.id;
    const artist = await Artist.findOne({ artist_id: artist_id });
    res.status(200).json(artist);
};

module.exports = {
    getAllArtists,
    getSingleArtist
}; 