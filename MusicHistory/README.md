# Music History
You will be building the basic structure of your Music History application in HTML and making it look good with the skills you learned in CSS.

## Part 1:
Visit the Music History mockup and create a new Pen on Codepen and make your own page that looks exactly like the one shown there.

####Criteria

1. Create five options for the artist select element of any artist that you enjoy.
2. Create at least five options for the album select element. One, or more, album for each artist.
3. The links in the navigation bar don't need to link to anything just yet, you can use <a href="#">View music</a> for now
4. Pick your four favorite songs from the artists you have chosen and use the information for each in the list that's on the right-hand side.

## Part 2:
Use JavaScript arrays, loops, and innerHTML to show the music you love.

Students must use JavaScript to create a list of songs in the index.html file for their Music History project. Have them download the resources/js-101.js file, which contains an array of strings with song information.

####Criteria
1. Each student must add one song to the beginning and the end of the array.
2. Loop over the array and remove any words or characters that obviously don't belong.
3. Students must find and replace the > character in each item with a - character.
4. Must add each string to the DOM in index.html in the main content area.

{Song name} by {Artist} on the album {Album}

##Part 3:
Using your new CSS skills, you'll build even better looking music history pages.

####Criteria
1. Use the Flexible Layout Box model to ensure that both the form section and the content section are the same height.
2. The entire container for the even songs (plus its details) should have a background color of Sea Shell (SeaShell or #FFF5EE)
3. The entire container for the odd songs (plus its details) should have a background color of Mint Cream (MintCream or #F5FFFA)
4. The first song container should have bold text.
5. Set the navigation bar's position so that it's always on the top of the page, even if you scroll down. To ensure this works, you can just add some div tags at the bottom of the page that add enough text that would force you to scroll the browser.

##Part 4:
1. Section 1:
    - Read from local JSON file with jQuery
    - Loop over results and inject into Music History list page
    - Add delete button DOM to each row and use jQuery to delete entire row
2. Section 2:
    - Take your music and split it into two JSON file instead of them all living on one file.
    - Add a button at the bottom of your music list and label it "More >".
    - Load the songs from the first list and inject the DOM into the document as you've already done.
    - When the user clicks that button, load the songs from the second JSON file and append them to the bottom of the existing music, but before the More button.

##Part 5:

####Using RequireJS
1. Create a new directory workspace/music-history-5 and cd into it.
2. Copy your HTML document from Music History 4 into this directory.
3. Create a javascripts directory.
4. Copy your JavaScript file(s) from Music History 4 into the javascripts directory.
5. In the music-history-5 directory, touch package.json and populate it with the code from Modern Tooling module.
6. In your Vagrant guest machine, run npm install in the music-history-5 directory..
7. touch Gruntfile.js and populate it with the code from Modern Tooling module.
8. In your Vagrant guest machine, run bower init in the music-history-5 directory, and accept defaults.
9. In your Vagrant guest machine, install jQuery via Bower.
10. In your Vagrant guest machine, install RequireJS via Bower.

Your task is to take the code that you wrote for Music History 4, where you populated your song list via two AJAX calls, and use RequireJS to accomplish the following.

1. The main module (i.e. javascripts/main.js) should have a minimum of three dependencies: ["dom-access", "populate-songs", "get-more-songs"].
2. The dom-access module should return a reference to the DOM element in your HTML that will contain the song list.
3. The populate-songs file should contain the AJAX call to your first JSON file with songs in it. This module should return the array of songs.
4. The get-more-songs file should contain the AJAX call to your second JSON file with songs in it. This module should return the array of songs.
5. The main module (i.e. javascripts/main.js) should then use the return objects from all three dependencies to populate your song list.

####Using SASS
All your current CSS should be converted into SASS, and you must use SASS from this point forward.

####Using Grunt
As you are working, ensure that your Grunt task is running at all times so that your JavaScript code is automatically checked as you're writing it, and your SASS is compiled into CSS.

 -Note: After you run your grunt task, if you add more JavaScript files, you need to restart grunt so that it recognizes the new file you added.