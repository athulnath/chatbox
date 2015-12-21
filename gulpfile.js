var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var notify = require("gulp-notify");
var nodemon = require("gulp-nodemon");
var sourcemaps = require("gulp-sourcemaps");


var jsSourcepath = ["www/app/**/*.js"];

gulp.task('start', function () {
  nodemon({ script: 'server/server.js',ext: 'js'})
    .on('restart', function () {
      console.log('restarted!');
    });
});

gulp.task('js', function() {
	gulp.src(jsSourcepath)
		.pipe(sourcemaps.init())
		.pipe(concat("app.js"))
		.pipe(uglify({mangle: false}))
		.pipe(rename({extname:".min.js"}))
		.pipe(sourcemaps.write("map"))
		.pipe(gulp.dest("www/js/"))
		.pipe(notify("js compress finished"));
});

gulp.task('watch', function () {
	gulp.watch(jsSourcepath, ['js']);
});

gulp.task("default", ['start', 'js', 'watch']);

