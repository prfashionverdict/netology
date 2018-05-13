
const fs = require('fs');
const file = require('./file-promise');


const readAll = (path) => {
    return new Promise((done, fail) => {
        fs.readdir(path, (err, files) => {
            if (err) {
                return fail(err);
            } else {
                return done(files.map(it => it = {
                    name: it,
                    content: file.read(`${path}/${it}`).then(data => data)
                }));
            }
        })
    })    
}

module.exports = readAll;