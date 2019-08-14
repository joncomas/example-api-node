
const get = (req, res) => {
    console.log(req.url)
    res.status(200).json({token: 'xxxxx-xxxx-xxxx-xxxx' });

} 

const postToken = (req, res) => {
    console.log(req.url)
    res.status(200).json({token: 'xxxxx-xxxx-xxxx-xxxx' });
};

module.exports = {
    get,
    postToken
}