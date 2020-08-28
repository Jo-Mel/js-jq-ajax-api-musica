$(document).ready(function () {
  var source = $("#template-cd").html();
  var template = Handlebars.compile(source);

  $.ajax({
    url: "https://flynn.boolean.careers/exercises/api/array/music",
    method: "GET",
    success: function (data) {
      // console.log(data);
      for (var i in data.response) {
        console.log(data.response[i]);
        var cd = data.response[i];
        var html = template(cd);
        $(".cds-container").append(html);
      }
    },
  });
});
