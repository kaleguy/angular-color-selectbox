module.exports = {
    options: {
        esversion:6,
        globals: {
            // js globals
            angular: true,
            _: true,
            console: true,
            // grunt globals
            module: true,
            require: true,
            process: true
        }
    },
    lib: ['<%= config.lib %>/**/*.js'],
    grunt: ['Gruntfile.js', '<%= config.grunt %>/**/*.js']
};
