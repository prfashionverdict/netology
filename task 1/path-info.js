const fs = require('fs');
const config = {encoding: 'utf8'};

const pathInfo = (path, cb) => {
    const info = {};
    info.path = path;

    fs.stat(path, (err, stats) => {
        if (err) return cb(err);
        if (stats.isFile()) {
            info.type = 'file';
            info.childs = 'undefined';
        } else if (stats.isDirectory()) {
            info.type = 'directory';

        } else {
            info.type = 'undefined'; 
        }
    })
    fs.readFile(path, config, (err, content) => {
        if (err) return cb(err);
        info.content = content;
    });


    cb(null, info);
}

module.exports = pathInfo;

/*

childs — список дочерних файлов и папок, массив строк, undefined — если это не папка.
*/