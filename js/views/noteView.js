define([
    'backbone',
    'models/noteModel',
    'underscore',
    'jquery',
    'text!templates/noteTemplate.html'
], function (Backbone, model, _, $, template) {
    'use strict';

    var NoteView = Backbone.View.extend({
        tagname: 'div',
        template: _.template(template),
        render: function () {
            var event = this.model.get('event');

            this.$el = $(this.template(this.model.toJSON()));

            if (event && event.offsetX & event.offsetY){
                this.$el.offset({
                    top  : event.offsetY,
                    left : event.offsetX
                });
                console.log(event.offsetY, event.offsetX);
            }

            return this.$el;
        }
    });

    return NoteView;
});

