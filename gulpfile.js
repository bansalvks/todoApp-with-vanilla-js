var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var clearCSS = require('gulp-clean-css')

var paths = {
    styles: {
        src: 'css/**/*.css',
        dest: 'build/'
    },
    scripts: {
        src: 'js/**/*.js',
        dest: 'build/'
    }
};

function clean() {
    return del(['build']);
}

function styles() {
    return gulp.src(paths.styles.src)
        .pipe(clearCSS())
        .pipe(rename({
            basename: 'main',
            suffix: '.min'
        }))
        .pipe(gulp.dest(paths.styles.dest));
}

function scripts() {
    return gulp.src(paths.scripts.src, { sourcemaps: true })
        .pipe(babel())
        .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest(paths.scripts.dest));
}

var build = gulp.series(clean, gulp.parallel(styles,scripts))

exports.default = scripts