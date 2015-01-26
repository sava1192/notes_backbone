define([
    'backbone',
    'models/noteModel',
    'underscore',
    'jquery',
    'text!templates/noteTemplate.html',
    'jquery.extensions'
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
            var $el   = this.$el,
                model = this.model;

            $el.
                html(this.template(this.model.attributes)).
                addClass('note').
                children('.head').drags({
                    handle:$el,
                    ondragstop: function (e) {
                        model.save('offset', $(e.target).offset());
                    }
                }).end().
                offset(this.model.get('offset'));

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

