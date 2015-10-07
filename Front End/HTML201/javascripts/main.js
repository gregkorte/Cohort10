// Define an object to hold the data for a template
var entryData = {
  title: "My New Post",
  body: "This is my first post!",
  tags: [
    {
      category: "technology",
      name: "handlebars"
    },
    {
      category: "author",
      name: "greg"
    }
  ]
};

var taglineData = {
  author_first_name: "Greg",
  author_last_name: "Korte",
  authored_date: "January 29, 2015"
};

// Ignore this the first time through... move along
Handlebars.registerPartial("tagline", Handlebars.compile($("#tagline-partial").html())(taglineData));

// Grab the HTML from the appropriate <script> tag
var entryHTML = $("#entry-template").html();

// Use handlebars to compile it into a template
var entryTemplate = Handlebars.compile(entryHTML);

// Render the resulting HTML by passing the data to the template
var entryOutput = entryTemplate(entryData);

// Now take the final, compiled HTML and inject it into your DOM
$("#entryOutput").append(entryOutput);