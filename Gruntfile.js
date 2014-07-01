module.exports = function(grunt) {
    var files = ['src/**/*.js', 'test/**/*.js'];
    grunt.initConfig({
        jshint: {
            all: files,
            options: {
                globals: {
                    _: false,
                    $: false,
                    jasmine: false,
                    describe: false,
                    it: false,
                    expect: false,
                    beforeEach: false,
                },
                browser: true,
                devel: true
            },
        },
        testem: {
            unit: {
                options: {
                    framework: 'jasmine2',
                    launch_in_dev: ['PhantomJS'],
                    before_tests: 'grunt jshint',
                    serve_files: files,
                    watch_files: files
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-testem');

};
