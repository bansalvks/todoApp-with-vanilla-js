var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var del = require('del')

var paths = {
    index: {
        src: 'prod.html',
        dest: 'build/'
    },
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
        .pipe(cleanCSS())
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

function copy(){
    return gulp.src(paths.index.src)
    .pipe(rename({
        basename: 'index',
        suffix: ''
    }))
    .pipe(gulp.dest(paths.index.dest))
}

function defaultTask(cb) {
    console.log('my gulp is running')
    cb();
}

var build = gulp.series(clean, gulp.parallel(styles, scripts, copy));

function watch(){
    gulp.watch(paths.scripts.src, scripts)
    gulp.watch(paths.styles.src, styles)
    gulp.watch(paths.index.src, copy)
}

exports.default = build;
exports.default = build
exports.watch = watch
exports.scripts = scripts
exports.styles = styles
exports.copy = copy