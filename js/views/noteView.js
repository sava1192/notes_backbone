define([
    'backbone',
    'models/noteModel',
    'underscore',
    'text!templates/noteTemplate'
], function (Backbone, model, _, template) {
    'use strict';

    var NoteView = Backbone.View.extend({
        tagname: 'div',
        temlate: _.template(template)
    });

    return NoteView;
});

