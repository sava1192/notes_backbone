'use strict';

require.config({
    baseUrl: 'js',
    paths: {
        jquery                 : 'lib/jquery/jquery',
        'jquery.extensions'    : 'lib/jquery/jquery.extensions',
        underscore             : 'lib/underscore/underscore',
        backbone               : 'lib/backbone/backbone',
        'backbone.localstorage': 'lib/backbone/localstorage',
        'text'                 : 'lib/require/text',
        init                   : 'init'
    },
    shim: {
        'jquery.extensions': ['jquery']
    }

});

require([
    'views/appView'
], function (AppView) {
    new AppView();
});
