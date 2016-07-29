'use strict';

var generators = require('yeoman-generator');

var MyBase = generators.Base.extend({

    // Method 3: Extending from Base
    // Private method because it is inheriting from the base
    anotherHelper: function() {
        this.log('inside another helper');
    }
});

// module.exports = generators.Base.extend({
module.exports = MyBase.extend({

    // Constructer which takes a name
    constructor: function () {
        generators.Base.apply(this, arguments);
        this.argument('name', { type: String, required: true });
        this.log('Name: ' + this.name);
    },
    init: function() {
        this.log('inside init');

        // Method 2: instance method
        // This 'instance method' is private and will not be called
        this.baz = function() {
            this.log('Inside baz');
        }
    },

    // Method 1: _ for private
    _foo: function() {
        this.log('Yeah it\'s foo');
    },

    bar: function() {
        this.log('Yeah it\'s bar');

        // Run the 3 private methods in a public method
        this._foo();
        this.baz();
        this.anotherHelper();
    }
});

/* DEPRECATED METHOD using NamedBase
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
