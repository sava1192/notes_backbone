define([
    'backbone',
    'backbone.localstorage',
    'models/noteModel'
], function (backbone, Storage, noteModel) {
    'use strict';

    var NoteCollection = backbone.Collection.extend({
        model: noteModel,
        localStorage: new Storage('NoteCollection')
    });

    return new NoteCollection();

});
