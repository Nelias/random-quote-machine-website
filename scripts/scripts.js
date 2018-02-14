$(document).ready(function() {
  $("#quote-button").click(function() { 
    $.ajax({
      url: "https://api.forismatic.com/api/1.0/?",
      dataType: "jsonp",
      data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
      success: function(response) {
        $("#quote-placeholder").html("<p id='random_quote' class='lead text-center'>" + response.quoteText + "<p>&mdash; " + response.quoteAuthor + "</p>");
        $(".twitter-share-button").attr("href", "https://twitter.com/home/?status=" + '“ ' + response.quoteText + '”' + ' — ' + response.quoteAuthor);
      }
    });
  });
});