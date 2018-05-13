const fs = require('fs');
const config = {encoding: 'utf8'};

const read = (file) => {
    return new Promise((done, fail) => {
        fs.readFile(file, config, (err, content) => {
            if (err) {
                return fail(err);
            } else {
                return done(content);
            }
        });
    })
};

const write = (file, data) => {
    return new Promise((done, fail) => {
        fs.writeFile(file, data, config, err => {
            if (err) {
                return fail(err);
            } else {
                return done(`${file}`)
            }
        })
    })
}
module.exports = {read, write};