#CSS201

##Tooling101
1. Install Grunt (sudo mpn install grunt-cli -g)
2. Change directories (cd /CSS201)
3. Create javascripts directory (mkdir javascripts)
4. Initialize npm (npm init)
5. Create Gruntfile (touch Gruntfile.js)
6. Replace package.json to include dev dependencies (grunt, grunt-contrib-jshint, grunt-contrib-nodeunit, grunt-contrib-uglify, grunt-contrib-watch & matchdep)
7. Install npm (npm install)
8. Populate Gruntfile (see [Tooling101 mod](https://github.com/nashville-software-school/evening-cohort/tree/master/18-modern-tools-101))
9. Initialize Bower (bower init)
10. Install jQuery (bower install jquery --save)
11. Install requirejs (bower install requirejs --save)
12. Install bootstrap (bower install bootstrap --save)

##Mobile CSS
1. After using Bower to install Bootstrap, get the JavaScript and CSS linked in to the HTML file.
2. Install SASS (gem install sass)
3. Create two sub-directories (sass & styles)
4. Install Grunt task to compile SASS into CSS (npm install grunt-contrib-sass -- save-dev)
5. Update Gruntfile (see [CSS201 mod](https://github.com/nashville-software-school/evening-cohort/tree/master/19-css-201))
6. Create sass/main.scss file and copy code from CSS201 mod
7. Run Grunt to compile sass to css

###Challenge #1
Visit the CSS3 Transitions, Transforms, Animation, Filters site and learn all about the cool stuff that the CSS3 specification gives web application developers. Using the techniques you discover there, develop your own way to transition between the different songs in your Music History song list.

###Challenge #2
Set a background image for your page, and make sure that it takes up the full background of the page, no matter what size the viewport is.

