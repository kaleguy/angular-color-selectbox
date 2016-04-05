module.exports = function() {
    return {
        options: {
            ieCompat: false,
            strictMath: true,
            sourceMap: false,
            banner: '/*!\n * <%= config.pkg.name %> v<%= config.pkg.version %>\n * https://github.com/kaleguy/angular-color-selectbox/\n *\n * Copyright <%= grunt.template.today("yyyy") %> kaleguy\n *\n * <%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %>\n *\n */\n'
        },
        build: {
            files: [{
                expand: true,
                cwd: '<%= config.lib %>/<%= config.styles %>',
                src: ['**/*.less'],
                dest: '<%= config.dist %>',
                ext: '.css'
            }]
        }
    };
};
