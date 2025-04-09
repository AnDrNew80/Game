/**
 * Created by Andrzej on 2016-05-01.
 */

//Import required libraries
var args = require('minimist')(process.argv.slice(2));
var extend = require('extend');

//Store the environment variable
var environment = args.env || "test";

//Common config... ie: name, version, max player etc...
var common_conf = {
    name: "ad game server",
    version: "0.0.1",
    environment: environment,
    max_player: 100,
    data_paths: {

        maps: __dirname + "\\Game Data\\" + "Maps\\"
    },
    starting_zone: "ad_map_home"
};

//Environment Specific Configuration
var conf = {
    production: {
        ip: args.ip || "0.0.0.0",
        port: args.port || 8081,
        database: "mongodb://127.0.0.1/SpaceShip_prod"
    },

    test: {
        ip: args.ip || "0.0.0.0",
        port: args.port || 8082,
        database: "mongodb://127.0.0.1/SpaceShip_test"
    }
};


extend(false, conf.production, common_conf);
extend(false, conf.test, common_conf);

module.exports = config = conf[environment];