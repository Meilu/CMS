module.exports = function (grunt) {
    "use strict";

    // load npm modules used for this project.
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 8082,
                    base: './'
                }
            }
        },
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    // target.css file: source.less file
                    "css/main.css": "less/main.less"
                }
            }
        },
        ts: {
            options: {                      // use to override the default options, See : http://gruntjs.com/configuring-tasks#options
                target: 'es3',               // es3 (default) / or es5
                module: 'amd',              // amd (default), commonjs
                sourcemap: true,            // true  (default) | false
                declaration: false,         // true | false  (default)
                nolib: false,               // true | false (default)
                comments: false             // true | false (default)
            },
            dev: {                          // a particular target   
                src: ["ts/main.ts"],           // The source typescript files, See : http://gruntjs.com/configuring-tasks#files                
                out: 'ts/compiled/app.js',
                options: {                  // override the main options, See : http://gruntjs.com/configuring-tasks#options
                    sourcemap: true
                },
            },
            live: {                          // a particular target   
                src: ["ts/*.ts"],         // The source typescript files, See : http://gruntjs.com/configuring-tasks#files                
                out: 'ts/compiled/app.js',
                options: {                  // override the main options, See : http://gruntjs.com/configuring-tasks#options
                    sourcemap: false
                },
            },
        },
        watch: {
            typescript: {
                files: 'ts/*.ts',
                tasks: ['ts:dev']
            },
            styles: {
                files: ['less/**/*.less'],
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            }
        },
        open: {
            dev: {
                path: 'http://localhost:8080/index.html'
            }
        }
    });

    grunt.registerTask("default", ["connect", "ts", "less:development", "watch"]);
};