module.exports = function(grunt) {
    'use strict';
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

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
                //do later: CDN support and settings
            }
        },
        less: {
            dev: {
                files: [{
                    expand : true,
                    cwd    : 'styles',
                    src    : ['*.less'],
                    dest   : 'build/styles',
                    ext    : '.css'
                    //'build/style.css': 'styles/app.less',
                }]
            }
        },
        concat_css: {
            options : {},
            all: {
                src : ['build/styles/*.css'],
                dest: 'build/styles.css'
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
            },
            css: {
                files: ['build/styles/*.css'],
                tasks: ['concat_css']
            }
        }

    });


    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.loadNpmTasks('grunt-concat-css');

    grunt.registerTask('default', ['watch']);



};
