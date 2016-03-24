$("#delete").on('click', function () {

    var x = $(this).attr("id");
    var y = $(this).attr("value");

    var data = {};
    data.Id = y;
    data.Problem = x;

    $.ajax({
        url: "/Home/deletePost",
        type: "POST",
        data: JSON.stringify(data),
        dataType: "JSON",
        contentType: "Application/JSON",
        async: true,
        success: function (d) {
            alert("Successfully Deleted..");
        }
    });
});