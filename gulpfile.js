const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))


function buildStyles() {
    return src('sass/**/*.scss')
        .pipe(sass({ outputStyle: 'expanded' }))
        /*         .pipe(purgecss({ content: ['*.html'] })) */
        .pipe(dest('css'))
}

function watchTask() {
    watch(['sass/**/*.scss', '*.html'], buildStyles)
}

exports.default = series(buildStyles, watchTask)