module.exports = function(grunt) {
    'use strict';
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // concat: {
        //     dist: {
        //         src : [
        //             'js/lib/*.js', // libs
        //             'js/init.js',
        //             'js/app.js'
        //         ],
        //         dest: 'js/build/production.js'
        //     }
        // },
        requirejs: {
            dev: {
                options: {
                    name: 'main',
                    baseUrl: 'js',
                    mainConfigFile: 'js/main.js',
                    out:'build/script.js',
                    //setting for enabling source maps
                    optimize: 'none',
                    generateSourceMaps: true,
                    preserveLicenseComments: false,
                }
            },
            cdn: {
                // options: {
                //     paths: {
                //         //'jquery': 'empty:'
                //     }
                // }

                //do later: CDN support and settings
            }
        },
        less: {
            dev: {
                files: {
                    'build/style.css': 'styles/app.less'
                }
            }
        },
        watch: {
            scripts: {
                files: ['**/*.js', '!build/*.*', '!**/node_modules/**'],
                tasks: ['requirejs:dev']
            },
            less: {
                files: ['styles/*.less'],
                tasks: ['less']
            }
        }

    });

    // Load the plugin that provides the "uglify" task.
    // grunt.loadNpmTasks('grunt-contrib-uglify');

    // grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-contrib-less');


    grunt.loadNpmTasks('grunt-contrib-requirejs');
    // Default task(s).
    // grunt.registerTask('default', ['requirejs:dev', 'less']);

    grunt.registerTask('default', ['watch']);



};
