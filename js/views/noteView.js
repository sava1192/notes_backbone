define([
    'backbone',
    'models/noteModel',
    'underscore',
    'jquery',
    'text!templates/noteTemplate.html'
], function (Backbone, model, _, $, template) {
    'use strict';

    var NoteView = Backbone.View.extend({
        template: _.template(template),
        render: function () {
            var event = this.model.get('event');

            this.$el = $(this.template(this.model.toJSON())).click(this.click);
            this.el  = this.$el[0];

            if (event && event.offsetX & event.offsetY){
                this.$el.offset({
                    top  : event.offsetY,
                    left : event.offsetX
                });
            }

            return this;
        },
        click: function (e) {
            e.stopPropagation();
            e.preventDefault();
        }
    });

    return NoteView;
});

