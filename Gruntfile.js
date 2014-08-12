module.exports = function(grunt) {
    var jsFiles = ['src/**/*.js', 'test/**/*.js'];
    var dependencies = ['node_modules/lodash/lodash.js',
                        'node_modules/jquery/dist/jquery.js'];
    grunt.initConfig({
        jshint: {
            all: jsFiles,
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
                    before_tests: 'grunt jshint && grunt notify:lint',
                    serve_files: jsFiles.concat(dependencies),
                    watch_files: jsFiles
                }
            }
        },
        notify: {
          lint: {
            options: {
              title: 'Simple-ng linter',
              message: 'linting complete!'
            }
          }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-testem');
    grunt.loadNpmTasks('grunt-notify');

    grunt.registerTask('default', ['testem:run:unit']);

};
