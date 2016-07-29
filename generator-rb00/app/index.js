'use strict';

var generators = require('yeoman-generator');

// module.exports = generators.Base.extend({
module.exports = generators.Base.extend({

    // Constructer which takes a name
    constructor: function () {
        generators.Base.apply(this, arguments);
        this.argument('name', { type: String, required: true });
    },
    initializing: function() {
        this.log('init');
    },
    // Sub-dividing a method
    prompting: {
        dialog: function() {
            this.log('prompt');
        },
        method2: function() {
            this.log('second one');
        }
    },
    configuring: function() {
        this.log('config');
    },
    default: function() {
        this.log('default');
    },
    writing: {
        gulpfile: function() {
            this.log('writing');
        },
        packageJSON: function() {
            this.log('writing');
        },
        git: function() {
            this.log('writing');
        },
        bower: function() {
            this.log('writing');
        },
        appStaticFiles: function() {
            // this.log('Template Path: ' + this.templatePath());
            // this.log('Destination Path: ' + this.destinationPath());
            var source = this.templatePath('_R.ico');
            var destination = this.destinationPath('src/R.ico');
           //  this.log('Source: ' + source);
            // this.log('Destination: ' + destination);
            // This is actually using the template and destination paths above
            // Even if it doesn't look like it.
            // this.copy('_R.ico', 'src/R.ico');

            this.copy(source, destination);
        },
        scripts: function() {
            this.log('writing');
        },
        html: function() {
            this.log('writing');
        }
    },
    conflicts: function() {
        this.log('conflict');
    },
    install: function() {
        this.log('install');
    },
    end: function() {
        this.log('end');
    },
    // Any other methods, like below, run in default position
    customMethod: function() {
        this.log("runs at default");
    }
});
