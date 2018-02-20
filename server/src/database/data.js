const config = require('../../config/config')

module.exports = {
    user: config.db.user,
    password: config.db.password,
    server: config.db.server, 
    database: config.db.database,
    options: {
        encrypt: true
    }
};

