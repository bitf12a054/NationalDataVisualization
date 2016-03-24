
$("#area").on("change", function () {

    var x = $(this).val();
    var data = {};
    data.Province_ID = $(this).val();
    data.Province_Name = $(this).text();

    $.ajax({
        url: "/Home/locationToLocation",
        type: "POST",
        data: JSON.stringify(data),
        dataType: "JSON",
        contentType: "Application/JSON",
        async: true,
        success: function (d) {
            $("#comp").html("");
            //$("#comp").append('<br /><br /><b><i style="color: lightblue">Location 1 :</i></b><select id="a1" class="badge"><option value="" disabled selected>Select Location 1</option></select><br /><br /><b><i style="color: lightblue">Location 2 :</i></b><select id="a2" class="badge"><option value="" disabled selected>Select Location 2</option></select><br /><br />');
            $("#comp").append('<br /><br /><div class="row"><div class="col-md-6 center-block"><select id="a1" class="form-control"><option value="" disabled selected>Location 1</option></select></div><div class="col-md-6 center-block"><select id="a2" class="form-control"><option value="" disabled selected>Location 2</option></select></div></div><br />');
            $('#a1').html('');
            for (var i = 0; i < d.Result1.length; i++) {
                if (i == 0) {
                    $('#a1').append('<option value="" disabled selected>1st Location</option>');
                }
                var obj1 = d.Result1[i];
                var obj2 = d.Result2[i];

                $('#a1').append($('<option>', {
                    value: obj2,
                    text: obj1
                }));
            }

            $('#a2').html('');
            for (var i = 0; i < d.Result1.length; i++) {
                if (i == 0) {
                    $('#a2').append('<option value="" disabled selected>2nd Location</option>');
                }
                var obj1 = d.Result1[i];
                var obj2 = d.Result2[i];

                $('#a2').append($('<option>', {
                    value: obj2,
                    text: obj1
                }));
            }
        }
    });
});

function ChartMapped(selectedCol, colName, values, values2) {

    alert("In ChartMapped()");
    var data0 = selectedCol;
    var data1 = colName;
    var data2 = values;
    var data4 = values2;

    var arr01 = new Array();
    for (var c = 0; c < data0.length; c++) {
        var abc = {};
        abc.x = data0[c];

        if (c == 0) {
            abc.a = data2[0];
            abc.b = data2[1];
            abc.c = data2[2];
            abc.d = data2[3];
            abc.e = data2[4];
            abc.f = data2[5];
            abc.g = data2[6];
            abc.h = data2[7];
            abc.i = data2[8];
            abc.j = data2[9];
            abc.k = data2[10];
            abc.l = data2[11];
            abc.m = data2[12];
            abc.n = data2[13];
        }
        if (c == 1) {
            abc.a = data4[0];
            abc.b = data4[1];
            abc.c = data4[2];
            abc.d = data4[3];
            abc.e = data4[4];
            abc.f = data4[5];
            abc.g = data4[6];
            abc.h = data4[2];
            abc.i = data4[3];
            abc.j = data4[4];
            abc.k = data4[5];
            abc.l = data4[6];
            abc.m = data4[12];
            abc.n = data4[13];
        }
        arr01.push(abc);
    }
    //-----------------------------------------------------
    var lbl0 = ['y'];
    var lbl = ['Stats'];

    for (var i = 0; i < colName.length; i++)
    {
        var myAString = String.fromCharCode(97 + i);
        lbl0.push(myAString);

        lbl.push(data1[i]);
    }
    alert(lbl0);

    $("#chart").html("");
    Morris.Bar({
        element: 'chart',
        data: arr01,
        xkey: 'x',
        ykeys: lbl0,
        labels: lbl
    });
}

function startComparison() {
    var Area = $("#area").val();
    var First = $("#a1").val();
    var Second = $("#a2").val();
    var Attributee = $("#attri").val();
    var text = document.getElementById('a1').options[document.getElementById('a1').selectedIndex].text;
    var text2 = document.getElementById('a2').options[document.getElementById('a2').selectedIndex].text;
    alert(text + " " + text2);
    //var data = {};
    //data.Province_ID = $("#a1").val();
    //data.District_ID = $("#a2").text();
    //data.District_Name = $("#attri").val();
    list = [];
    var colName = new Array();
    var selectedCol = new Array;

    if (Area == 1) {
        var data = {};
        data.Prov_ID = First;
        data.Attr_Name = Attributee;
        $.ajax({
            url: "/Home/OnlyProvinceWithAttribute",
            type: "POST",
            data: JSON.stringify(data),
            dataType: "JSON",
            contentType: "Application/JSON",
            async: true,
            success: function (d) {
                alert("Names of First = " + d[0]);
                alert("Values of First = " + d[1]);
            }
        });

        data.Prov_ID = Second;
        data.Attr_Name = Attributee;
        $.ajax({
            url: "/Home/OnlyProvinceWithAttribute",
            type: "POST",
            data: JSON.stringify(data),
            dataType: "JSON",
            contentType: "Application/JSON",
            async: true,
            success: function (d) {
                alert("Names of Second = " + d[0]);
                alert("Values of Second = " + d[1]);
            }
        });
    }
    else if (Area == 2) {
        var data = {};
        data.Prov_ID = 1;
        data.Dist_ID = First;
        data.Attr_Name = Attributee;
        $.ajax({
            url: "/Home/OnlyProvinceAndDistrictWithAttribute",
            type: "POST",
            data: JSON.stringify(data),
            dataType: "JSON",
            contentType: "Application/JSON",
            async: true,
            success: function (d) {
                alert("Names of First = " + d[0]);
                alert("Values of First = " + d[1]);
            }
        });

        data.Prov_ID = 1;
        data.Dist_ID = Second;
        data.Attr_Name = Attributee;
        $.ajax({
            url: "/Home/OnlyProvinceAndDistrictWithAttribute",
            type: "POST",
            data: JSON.stringify(data),
            dataType: "JSON",
            contentType: "Application/JSON",
            async: true,
            success: function (d) {
                alert("Names of Second = " + d[0]);
                alert("Values of Second = " + d[1]);
            }
        });
    }
    else if (Area == 3) {
        selectedCol[0] = text;
        selectedCol[1] = text2;

        alert("Area == 3");
        var data = {};
        data.Prov_ID = 1;
        data.Dist_ID = 1;
        data.Teh_ID = First;
        data.Attr_Name = Attributee;
        $.ajax({
            url: "/Home/ProvinceDistrictTehsilWithAttribute",
            type: "POST",
            data: JSON.stringify(data),
            dataType: "JSON",
            contentType: "Application/JSON",
            async: true,
            success: function (d) {
                //alert("Names of First = " + d[0]);
                //alert("Values of First = " + d[1]);
                colName = d[0];
                var values = d[1];
                drawGraph(selectedCol, colName, values)
            }
        });
    }
    function drawGraph(selectedCol, colName, values) {
        alert("In drawGraph()");

        //----------------------------------------------------
        data.Prov_ID = 1;
        data.Dist_ID = 1;
        data.Teh_ID = Second;
        data.Attr_Name = Attributee;
        $.ajax({
            url: "/Home/ProvinceDistrictTehsilWithAttribute",
            type: "POST",
            data: JSON.stringify(data),
            dataType: "JSON",
            contentType: "Application/JSON",
            async: true,
            success: function (d) {
                //alert("Names of Second = " + d[0]);
                //alert("Values of Second = " + d[1]);
                var values2 = d[1];

                //alert(selectedCol);
                //alert(colName);
                //alert(values);
                //alert(values2);
                ChartMapped(selectedCol, colName, values, values2);
            }
        });
        //----------------------------------------------------

    }
}