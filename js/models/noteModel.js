define([
    'backbone'
], function (backbone) {
    'use strict';

    var Note = backbone.Model.extend({
        defaults: {
            title: '',
            content : ''
        },

        initialize: function () {

        }
    });

    return Note;
});
