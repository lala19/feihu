var gulp= require('gulp');
htmlmin=require("gulp-htmlmin");
cssmin=require('gulp-minify-css');

autoprefixer = require('gulp-autoprefixer');
// gulp.task("default",function(){
//     console.log("hello")
// });

gulp.task("test",function(){
   gulp.src(["src/*.html","src/!*.htm"])
       .pipe(htmlmin({
           collapseWhitespace: true,//压缩HTML
       }))
       .pipe(gulp.dest("dist"));
});

gulp.task("AutoFxcssmin",function(){
   gulp.src("src/css/*.css")
       .pipe(cssmin())
       .pipe(autoprefixer({
           browsers: ['last 2 versions', 'Android >= 4.0'],
           cascade: true, //是否美化属性值 默认：true 像这样：
           //-webkit-transform: rotate(45deg);
           //        transform: rotate(45deg);
           remove:true //是否去掉不必要的前缀 默认：true
       }))
       .pipe(gulp.dest("dist/css"))
});

    uglify = require('gulp-uglify');
gulp.task('jsmin', function () {
    gulp.src(['src/js/*.js','src/js/**/*.js']) //多个文件以数组形式传入
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});


 /*   less = require('gulp-less');

gulp.task('testLess', function () {
    gulp.src(['src/css/!*.less','src/css/!**!/!*.less']) //多个文件以数组形式传入
        .pipe(less())
        .pipe(gulp.dest('src/css')); //将会在src/css下生成index.css以及detail.css
});*/

gulp.task("default",["test","AutoFxcssmin","jsmin"]);