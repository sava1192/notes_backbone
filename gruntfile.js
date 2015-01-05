module.exports = function(grunt) {

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
            local: {
                options: {
                    name: 'main',
                    baseUrl: 'js',
                    mainConfigFile: 'js/main.js',
                    out:'js/build/script.js',
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
        }

    });

    // Load the plugin that provides the "uglify" task.
    // grunt.loadNpmTasks('grunt-contrib-uglify');

    // grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.loadNpmTasks('grunt-contrib-requirejs');
    // Default task(s).
    grunt.registerTask('default', ['requirejs:local']);



};
