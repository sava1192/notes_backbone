define([
    'backbone',
    'backbone.localstorage',
    'models/noteModel'
], function (backbone, Storage, Note) {
    'use strict';

    var NoteCollection = backbone.Collection.extend({
        model: Note,
        localStorage: new Storage('NoteCollection')
    });

    return NoteCollection;

});
