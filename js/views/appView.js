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

            noteCollection.fetch();
        },

        addNoteView: function (noteModel) {
            var view = new NoteView({model:noteModel});
            this.$el.append(view.render().el);
        },

        click: function (e) {
            noteCollection.create({
                offset: {
                    left: e.offsetX,
                    top : e.offsetY
                }
            });
            return this;
        }
    });

    return AppView;
});
