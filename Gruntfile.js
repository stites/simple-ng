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
                    serve_files: [
                        'node_modules/lodash/lodash.js',
                        'node_modules/jquery/dist/jquery.js',
                        'src/**/*.js',
                        'test/**/*.js'
                    ],
                    watch_files: [
                        'src/**/*.js',
                        'test/**/*.js'
                    ],
                    after_tests: 'grunt notify:test'
                }
            }
        },
        notify: {
          lint: {
            options: { message: 'linting: passed' }
          },
          test: {
            options: { message: 'tests: passed'   }
          },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-testem');
    grunt.loadNpmTasks('grunt-notify');

    grunt.registerTask('default', ['testem:run:unit']);

};
