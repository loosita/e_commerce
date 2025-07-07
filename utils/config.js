require('dotenv').config();

const settings = {
    PORT : process.env.PORT,
    URI : process.env.MONGO_URI
}
module.exports = settings;