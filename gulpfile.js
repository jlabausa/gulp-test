const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const cssbeautify = require('gulp-cssbeautify');
const cssminify = require('gulp-clean-css');
const concatJS = require('gulp-concat');

/* TOP LEVEL FUNCTIONS (C/o: Traversy Media)

	1. gulp.task - Defines tasks
	2. gulp.src - Points to files to use
	3. gulp.dest - Points to folder to output
	4. gulp.watch - Watch files and folders for changes

--------------------------------------------------*/

/* LOGS MESSAGE
--------------------------------------------------*/
gulp.task('message', function(done) {
	console.log("This is a message.");
	done();
});

/* COPY ALL HTML FILES
--------------------------------------------------*/
gulp.task('copyHTML', function(done) {
	gulp.src('src/*.html')
		.pipe(gulp.dest('dist'));
	done();
});

/* OPTIMIZE IMAGES USING GULP IMAGEMIN
--------------------------------------------------*/
gulp.task('imagemin', (done) => {
	gulp.src('src/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'))
	done();
});

/* MINIFY JS FILES USING GULP UGLIFY
--------------------------------------------------*/
gulp.task('minifyJS', (done) => {
	gulp.src('src/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'))
	done();
});

/* CONCAT JS FILES USING GULP CONCAT AND MINIFY
--------------------------------------------------*/
gulp.task('concatJS', (done) => {
	gulp.src('src/js/*.js')
		.pipe(concatJS('main.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'))
	done();
});

/* BEAUTIFY CSS FILES USING GULP CSS BEAUTIFIER
--------------------------------------------------*/
gulp.task('beautifyCSS', (done) => {
	gulp.src('src/css/*.css')
		.pipe(cssbeautify())
		.pipe(gulp.dest('dist/css'))
	done();
});

/* MINIFY CSS FILES USING GULP CSS BEAUTIFIER
--------------------------------------------------*/
gulp.task('minifyCSS', (done) => {
	gulp.src('src/css/*.css')
		.pipe(cssminify())
		.pipe(gulp.dest('dist/css'))
	done();
});

/* GULP TASKS BY DEFAULT
--------------------------------------------------*/
gulp.task('default', gulp.series(['message', 'copyHTML', 'imagemin', 'concatJS', 'beautifyCSS']));