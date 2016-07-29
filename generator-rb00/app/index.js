'use strict';

var generators = require('yeoman-generator');



module.exports = generators.Base.extend({
    constructor: function () {
        generators.Base.apply(this, arguments);
        this.argument('name', { type: String, required: true });
        this.log('Name: ' + this.name);
    },
    method1: function() {
        this.log('Hello World of course! What else did you expect!');
    }
});

/*
module.exports = generators.NamedBase.extend({

    // Constructor that requires a name
    constructor: function() {
        generators.NamedBase.apply(this, arguments);

        this.log('Name: ' + this.name);
    },
    method1: function() {
        this.log('Hello World of course! What else did you expect!');
    }
});*/
