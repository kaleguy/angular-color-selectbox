module.exports = function(grunt) {
    grunt.registerTask('build', [
        'notify:build',
        'jshint:lib',
        'jshint:grunt',
        'clean:build',
        'babel:build',
        'concat:build',
        'less:build',
        'uglify:build',
        'cssmin:build',
        'notify:buildComplete'
    ]);
};
