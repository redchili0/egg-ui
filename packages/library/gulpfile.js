var gulp = require("gulp");
var postcss = require("gulp-postcss");
var sourcemaps = require("gulp-sourcemaps");

function defaultTask(cb) {
  gulp
    .src("src/**/*.css")
    .pipe(sourcemaps.init())
    .pipe(postcss())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/"));
  // place code for your default task here
  cb();
}

exports.default = defaultTask;
