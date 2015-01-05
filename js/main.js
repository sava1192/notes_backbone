'use strict';

require.config({
    baseUrl: 'js',
    paths: {
        jquery                 : 'lib/jquery',
        underscore             : 'lib/underscore',
        backbone               : 'lib/backbone',
        'backbone.localstorage': 'lib/backbone.localstorage',
        init                   : 'init'
    }

});

require([
    'views/appView'
], function (AppView) {
    new AppView();
});
