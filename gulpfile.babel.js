const gulp = require("gulp");
// const uglify = require('gulp-uglify');
const livereload = require('gulp-livereload');
const concat = require('gulp-concat');
const minifyCss = require('gulp-minify-css');
const autoPrefixer = require('gulp-autoprefixer');
const plumber = require ('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const uglify = require('gulp-uglify-es').default;
const buffer = require('vinyl-buffer');
const sass = require('gulp-sass');

//file pahst
const dist_path = 'public/dist';
const scripts_path = 'public/js/**/*.js';
const css_path = 'public/css'



//Styles
gulp.task("styles", () => {
  console.log("starting styles task");

  return gulp.src('public/scss/main.scss')
  .pipe(plumber((err) => {
  console.log('Styles task: ' + err);
  this.emit('end');

  }))
  .pipe(sourcemaps.init()) 
  .pipe(autoPrefixer())
  .pipe(sass({
    outputStyle:'compressed'
  }))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(css_path))
  .pipe(livereload());
});


gulp.task('browserify', () => {
  // set up the browserify instance on a task basis
  const b = browserify({
    entries: 'public/js/ctrl.js',
    debug: true
  });

  return b.bundle()
  .pipe(plumber(function(err){
    console.log('Styles task: ' + err);
    this.emit('end');
  
    }))
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(dist_path))
    .pipe(livereload());
});

gulp.task('browserifySingle', () => {
  // set up the browserify instance on a task basis
  const b = browserify({
    entries: 'public/js/ctrlSingle.js',
    debug: true
  });

  return b.bundle()
    .pipe(source('bundleSingle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(dist_path))
    .pipe(livereload());
});

//Images
gulp.task("images", () => {
  console.log("starting styles images");
});

gulp.task("default", () => {
  console.log("Starting default task");
});

//watch

gulp.task("watch", () => {
    console.log('Starting watch task');
    require('./server.js');
    livereload.listen();
    gulp.watch(scripts_path, ['browserify'])
    gulp.watch(scripts_path, ['browserifySingle'])
    
    gulp.watch('public/scss**/*.scss', ['styles']);
})