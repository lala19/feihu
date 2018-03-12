var gulp= require('gulp');
htmlmin=require("gulp-htmlmin");
cssmin=require('gulp-minify-css');
uglify = require('gulp-uglify');
less = require('gulp-less');

// autoprefixer = require('gulp-autoprefixer');
// gulp.task("default",function(){
//     console.log("hello")
// });

gulp.task("htmlmin",function(){
   gulp.src(["carousel/*.html","carousel/!*.htm"])
       .pipe(htmlmin({
           collapseWhitespace: true,//压缩HTML
       }))
       .pipe(gulp.dest("dist/carousel"));
});



gulp.task('jsmin', function () {
    gulp.src(['carousel/js/*.js','carousel/js/**/*.js']) //多个文件以数组形式传入
        .pipe(uglify())
        .pipe(gulp.dest('dist/carousel/js'));
});


gulp.task('testLess', function () {
    gulp.src(['carousel/css/*.less','carousel/css/!**/!*.less']) //多个文件以数组形式传入
        .pipe(less())
        .pipe(gulp.dest('carousel/css')); //将会在src/css下生成index.css以及detail.css
});

gulp.task("AutoFxcssmin",function(){
    gulp.src("carousel/css/*.css")
        .pipe(cssmin())
        .pipe(gulp.dest("dist/carousel/css"))
});
gulp.task("default",["htmlmin","AutoFxcssmin","jsmin"]);

