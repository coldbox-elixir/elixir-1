var gulp = require('gulp');
var _ = require('underscore');
var Elixir = require('../Elixir');
var config = Elixir.config;


/*
 |--------------------------------------------------------------------------
 | Assets Watcher
 |--------------------------------------------------------------------------
 |
 | This task sets up a watcher for your assets. When modified,
 | they will automatically be compiled down to CSS and JS.
 |
 */
var preprocessors = {
    'sass': config.preprocessors['sass'].src + '/**/*.+(scss|sass)',
    'less': config.preprocessors['less'].src + '/**/*.less',
    'coffee': config.preprocessors['coffee'].src + '/**/*.coffee'
};

var tasksToRun = _.intersection(config.tasks, _.keys(preprocessors));

gulp.task('watch', tasksToRun, function() {
    _.each(tasksToRun, function(task) {
        gulp.watch(preprocessors[task], [task])
    });
});