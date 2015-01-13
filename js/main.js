'use strict';

require.config({
    baseUrl: 'js',
    paths: {
        jquery                 : 'lib/jquery/jquery',
        underscore             : 'lib/underscore/underscore',
        backbone               : 'lib/backbone/backbone',
        'backbone.localstorage': 'lib/backbone/localstorage',
        'text'                 : 'lib/require/text',
        init                   : 'init'
    }

});

require([
    'views/appView'
], function (AppView) {
    new AppView();
});
