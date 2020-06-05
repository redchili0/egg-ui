var gulp = require("gulp");
var postcss = require("gulp-postcss");
var postcssCssVariables = require("postcss-css-variables");
var postcssImport = require("postcss-import");
var sourcemaps = require("gulp-sourcemaps");
var cssnano = require("cssnano");

function defaultTask(cb, dest) {
  gulp
    .src("src/**/*.css")
    .pipe(sourcemaps.init())
    .pipe(
      postcss([
        postcssImport("src/style/vars.css"),
        postcssCssVariables(),
        cssnano(),
      ])
    )
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(dest));
  // place code for your default task here
  cb();
}

exports.dev = function dev(cb) {
  gulp.watch("src/**/*.css", function () {
    defaultTask(cb, "src/");
  });
  cb();
};

exports.prod = function prod(cb) {
  defaultTask(cd, "dist/");
  cb();
};
