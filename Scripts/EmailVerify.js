jQuery(document).ready(function () {
    $("#chk").on('click', function () {
        var s = $('#Remail').val();

        $('#emailValid').text("Available");
        $.getJSON("/Home/UserExist?n=" + s, function (data) {

            if (data) {
                $('#emailValid').text("User Already Exist...");
            }
            else {
                $('#emailValid').text("Available");
            }
        });
    });
    function loginAuthentication()
    {
        var userName = $('#name').val;
        var passwrod = $('#password').val;
        alert(userName+passwrod);
        var data = {};
        data.User_Name =userName;
        data.Password = passwrod;
        $.ajax({
            type: "POST",
            url: "/HomeController",
            async: true,
            data: data,
            success: function (data) {
                if (data) {
                    var redirect = Routing.generate('Index');
                    window.location.replace(redirect);
                } else {
                    alert("User Name or Password is Incorrect");
                }
            },
            error: function () { }

        });
    }
});