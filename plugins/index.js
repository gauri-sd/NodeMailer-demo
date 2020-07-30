const { readdirSync } = require("fs");

module.exports = () =>
    readdirSync(__dirname, {withFileTypes:true})
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);