module.exports = {

    options: {
        sourceMap: true,
        presets: ['es2015']
    },
    build: {
        files:[
            {
              expand: true,
              cwd: 'src/scripts/',
              src: ['*.js'],
              dest: '.tmp/'
            }
        ]
    }

};

