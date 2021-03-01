const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const less = require('gulp-less');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');

// 编译less
gulp.task('css', (cb) => {
    gulp.src('./index.less')
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'ie > 8']
        }))
        .pipe(cleanCSS())
        .pipe(rename('iview.css'))
        .pipe(gulp.dest('./dist/styles'));
    cb();
});

// 拷贝字体文件
gulp.task('fonts', (cb) => {
    gulp.src('./common/iconfont/fonts/*.*')
        .pipe(gulp.dest('./dist/styles/fonts'));
    cb();
});

gulp.task('default', gulp.series(['css', 'fonts']));