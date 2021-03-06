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
            'click' : 'click',
            'click #closeAll': 'closeAll'
        },

        initialize: function () {
            this.listenTo(noteCollection, 'add', this.addNoteView);

            noteCollection.fetch();
        },

        addNoteView: function (noteModel) {
            var view = new NoteView({model:noteModel});
            this.$el.append(view.render().el);
        },
        closeAll: function (e) {
            var model = noteCollection.first();

            while (model) {
                model.destroy();
                model = noteCollection.first();
            }

            if (e){
                e.preventDefault();
                e.stopPropagation();
            }
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
