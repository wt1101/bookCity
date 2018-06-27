var gulp = require('gulp');
var auto = require('gulp-autoprefixer');
var server = require('gulp-webserver');
var css = require('gulp-minify-css');
var scss = require('gulp-sass');
var path = require('path');
var url = require('url');
var fs = require('fs');
var mock = require('./mock/');
var login = require('./mock/login/data').user;
var es5 = require('gulp-babel');
var js = require('gulp-uglify');
var html = require('gulp-htmlmin');
gulp.task('auto', function() {
    gulp.src('src/css/*.css')
        .pipe(auto())
        .pipe(css())
        .pipe(gulp.dest('bulid/css'))
});
gulp.task('html', function() {
    gulp.src('src/**/*.html')
        .pipe(html({
            removeComments: false, //清除HTML注释
            collapseWhitespace: true //压缩HTML
        }))
        .pipe(gulp.dest('bulid'))
})
gulp.task('js', function() {
        gulp.src('src/**/*.js')
            // .pipe(es5({
            //     presets: 'es2015'
            // }))
            .pipe(js())
            .pipe(gulp.dest('bulid'));
    })
    // gulp.task('chage', function() {
    //     gulp.watch('src/scss/*.scss', ['auto']);
    // });
gulp.task('server', function() {
    gulp.src('src')
        .pipe(server({
            port: 3030,
            host: 'localhost',
            open: true,
            middleware: function(req, res, next) {
                if (req.url === '/favicon.ico') {
                    return;
                }
                var pathname = url.parse(req.url).pathname;
                pathname = pathname === '/' ? '/index.html' : pathname;
                if (/\/api\//.test(pathname)) {
                    if (pathname === '/api/login' || pathname === '/api/register') {
                        var arr = [];
                        req.on('data', function(chunk) {
                            arr.push(chunk);
                        });
                        req.on('end', function() {
                            var data = Buffer.concat(arr).toString();
                            data = require('querystring').parse(data);
                            if (pathname === '/api/login') {
                                var pass = login.some(function(v) {
                                    return v.sume === data.user && v.pwd === data.pwd;
                                });
                                if (pass) {
                                    res.end('{"code":"1","mes":"登录成功"}');
                                    console.log(1);
                                } else {
                                    res.end('{"code":"0","mes":"用户名还未注册，请注册后重新登录"}');
                                }
                            } else {
                                login.push(data);
                                userObj = {
                                    user: login
                                };
                                fs.writeFileSync('./mock/login/data.json', JSON.stringify(userObj));
                                res.end('{"code":"1","mes":"注册成功"}');
                            }
                        });
                        return false;
                    }
                    res.end(JSON.stringify(mock(req.url)));

                } else {
                    res.end(fs.readFileSync(path.join(__dirname, 'src', pathname)))
                }
            }
        }))
});

gulp.task('devserver', function() {
    gulp.src('bulid')
        .pipe(server({
            port: 6030,
            host: 'localhost',
            open: true,
            middleware: function(req, res, next) {
                if (req.url === '/favicon.ico') {
                    return;
                }
                var pathname = url.parse(req.url).pathname;
                pathname = pathname === '/' ? '/index.html' : pathname;
                if (/\/api\//.test(pathname)) {
                    if (pathname === '/api/login' || pathname === '/api/register') {
                        var arr = [];
                        req.on('data', function(chunk) {
                            arr.push(chunk);
                        });
                        req.on('end', function() {
                            var data = Buffer.concat(arr).toString();
                            data = require('querystring').parse(data);
                            if (pathname === '/api/login') {
                                var pass = login.some(function(v) {
                                    return v.sume === data.user && v.pwd === data.pwd;
                                });
                                if (pass) {
                                    res.end('{"code":"1","mes":"登录成功"}');
                                    console.log(1);
                                } else {
                                    res.end('{"code":"0","mes":"用户名还未注册，请注册后重新登录"}');
                                }
                            } else {
                                login.push(data);
                                userObj = {
                                    user: login
                                };
                                fs.writeFileSync('./mock/login/data.json', JSON.stringify(userObj));
                                res.end('{"code":"1","mes":"注册成功"}');
                            }
                        });
                        return false;
                    }
                    res.end(JSON.stringify(mock(req.url)));
                } else {
                    res.end(fs.readFileSync(path.join(__dirname, 'bulid', pathname)))
                }
            }
        }))
});
gulp.task('dev', ['html', 'auto', 'js', 'devserver']);