var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/tests\/spec\/.*\.js$/.test(file)) {
      tests.push(file);
    }
  }
};

requirejs.config({

    // Karma serves files from '/base'
    baseUrl: '/base/',

    // ask Require.js to load these files (all our tests)
    deps: tests,

    hbs: {
      helperPathCallback: function (name) {
        return '/base/tests/templates/helpers/' + name + '.js';
      }
    },
    
    paths: {
      'handlebars': 'bower_components/handlebars/handlebars',
      'json2': 'bower_components/json2/json2',
      'underscore': 'bower_components/underscore/underscore'
    },
    
    shim: {
      'json2': {
        exports: 'JSON'
      }
    },

    // start test run, once Require.js is done
    callback: window.__karma__.start
});

