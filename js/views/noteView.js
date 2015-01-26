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
            'click .close': 'close',
            'blur .title': 'saveTitle',
            'blur .content': 'saveContent'
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
                find('.panel').drags({
                    handle:$el,
                    ondragstop: function (e) {
                        model.save('offset', $el.offset());
                    },
                    zIndex: 'auto'
                }).end().
                offset(this.model.get('offset'));

            this.$content = $el.find('.content');
            this.$title   = $el.find('.title');

            return this;
        },
        click: function (e) {
            e.stopPropagation();
            e.preventDefault();
        },
        saveTitle : function () {
            this.model.save('title', this.$title.val());
        },
        saveContent : function () {
            this.model.save('content', this.$content.val());
        },
        close: function () {
            this.model.destroy();
        }
    });

    return NoteView;
});

