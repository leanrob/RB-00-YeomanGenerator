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
    writing: function() {
        this.log('writing');
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
