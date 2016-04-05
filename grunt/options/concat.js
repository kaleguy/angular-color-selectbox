module.exports = {
    options: {
        stripBanners: true,
        sourceMap: false,
        banner: '/*!\n * <%= config.pkg.name %> v<%= config.pkg.version %>\n * https://github.com/kaleguy/angular-color-selectbox/\n *\n * Copyright <%= grunt.template.today("yyyy") %> kaleguy\n *\n * <%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %>\n *\n */\n'
    },
    build: {
        dest: '<%= config.dist %>/<%= config.filename %>.js',
        src: [
            '.tmp/app.module.js',
            '.tmp/color-selectbox.directive.js',
        ]
    }
};
