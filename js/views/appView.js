define([
    'jquery',
    'backbone',
    'models/noteModel',
    'collections/noteCollection',
    'views/noteView'
], function ($, backbone, NoteModel, noteCollection, NoteView) {
    'use strict';

    var AppView = backbone.View.extend({
        el: '#notesapp',
        events: {
            'click' : 'click'
        },

        initialize: function () {
            this.listenTo(noteCollection, 'add', this.addNoteView);
        },

        addNoteView: function (noteModel) {
            var view = new NoteView({model:noteModel});

            this.$el.append(view.render());
        },

        click: function (e) {

            noteCollection.create({event: e});
        }
    });

    return AppView;
});
