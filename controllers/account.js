const get = (req, res) => {
    console.log(req.url)
    res.status(200).json({ user: 'Jonathan Comas' });
}

module.exports = {
    get
}