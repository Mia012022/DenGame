$(document).ready(function() {
    $('#imageInput').on('change', function(e) {
      var file = e.target.files[0];
      var reader = new FileReader();
  
      reader.onload = function(e) {
        var imageData = e.target.result;
        $('#imageDisplayArea').html('<img src="' + imageData + '" alt="Selected Image" style="width:400px;">');
      };
  
      reader.readAsDataURL(file);
    });
  });
  
  