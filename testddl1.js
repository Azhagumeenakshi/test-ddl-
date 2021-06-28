var mysqlspec = require('mysqlspec');

// Mysql connect config.
var config = {
    user: 'root',
    password: '',
    host: '127.0.0.1',
    database: 'test'
};
// Get spec for connected database
mysqlspec(config, function (err, schema) {
    console.log("schema=" + JSON.stringify(schema, null, 4));
});