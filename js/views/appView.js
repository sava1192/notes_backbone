define([
    'backbone',
    'models/noteModel',
    'collections/noteCollection'
], function (backbone, Note, Notes) {
    'use strict';

    var AppView = backbone.View.extend({
        el: '#notesapp'
    });

    return AppView;
});
