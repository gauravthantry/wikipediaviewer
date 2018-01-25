
$(document).ready(function(){
  $("#wikiBtn").click(function(){
  var searchContent=$("#search-box").val();
  var url="https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchContent+"&format=json&callback=?";
  
    $.ajax({
    type:"GET",
    url:url,
    async:false,
    dataType: "json",
    
    success: function(data){
      $("#wikiResponse").html("");
      for(i=0;i<data[1].length;i++)
        {
         $("#wikiResponse").prepend("<li class=\"list-unstyled\"><a href=\""+data[3][i]+"\" target=\"blank\">"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");
        }
    }
  });
  });
  $("#search-box").keypress(function(k){
    if(k.which == 13)
	 $("#wikiBtn").click();
  });
});
