var gulp = require("gulp");
var postcss = require("gulp-postcss");
var sourcemaps = require("gulp-sourcemaps");
// var base64 = require("postcss-base64")
// [
//   base64({
//     pattern: /<svg.*<\/svg>/i,
//     prepend: 'data:image/svg+xml;base64,'
//   })
// ]
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
