// var gulp        = require('gulp');
// var browserSync = require('browser-sync').create();
// var sass        = require('gulp-sass');
// var server      = require('gulp-express');
//
//
// // Compile sass into CSS & auto-inject into browsers
// gulp.task('sass', function() {
//     return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
//         .pipe(sass())
//         .pipe(gulp.dest("src/css"))
//         .pipe(browserSync.stream());
// });
//
// // Move the javascript files into our /src/js folder
// gulp.task('js', function() {
//     return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/umd/popper.min.js'])
//         .pipe(gulp.dest("src/js"))
//         .pipe(browserSync.stream());
// });
//
// gulp.task('server', function () {
//     // Start the server at the beginning of the task
//     server.run(['server.js']);
// });
//
//
// // Static Server + watching scss/html files
// gulp.task('serve', ['sass'], function() {
//
//     browserSync.init({
//         server: "./src"
//     });
//
//     gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], ['sass']);
//     gulp.watch("src/*.html").on('change', browserSync.reload);
// });
//
// gulp.task('default', ['js','serve'], function() {
// });
//
// // Add the WebSocket handlers
// // var server = require('http').createServer();
// // var io = require('socket.io')(server);
// // io.on('connection', function(client){
// //   client.on('event', function(data){});
// //   client.on('disconnect', function(){});
// // });
// // server.listen(3000);
//
// // setInterval(function() {
// //   io.sockets.emit('message', 'hi!');
// // }, 1000);
