
//Script to Activate the Carousel

$('.carousel').carousel({
    interval: 5000 //changes the speed
})

jQuery(document).ready(function () {
    $('#qaz').bind("enterKey", function (e) {
        alert("Enter Pressed");
        //do stuff here
    });
    $('#qaz').keyup(function (e) {
        if (e.keyCode == 13) {
            $(this).trigger("enterKey");
        }
    });
    
});



$("#file").change(function () { selectFileClick(); });

function selectFileClick() {
    var fileName = filedialog();
    // parsing file...
    return false;
}

//Save Comment
$("input").keypress(function (e) {
    if (e.which == 13) {

        var data = $(this).attr('id');
        var arr = data.split(',');

        var data = {};
        data.Post_ID = arr[0];
        data.User_ID = arr[1];
        data.Coment_Text = $(this).val();

        $.ajax({
            url: "/Home/saveComment",
            type: "POST",
            data: JSON.stringify(data),
            dataType: "JSON",
            contentType: "Application/JSON",
            async: true,
            success: function (d) {
                location.reload(true);
            }
        });
    }
});