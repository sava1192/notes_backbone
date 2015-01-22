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
        events: {
            'click': 'click',
            'click button.close': 'close'
        },
        initialize: function () {
            this.listenTo(this.model, 'destroy', this.remove);
        },
        render: function () {
            var event = this.model.get('event');

            this.$el.html(this.template(this.model.attributes)).addClass('note');


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
        },
        close: function () {
            this.model.destroy();
        }
    });

    return NoteView;
});

