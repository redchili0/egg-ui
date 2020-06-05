var gulp = require("gulp");
var postcss = require("gulp-postcss");
var postcssCssVariables = require("postcss-css-variables");
var postcssApply = require('postcss-apply');
// var postcssPresetEnv = require("postcss-preset-env");
var postcssImport = require("postcss-import");
var sourcemaps = require("gulp-sourcemaps");
var cssnano = require("cssnano");

function defaultTask(cb) {
  gulp
    .src("src/**/*.css")
    .pipe(sourcemaps.init())
    .pipe(
      postcss([
        postcssImport("src/style/vars.css"),
        postcssApply(),
        postcssCssVariables(),
        cssnano(),
      ])
    )
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest('dist/'));
  // place code for your default task here
  cb();
}

exports.default = defaultTask;
