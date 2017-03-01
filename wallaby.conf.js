const path = require('path');
module.exports = function (wallaby) {

    return {
        files: ['src/*.js'],

        tests: ['src/tests/*.test.js'],

        env: {
            type: 'node',
            runner: 'node',
        },
        compilers: {
            '**/*.js': wallaby.compilers.babel({
                presets: ['es2015', 'react', "stage-1"]
            })
        },
        testFramework: 'jest'
    };
};