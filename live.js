  $( ".what-the-card-number" )
  .change(function () {
     var numberlive = $(this).val(); 
    $( "span.card-no" ).text( numberlive );
  });
