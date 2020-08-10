const npm = require('npm');

let config = {
    name: 'npm',
    version: '1.0.0',
    description: '',
    main: 'index.js',
    scripts: {
        test: 'echo "Error: no test specified" && exit 1',
    },
    keywords: [],
    author: '',
    license: 'ISC',
    devDependencies: {
        npm: '^6.14.7',
    },
};

npm.load(config, () => {
    npm.install('webpack', (err) => {
        console.log(err);
    });
});
