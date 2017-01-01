var pkg = require('./package.json');

module.exports = {
    root: './zh-CN',
    title: 'test search plus plugin',
    plugins: ['-lunr', '-search','search-plus'],

    variables: {
        version: pkg.version
    }
};