const file = require('./file-promise');
const readAll = require('./read-all');
const pathInfo = require('./path-info');

const show = (file) => {
    console.log('-'.repeat(10));
    console.log(`Содержимое файлы ${file.name}:`);
    console.log(file.content);
    console.log('-'.repeat(10));
  }

const showInfo = (err, info) => {
    if (err) {
    console.log('Возникла ошибка при получении информации');
    return;
    }

    switch (info.type) {
    case 'file':
        console.log(`${info.path} — является файлом, содержимое:`);
        console.log(info.content);
        console.log('-'.repeat(10));
        break;
    case 'directory':
        console.log(`${info.path} — является папкой, список файлов и папок в ней:`);
        info.childs.forEach(name => console.log(`  ${name}`));
        console.log('-'.repeat(10));
        break;
    default:
        console.log('Данный тип узла не поддерживается');
        break;
    }
}

file
    .read('./data.txt')
    .then(data => data.toUpperCase())
    .then(data => file.write('./upper-data.txt', data))
    .then(filename => console.log(`Создан файл ${filename}`))
    .catch(err => console.error(err));

readAll('./logs')
    .then(files => files.forEach(show))
    .catch(err => console.error(err));


pathInfo('./logs', showInfo);
pathInfo('./data', showInfo);