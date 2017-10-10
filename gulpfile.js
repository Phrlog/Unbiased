var gulp = require("gulp"),//http://gulpjs.com/
    sass = require("gulp-sass"),//https://www.npmjs.org/package/gulp-sass
    autoprefixer = require('gulp-autoprefixer'),//https://www.npmjs.org/package/gulp-autoprefixer
    minifycss = require('gulp-minify-css');//https://www.npmjs.org/package/gulp-minify-css
    browserSync = require('browser-sync'); // Подключаем Browser Sync

gulp.task("sass", function(){
    gulp.src('src/page/page.scss')
        .pipe(sass({ style: 'expanded' }))
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.reload({stream: true}))
});
gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browser Sync
        server: { // Определяем параметры сервера
            baseDir: ['dist', 'node_modules'] // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('watch', ['browser-sync', 'sass'], function() {
    gulp.watch('src/*/**/*.scss', ['sass']); // Наблюдение за sass файлами
    // Наблюдение за другими типами файлов
});