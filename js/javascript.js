$(document).ready(function() {
  var height1 = $('#content').height()
     var height2 = $('body').height()

     if (height1 > height2) {
         $('#sidebarUlList').height(height1)
     } else {
         $('#sidebarUlList').height(height2)
     }
});
