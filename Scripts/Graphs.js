$("#prov").on("change", function () {

    var x = $(this).val();
    var data = {};
    data.Province_ID = $(this).val();
    data.District_Name = $(this).text();

    $.ajax({
        url: "/Home/provinceToDistrict",
        type: "POST",
        data: JSON.stringify(data),
        dataType: "JSON",
        contentType: "Application/JSON",
        async: true,
        success: function (d) {
            $('#dist').html('');
            for (var i = 0; i < d.Result1.length; i++) {
                if (i == 0) {
                    $('#dist').append('<option value="" disabled selected>Select District</option>');
                }
                var obj1 = d.Result1[i];
                var obj2 = d.Result2[i];

                $('#dist').append($('<option>', {
                    value: obj2,
                    text: obj1
                }));
            }
        }
    });

    var prov = $("#prov").val();            // Province ID
    var dist = $("#dist").val();            // District ID
    var teh = $("#teh").val();              // Tehsil ID
    var attribute = $("#att").val();        // Attribute Name
    var sub = $("#sub_attribute").val();    // Sub_Attr ID

    if (prov != null && attribute != null && sub != null && dist == null && teh == null) {
        alert(prov + " - " + attribute + " - " + sub);
        var data = {};
        data.Prov_ID = prov;
        data.Dist_ID = dist;
        data.Teh_ID = teh;
        data.Attr_Name = attribute;
        data.SubAttr = sub;

        $.ajax({
            url: "/Home/OnlyProvinceWithSub_Attribute",
            type: "POST",
            data: JSON.stringify(data),
            dataType: "JSON",
            contentType: "Application/JSON",
            async: true,
            success: function (d) {
                dd1 = ['Male', 'Female'];
                dd2 = [d[1], d[2]];

                alert("Names = " + d[0]);
                alert("Male Values = " + d[1]);
                alert("Female Values = " + d[2]);
            }
        });
    }
    if (prov != null && attribute != null && dist == null && teh == null && sub == null) {
        alert(prov + " - " + attribute);
        var data = {};
        data.Prov_ID = prov;
        data.Dist_ID = dist;
        data.Teh_ID = teh;
        data.Attr_Name = attribute;

        $.ajax({
            url: "/Home/OnlyProvinceWithAttribute",
            type: "POST",
            data: JSON.stringify(data),
            dataType: "JSON",
            contentType: "Application/JSON",
            async: true,
            success: function (d) {
                dd1 = d[0];
                dd2 = d[1];
                alert("Names = " + d[0]);
                alert("Values = " + d[1]);
            }
        });
    }
    if (prov != null && attribute == null && dist == null && teh == null && sub == null) {
        alert("No Attribute Selected");
    }
    
});

$("#dist").on("change", function () {

    var x2 = $(this).val();

    var data = {};
    data.District_ID = $(this).val();
    data.Tehsil_Name = $(this).text();

    $.ajax({
        url: "/Home/districtToTehsil",
        type: "POST",
        data: JSON.stringify(data),
        dataType: "JSON",
        contentType: "Application/JSON",
        async: true,
        success: function (d) {
            $('#teh').html('');
            for (var i = 0; i < d.Result1.length; i++) {
                if (i == 0) {
                    $('#teh').append('<option value="" disabled selected>Select Tehsil</option>');
                }
                var obj1 = d.Result1[i];
                var obj2 = d.Result2[i];

                $('#teh').append($('<option>', {
                    value: obj2,
                    text: obj1
                }));
            }
        }
    });

    var prov = $("#prov").val();            // Province ID
    var dist = $("#dist").val();            // District ID
    var teh = $("#teh").val();              // Tehsil ID
    var attribute = $("#att").val();        // Attribute Name
    var sub = $("#sub_attribute").val();    // Sub_Attr ID

    if (prov != null && dist != null && attribute != null && sub != null && teh == null) {
        alert(prov + " - " + dist + " - " + attribute + " - " + sub);
        var data = {};
        data.Prov_ID = prov;
        data.Dist_ID = dist;
        data.Teh_ID = teh;
        data.Attr_Name = attribute;
        data.SubAttr = sub;

        $.ajax({
            url: "/Home/OnlyProvinceAndDistrictWithSub_Attribute",
            type: "POST",
            data: JSON.stringify(data),
            dataType: "JSON",
            contentType: "Application/JSON",
            async: true,
            success: function (d) {
                dd1 = ['Male', 'Female'];
                dd2 = [d[1], d[2]];

                alert("Names = " + d[0]);
                alert("Male Values = " + d[1]);
                alert("Female Values = " + d[2]);
            }
        });
    }
    if (prov != null && dist != null && attribute != null && teh == null && sub == null) {
        alert(prov + " - " + dist + " - " + attribute);
        var data = {};
        data.Prov_ID = prov;
        data.Dist_ID = dist;
        data.Teh_ID = teh;
        data.Attr_Name = attribute;

        $.ajax({
            url: "/Home/OnlyProvinceAndDistrictWithAttribute",
            type: "POST",
            data: JSON.stringify(data),
            dataType: "JSON",
            contentType: "Application/JSON",
            async: true,
            success: function (d) {
                dd1 = d[0];
                dd2 = d[1];

                alert("Names = " + d[0]);
                alert("Values = " + d[1]);
            }
        });
    }
    if (prov != null && dist != null && teh == null && attribute == null && sub == null) {
        alert("No Attribute Selected");
    }

});

$("#teh").on("change", function () {
    var x3 = $(this).val();

    var data = {};
    data.Tehsil_ID = $(this).val();
    data.Town_Name = $(this).text();

    $.ajax({
        url: "/Home/tehsilToTown",
        type: "POST",
        data: JSON.stringify(data),
        dataType: "JSON",
        contentType: "Application/JSON",
        async: true,
        success: function (d) {
            $('#twn').html('');
            for (var i = 0; i < d.Result1.length; i++) {
                if (i == 0) {
                    $('#twn').append('<option value="" disabled selected>Select Town</option>');
                }
                var obj1 = d.Result1[i];
                var obj2 = d.Result2[i];

                $('#twn').append($('<option>', {
                    value: obj2,
                    text: obj1
                }));
            }
        }
    });

    var prov = $("#prov").val();            // Province ID
    var dist = $("#dist").val();            // District ID
    var teh = $("#teh").val();              // Tehsil ID
    var attribute = $("#att").val();        // Attribute Name
    var sub = $("#sub_attribute").val();    // Sub_Attr ID

    if (prov != null && dist != null && teh != null && attribute != null && sub != null) {
        alert(prov + " - " + dist + " - " + teh + " - " + attribute + " - " + sub);
        var data = {};
        data.Prov_ID = prov;
        data.Dist_ID = dist;
        data.Teh_ID = teh;
        data.Attr_Name = attribute;
        data.SubAttr = sub;

        $.ajax({
            url: "/Home/ProvinceDistrictTehsilWithSub_Attribute",
            type: "POST",
            data: JSON.stringify(data),
            dataType: "JSON",
            contentType: "Application/JSON",
            async: true,
            success: function (d) {
                dd1 = ['Male', 'Female'];
                dd2 = [d[1], d[2]];

                alert("Names = " + d[0]);
                alert("Male Values = " + d[1]);
                alert("Female Values = " + d[2]);
            }
        });
    }
    if (prov != null && dist != null && teh != null && attribute != null && sub == null) {
        alert(prov + " - " + dist + " - " + teh + " - " + attribute);
        var data = {};
        data.Prov_ID = prov;
        data.Dist_ID = dist;
        data.Teh_ID = teh;
        data.Attr_Name = attribute;

        $.ajax({
            url: "/Home/ProvinceDistrictTehsilWithAttribute",
            type: "POST",
            data: JSON.stringify(data),
            dataType: "JSON",
            contentType: "Application/JSON",
            async: true,
            success: function (d) {
                dd1 = d[0];
                dd2 = d[1];

                alert("Names = " + d[0]);
                alert("Values = " + d[1]);
            }
        });
    }
    if (prov != null && dist != null && teh != null && attribute == null && sub == null) {
        alert(prov + " - " + dist + " - " + teh + " - " + "No Attribute Selected");
    }

});

$("#att").on("change", function () {

    var x2 = $(this).val();

    var data = {};
    data.Attribute_Name = $(this).val();
    data.Attribute_ID = $(this).text();

    $.ajax({
        url: "/Home/attToSubAttr",
        type: "POST",
        data: JSON.stringify(data),
        dataType: "JSON",
        contentType: "Application/JSON",
        async: true,
        success: function (d) {
            $('#sub_attribute').html('');
            for (var i = 0; i < d.Result1.length; i++) {
                if (i == 0) {
                    $('#sub_attribute').append('<option value="" disabled selected>Sub Attribute</option>');
                }
                var obj1 = d.Result1[i];
                var obj2 = d.Result2[i];

                $('#sub_attribute').append($('<option>', {
                    value: obj2,
                    text: obj1
                }));
            }
        }
    });

    var prov = $("#prov").val();   // Province ID
    var dist = $("#dist").val();   // District ID
    var teh = $("#teh").val();     // Tehsil ID
    var attribute = $(this).val(); // Attribute

    if (prov == null) {
        alert("Select Any Location First");
    }
    if (prov != null && dist == null && teh == null) {

        var data = {};
        data.Prov_ID = prov;
        data.Dist_ID = dist;
        data.Teh_ID = teh;
        data.Attr_Name = attribute;

        $.ajax({
            url: "/Home/OnlyProvinceWithAttribute",
            type: "POST",
            data: JSON.stringify(data),
            dataType: "JSON",
            contentType: "Application/JSON",
            async: true,
            success: function (d) {
                dd1 = d[0];
                dd2 = d[1];
                alert("Names = " + d[0]);
                alert("Values = " + d[1]);
            }
        });
    }
    else if (prov != null && dist != null && teh == null) {
        var data = {};
        data.Prov_ID = prov;
        data.Dist_ID = dist;
        data.Teh_ID = teh;
        data.Attr_Name = attribute;

        $.ajax({
            url: "/Home/OnlyProvinceAndDistrictWithAttribute",
            type: "POST",
            data: JSON.stringify(data),
            dataType: "JSON",
            contentType: "Application/JSON",
            async: true,
            success: function (d) {
                dd1 = d[0];
                dd2 = d[1];

                alert("Names = " + d[0]);
                alert("Values = " + d[1]);
            }
        });
    }
    else if (prov != null && dist != null && teh != null) {
        var data = {};
        data.Prov_ID = prov;
        data.Dist_ID = dist;
        data.Teh_ID = teh;
        data.Attr_Name = attribute;

        $.ajax({
            url: "/Home/ProvinceDistrictTehsilWithAttribute",
            type: "POST",
            data: JSON.stringify(data),
            dataType: "JSON",
            contentType: "Application/JSON",
            async: true,
            success: function (d) {
                dd1 = d[0];
                dd2 = d[1];

                alert("Names = " + d[0]);
                alert("Values = " + d[1]);
            }
        });
    }
});

$("#sub_attribute").on("change", function () {
    var prov = $("#prov").val();        // Province ID
    var dist = $("#dist").val();        // District ID
    var teh = $("#teh").val();          // Tehsil ID
    var attribute = $("#att").val();    // Attribute
    var sub_att = $(this).val();        // Sub_Attribute

    if (prov == null) {
        alert("Select Any Location First");
    }
    if (prov != null && dist == null && teh == null) {
        var data = {};
        data.Prov_ID = prov;
        data.Dist_ID = dist;
        data.Teh_ID = teh;
        data.Attr_Name = attribute;
        data.SubAttr = sub_att;

        $.ajax({
            url: "/Home/OnlyProvinceWithSub_Attribute",
            type: "POST",
            data: JSON.stringify(data),
            dataType: "JSON",
            contentType: "Application/JSON",
            async: true,
            success: function (d) {
                dd1 = ['Male' , 'Female'];
                dd2 = [d[1] , d[2]];

                alert("Names = " + d[0]);
                alert("Male Values = " + d[1]);
                alert("Female Values = " + d[2]);
            }
        });
    }

    else if (prov != null && dist != null && teh == null) {
        var data = {};
        data.Prov_ID = prov;
        data.Dist_ID = dist;
        data.Teh_ID = teh;
        data.Attr_Name = attribute;
        data.SubAttr = sub_att;

        $.ajax({
            url: "/Home/OnlyProvinceAndDistrictWithSub_Attribute",
            type: "POST",
            data: JSON.stringify(data),
            dataType: "JSON",
            contentType: "Application/JSON",
            async: true,
            success: function (d) {
                dd1 = ['Male', 'Female'];
                dd2 = [d[1], d[2]];

                alert("Names = " + d[0]);
                alert("Male Values = " + d[1]);
                alert("Female Values = " + d[2]);
            }
        });
    }
    else if (prov != null && dist != null && teh != null) {
        var data = {};
        data.Prov_ID = prov;
        data.Dist_ID = dist;
        data.Teh_ID = teh;
        data.Attr_Name = attribute;
        data.SubAttr = sub_att;

        $.ajax({
            url: "/Home/ProvinceDistrictTehsilWithSub_Attribute",
            type: "POST",
            data: JSON.stringify(data),
            dataType: "JSON",
            contentType: "Application/JSON",
            async: true,
            success: function (d) {
                dd1 = ['Male', 'Female'];
                dd2 = [d[1], d[2]];

                alert("Names = " + d[0]);
                alert("Male Values = " + d[1]);
                alert("Female Values = " + d[2]);
            }
        });
    }
});

$('#b0').on('click', function () {
    $('#chartdiv').html("");
    var data1 = dd1;//['Married', 'Never Married', 'Widowed', 'Divorsed'];
    var data2 = dd2;//[90, 61, 12, 25];
    var arr = new Array();

    for (var c = 0; c < data1.length; c++) {
        var abc = {};
        abc.label = data1[c];
        abc.value = data2[c];
        arr.push(abc);
    }

    var chart = AmCharts.makeChart("chartdiv", {
        "theme": "chalk",
        "type": "serial",
        "startDuration": 2,
        "dataProvider": arr,
        "valueAxes": [{
            "position": "left",
            "title": "No of Poeple"
        }],
        "graphs": [{
            "balloonText": "[[category]]: <b>[[value]]</b>",
            "fillColorsField": "color",
            "fillAlphas": 1,
            "type": "column",
            "valueField": "value"
        }],
        "depth3D": 20,
        "angle": 30,
        "chartCursor": {
            "categoryBalloonEnabled": true,
            "cursorAlpha": 0,
            "zoomable": true
        },
        "categoryField": "label",
        "categoryAxis": {
            "gridPosition": "start",
            "labelRotation": 90
        }
    });
});

$('#b1').on('click', function () {
    google.setOnLoadCallback(drawChart());
    function drawChart() {
        var data1 = dd1;//['Married', 'Never Married', 'Divorsed', 'Widowed'];
        var data2 = dd2;//[90, 61, 82, 25];

        var data0 = new Array();
        data0.push(['Status', 'Values']);
        for (var i = 0; i < data1.length; i++) {
            var cc = new Array();
            cc.push(data1[i]);
            cc.push(data2[i]);
            data0.push(cc);
        }
        var data = google.visualization.arrayToDataTable(data0);

        var options = {
            title: $("#att").val(),
            is3D: true,
        };
        var chart = new google.visualization.PieChart(document.getElementById('chartdiv'));
        chart.draw(data, options);
    }
});

$('#b2').on('click', function () {
    $('#chartdiv').html("");

    google.setOnLoadCallback(drawSeriesChart());

    function drawSeriesChart() {

        var data1 = dd1;//['Married', 'Never Married', 'Divorsed', 'Widowed'];
        var data2 = dd2;//[90, 61, 82, 25];

        var dd = new Array();
        dd.push(['ID', 'People', 'Count', 'Status']);
        for (var i = 0; i < data1.length; i++) {
            var cc = new Array();
            cc.push('');
            cc.push(data2[i]);
            cc.push(i + 1);
            cc.push(data1[i]);

            dd.push(cc);
        }

        var data = google.visualization.arrayToDataTable(dd);

        var options = {
            title: $("#att").val(),
            hAxis: { title: 'No of People' },
            vAxis: { title: 'Age' },
            bubble: { textStyle: { fontSize: 10 } }
        };

        var chart = new google.visualization.BubbleChart(document.getElementById('chartdiv'));
        chart.draw(data, options);
    }

});

$('#b3').on('click', function () {
    $('#chartdiv').html("");
    var data1 = dd1;//['Married', 'Never Married', 'Widowed', 'Divorsed'];
    var data2 = dd2;//[41, 59, 12, 20];
    var data4 = [25, 71, 32, 5];
    var data6 = [38, 19, 7, 12];
    var data0 = ['2001', '2002', '2003'];

    $(function () {

        var options = {
            legend: {
                show: true
            }, series: {
                lines: {
                    show: true
                },
                points: {
                    show: true
                }
            },
            crosshair: {
                mode: "x"
            },
            grid: {
                hoverable: true,
                autoHighlight: true
            },
            yaxis: {
                ticks: 10
            },
            selection: {
                mode: "xy"
            }
        };

        //------------------------Data conversion to JSON-----------------------
        var zee = new Array();
        for (var c = 0; c < data2.length; c++) {
            var abc = {};
            var internal = new Array();

            for (var d = 0; d < data0.length; d++) {
                if (d == 0) {
                    data2 = [41, 59, 12, 20];
                }
                else if (d == 1) {
                    data2 = [25, 71, 32, 5];
                }
                else {
                    data2 = [38, 19, 7, 12];
                }
                var intr = new Array();
                intr.push(data0[d]);
                intr.push(data2[c]);

                internal.push(intr);
            }
            abc.data = internal;
            abc.label = data1[c] + " = ";

            zee.push(abc);
        }
        //-----------------------------------------------------------------------

        //plot graph
        plot = $.plot("#chartdiv", zee, options);
        $(function () {

            var legends = $("#chartdiv .legendLabel");

            var updateLegendTimeout = null;
            var latestPosition = null;

            function updateLegend() {

                updateLegendTimeout = null;

                var pos = latestPosition;

                var axes = plot.getAxes();
                if (pos.x < axes.xaxis.min || pos.x > axes.xaxis.max ||
                    pos.y < axes.yaxis.min || pos.y > axes.yaxis.max) {
                    return;
                }

                var i, j, dataset = plot.getData();
                for (i = 0; i < dataset.length; ++i) {

                    var series = dataset[i];

                    // Find the nearest points, x-wise

                    for (j = 0; j < series.data.length; ++j) {
                        if (series.data[j][0] > pos.x) {
                            break;
                        }
                    }

                    // Now Interpolate
                    var y,
                        p1 = series.data[j - 1],
                        p2 = series.data[j];

                    if (p1 == null) {
                        y = p2[1];
                    } else if (p2 == null) {
                        y = p1[1];
                    } else {
                        y = p1[1] + (p2[1] - p1[1]) * (pos.x - p1[0]) / (p2[0] - p1[0]);
                    }

                    legends.eq(i).text(series.label.replace(/=.*/, "= " + y.toFixed(2)));
                }
            }

            $("#chartdiv").bind("plothover", function (event, pos, item) {
                latestPosition = pos;
                if (!updateLegendTimeout) {
                    updateLegendTimeout = setTimeout(updateLegend, 50);
                }
            });


        });
    });
});

$('#b4').on('click', function () {
    $('#chartdiv').html("");
    var data1 = dd1;//['Married', 'Never Married', 'Widowed', 'Divorsed'];
    var data2 = dd2;//[41, 59, 12, 20];
    var data4 = [25, 71, 32, 5];
    var data6 = [38, 19, 7, 12];
    var data0 = ['2001', '2002', '2003'];
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
        }
        if (c == 1) {
            abc.a = data4[0];
            abc.b = data4[1];
            abc.c = data4[2];
            abc.d = data4[3];
            abc.e = data4[4];
            abc.f = data4[5];
            abc.g = data4[6];
        }
        if (c == 2) {
            abc.a = data6[0];
            abc.b = data6[1];
            abc.c = data6[2];
            abc.d = data6[3];
            abc.e = data6[4];
            abc.f = data6[5];
            abc.g = data6[6];
        }
        arr01.push(abc);
    }
    //------------------------------------------------------
    $("#chartdiv").html("");
    Morris.Area({
        element: 'chartdiv',
        axes: true,
        data: arr01,
        xkey: 'x',
        ykeys: ['y', 'a', 'b', 'c', 'd', 'e', 'f'],
        labels: ['Y', data1[0], data1[1], data1[2], data1[3], data1[4], data1[5]]
    });
});

$('#b5').on('click', function () {
    var data1 = dd1;//['Married', 'Never Married', 'Widowed', 'Divorsed'];
    var data2 = dd2;//[41, 59, 12, 20];
    var data4 = [25, 71, 32, 5];
    var data6 = [38, 19, 7, 12];
    var data0 = ['2001', '2002', '2003'];
    var arr0 = new Array();

    for (var c = 0; c < data0.length; c++) {
        var abc = {};
        abc.y = data0[c];

        if (c == 0) {
            abc.a = data2[0];
            abc.b = data2[1];
            abc.c = data2[2];
            abc.d = data2[3];
            abc.e = data2[4];
            abc.f = data2[5];
            abc.g = data2[6];
        }
        if (c == 1) {
            abc.a = data4[0];
            abc.b = data4[1];
            abc.c = data4[2];
            abc.d = data4[3];
            abc.e = data4[4];
            abc.f = data4[5];
            abc.g = data4[6];
        }
        if (c == 2) {
            abc.a = data6[0];
            abc.b = data6[1];
            abc.c = data6[2];
            abc.d = data6[3];
            abc.e = data6[4];
            abc.f = data6[5];
            abc.g = data6[6];
        }

        arr0.push(abc);
    }
    //--------------------------------------------
    $('#chartdiv').html("");
    Morris.Line({
        element: 'chartdiv',
        data: arr0,
        xkey: 'y',
        ykeys: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
        labels: [data1[0], data1[1], data1[2], data1[3], data1[4], data1[5], data1[6]],
        pointSize: [1],
        hideHover: ['always'],

    });
});

$('#b6').on('click', function () {
    // $('#chartdiv').html("");
    debugger;
    alert("button 6");
    //---Drag and Drop collapsable Tree---
    $(function () {
        // Get JSON data
var myjson = JSON.stringify({
    "name": "flare",
    "children": [
        {
            "name": "analytics",
            "children": [
                {
                    "name": "cluster",
                    "children": [
                        {
                            "name": "AgglomerativeCluster",
                            "size": 3938
                        }, {
                            "name": "CommunityStructure",
                            "size": 3812
                        }, {
                            "name": "HierarchicalCluster",
                            "size": 6714
                        }, {
                            "name": "MergeEdge",
                            "size": 743
                        }
                    ]
                }, {
                    "name": "graph",
                    "children": [
                        {
                            "name": "BetweennessCentrality",
                            "size": 3534
                        }, {
                            "name": "LinkDistance",
                            "size": 5731
                        }, {
                            "name": "MaxFlowMinCut",
                            "size": 7840
                        }, {
                            "name": "ShortestPaths",
                            "size": 5914
                        }, {
                            "name": "SpanningTree",
                            "size": 3416
                        }
                    ]
                }, {
                    "name": "optimization",
                    "children": [
                        {
                            "name": "AspectRatioBanker",
                            "size": 7074
                        }
                    ]
                }
            ]
        }, {
            "name": "animate",
            "children": [
                {
                    "name": "Easing",
                    "size": 17010
                }, {
                    "name": "FunctionSequence",
                    "size": 5842
                }, {
                    "name": "interpolate",
                    "children": [
                        {
                            "name": "ArrayInterpolator",
                            "size": 1983
                        }, {
                            "name": "ColorInterpolator",
                            "size": 2047
                        }, {
                            "name": "DateInterpolator",
                            "size": 1375
                        }, {
                            "name": "Interpolator",
                            "size": 8746
                        }, {
                            "name": "MatrixInterpolator",
                            "size": 2202
                        }, {
                            "name": "NumberInterpolator",
                            "size": 1382
                        }, {
                            "name": "ObjectInterpolator",
                            "size": 1629
                        }, {
                            "name": "PointInterpolator",
                            "size": 1675
                        }, {
                            "name": "RectangleInterpolator",
                            "size": 2042
                        }
                    ]
                }, {
                    "name": "ISchedulable",
                    "size": 1041
                }, {
                    "name": "Parallel",
                    "size": 5176
                }, {
                    "name": "Pause",
                    "size": 449
                }, {
                    "name": "Scheduler",
                    "size": 5593
                }, {
                    "name": "Sequence",
                    "size": 5534
                }, {
                    "name": "Transition",
                    "size": 9201
                }, {
                    "name": "Transitioner",
                    "size": 19975
                }, {
                    "name": "TransitionEvent",
                    "size": 1116
                }, {
                    "name": "Tween",
                    "size": 6006
                }
            ]
        }, {
            "name": "data",
            "children": [
                {
                    "name": "converters",
                    "children": [
                        {
                            "name": "Converters",
                            "size": 721
                        }, {
                            "name": "DelimitedTextConverter",
                            "size": 4294
                        }, {
                            "name": "GraphMLConverter",
                            "size": 9800
                        }, {
                            "name": "IDataConverter",
                            "size": 1314
                        }, {
                            "name": "JSONConverter",
                            "size": 2220
                        }
                    ]
                }, {
                    "name": "DataField",
                    "size": 1759
                }, {
                    "name": "DataSchema",
                    "size": 2165
                }, {
                    "name": "DataSet",
                    "size": 586
                }, {
                    "name": "DataSource",
                    "size": 3331
                }, {
                    "name": "DataTable",
                    "size": 772
                }, {
                    "name": "DataUtil",
                    "size": 3322
                }
            ]
        }, {
            "name": "display",
            "children": [
                {
                    "name": "DirtySprite",
                    "size": 8833
                }, {
                    "name": "LineSprite",
                    "size": 1732
                }, {
                    "name": "RectSprite",
                    "size": 3623
                }, {
                    "name": "TextSprite",
                    "size": 10066
                }
            ]
        }, {
            "name": "flex",
            "children": [
                {
                    "name": "FlareVis",
                    "size": 4116
                }
            ]
        }, {
            "name": "physics",
            "children": [
                {
                    "name": "DragForce",
                    "size": 1082
                }, {
                    "name": "GravityForce",
                    "size": 1336
                }, {
                    "name": "IForce",
                    "size": 319
                }, {
                    "name": "NBodyForce",
                    "size": 10498
                }, {
                    "name": "Particle",
                    "size": 2822
                }, {
                    "name": "Simulation",
                    "size": 9983
                }, {
                    "name": "Spring",
                    "size": 2213
                }, {
                    "name": "SpringForce",
                    "size": 1681
                }
            ]
        }, {
            "name": "query",
            "children": [
                {
                    "name": "AggregateExpression",
                    "size": 1616
                }, {
                    "name": "And",
                    "size": 1027
                }, {
                    "name": "Arithmetic",
                    "size": 3891
                }, {
                    "name": "Average",
                    "size": 891
                }, {
                    "name": "BinaryExpression",
                    "size": 2893
                }, {
                    "name": "Comparison",
                    "size": 5103
                }, {
                    "name": "CompositeExpression",
                    "size": 3677
                }, {
                    "name": "Count",
                    "size": 781
                }, {
                    "name": "DateUtil",
                    "size": 4141
                }, {
                    "name": "Distinct",
                    "size": 933
                }, {
                    "name": "Expression",
                    "size": 5130
                }, {
                    "name": "ExpressionIterator",
                    "size": 3617
                }, {
                    "name": "Fn",
                    "size": 3240
                }, {
                    "name": "If",
                    "size": 2732
                }, {
                    "name": "IsA",
                    "size": 2039
                }, {
                    "name": "Literal",
                    "size": 1214
                }, {
                    "name": "Match",
                    "size": 3748
                }, {
                    "name": "Maximum",
                    "size": 843
                }, {
                    "name": "methods",
                    "children": [
                        {
                            "name": "add",
                            "size": 593
                        }, {
                            "name": "and",
                            "size": 330
                        }, {
                            "name": "average",
                            "size": 287
                        }, {
                            "name": "count",
                            "size": 277
                        }, {
                            "name": "distinct",
                            "size": 292
                        }, {
                            "name": "div",
                            "size": 595
                        }, {
                            "name": "eq",
                            "size": 594
                        }, {
                            "name": "fn",
                            "size": 460
                        }, {
                            "name": "gt",
                            "size": 603
                        }, {
                            "name": "gte",
                            "size": 625
                        }, {
                            "name": "iff",
                            "size": 748
                        }, {
                            "name": "isa",
                            "size": 461
                        }, {
                            "name": "lt",
                            "size": 597
                        }, {
                            "name": "lte",
                            "size": 619
                        }, {
                            "name": "max",
                            "size": 283
                        }, {
                            "name": "min",
                            "size": 283
                        }, {
                            "name": "mod",
                            "size": 591
                        }, {
                            "name": "mul",
                            "size": 603
                        }, {
                            "name": "neq",
                            "size": 599
                        }, {
                            "name": "not",
                            "size": 386
                        }, {
                            "name": "or",
                            "size": 323
                        }, {
                            "name": "orderby",
                            "size": 307
                        }, {
                            "name": "range",
                            "size": 772
                        }, {
                            "name": "select",
                            "size": 296
                        }, {
                            "name": "stddev",
                            "size": 363
                        }, {
                            "name": "sub",
                            "size": 600
                        }, {
                            "name": "sum",
                            "size": 280
                        }, {
                            "name": "update",
                            "size": 307
                        }, {
                            "name": "variance",
                            "size": 335
                        }, {
                            "name": "where",
                            "size": 299
                        }, {
                            "name": "xor",
                            "size": 354
                        }, {
                            "name": "_",
                            "size": 264
                        }
                    ]
                }, {
                    "name": "Minimum",
                    "size": 843
                }, {
                    "name": "Not",
                    "size": 1554
                }, {
                    "name": "Or",
                    "size": 970
                }, {
                    "name": "Query",
                    "size": 13896
                }, {
                    "name": "Range",
                    "size": 1594
                }, {
                    "name": "StringUtil",
                    "size": 4130
                }, {
                    "name": "Sum",
                    "size": 791
                }, {
                    "name": "Variable",
                    "size": 1124
                }, {
                    "name": "Variance",
                    "size": 1876
                }, {
                    "name": "Xor",
                    "size": 1101
                }
            ]
        }, {
            "name": "scale",
            "children": [
                {
                    "name": "IScaleMap",
                    "size": 2105
                }, {
                    "name": "LinearScale",
                    "size": 1316
                }, {
                    "name": "LogScale",
                    "size": 3151
                }, {
                    "name": "OrdinalScale",
                    "size": 3770
                }, {
                    "name": "QuantileScale",
                    "size": 2435
                }, {
                    "name": "QuantitativeScale",
                    "size": 4839
                }, {
                    "name": "RootScale",
                    "size": 1756
                }, {
                    "name": "Scale",
                    "size": 4268
                }, {
                    "name": "ScaleType",
                    "size": 1821
                }, {
                    "name": "TimeScale",
                    "size": 5833
                }
            ]
        }, {
            "name": "util",
            "children": [
                {
                    "name": "Arrays",
                    "size": 8258
                }, {
                    "name": "Colors",
                    "size": 10001
                }, {
                    "name": "Dates",
                    "size": 8217
                }, {
                    "name": "Displays",
                    "size": 12555
                }, {
                    "name": "Filter",
                    "size": 2324
                }, {
                    "name": "Geometry",
                    "size": 10993
                }, {
                    "name": "heap",
                    "children": [
                        {
                            "name": "FibonacciHeap",
                            "size": 9354
                        }, {
                            "name": "HeapNode",
                            "size": 1233
                        }
                    ]
                }, {
                    "name": "IEvaluable",
                    "size": 335
                }, {
                    "name": "IPredicate",
                    "size": 383
                }, {
                    "name": "IValueProxy",
                    "size": 874
                }, {
                    "name": "math",
                    "children": [
                        {
                            "name": "DenseMatrix",
                            "size": 3165
                        }, {
                            "name": "IMatrix",
                            "size": 2815
                        }, {
                            "name": "SparseMatrix",
                            "size": 3366
                        }
                    ]
                }, {
                    "name": "Maths",
                    "size": 17705
                }, {
                    "name": "Orientation",
                    "size": 1486
                }, {
                    "name": "palette",
                    "children": [
                        {
                            "name": "ColorPalette",
                            "size": 6367
                        }, {
                            "name": "Palette",
                            "size": 1229
                        }, {
                            "name": "ShapePalette",
                            "size": 2059
                        }, {
                            "name": "SizePalette",
                            "size": 2291
                        }
                    ]
                }, {
                    "name": "Property",
                    "size": 5559
                }, {
                    "name": "Shapes",
                    "size": 19118
                }, {
                    "name": "Sort",
                    "size": 6887
                }, {
                    "name": "Stats",
                    "size": 6557
                }, {
                    "name": "Strings",
                    "size": 22026
                }
            ]
        }, {
            "name": "vis",
            "children": [
                {
                    "name": "axis",
                    "children": [
                        {
                            "name": "Axes",
                            "size": 1302
                        }, {
                            "name": "Axis",
                            "size": 24593
                        }, {
                            "name": "AxisGridLine",
                            "size": 652
                        }, {
                            "name": "AxisLabel",
                            "size": 636
                        }, {
                            "name": "CartesianAxes",
                            "size": 6703
                        }
                    ]
                }, {
                    "name": "controls",
                    "children": [
                        {
                            "name": "AnchorControl",
                            "size": 2138
                        }, {
                            "name": "ClickControl",
                            "size": 3824
                        }, {
                            "name": "Control",
                            "size": 1353
                        }, {
                            "name": "ControlList",
                            "size": 4665
                        }, {
                            "name": "DragControl",
                            "size": 2649
                        }, {
                            "name": "ExpandControl",
                            "size": 2832
                        }, {
                            "name": "HoverControl",
                            "size": 4896
                        }, {
                            "name": "IControl",
                            "size": 763
                        }, {
                            "name": "PanZoomControl",
                            "size": 5222
                        }, {
                            "name": "SelectionControl",
                            "size": 7862
                        }, {
                            "name": "TooltipControl",
                            "size": 8435
                        }
                    ]
                }, {
                    "name": "data",
                    "children": [
                        {
                            "name": "Data",
                            "size": 20544
                        }, {
                            "name": "DataList",
                            "size": 19788
                        }, {
                            "name": "DataSprite",
                            "size": 10349
                        }, {
                            "name": "EdgeSprite",
                            "size": 3301
                        }, {
                            "name": "NodeSprite",
                            "size": 19382
                        }, {
                            "name": "render",
                            "children": [
                                {
                                    "name": "ArrowType",
                                    "size": 698
                                }, {
                                    "name": "EdgeRenderer",
                                    "size": 5569
                                }, {
                                    "name": "IRenderer",
                                    "size": 353
                                }, {
                                    "name": "ShapeRenderer",
                                    "size": 2247
                                }
                            ]
                        }, {
                            "name": "ScaleBinding",
                            "size": 11275
                        }, {
                            "name": "Tree",
                            "size": 7147
                        }, {
                            "name": "TreeBuilder",
                            "size": 9930
                        }
                    ]
                }, {
                    "name": "events",
                    "children": [
                        {
                            "name": "DataEvent",
                            "size": 2313
                        }, {
                            "name": "SelectionEvent",
                            "size": 1880
                        }, {
                            "name": "TooltipEvent",
                            "size": 1701
                        }, {
                            "name": "VisualizationEvent",
                            "size": 1117
                        }
                    ]
                }, {
                    "name": "legend",
                    "children": [
                        {
                            "name": "Legend",
                            "size": 20859
                        }, {
                            "name": "LegendItem",
                            "size": 4614
                        }, {
                            "name": "LegendRange",
                            "size": 10530
                        }
                    ]
                }, {
                    "name": "operator",
                    "children": [
                        {
                            "name": "distortion",
                            "children": [
                                {
                                    "name": "BifocalDistortion",
                                    "size": 4461
                                }, {
                                    "name": "Distortion",
                                    "size": 6314
                                }, {
                                    "name": "FisheyeDistortion",
                                    "size": 3444
                                }
                            ]
                        }, {
                            "name": "encoder",
                            "children": [
                                {
                                    "name": "ColorEncoder",
                                    "size": 3179
                                }, {
                                    "name": "Encoder",
                                    "size": 4060
                                }, {
                                    "name": "PropertyEncoder",
                                    "size": 4138
                                }, {
                                    "name": "ShapeEncoder",
                                    "size": 1690
                                }, {
                                    "name": "SizeEncoder",
                                    "size": 1830
                                }
                            ]
                        }, {
                            "name": "filter",
                            "children": [
                                {
                                    "name": "FisheyeTreeFilter",
                                    "size": 5219
                                }, {
                                    "name": "GraphDistanceFilter",
                                    "size": 3165
                                }, {
                                    "name": "VisibilityFilter",
                                    "size": 3509
                                }
                            ]
                        }, {
                            "name": "IOperator",
                            "size": 1286
                        }, {
                            "name": "label",
                            "children": [
                                {
                                    "name": "Labeler",
                                    "size": 9956
                                }, {
                                    "name": "RadialLabeler",
                                    "size": 3899
                                }, {
                                    "name": "StackedAreaLabeler",
                                    "size": 3202
                                }
                            ]
                        }, {
                            "name": "layout",
                            "children": [
                                {
                                    "name": "AxisLayout",
                                    "size": 6725
                                }, {
                                    "name": "BundledEdgeRouter",
                                    "size": 3727
                                }, {
                                    "name": "CircleLayout",
                                    "size": 9317
                                }, {
                                    "name": "CirclePackingLayout",
                                    "size": 12003
                                }, {
                                    "name": "DendrogramLayout",
                                    "size": 4853
                                }, {
                                    "name": "ForceDirectedLayout",
                                    "size": 8411
                                }, {
                                    "name": "IcicleTreeLayout",
                                    "size": 4864
                                }, {
                                    "name": "IndentedTreeLayout",
                                    "size": 3174
                                }, {
                                    "name": "Layout",
                                    "size": 7881
                                }, {
                                    "name": "NodeLinkTreeLayout",
                                    "size": 12870
                                }, {
                                    "name": "PieLayout",
                                    "size": 2728
                                }, {
                                    "name": "RadialTreeLayout",
                                    "size": 12348
                                }, {
                                    "name": "RandomLayout",
                                    "size": 870
                                }, {
                                    "name": "StackedAreaLayout",
                                    "size": 9121
                                }, {
                                    "name": "TreeMapLayout",
                                    "size": 9191
                                }
                            ]
                        }, {
                            "name": "Operator",
                            "size": 2490
                        }, {
                            "name": "OperatorList",
                            "size": 5248
                        }, {
                            "name": "OperatorSequence",
                            "size": 4190
                        }, {
                            "name": "OperatorSwitch",
                            "size": 2581
                        }, {
                            "name": "SortOperator",
                            "size": 2023
                        }
                    ]
                }, {
                    "name": "Visualization",
                    "size": 16540
                }
            ]
        }
    ]
});

//var jqxhr = $.getJSON("http://localhost:3850/file/flare.json", function (treeData, error){

var treeData = JSON.parse(myjson);

        // Calculate total nodes, max label length
        var totalNodes = 0;
        var maxLabelLength = 0;
        // variables for drag/drop
        var selectedNode = null;
        var draggingNode = null;
        // panning variables
        var panSpeed = 200;
        var panBoundary = 20; // Within 20px from edges will pan when dragging.
        // Misc. variables
        var i = 0;
        var duration = 750;
        var root;

        // size of the diagram
        var viewerWidth = $("#chartdiv").width();
        var viewerHeight = $("#chartdiv").height();

        var tree = d3.layout.tree()
            .size([viewerHeight, viewerWidth]);

        // define a d3 diagonal projection for use by the node paths later on.
        var diagonal = d3.svg.diagonal()
            .projection(function(d) {
                return [d.y, d.x];
            });

        // A recursive helper function for performing some setup by walking through all nodes

        function visit(parent, visitFn, childrenFn) {
            if (!parent) return;

            visitFn(parent);

            var children = childrenFn(parent);
            if (children) {
                var count = children.length;
                for (var i = 0; i < count; i++) {
                    visit(children[i], visitFn, childrenFn);
                }
            }
        }

        // Call visit function to establish maxLabelLength
        visit(treeData, function(d) {
            totalNodes++;
            maxLabelLength = Math.max(d.name.length, maxLabelLength);

        }, function(d) {
            return d.children && d.children.length > 0 ? d.children : null;
        });


        // sort the tree according to the node names

        function sortTree() {
            tree.sort(function(a, b) {
                return b.name.toLowerCase() < a.name.toLowerCase() ? 1 : -1;
            });
        }
        // Sort the tree initially incase the JSON isn't in a sorted order.
        sortTree();

        // TODO: Pan function, can be better implemented.

        function pan(domNode, direction) {
            var speed = panSpeed;
            if (panTimer) {
                clearTimeout(panTimer);
                translateCoords = d3.transform(svgGroup.attr("transform"));
                if (direction == 'left' || direction == 'right') {
                    translateX = direction == 'left' ? translateCoords.translate[0] + speed : translateCoords.translate[0] - speed;
                    translateY = translateCoords.translate[1];
                } else if (direction == 'up' || direction == 'down') {
                    translateX = translateCoords.translate[0];
                    translateY = direction == 'up' ? translateCoords.translate[1] + speed : translateCoords.translate[1] - speed;
                }
                scaleX = translateCoords.scale[0];
                scaleY = translateCoords.scale[1];
                scale = zoomListener.scale();
                svgGroup.transition().attr("transform", "translate(" + translateX + "," + translateY + ")scale(" + scale + ")");
                d3.select(domNode).select('g.node').attr("transform", "translate(" + translateX + "," + translateY + ")");
                zoomListener.scale(zoomListener.scale());
                zoomListener.translate([translateX, translateY]);
                panTimer = setTimeout(function() {
                    pan(domNode, speed, direction);
                }, 50);
            }
        }

        // Define the zoom function for the zoomable tree

        function zoom() {
            svgGroup.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
        }


        // define the zoomListener which calls the zoom function on the "zoom" event constrained within the scaleExtents
        var zoomListener = d3.behavior.zoom().scaleExtent([0.1, 3]).on("zoom", zoom);

        function initiateDrag(d, domNode) {
            draggingNode = d;
            d3.select(domNode).select('.ghostCircle').attr('pointer-events', 'none');
            d3.selectAll('.ghostCircle').attr('class', 'ghostCircle show');
            d3.select(domNode).attr('class', 'node activeDrag');

            svgGroup.selectAll("g.node").sort(function(a, b) { // select the parent and sort the path's
                if (a.id != draggingNode.id) return 1; // a is not the hovered element, send "a" to the back
                else return -1; // a is the hovered element, bring "a" to the front
            });
            // if nodes has children, remove the links and nodes
            if (nodes.length > 1) {
                // remove link paths
                links = tree.links(nodes);
                nodePaths = svgGroup.selectAll("path.link")
                    .data(links, function(d) {
                        return d.target.id;
                    }).remove();
                // remove child nodes
                nodesExit = svgGroup.selectAll("g.node")
                    .data(nodes, function(d) {
                        return d.id;
                    }).filter(function(d, i) {
                        if (d.id == draggingNode.id) {
                            return false;
                        }
                        return true;
                    }).remove();
            }

            // remove parent link
            parentLink = tree.links(tree.nodes(draggingNode.parent));
            svgGroup.selectAll('path.link').filter(function(d, i) {
                if (d.target.id == draggingNode.id) {
                    return true;
                }
                return false;
            }).remove();

            dragStarted = null;
        }

        // define the baseSvg, attaching a class for styling and the zoomListener
        var baseSvg = d3.select("#chartdiv").append("svg")
            .attr("width", viewerWidth)
            .attr("height", viewerHeight)
            .attr("class", "overlay")
            .call(zoomListener);


        // Define the drag listeners for drag/drop behaviour of nodes.
        dragListener = d3.behavior.drag()
            .on("dragstart", function(d) {
                if (d == root) {
                    return;
                }
                dragStarted = true;
                nodes = tree.nodes(d);
                d3.event.sourceEvent.stopPropagation();
                // it's important that we suppress the mouseover event on the node being dragged. Otherwise it will absorb the mouseover event and the underlying node will not detect it d3.select(this).attr('pointer-events', 'none');
            })
            .on("drag", function(d) {
                if (d == root) {
                    return;
                }
                if (dragStarted) {
                    domNode = this;
                    initiateDrag(d, domNode);
                }

                // get coords of mouseEvent relative to svg container to allow for panning
                relCoords = d3.mouse($('svg').get(0));
                if (relCoords[0] < panBoundary) {
                    panTimer = true;
                    pan(this, 'left');
                } else if (relCoords[0] > ($('svg').width() - panBoundary)) {

                    panTimer = true;
                    pan(this, 'right');
                } else if (relCoords[1] < panBoundary) {
                    panTimer = true;
                    pan(this, 'up');
                } else if (relCoords[1] > ($('svg').height() - panBoundary)) {
                    panTimer = true;
                    pan(this, 'down');
                } else {
                    try {
                        clearTimeout(panTimer);
                    } catch (e) {

                    }
                }

                d.x0 += d3.event.dy;
                d.y0 += d3.event.dx;
                var node = d3.select(this);
                node.attr("transform", "translate(" + d.y0 + "," + d.x0 + ")");
                updateTempConnector();
            }).on("dragend", function(d) {
                if (d == root) {
                    return;
                }
                domNode = this;
                if (selectedNode) {
                    // now remove the element from the parent, and insert it into the new elements children
                    var index = draggingNode.parent.children.indexOf(draggingNode);
                    if (index > -1) {
                        draggingNode.parent.children.splice(index, 1);
                    }
                    if (typeof selectedNode.children !== 'undefined' || typeof selectedNode._children !== 'undefined') {
                        if (typeof selectedNode.children !== 'undefined') {
                            selectedNode.children.push(draggingNode);
                        } else {
                            selectedNode._children.push(draggingNode);
                        }
                    } else {
                        selectedNode.children = [];
                        selectedNode.children.push(draggingNode);
                    }
                    // Make sure that the node being added to is expanded so user can see added node is correctly moved
                    expand(selectedNode);
                    sortTree();
                    endDrag();
                } else {
                    endDrag();
                }
            });

        function endDrag() {
            selectedNode = null;
            d3.selectAll('.ghostCircle').attr('class', 'ghostCircle');
            d3.select(domNode).attr('class', 'node');
            // now restore the mouseover event or we won't be able to drag a 2nd time
            d3.select(domNode).select('.ghostCircle').attr('pointer-events', '');
            updateTempConnector();
            if (draggingNode !== null) {
                update(root);
                centerNode(draggingNode);
                draggingNode = null;
            }
        }

        // Helper functions for collapsing and expanding nodes.

        function collapse(d) {
            if (d.children) {
                d._children = d.children;
                d._children.forEach(collapse);
                d.children = null;
            }
        }

        function expand(d) {
            if (d._children) {
                d.children = d._children;
                d.children.forEach(expand);
                d._children = null;
            }
        }

        var overCircle = function(d) {
            selectedNode = d;
            updateTempConnector();
        };
        var outCircle = function(d) {
            selectedNode = null;
            updateTempConnector();
        };

        // Function to update the temporary connector indicating dragging affiliation
        var updateTempConnector = function() {
            var data = [];
            if (draggingNode !== null && selectedNode !== null) {
                // have to flip the source coordinates since we did this for the existing connectors on the original tree
                data = [{
                    source: {
                        x: selectedNode.y0,
                        y: selectedNode.x0
                    },
                    target: {
                        x: draggingNode.y0,
                        y: draggingNode.x0
                    }
                }];
            }
            var link = svgGroup.selectAll(".templink").data(data);

            link.enter().append("path")
                .attr("class", "templink")
                .attr("d", d3.svg.diagonal())
                .attr('pointer-events', 'none');

            link.attr("d", d3.svg.diagonal());

            link.exit().remove();
        };

        // Function to center node when clicked/dropped so node doesn't get lost when collapsing/moving with large amount of children.

        function centerNode(source) {
            scale = zoomListener.scale();
            x = -source.y0;
            y = -source.x0;
            x = x * scale + viewerWidth / 2;
            y = y * scale + viewerHeight / 2;
            d3.select('g').transition()
                .duration(duration)
                .attr("transform", "translate(" + x + "," + y + ")scale(" + scale + ")");
            zoomListener.scale(scale);
            zoomListener.translate([x, y]);
        }

        // Toggle children function

        function toggleChildren(d) {
            if (d.children) {
                d._children = d.children;
                d.children = null;
            } else if (d._children) {
                d.children = d._children;
                d._children = null;
            }
            return d;
        }

        // Toggle children on click.

        function click(d) {
            if (d3.event.defaultPrevented) return; // click suppressed
            d = toggleChildren(d);
            update(d);
            centerNode(d);
        }

        function update(source) {
            // Compute the new height, function counts total children of root node and sets tree height accordingly.
            // This prevents the layout looking squashed when new nodes are made visible or looking sparse when nodes are removed
            // This makes the layout more consistent.
            var levelWidth = [1];
            var childCount = function(level, n) {

                if (n.children && n.children.length > 0) {
                    if (levelWidth.length <= level + 1) levelWidth.push(0);

                    levelWidth[level + 1] += n.children.length;
                    n.children.forEach(function(d) {
                        childCount(level + 1, d);
                    });
                }
            };
            childCount(0, root);
            var newHeight = d3.max(levelWidth) * 25; // 25 pixels per line  
            tree = tree.size([newHeight, viewerWidth]);

            // Compute the new tree layout.
            var nodes = tree.nodes(root).reverse(),
                links = tree.links(nodes);

            // Set widths between levels based on maxLabelLength.
            nodes.forEach(function(d) {
                d.y = (d.depth * (maxLabelLength * 10)); //maxLabelLength * 10px
                // alternatively to keep a fixed scale one can set a fixed depth per level
                // Normalize for fixed-depth by commenting out below line
                // d.y = (d.depth * 500); //500px per level.
            });

            // Update the nodes…
            node = svgGroup.selectAll("g.node")
                .data(nodes, function(d) {
                    return d.id || (d.id = ++i);
                });

            // Enter any new nodes at the parent's previous position.
            var nodeEnter = node.enter().append("g")
                .call(dragListener)
                .attr("class", "node")
                .attr("transform", function(d) {
                    return "translate(" + source.y0 + "," + source.x0 + ")";
                })
                .on('click', click);

            nodeEnter.append("circle")
                .attr('class', 'nodeCircle')
                .attr("r", 0)
                .style("fill", function(d) {
                    return d._children ? "lightsteelblue" : "#fff";
                });

            nodeEnter.append("text")
                .attr("x", function(d) {
                    return d.children || d._children ? -10 : 10;
                })
                .attr("dy", ".35em")
                .attr('class', 'nodeText')
                .attr("text-anchor", function(d) {
                    return d.children || d._children ? "end" : "start";
                })
                .text(function(d) {
                    return d.name;
                })
                .style("fill-opacity", 0);

            // phantom node to give us mouseover in a radius around it
            nodeEnter.append("circle")
                .attr('class', 'ghostCircle')
                .attr("r", 30)
                .attr("opacity", 0.2) // change this to zero to hide the target area
            .style("fill", "red")
                .attr('pointer-events', 'mouseover')
                .on("mouseover", function(node) {
                    overCircle(node);
                })
                .on("mouseout", function(node) {
                    outCircle(node);
                });

            // Update the text to reflect whether node has children or not.
            node.select('text')
                .attr("x", function(d) {
                    return d.children || d._children ? -10 : 10;
                })
                .attr("text-anchor", function(d) {
                    return d.children || d._children ? "end" : "start";
                })
                .text(function(d) {
                    return d.name;
                });

            // Change the circle fill depending on whether it has children and is collapsed
            node.select("circle.nodeCircle")
                .attr("r", 4.5)
                .style("fill", function(d) {
                    return d._children ? "lightsteelblue" : "#fff";
                });

            // Transition nodes to their new position.
            var nodeUpdate = node.transition()
                .duration(duration)
                .attr("transform", function(d) {
                    return "translate(" + d.y + "," + d.x + ")";
                });

            // Fade the text in
            nodeUpdate.select("text")
                .style("fill-opacity", 1);

            // Transition exiting nodes to the parent's new position.
            var nodeExit = node.exit().transition()
                .duration(duration)
                .attr("transform", function(d) {
                    return "translate(" + source.y + "," + source.x + ")";
                })
                .remove();

            nodeExit.select("circle")
                .attr("r", 0);

            nodeExit.select("text")
                .style("fill-opacity", 0);

            // Update the links…
            var link = svgGroup.selectAll("path.link")
                .data(links, function(d) {
                    return d.target.id;
                });

            // Enter any new links at the parent's previous position.
            link.enter().insert("path", "g")
                .attr("class", "link")
                .attr("d", function(d) {
                    var o = {
                        x: source.x0,
                        y: source.y0
                    };
                    return diagonal({
                        source: o,
                        target: o
                    });
                });

            // Transition links to their new position.
            link.transition()
                .duration(duration)
                .attr("d", diagonal);

            // Transition exiting nodes to the parent's new position.
            link.exit().transition()
                .duration(duration)
                .attr("d", function(d) {
                    var o = {
                        x: source.x,
                        y: source.y
                    };
                    return diagonal({
                        source: o,
                        target: o
                    });
                })
                .remove();

            // Stash the old positions for transition.
            nodes.forEach(function(d) {
                d.x0 = d.x;
                d.y0 = d.y;
            });
        }

        // Append a group which holds all nodes and which the zoom Listener can act upon.
        var svgGroup = baseSvg.append("g");

        // Define the root
        root = treeData;
        root.x0 = viewerHeight / 2;
        root.y0 = 0;

        // Layout the tree initially and center on the root node.
        update(root);
        centerNode(root);
    });
});


google.load("visualization", "1", { packages: ["motionchart"] });
$('#b7').on('click', function () {
    $('#chartdiv').html("");
    //---Motion Graph---

    var d = [];
    d[0] = ['2007', '2008', '2009'];
    d[1] = ['Married', 'Never Married', 'Widowed', 'Divorsed']; //never married
    d[2] = [41, 59, 12, 20]; // values 4
    d[3] = ['Married', 'Never Married', 'Widowed', 'Divorsed']; //never married
    d[4] = [25, 71, 32, 5]; // values 4
    d[5] = ['Married', 'Never Married', 'Widowed', 'Divorsed']; //never married
    d[6] = [38, 19, 7, 12]; // values 4


    var data = new google.visualization.DataTable();
    var data0 = d[0];
    var data1 = d[1];
    var data2 = d[2];
    var data3 = d[3];
    var data4 = d[4];
    var data5 = d[5];
    var data6 = d[6];

    data.addColumn('string', "Attribute");
    data.addColumn('number', "year");
    data.addColumn('number', "Value");
    //d1=date ------ d2=att
    //
    var k = 1;
    for (var i = 0; i < data0.length; i++) {

        for (var j = 0; j < data1.length; j++) {
            data.addRow([d[k][j], parseInt(d[0][i]), d[k + 1][j]]);
        }
        k += 2;
    }
    var chart = new google.visualization.MotionChart(document.getElementById('chartdiv'));

    chart.draw(data, { width: 670, height: 380 });
    
});

$('#b8').on('click', function () {
    $('#chartdiv').html("");
    alert("button 8");
    //---Heirarichal Bar Chart---
    $(function() {
        var arrayOfObject = [];
        var margin = { top: 30, right: 120, bottom: 0, left: 120 },

            width = $("#chartdiv").width() - margin.left - margin.right,
            height = $("#chartdiv").height() - margin.top - margin.bottom;
        //     width = $("#hira").width();
        //height = 500 - margin.top - margin.bottom;

        var x = d3.scale.linear()
            .range([0, width]);

        var barHeight = 20;

        var color = d3.scale.ordinal()
            .range(["steelblue", "#ccc"]);

        var duration = 750,
            delay = 25;

        var partition = d3.layout.partition()
            .value(function (d) { return d.size; });

        var xAxis = d3.svg.axis()
            .scale(x)
            .orient("top");

        var svg = d3.select("#chartdiv").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        svg.append("rect")
            .attr("class", "background")
            .attr("width", width)
            .attr("height", height)
            .on("click", up);

        svg.append("g")
            .attr("class", "x axis");

        svg.append("g")
            .attr("class", "y axis")
            .append("line")
            .attr("y1", "100%");


        var myjson = JSON.stringify({
            "name": "flare",
            "children": [
                {
                    "name": "analytics",
                    "children": [
                        {
                            "name": "cluster",
                            "children": [
                                {
                                    "name": "AgglomerativeCluster",
                                    "size": 3938
                                }, {
                                    "name": "CommunityStructure",
                                    "size": 3812
                                }, {
                                    "name": "HierarchicalCluster",
                                    "size": 6714
                                }, {
                                    "name": "MergeEdge",
                                    "size": 743
                                }
                            ]
                        }, {
                            "name": "graph",
                            "children": [
                                {
                                    "name": "BetweennessCentrality",
                                    "size": 3534
                                }, {
                                    "name": "LinkDistance",
                                    "size": 5731
                                }, {
                                    "name": "MaxFlowMinCut",
                                    "size": 7840
                                }, {
                                    "name": "ShortestPaths",
                                    "size": 5914
                                }, {
                                    "name": "SpanningTree",
                                    "size": 3416
                                }
                            ]
                        }, {
                            "name": "optimization",
                            "children": [
                                {
                                    "name": "AspectRatioBanker",
                                    "size": 7074
                                }
                            ]
                        }
                    ]
                }, {
                    "name": "animate",
                    "children": [
                        {
                            "name": "Easing",
                            "size": 17010
                        }, {
                            "name": "FunctionSequence",
                            "size": 5842
                        }, {
                            "name": "interpolate",
                            "children": [
                                {
                                    "name": "ArrayInterpolator",
                                    "size": 1983
                                }, {
                                    "name": "ColorInterpolator",
                                    "size": 2047
                                }, {
                                    "name": "DateInterpolator",
                                    "size": 1375
                                }, {
                                    "name": "Interpolator",
                                    "size": 8746
                                }, {
                                    "name": "MatrixInterpolator",
                                    "size": 2202
                                }, {
                                    "name": "NumberInterpolator",
                                    "size": 1382
                                }, {
                                    "name": "ObjectInterpolator",
                                    "size": 1629
                                }, {
                                    "name": "PointInterpolator",
                                    "size": 1675
                                }, {
                                    "name": "RectangleInterpolator",
                                    "size": 2042
                                }
                            ]
                        }, {
                            "name": "ISchedulable",
                            "size": 1041
                        }, {
                            "name": "Parallel",
                            "size": 5176
                        }, {
                            "name": "Pause",
                            "size": 449
                        }, {
                            "name": "Scheduler",
                            "size": 5593
                        }, {
                            "name": "Sequence",
                            "size": 5534
                        }, {
                            "name": "Transition",
                            "size": 9201
                        }, {
                            "name": "Transitioner",
                            "size": 19975
                        }, {
                            "name": "TransitionEvent",
                            "size": 1116
                        }, {
                            "name": "Tween",
                            "size": 6006
                        }
                    ]
                }, {
                    "name": "data",
                    "children": [
                        {
                            "name": "converters",
                            "children": [
                                {
                                    "name": "Converters",
                                    "size": 721
                                }, {
                                    "name": "DelimitedTextConverter",
                                    "size": 4294
                                }, {
                                    "name": "GraphMLConverter",
                                    "size": 9800
                                }, {
                                    "name": "IDataConverter",
                                    "size": 1314
                                }, {
                                    "name": "JSONConverter",
                                    "size": 2220
                                }
                            ]
                        }, {
                            "name": "DataField",
                            "size": 1759
                        }, {
                            "name": "DataSchema",
                            "size": 2165
                        }, {
                            "name": "DataSet",
                            "size": 586
                        }, {
                            "name": "DataSource",
                            "size": 3331
                        }, {
                            "name": "DataTable",
                            "size": 772
                        }, {
                            "name": "DataUtil",
                            "size": 3322
                        }
                    ]
                }, {
                    "name": "display",
                    "children": [
                        {
                            "name": "DirtySprite",
                            "size": 8833
                        }, {
                            "name": "LineSprite",
                            "size": 1732
                        }, {
                            "name": "RectSprite",
                            "size": 3623
                        }, {
                            "name": "TextSprite",
                            "size": 10066
                        }
                    ]
                }, {
                    "name": "flex",
                    "children": [
                        {
                            "name": "FlareVis",
                            "size": 4116
                        }
                    ]
                }, {
                    "name": "physics",
                    "children": [
                        {
                            "name": "DragForce",
                            "size": 1082
                        }, {
                            "name": "GravityForce",
                            "size": 1336
                        }, {
                            "name": "IForce",
                            "size": 319
                        }, {
                            "name": "NBodyForce",
                            "size": 10498
                        }, {
                            "name": "Particle",
                            "size": 2822
                        }, {
                            "name": "Simulation",
                            "size": 9983
                        }, {
                            "name": "Spring",
                            "size": 2213
                        }, {
                            "name": "SpringForce",
                            "size": 1681
                        }
                    ]
                }, {
                    "name": "query",
                    "children": [
                        {
                            "name": "AggregateExpression",
                            "size": 1616
                        }, {
                            "name": "And",
                            "size": 1027
                        }, {
                            "name": "Arithmetic",
                            "size": 3891
                        }, {
                            "name": "Average",
                            "size": 891
                        }, {
                            "name": "BinaryExpression",
                            "size": 2893
                        }, {
                            "name": "Comparison",
                            "size": 5103
                        }, {
                            "name": "CompositeExpression",
                            "size": 3677
                        }, {
                            "name": "Count",
                            "size": 781
                        }, {
                            "name": "DateUtil",
                            "size": 4141
                        }, {
                            "name": "Distinct",
                            "size": 933
                        }, {
                            "name": "Expression",
                            "size": 5130
                        }, {
                            "name": "ExpressionIterator",
                            "size": 3617
                        }, {
                            "name": "Fn",
                            "size": 3240
                        }, {
                            "name": "If",
                            "size": 2732
                        }, {
                            "name": "IsA",
                            "size": 2039
                        }, {
                            "name": "Literal",
                            "size": 1214
                        }, {
                            "name": "Match",
                            "size": 3748
                        }, {
                            "name": "Maximum",
                            "size": 843
                        }, {
                            "name": "methods",
                            "children": [
                                {
                                    "name": "add",
                                    "size": 593
                                }, {
                                    "name": "and",
                                    "size": 330
                                }, {
                                    "name": "average",
                                    "size": 287
                                }, {
                                    "name": "count",
                                    "size": 277
                                }, {
                                    "name": "distinct",
                                    "size": 292
                                }, {
                                    "name": "div",
                                    "size": 595
                                }, {
                                    "name": "eq",
                                    "size": 594
                                }, {
                                    "name": "fn",
                                    "size": 460
                                }, {
                                    "name": "gt",
                                    "size": 603
                                }, {
                                    "name": "gte",
                                    "size": 625
                                }, {
                                    "name": "iff",
                                    "size": 748
                                }, {
                                    "name": "isa",
                                    "size": 461
                                }, {
                                    "name": "lt",
                                    "size": 597
                                }, {
                                    "name": "lte",
                                    "size": 619
                                }, {
                                    "name": "max",
                                    "size": 283
                                }, {
                                    "name": "min",
                                    "size": 283
                                }, {
                                    "name": "mod",
                                    "size": 591
                                }, {
                                    "name": "mul",
                                    "size": 603
                                }, {
                                    "name": "neq",
                                    "size": 599
                                }, {
                                    "name": "not",
                                    "size": 386
                                }, {
                                    "name": "or",
                                    "size": 323
                                }, {
                                    "name": "orderby",
                                    "size": 307
                                }, {
                                    "name": "range",
                                    "size": 772
                                }, {
                                    "name": "select",
                                    "size": 296
                                }, {
                                    "name": "stddev",
                                    "size": 363
                                }, {
                                    "name": "sub",
                                    "size": 600
                                }, {
                                    "name": "sum",
                                    "size": 280
                                }, {
                                    "name": "update",
                                    "size": 307
                                }, {
                                    "name": "variance",
                                    "size": 335
                                }, {
                                    "name": "where",
                                    "size": 299
                                }, {
                                    "name": "xor",
                                    "size": 354
                                }, {
                                    "name": "_",
                                    "size": 264
                                }
                            ]
                        }, {
                            "name": "Minimum",
                            "size": 843
                        }, {
                            "name": "Not",
                            "size": 1554
                        }, {
                            "name": "Or",
                            "size": 970
                        }, {
                            "name": "Query",
                            "size": 13896
                        }, {
                            "name": "Range",
                            "size": 1594
                        }, {
                            "name": "StringUtil",
                            "size": 4130
                        }, {
                            "name": "Sum",
                            "size": 791
                        }, {
                            "name": "Variable",
                            "size": 1124
                        }, {
                            "name": "Variance",
                            "size": 1876
                        }, {
                            "name": "Xor",
                            "size": 1101
                        }
                    ]
                }, {
                    "name": "scale",
                    "children": [
                        {
                            "name": "IScaleMap",
                            "size": 2105
                        }, {
                            "name": "LinearScale",
                            "size": 1316
                        }, {
                            "name": "LogScale",
                            "size": 3151
                        }, {
                            "name": "OrdinalScale",
                            "size": 3770
                        }, {
                            "name": "QuantileScale",
                            "size": 2435
                        }, {
                            "name": "QuantitativeScale",
                            "size": 4839
                        }, {
                            "name": "RootScale",
                            "size": 1756
                        }, {
                            "name": "Scale",
                            "size": 4268
                        }, {
                            "name": "ScaleType",
                            "size": 1821
                        }, {
                            "name": "TimeScale",
                            "size": 5833
                        }
                    ]
                }, {
                    "name": "util",
                    "children": [
                        {
                            "name": "Arrays",
                            "size": 8258
                        }, {
                            "name": "Colors",
                            "size": 10001
                        }, {
                            "name": "Dates",
                            "size": 8217
                        }, {
                            "name": "Displays",
                            "size": 12555
                        }, {
                            "name": "Filter",
                            "size": 2324
                        }, {
                            "name": "Geometry",
                            "size": 10993
                        }, {
                            "name": "heap",
                            "children": [
                                {
                                    "name": "FibonacciHeap",
                                    "size": 9354
                                }, {
                                    "name": "HeapNode",
                                    "size": 1233
                                }
                            ]
                        }, {
                            "name": "IEvaluable",
                            "size": 335
                        }, {
                            "name": "IPredicate",
                            "size": 383
                        }, {
                            "name": "IValueProxy",
                            "size": 874
                        }, {
                            "name": "math",
                            "children": [
                                {
                                    "name": "DenseMatrix",
                                    "size": 3165
                                }, {
                                    "name": "IMatrix",
                                    "size": 2815
                                }, {
                                    "name": "SparseMatrix",
                                    "size": 3366
                                }
                            ]
                        }, {
                            "name": "Maths",
                            "size": 17705
                        }, {
                            "name": "Orientation",
                            "size": 1486
                        }, {
                            "name": "palette",
                            "children": [
                                {
                                    "name": "ColorPalette",
                                    "size": 6367
                                }, {
                                    "name": "Palette",
                                    "size": 1229
                                }, {
                                    "name": "ShapePalette",
                                    "size": 2059
                                }, {
                                    "name": "SizePalette",
                                    "size": 2291
                                }
                            ]
                        }, {
                            "name": "Property",
                            "size": 5559
                        }, {
                            "name": "Shapes",
                            "size": 19118
                        }, {
                            "name": "Sort",
                            "size": 6887
                        }, {
                            "name": "Stats",
                            "size": 6557
                        }, {
                            "name": "Strings",
                            "size": 22026
                        }
                    ]
                }, {
                    "name": "vis",
                    "children": [
                        {
                            "name": "axis",
                            "children": [
                                {
                                    "name": "Axes",
                                    "size": 1302
                                }, {
                                    "name": "Axis",
                                    "size": 24593
                                }, {
                                    "name": "AxisGridLine",
                                    "size": 652
                                }, {
                                    "name": "AxisLabel",
                                    "size": 636
                                }, {
                                    "name": "CartesianAxes",
                                    "size": 6703
                                }
                            ]
                        }, {
                            "name": "controls",
                            "children": [
                                {
                                    "name": "AnchorControl",
                                    "size": 2138
                                }, {
                                    "name": "ClickControl",
                                    "size": 3824
                                }, {
                                    "name": "Control",
                                    "size": 1353
                                }, {
                                    "name": "ControlList",
                                    "size": 4665
                                }, {
                                    "name": "DragControl",
                                    "size": 2649
                                }, {
                                    "name": "ExpandControl",
                                    "size": 2832
                                }, {
                                    "name": "HoverControl",
                                    "size": 4896
                                }, {
                                    "name": "IControl",
                                    "size": 763
                                }, {
                                    "name": "PanZoomControl",
                                    "size": 5222
                                }, {
                                    "name": "SelectionControl",
                                    "size": 7862
                                }, {
                                    "name": "TooltipControl",
                                    "size": 8435
                                }
                            ]
                        }, {
                            "name": "data",
                            "children": [
                                {
                                    "name": "Data",
                                    "size": 20544
                                }, {
                                    "name": "DataList",
                                    "size": 19788
                                }, {
                                    "name": "DataSprite",
                                    "size": 10349
                                }, {
                                    "name": "EdgeSprite",
                                    "size": 3301
                                }, {
                                    "name": "NodeSprite",
                                    "size": 19382
                                }, {
                                    "name": "render",
                                    "children": [
                                        {
                                            "name": "ArrowType",
                                            "size": 698
                                        }, {
                                            "name": "EdgeRenderer",
                                            "size": 5569
                                        }, {
                                            "name": "IRenderer",
                                            "size": 353
                                        }, {
                                            "name": "ShapeRenderer",
                                            "size": 2247
                                        }
                                    ]
                                }, {
                                    "name": "ScaleBinding",
                                    "size": 11275
                                }, {
                                    "name": "Tree",
                                    "size": 7147
                                }, {
                                    "name": "TreeBuilder",
                                    "size": 9930
                                }
                            ]
                        }, {
                            "name": "events",
                            "children": [
                                {
                                    "name": "DataEvent",
                                    "size": 2313
                                }, {
                                    "name": "SelectionEvent",
                                    "size": 1880
                                }, {
                                    "name": "TooltipEvent",
                                    "size": 1701
                                }, {
                                    "name": "VisualizationEvent",
                                    "size": 1117
                                }
                            ]
                        }, {
                            "name": "legend",
                            "children": [
                                {
                                    "name": "Legend",
                                    "size": 20859
                                }, {
                                    "name": "LegendItem",
                                    "size": 4614
                                }, {
                                    "name": "LegendRange",
                                    "size": 10530
                                }
                            ]
                        }, {
                            "name": "operator",
                            "children": [
                                {
                                    "name": "distortion",
                                    "children": [
                                        {
                                            "name": "BifocalDistortion",
                                            "size": 4461
                                        }, {
                                            "name": "Distortion",
                                            "size": 6314
                                        }, {
                                            "name": "FisheyeDistortion",
                                            "size": 3444
                                        }
                                    ]
                                }, {
                                    "name": "encoder",
                                    "children": [
                                        {
                                            "name": "ColorEncoder",
                                            "size": 3179
                                        }, {
                                            "name": "Encoder",
                                            "size": 4060
                                        }, {
                                            "name": "PropertyEncoder",
                                            "size": 4138
                                        }, {
                                            "name": "ShapeEncoder",
                                            "size": 1690
                                        }, {
                                            "name": "SizeEncoder",
                                            "size": 1830
                                        }
                                    ]
                                }, {
                                    "name": "filter",
                                    "children": [
                                        {
                                            "name": "FisheyeTreeFilter",
                                            "size": 5219
                                        }, {
                                            "name": "GraphDistanceFilter",
                                            "size": 3165
                                        }, {
                                            "name": "VisibilityFilter",
                                            "size": 3509
                                        }
                                    ]
                                }, {
                                    "name": "IOperator",
                                    "size": 1286
                                }, {
                                    "name": "label",
                                    "children": [
                                        {
                                            "name": "Labeler",
                                            "size": 9956
                                        }, {
                                            "name": "RadialLabeler",
                                            "size": 3899
                                        }, {
                                            "name": "StackedAreaLabeler",
                                            "size": 3202
                                        }
                                    ]
                                }, {
                                    "name": "layout",
                                    "children": [
                                        {
                                            "name": "AxisLayout",
                                            "size": 6725
                                        }, {
                                            "name": "BundledEdgeRouter",
                                            "size": 3727
                                        }, {
                                            "name": "CircleLayout",
                                            "size": 9317
                                        }, {
                                            "name": "CirclePackingLayout",
                                            "size": 12003
                                        }, {
                                            "name": "DendrogramLayout",
                                            "size": 4853
                                        }, {
                                            "name": "ForceDirectedLayout",
                                            "size": 8411
                                        }, {
                                            "name": "IcicleTreeLayout",
                                            "size": 4864
                                        }, {
                                            "name": "IndentedTreeLayout",
                                            "size": 3174
                                        }, {
                                            "name": "Layout",
                                            "size": 7881
                                        }, {
                                            "name": "NodeLinkTreeLayout",
                                            "size": 12870
                                        }, {
                                            "name": "PieLayout",
                                            "size": 2728
                                        }, {
                                            "name": "RadialTreeLayout",
                                            "size": 12348
                                        }, {
                                            "name": "RandomLayout",
                                            "size": 870
                                        }, {
                                            "name": "StackedAreaLayout",
                                            "size": 9121
                                        }, {
                                            "name": "TreeMapLayout",
                                            "size": 9191
                                        }
                                    ]
                                }, {
                                    "name": "Operator",
                                    "size": 2490
                                }, {
                                    "name": "OperatorList",
                                    "size": 5248
                                }, {
                                    "name": "OperatorSequence",
                                    "size": 4190
                                }, {
                                    "name": "OperatorSwitch",
                                    "size": 2581
                                }, {
                                    "name": "SortOperator",
                                    "size": 2023
                                }
                            ]
                        }, {
                            "name": "Visualization",
                            "size": 16540
                        }
                    ]
                }
            ]
        });

        //d3.json("/file/flare.json", function (error, root) {
        //alert(error);

        var root = JSON.parse(myjson);
        //if (error) throw error;

        partition.nodes(root);
        x.domain([0, root.value]).nice();
        down(root, 0);
        // });

        function down(d, i) {
            //debugger;
            arrayOfObject.push(d);
            // alert(arrayOfObject.length);
            if (arrayOfObject.length == 1 | arrayOfObject.length == 0) {
                $('#back').css('visibility', 'hidden');
            } else {
                $('#back').css('visibility', 'visible');
            }
            if (!d.children || this.__transition__) return;
            var end = duration + d.children.length * delay;

            // Mark any currently-displayed bars as exiting.
            var exit = svg.selectAll(".enter")
                .attr("class", "exit");

            // Entering nodes immediately obscure the clicked-on bar, so hide it.
            exit.selectAll("rect").filter(function (p) { return p === d; })
                .style("fill-opacity", 1e-6);

            // Enter the new bars for the clicked-on data.
            // Per above, entering bars are immediately visible.
            var enter = bar(d)
                .attr("transform", stack(i))
                .style("opacity", 1);

            // Have the text fade-in, even though the bars are visible.
            // Color the bars as parents; they will fade to children if appropriate.
            enter.select("text").style("fill-opacity", 1e-6);
            enter.select("rect").style("fill", color(true));

            // Update the x-scale domain.
            x.domain([0, d3.max(d.children, function (d) { return d.value; })]).nice();

            // Update the x-axis.
            svg.selectAll(".x.axis").transition()
                .duration(duration)
                .call(xAxis);

            // Transition entering bars to their new position.
            var enterTransition = enter.transition()
                .duration(duration)
                .delay(function (d, i) { return i * delay; })
                .attr("transform", function (d, i) { return "translate(0," + barHeight * i * 1.2 + ")"; });

            // Transition entering text.
            enterTransition.select("text")
                .style("fill-opacity", 1);

            // Transition entering rects to the new x-scale.
            enterTransition.select("rect")
                .attr("width", function (d) { return x(d.value); })
                .style("fill", function (d) { return color(!!d.children); });

            // Transition exiting bars to fade out.
            var exitTransition = exit.transition()
                .duration(duration)
                .style("opacity", 1e-6)
                .remove();

            // Transition exiting bars to the new x-scale.
            exitTransition.selectAll("rect")
                .attr("width", function (d) { return x(d.value); });

            // Rebind the current node to the background.
            svg.select(".background")
                .datum(d)
                .transition()
                .duration(end);

            d.index = i;
        }

        function up(d) {
            if (!d.parent || this.__transition__) return;
            var end = duration + d.children.length * delay;

            // Mark any currently-displayed bars as exiting.
            var exit = svg.selectAll(".enter")
                .attr("class", "exit");

            // Enter the new bars for the clicked-on data's parent.
            var enter = bar(d.parent)
                .attr("transform", function (d, i) { return "translate(0," + barHeight * i * 1.2 + ")"; })
                .style("opacity", 1e-6);

            // Color the bars as appropriate.
            // Exiting nodes will obscure the parent bar, so hide it.
            enter.select("rect")
                .style("fill", function (d) { return color(!!d.children); })
                .filter(function (p) { return p === d; })
                .style("fill-opacity", 1e-6);

            // Update the x-scale domain.
            x.domain([0, d3.max(d.parent.children, function (d) { return d.value; })]).nice();

            // Update the x-axis.
            svg.selectAll(".x.axis").transition()
                .duration(duration)
                .call(xAxis);

            // Transition entering bars to fade in over the full duration.
            var enterTransition = enter.transition()
                .duration(end)
                .style("opacity", 1);

            // Transition entering rects to the new x-scale.
            // When the entering parent rect is done, make it visible!
            enterTransition.select("rect")
                .attr("width", function (d) { return x(d.value); })
                .each("end", function (p) { if (p === d) d3.select(this).style("fill-opacity", null); });

            // Transition exiting bars to the parent's position.
            var exitTransition = exit.selectAll("g").transition()
                .duration(duration)
                .delay(function (d, i) { return i * delay; })
                .attr("transform", stack(d.index));

            // Transition exiting text to fade out.
            exitTransition.select("text")
                .style("fill-opacity", 1e-6);

            // Transition exiting rects to the new scale and fade to parent color.
            exitTransition.select("rect")
                .attr("width", function (d) { return x(d.value); })
                .style("fill", color(true));

            // Remove exiting nodes when the last child has finished transitioning.
            exit.transition()
                .duration(end)
                .remove();

            // Rebind the current parent to the background.
            svg.select(".background")
                .datum(d.parent)
                .transition()
                .duration(end);
        }

        // Creates a set of bars for the given data node, at the specified index.
        function bar(d) {
            var bar = svg.insert("g", ".y.axis")
                .attr("class", "enter")
                .attr("transform", "translate(0,5)")
                .selectAll("g")
                .data(d.children)
                .enter().append("g")
                .style("cursor", function (d) { return !d.children ? null : "pointer"; })
                .on("click", down);

            bar.append("text")
                .attr("x", -6)
                .attr("y", barHeight / 2)
                .attr("dy", ".35em")
                .style("text-anchor", "end")
                .text(function (d) { return d.name; });

            bar.append("rect")
                .attr("width", function (d) { return x(d.value); })
                .attr("height", barHeight);
            // debugger;
            typeof bar;
            return bar;
        }

        // A stateful closure for stacking bars horizontally.
        function stack(i) {
            // debugger;

            //  $('#back').css('visibility', 'visible');


            var x0 = 0;
            return function (d) {
                var tx = "translate(" + x0 + "," + barHeight * i * 1.2 + ")";
                x0 += x(d.value);
                return tx;
            };
        }

       // $('#chartdiv').append('<div id="back" onclick="back()" style="visibility: hidden"><input type="button" value="Back"/></div>');
        //$('#back').attr('onclick', 'back()');

        function back() {
            alert("jgv");
            //debugger;
            arrayOfObject.pop();
            var d = arrayOfObject.pop();
              alert(arrayOfObject.length);
            down(d, 0);
        }

       
    });
});

$('#b9').on('click', function () {
    $('#chartdiv').html("");
    alert("button 9");
    //---Heirarichal Bar Chart---
    //$(function () {
    //     var myjson =  JSON.stringify([
    //        { "name": "flare.analytics.cluster.AgglomerativeCluster", "size": 3938, "imports": ["flare.animate.Transitioner", "flare.vis.data.DataList", "flare.util.math.IMatrix", "flare.analytics.cluster.MergeEdge", "flare.analytics.cluster.HierarchicalCluster", "flare.vis.data.Data"] },
    //        { "name": "flare.analytics.cluster.CommunityStructure", "size": 3812, "imports": ["flare.analytics.cluster.HierarchicalCluster", "flare.animate.Transitioner", "flare.vis.data.DataList", "flare.analytics.cluster.MergeEdge", "flare.util.math.IMatrix"] },
    //        { "name": "flare.analytics.cluster.HierarchicalCluster", "size": 6714, "imports": ["flare.vis.data.EdgeSprite", "flare.vis.data.NodeSprite", "flare.vis.data.DataList", "flare.vis.data.Tree", "flare.util.Arrays", "flare.analytics.cluster.MergeEdge", "flare.util.Sort", "flare.vis.operator.Operator", "flare.util.Property", "flare.vis.data.Data"] },
    //        { "name": "flare.analytics.cluster.MergeEdge", "size": 743, "imports": [] },
    //        { "name": "flare.analytics.graph.BetweennessCentrality", "size": 3534, "imports": ["flare.animate.Transitioner", "flare.vis.data.NodeSprite", "flare.vis.data.DataList", "flare.util.Arrays", "flare.vis.data.Data", "flare.util.Property", "flare.vis.operator.Operator"] },
    //        { "name": "flare.analytics.graph.LinkDistance", "size": 5731, "imports": ["flare.animate.Transitioner", "flare.vis.data.NodeSprite", "flare.vis.data.EdgeSprite", "flare.analytics.graph.ShortestPaths", "flare.vis.data.Data", "flare.util.Property", "flare.vis.operator.Operator"] },
    //        { "name": "flare.analytics.graph.MaxFlowMinCut", "size": 7840, "imports": ["flare.animate.Transitioner", "flare.vis.data.NodeSprite", "flare.vis.data.EdgeSprite", "flare.vis.data.Data", "flare.util.Property", "flare.vis.operator.Operator"] },
    //        { "name": "flare.analytics.graph.ShortestPaths", "size": 5914, "imports": ["flare.vis.data.EdgeSprite", "flare.vis.data.NodeSprite", "flare.animate.Transitioner", "flare.vis.operator.Operator", "flare.util.heap.HeapNode", "flare.util.heap.FibonacciHeap", "flare.util.Property", "flare.vis.data.Data"] },
    //        { "name": "flare.analytics.graph.SpanningTree", "size": 3416, "imports": ["flare.animate.Transitioner", "flare.vis.data.NodeSprite", "flare.vis.operator.IOperator", "flare.vis.Visualization", "flare.vis.data.TreeBuilder", "flare.vis.operator.Operator"] },
    //        { "name": "flare.analytics.optimization.AspectRatioBanker", "size": 7074, "imports": ["flare.animate.Transitioner", "flare.util.Arrays", "flare.vis.data.DataSprite", "flare.scale.Scale", "flare.vis.axis.CartesianAxes", "flare.vis.Visualization", "flare.util.Property", "flare.vis.operator.Operator"] },
    //        { "name": "flare.animate.Easing", "size": 17010, "imports": ["flare.animate.Transition"] },
    //        { "name": "flare.animate.FunctionSequence", "size": 5842, "imports": ["flare.util.Maths", "flare.animate.Transition", "flare.util.Arrays", "flare.animate.Sequence", "flare.animate.Transitioner"] },
    //        { "name": "flare.animate.interpolate.ArrayInterpolator", "size": 1983, "imports": ["flare.util.Arrays", "flare.animate.interpolate.Interpolator"] },
    //        { "name": "flare.animate.interpolate.ColorInterpolator", "size": 2047, "imports": ["flare.animate.interpolate.Interpolator"] },
    //        { "name": "flare.animate.interpolate.DateInterpolator", "size": 1375, "imports": ["flare.animate.interpolate.Interpolator"] },
    //        { "name": "flare.animate.interpolate.Interpolator", "size": 8746, "imports": ["flare.animate.interpolate.NumberInterpolator", "flare.animate.interpolate.ColorInterpolator", "flare.animate.interpolate.PointInterpolator", "flare.animate.interpolate.ObjectInterpolator", "flare.animate.interpolate.MatrixInterpolator", "flare.animate.interpolate.RectangleInterpolator", "flare.animate.interpolate.DateInterpolator", "flare.util.Property", "flare.animate.interpolate.ArrayInterpolator"] },
    //        { "name": "flare.animate.interpolate.MatrixInterpolator", "size": 2202, "imports": ["flare.animate.interpolate.Interpolator"] },
    //        { "name": "flare.animate.interpolate.NumberInterpolator", "size": 1382, "imports": ["flare.animate.interpolate.Interpolator"] },
    //        { "name": "flare.animate.interpolate.ObjectInterpolator", "size": 1629, "imports": ["flare.animate.interpolate.Interpolator"] },
    //        { "name": "flare.animate.interpolate.PointInterpolator", "size": 1675, "imports": ["flare.animate.interpolate.Interpolator"] },
    //        { "name": "flare.animate.interpolate.RectangleInterpolator", "size": 2042, "imports": ["flare.animate.interpolate.Interpolator"] },
    //        { "name": "flare.animate.ISchedulable", "size": 1041, "imports": ["flare.animate.Scheduler"] },
    //        { "name": "flare.animate.Parallel", "size": 5176, "imports": ["flare.animate.Easing", "flare.animate.Transition", "flare.util.Arrays"] },
    //        { "name": "flare.animate.Pause", "size": 449, "imports": ["flare.animate.Transition"] },
    //        { "name": "flare.animate.Scheduler", "size": 5593, "imports": ["flare.animate.ISchedulable", "flare.animate.Pause", "flare.animate.Transition"] },
    //        { "name": "flare.animate.Sequence", "size": 5534, "imports": ["flare.animate.Easing", "flare.util.Maths", "flare.animate.Transition", "flare.util.Arrays"] },
    //        { "name": "flare.animate.Transition", "size": 9201, "imports": ["flare.animate.Transitioner", "flare.animate.TransitionEvent", "flare.animate.Scheduler", "flare.animate.Pause", "flare.animate.Parallel", "flare.animate.Easing", "flare.animate.Sequence", "flare.animate.ISchedulable", "flare.util.Maths", "flare.animate.Tween"] },
    //        { "name": "flare.animate.Transitioner", "size": 19975, "imports": ["flare.util.IValueProxy", "flare.animate.Parallel", "flare.animate.Easing", "flare.animate.Sequence", "flare.animate.Transition", "flare.animate.Tween", "flare.util.Property"] },
    //        { "name": "flare.animate.TransitionEvent", "size": 1116, "imports": ["flare.animate.Transition"] },
    //        { "name": "flare.animate.Tween", "size": 6006, "imports": ["flare.animate.Transitioner", "flare.animate.Transition", "flare.animate.interpolate.Interpolator", "flare.util.Property"] },
    //        { "name": "flare.data.converters.Converters", "size": 721, "imports": ["flare.data.converters.IDataConverter", "flare.data.converters.GraphMLConverter", "flare.data.converters.JSONConverter", "flare.data.converters.DelimitedTextConverter"] },
    //        { "name": "flare.data.converters.DelimitedTextConverter", "size": 4294, "imports": ["flare.data.DataSet", "flare.data.DataUtil", "flare.data.DataTable", "flare.data.converters.IDataConverter", "flare.data.DataSchema", "flare.data.DataField"] },
    //        { "name": "flare.data.converters.GraphMLConverter", "size": 9800, "imports": ["flare.data.DataSet", "flare.data.DataUtil", "flare.data.DataTable", "flare.data.converters.IDataConverter", "flare.data.DataSchema", "flare.data.DataField"] },
    //        { "name": "flare.data.converters.IDataConverter", "size": 1314, "imports": ["flare.data.DataSet", "flare.data.DataSchema"] },
    //        { "name": "flare.data.converters.JSONConverter", "size": 2220, "imports": ["flare.data.DataSet", "flare.data.DataUtil", "flare.data.DataTable", "flare.data.converters.IDataConverter", "flare.data.DataSchema", "flare.data.DataField", "flare.util.Property"] },
    //        { "name": "flare.data.DataField", "size": 1759, "imports": ["flare.data.DataUtil"] },
    //        { "name": "flare.data.DataSchema", "size": 2165, "imports": ["flare.data.DataField", "flare.util.Arrays"] },
    //        { "name": "flare.data.DataSet", "size": 586, "imports": ["flare.data.DataTable"] },
    //        { "name": "flare.data.DataSource", "size": 3331, "imports": ["flare.data.converters.IDataConverter", "flare.data.converters.Converters", "flare.data.DataSchema"] },
    //        { "name": "flare.data.DataTable", "size": 772, "imports": ["flare.data.DataSchema"] },
    //        { "name": "flare.data.DataUtil", "size": 3322, "imports": ["flare.data.DataField", "flare.data.DataSchema"] },
    //        { "name": "flare.display.DirtySprite", "size": 8833, "imports": [] },
    //        { "name": "flare.display.LineSprite", "size": 1732, "imports": ["flare.display.DirtySprite"] },
    //        { "name": "flare.display.RectSprite", "size": 3623, "imports": ["flare.util.Colors", "flare.display.DirtySprite"] },
    //        { "name": "flare.display.TextSprite", "size": 10066, "imports": ["flare.display.DirtySprite"] },
    //        { "name": "flare.flex.FlareVis", "size": 4116, "imports": ["flare.display.DirtySprite", "flare.data.DataSet", "flare.vis.Visualization", "flare.vis.axis.CartesianAxes", "flare.vis.axis.Axes", "flare.vis.data.Data"] },
    //        { "name": "flare.physics.DragForce", "size": 1082, "imports": ["flare.physics.Simulation", "flare.physics.Particle", "flare.physics.IForce"] },
    //        { "name": "flare.physics.GravityForce", "size": 1336, "imports": ["flare.physics.Simulation", "flare.physics.Particle", "flare.physics.IForce"] },
    //        { "name": "flare.physics.IForce", "size": 319, "imports": ["flare.physics.Simulation"] },
    //        { "name": "flare.physics.NBodyForce", "size": 10498, "imports": ["flare.physics.Simulation", "flare.physics.Particle", "flare.physics.IForce"] },
    //        { "name": "flare.physics.Particle", "size": 2822, "imports": [] },
    //        { "name": "flare.physics.Simulation", "size": 9983, "imports": ["flare.physics.Particle", "flare.physics.NBodyForce", "flare.physics.DragForce", "flare.physics.GravityForce", "flare.physics.Spring", "flare.physics.SpringForce", "flare.physics.IForce"] },
    //        { "name": "flare.physics.Spring", "size": 2213, "imports": ["flare.physics.Particle"] },
    //        { "name": "flare.physics.SpringForce", "size": 1681, "imports": ["flare.physics.Simulation", "flare.physics.Particle", "flare.physics.Spring", "flare.physics.IForce"] },
    //        { "name": "flare.query.AggregateExpression", "size": 1616, "imports": ["flare.query.Expression"] },
    //        { "name": "flare.query.And", "size": 1027, "imports": ["flare.query.CompositeExpression", "flare.query.Expression"] },
    //        { "name": "flare.query.Arithmetic", "size": 3891, "imports": ["flare.query.BinaryExpression", "flare.query.Expression"] },
    //        { "name": "flare.query.Average", "size": 891, "imports": ["flare.query.Expression", "flare.query.AggregateExpression"] },
    //        { "name": "flare.query.BinaryExpression", "size": 2893, "imports": ["flare.query.Expression"] },
    //        { "name": "flare.query.Comparison", "size": 5103, "imports": ["flare.query.Not", "flare.query.BinaryExpression", "flare.query.Expression", "flare.query.Or"] },
    //        { "name": "flare.query.CompositeExpression", "size": 3677, "imports": ["flare.query.Expression", "flare.query.If"] },
    //        { "name": "flare.query.Count", "size": 781, "imports": ["flare.query.Expression", "flare.query.AggregateExpression"] },
    //        { "name": "flare.query.DateUtil", "size": 4141, "imports": ["flare.query.Fn"] },
    //        { "name": "flare.query.Distinct", "size": 933, "imports": ["flare.query.Expression", "flare.query.AggregateExpression"] },
    //        { "name": "flare.query.Expression", "size": 5130, "imports": ["flare.query.Variable", "flare.query.IsA", "flare.query.ExpressionIterator", "flare.util.IPredicate", "flare.query.Literal", "flare.util.IEvaluable", "flare.query.If"] },
    //        { "name": "flare.query.ExpressionIterator", "size": 3617, "imports": ["flare.query.Expression"] },
    //        { "name": "flare.query.Fn", "size": 3240, "imports": ["flare.query.DateUtil", "flare.query.CompositeExpression", "flare.query.Expression", "flare.query.StringUtil"] },
    //        { "name": "flare.query.If", "size": 2732, "imports": ["flare.query.Expression"] },
    //        { "name": "flare.query.IsA", "size": 2039, "imports": ["flare.query.Expression", "flare.query.If"] },
    //        { "name": "flare.query.Literal", "size": 1214, "imports": ["flare.query.Expression"] },
    //        { "name": "flare.query.Match", "size": 3748, "imports": ["flare.query.BinaryExpression", "flare.query.Expression", "flare.query.StringUtil"] },
    //        { "name": "flare.query.Maximum", "size": 843, "imports": ["flare.query.Expression", "flare.query.AggregateExpression"] },
    //        { "name": "flare.query.methods.add", "size": 593, "imports": ["flare.query.methods.or", "flare.query.Arithmetic"] },
    //        { "name": "flare.query.methods.and", "size": 330, "imports": ["flare.query.And", "flare.query.methods.or"] },
    //        { "name": "flare.query.methods.average", "size": 287, "imports": ["flare.query.Average", "flare.query.methods.or"] },
    //        { "name": "flare.query.methods.count", "size": 277, "imports": ["flare.query.Count", "flare.query.methods.or"] },
    //        { "name": "flare.query.methods.distinct", "size": 292, "imports": ["flare.query.Distinct", "flare.query.methods.or"] },
    //        { "name": "flare.query.methods.div", "size": 595, "imports": ["flare.query.methods.or", "flare.query.Arithmetic"] },
    //        { "name": "flare.query.methods.eq", "size": 594, "imports": ["flare.query.Comparison", "flare.query.methods.or"] },
    //        { "name": "flare.query.methods.fn", "size": 460, "imports": ["flare.query.methods.or", "flare.query.Fn"] },
    //        { "name": "flare.query.methods.gt", "size": 603, "imports": ["flare.query.Comparison", "flare.query.methods.or"] },
    //        { "name": "flare.query.methods.gte", "size": 625, "imports": ["flare.query.Comparison", "flare.query.methods.gt", "flare.query.methods.eq", "flare.query.methods.or"] },
    //        { "name": "flare.query.methods.iff", "size": 748, "imports": ["flare.query.methods.or", "flare.query.If"] },
    //        { "name": "flare.query.methods.isa", "size": 461, "imports": ["flare.query.IsA", "flare.query.methods.or"] },
    //        { "name": "flare.query.methods.lt", "size": 597, "imports": ["flare.query.Comparison", "flare.query.methods.or"] },
    //        { "name": "flare.query.methods.lte", "size": 619, "imports": ["flare.query.Comparison", "flare.query.methods.lt", "flare.query.methods.eq", "flare.query.methods.or"] },
    //        { "name": "flare.query.methods.max", "size": 283, "imports": ["flare.query.Maximum", "flare.query.methods.or"] },
    //        { "name": "flare.query.methods.min", "size": 283, "imports": ["flare.query.Minimum", "flare.query.methods.or"] },
    //        { "name": "flare.query.methods.mod", "size": 591, "imports": ["flare.query.methods.or", "flare.query.Arithmetic"] },
    //        { "name": "flare.query.methods.mul", "size": 603, "imports": ["flare.query.methods.lt", "flare.query.methods.or", "flare.query.Arithmetic"] },
    //        { "name": "flare.query.methods.neq", "size": 599, "imports": ["flare.query.Comparison", "flare.query.methods.eq", "flare.query.methods.or"] },
    //        { "name": "flare.query.methods.not", "size": 386, "imports": ["flare.query.Not", "flare.query.methods.or"] },
    //        { "name": "flare.query.methods.or", "size": 323, "imports": ["flare.query.Or"] },
    //        { "name": "flare.query.methods.orderby", "size": 307, "imports": ["flare.query.Query", "flare.query.methods.or"] },
    //        { "name": "flare.query.methods.range", "size": 772, "imports": ["flare.query.methods.max", "flare.query.Range", "flare.query.methods.or", "flare.query.methods.min"] },
    //        { "name": "flare.query.methods.select", "size": 296, "imports": ["flare.query.Query"] },
    //        { "name": "flare.query.methods.stddev", "size": 363, "imports": ["flare.query.methods.and", "flare.query.Variance", "flare.query.methods.or"] },
    //        { "name": "flare.query.methods.sub", "size": 600, "imports": ["flare.query.methods.or", "flare.query.Arithmetic"] },
    //        { "name": "flare.query.methods.sum", "size": 280, "imports": ["flare.query.Sum", "flare.query.methods.or"] },
    //        { "name": "flare.query.methods.update", "size": 307, "imports": ["flare.query.Query"] },
    //        { "name": "flare.query.methods.variance", "size": 335, "imports": ["flare.query.Variance", "flare.query.methods.or"] },
    //        { "name": "flare.query.methods.where", "size": 299, "imports": ["flare.query.Query", "flare.query.methods.lt", "flare.query.methods.lte"] },
    //        { "name": "flare.query.methods.xor", "size": 354, "imports": ["flare.query.Xor", "flare.query.methods.or"] },
    //        { "name": "flare.query.methods._", "size": 264, "imports": ["flare.query.Literal", "flare.query.methods.or"] },
    //        { "name": "flare.query.Minimum", "size": 843, "imports": ["flare.query.Expression", "flare.query.AggregateExpression"] },
    //        { "name": "flare.query.Not", "size": 1554, "imports": ["flare.query.Expression"] },
    //        { "name": "flare.query.Or", "size": 970, "imports": ["flare.query.CompositeExpression", "flare.query.Expression"] },
    //        { "name": "flare.query.Query", "size": 13896, "imports": ["flare.query.Variable", "flare.query.Sum", "flare.query.Expression", "flare.util.Sort", "flare.query.Not", "flare.query.AggregateExpression", "flare.query.Literal", "flare.util.Filter", "flare.util.Property", "flare.query.If"] },
    //        { "name": "flare.query.Range", "size": 1594, "imports": ["flare.query.And", "flare.query.Comparison", "flare.query.Expression"] },
    //        { "name": "flare.query.StringUtil", "size": 4130, "imports": ["flare.query.Fn"] },
    //        { "name": "flare.query.Sum", "size": 791, "imports": ["flare.query.Expression", "flare.query.AggregateExpression"] },
    //        { "name": "flare.query.Variable", "size": 1124, "imports": ["flare.query.Expression", "flare.util.Property"] },
    //        { "name": "flare.query.Variance", "size": 1876, "imports": ["flare.query.Expression", "flare.query.AggregateExpression"] },
    //        { "name": "flare.query.Xor", "size": 1101, "imports": ["flare.query.CompositeExpression", "flare.query.Expression"] },
    //        { "name": "flare.scale.IScaleMap", "size": 2105, "imports": ["flare.scale.Scale"] },
    //        { "name": "flare.scale.LinearScale", "size": 1316, "imports": ["flare.util.Maths", "flare.util.Strings", "flare.scale.Scale", "flare.scale.QuantitativeScale", "flare.scale.ScaleType"] },
    //        { "name": "flare.scale.LogScale", "size": 3151, "imports": ["flare.util.Maths", "flare.util.Strings", "flare.scale.Scale", "flare.scale.QuantitativeScale", "flare.scale.ScaleType"] },
    //        { "name": "flare.scale.OrdinalScale", "size": 3770, "imports": ["flare.scale.ScaleType", "flare.util.Arrays", "flare.scale.Scale"] },
    //        { "name": "flare.scale.QuantileScale", "size": 2435, "imports": ["flare.util.Maths", "flare.util.Strings", "flare.scale.Scale", "flare.scale.ScaleType"] },
    //        { "name": "flare.scale.QuantitativeScale", "size": 4839, "imports": ["flare.util.Maths", "flare.util.Strings", "flare.scale.Scale"] },
    //        { "name": "flare.scale.RootScale", "size": 1756, "imports": ["flare.util.Maths", "flare.util.Strings", "flare.scale.Scale", "flare.scale.QuantitativeScale", "flare.scale.ScaleType"] },
    //        { "name": "flare.scale.Scale", "size": 4268, "imports": ["flare.scale.ScaleType", "flare.util.Strings"] },
    //        { "name": "flare.scale.ScaleType", "size": 1821, "imports": ["flare.scale.Scale"] },
    //        { "name": "flare.scale.TimeScale", "size": 5833, "imports": ["flare.util.Maths", "flare.util.Dates", "flare.scale.Scale", "flare.scale.ScaleType"] },
    //        { "name": "flare.util.Arrays", "size": 8258, "imports": ["flare.util.IValueProxy", "flare.util.Property", "flare.util.IEvaluable"] },
    //        { "name": "flare.util.Colors", "size": 10001, "imports": ["flare.util.Filter"] },
    //        { "name": "flare.util.Dates", "size": 8217, "imports": ["flare.util.Maths"] },
    //        { "name": "flare.util.Displays", "size": 12555, "imports": ["flare.util.IValueProxy", "flare.util.Filter", "flare.util.Property", "flare.util.IEvaluable", "flare.util.Sort"] },
    //        { "name": "flare.util.Filter", "size": 2324, "imports": ["flare.util.IPredicate", "flare.util.Property"] },
    //        { "name": "flare.util.Geometry", "size": 10993, "imports": [] },
    //        { "name": "flare.util.heap.FibonacciHeap", "size": 9354, "imports": ["flare.util.heap.HeapNode"] },
    //        { "name": "flare.util.heap.HeapNode", "size": 1233, "imports": ["flare.util.heap.FibonacciHeap"] },
    //        { "name": "flare.util.IEvaluable", "size": 335, "imports": [] },
    //        { "name": "flare.util.IPredicate", "size": 383, "imports": [] },
    //        { "name": "flare.util.IValueProxy", "size": 874, "imports": [] },
    //        { "name": "flare.util.math.DenseMatrix", "size": 3165, "imports": ["flare.util.math.IMatrix"] },
    //        { "name": "flare.util.math.IMatrix", "size": 2815, "imports": [] },
    //        { "name": "flare.util.math.SparseMatrix", "size": 3366, "imports": ["flare.util.math.IMatrix"] },
    //        { "name": "flare.util.Maths", "size": 17705, "imports": ["flare.util.Arrays"] },
    //        { "name": "flare.util.Orientation", "size": 1486, "imports": [] },
    //        { "name": "flare.util.palette.ColorPalette", "size": 6367, "imports": ["flare.util.palette.Palette", "flare.util.Colors"] },
    //        { "name": "flare.util.palette.Palette", "size": 1229, "imports": [] },
    //        { "name": "flare.util.palette.ShapePalette", "size": 2059, "imports": ["flare.util.palette.Palette", "flare.util.Shapes"] },
    //        { "name": "flare.util.palette.SizePalette", "size": 2291, "imports": ["flare.util.palette.Palette"] },
    //        { "name": "flare.util.Property", "size": 5559, "imports": ["flare.util.IPredicate", "flare.util.IValueProxy", "flare.util.IEvaluable"] },
    //        { "name": "flare.util.Shapes", "size": 19118, "imports": ["flare.util.Arrays"] },
    //        { "name": "flare.util.Sort", "size": 6887, "imports": ["flare.util.Arrays", "flare.util.Property"] },
    //        { "name": "flare.util.Stats", "size": 6557, "imports": ["flare.util.Arrays", "flare.util.Property"] },
    //        { "name": "flare.util.Strings", "size": 22026, "imports": ["flare.util.Dates", "flare.util.Property"] },
    //        { "name": "flare.vis.axis.Axes", "size": 1302, "imports": ["flare.animate.Transitioner", "flare.vis.Visualization"] },
    //        { "name": "flare.vis.axis.Axis", "size": 24593, "imports": ["flare.animate.Transitioner", "flare.scale.LinearScale", "flare.util.Arrays", "flare.scale.ScaleType", "flare.util.Strings", "flare.display.TextSprite", "flare.scale.Scale", "flare.util.Stats", "flare.scale.IScaleMap", "flare.vis.axis.AxisLabel", "flare.vis.axis.AxisGridLine"] },
    //        { "name": "flare.vis.axis.AxisGridLine", "size": 652, "imports": ["flare.vis.axis.Axis", "flare.display.LineSprite"] },
    //        { "name": "flare.vis.axis.AxisLabel", "size": 636, "imports": ["flare.vis.axis.Axis", "flare.display.TextSprite"] },
    //        { "name": "flare.vis.axis.CartesianAxes", "size": 6703, "imports": ["flare.animate.Transitioner", "flare.display.RectSprite", "flare.vis.axis.Axis", "flare.display.TextSprite", "flare.vis.axis.Axes", "flare.vis.Visualization", "flare.vis.axis.AxisGridLine"] },
    //        { "name": "flare.vis.controls.AnchorControl", "size": 2138, "imports": ["flare.vis.controls.Control", "flare.vis.Visualization", "flare.vis.operator.layout.Layout"] },
    //        { "name": "flare.vis.controls.ClickControl", "size": 3824, "imports": ["flare.vis.events.SelectionEvent", "flare.vis.controls.Control"] },
    //        { "name": "flare.vis.controls.Control", "size": 1353, "imports": ["flare.vis.controls.IControl", "flare.util.Filter"] },
    //        { "name": "flare.vis.controls.ControlList", "size": 4665, "imports": ["flare.vis.controls.IControl", "flare.util.Arrays", "flare.vis.Visualization", "flare.vis.controls.Control"] },
    //        { "name": "flare.vis.controls.DragControl", "size": 2649, "imports": ["flare.vis.controls.Control", "flare.vis.data.DataSprite"] },
    //        { "name": "flare.vis.controls.ExpandControl", "size": 2832, "imports": ["flare.animate.Transitioner", "flare.vis.data.NodeSprite", "flare.vis.controls.Control", "flare.vis.Visualization"] },
    //        { "name": "flare.vis.controls.HoverControl", "size": 4896, "imports": ["flare.vis.events.SelectionEvent", "flare.vis.controls.Control"] },
    //        { "name": "flare.vis.controls.IControl", "size": 763, "imports": ["flare.vis.controls.Control"] },
    //        { "name": "flare.vis.controls.PanZoomControl", "size": 5222, "imports": ["flare.util.Displays", "flare.vis.controls.Control"] },
    //        { "name": "flare.vis.controls.SelectionControl", "size": 7862, "imports": ["flare.vis.events.SelectionEvent", "flare.vis.controls.Control"] },
    //        { "name": "flare.vis.controls.TooltipControl", "size": 8435, "imports": ["flare.animate.Tween", "flare.display.TextSprite", "flare.vis.controls.Control", "flare.vis.events.TooltipEvent"] },
    //        { "name": "flare.vis.data.Data", "size": 20544, "imports": ["flare.vis.data.EdgeSprite", "flare.vis.data.NodeSprite", "flare.util.Arrays", "flare.vis.data.DataSprite", "flare.vis.data.Tree", "flare.vis.events.DataEvent", "flare.data.DataSet", "flare.vis.data.TreeBuilder", "flare.vis.data.DataList", "flare.data.DataSchema", "flare.util.Sort", "flare.data.DataField", "flare.util.Property"] },
    //        { "name": "flare.vis.data.DataList", "size": 19788, "imports": ["flare.animate.Transitioner", "flare.vis.data.NodeSprite", "flare.util.Arrays", "flare.util.math.DenseMatrix", "flare.vis.data.DataSprite", "flare.vis.data.EdgeSprite", "flare.vis.events.DataEvent", "flare.util.Stats", "flare.util.math.IMatrix", "flare.util.Sort", "flare.util.Filter", "flare.util.Property", "flare.util.IEvaluable", "flare.vis.data.Data"] },
    //        { "name": "flare.vis.data.DataSprite", "size": 10349, "imports": ["flare.util.Colors", "flare.vis.data.Data", "flare.display.DirtySprite", "flare.vis.data.render.IRenderer", "flare.vis.data.render.ShapeRenderer"] },
    //        { "name": "flare.vis.data.EdgeSprite", "size": 3301, "imports": ["flare.vis.data.render.EdgeRenderer", "flare.vis.data.DataSprite", "flare.vis.data.NodeSprite", "flare.vis.data.render.ArrowType", "flare.vis.data.Data"] },
    //        { "name": "flare.vis.data.NodeSprite", "size": 19382, "imports": ["flare.animate.Transitioner", "flare.util.Arrays", "flare.vis.data.DataSprite", "flare.vis.data.EdgeSprite", "flare.vis.data.Tree", "flare.util.Sort", "flare.util.Filter", "flare.util.IEvaluable", "flare.vis.data.Data"] },
    //        { "name": "flare.vis.data.render.ArrowType", "size": 698, "imports": [] },
    //        { "name": "flare.vis.data.render.EdgeRenderer", "size": 5569, "imports": ["flare.vis.data.EdgeSprite", "flare.vis.data.NodeSprite", "flare.vis.data.DataSprite", "flare.vis.data.render.IRenderer", "flare.util.Shapes", "flare.util.Geometry", "flare.vis.data.render.ArrowType"] },
    //        { "name": "flare.vis.data.render.IRenderer", "size": 353, "imports": ["flare.vis.data.DataSprite"] },
    //        { "name": "flare.vis.data.render.ShapeRenderer", "size": 2247, "imports": ["flare.util.Shapes", "flare.vis.data.render.IRenderer", "flare.vis.data.DataSprite"] },
    //        { "name": "flare.vis.data.ScaleBinding", "size": 11275, "imports": ["flare.scale.TimeScale", "flare.scale.ScaleType", "flare.scale.LinearScale", "flare.scale.LogScale", "flare.scale.OrdinalScale", "flare.scale.RootScale", "flare.scale.Scale", "flare.scale.QuantileScale", "flare.util.Stats", "flare.scale.QuantitativeScale", "flare.vis.events.DataEvent", "flare.vis.data.Data"] },
    //        { "name": "flare.vis.data.Tree", "size": 7147, "imports": ["flare.vis.data.EdgeSprite", "flare.vis.events.DataEvent", "flare.vis.data.NodeSprite", "flare.vis.data.Data"] },
    //        { "name": "flare.vis.data.TreeBuilder", "size": 9930, "imports": ["flare.vis.data.EdgeSprite", "flare.vis.data.NodeSprite", "flare.vis.data.Tree", "flare.util.heap.HeapNode", "flare.util.heap.FibonacciHeap", "flare.util.Property", "flare.util.IEvaluable", "flare.vis.data.Data"] },
    //        { "name": "flare.vis.events.DataEvent", "size": 2313, "imports": ["flare.vis.data.EdgeSprite", "flare.vis.data.NodeSprite", "flare.vis.data.DataList", "flare.vis.data.DataSprite"] },
    //        { "name": "flare.vis.events.SelectionEvent", "size": 1880, "imports": ["flare.vis.events.DataEvent"] },
    //        { "name": "flare.vis.events.TooltipEvent", "size": 1701, "imports": ["flare.vis.data.EdgeSprite", "flare.vis.data.NodeSprite"] },
    //        { "name": "flare.vis.events.VisualizationEvent", "size": 1117, "imports": ["flare.animate.Transitioner"] },
    //        { "name": "flare.vis.legend.Legend", "size": 20859, "imports": ["flare.animate.Transitioner", "flare.vis.data.ScaleBinding", "flare.util.palette.SizePalette", "flare.scale.ScaleType", "flare.vis.legend.LegendItem", "flare.display.RectSprite", "flare.display.TextSprite", "flare.scale.Scale", "flare.vis.legend.LegendRange", "flare.util.Displays", "flare.util.Orientation", "flare.util.palette.ShapePalette", "flare.util.palette.Palette", "flare.util.palette.ColorPalette"] },
    //        { "name": "flare.vis.legend.LegendItem", "size": 4614, "imports": ["flare.util.Shapes", "flare.display.TextSprite", "flare.vis.legend.Legend", "flare.display.RectSprite"] },
    //        { "name": "flare.vis.legend.LegendRange", "size": 10530, "imports": ["flare.util.Colors", "flare.vis.legend.Legend", "flare.display.RectSprite", "flare.display.TextSprite", "flare.scale.Scale", "flare.util.Stats", "flare.scale.IScaleMap", "flare.util.Orientation", "flare.util.palette.ColorPalette"] },
    //        { "name": "flare.vis.operator.distortion.BifocalDistortion", "size": 4461, "imports": ["flare.vis.operator.distortion.Distortion"] },
    //        { "name": "flare.vis.operator.distortion.Distortion", "size": 6314, "imports": ["flare.animate.Transitioner", "flare.vis.data.DataSprite", "flare.vis.events.VisualizationEvent", "flare.vis.axis.Axis", "flare.vis.axis.CartesianAxes", "flare.vis.operator.layout.Layout", "flare.vis.data.Data"] },
    //        { "name": "flare.vis.operator.distortion.FisheyeDistortion", "size": 3444, "imports": ["flare.vis.operator.distortion.Distortion"] },
    //        { "name": "flare.vis.operator.encoder.ColorEncoder", "size": 3179, "imports": ["flare.animate.Transitioner", "flare.scale.ScaleType", "flare.vis.operator.encoder.Encoder", "flare.util.palette.Palette", "flare.util.palette.ColorPalette", "flare.vis.data.Data"] },
    //        { "name": "flare.vis.operator.encoder.Encoder", "size": 4060, "imports": ["flare.animate.Transitioner", "flare.vis.data.DataSprite", "flare.vis.operator.Operator", "flare.vis.data.ScaleBinding", "flare.util.palette.Palette", "flare.util.Filter", "flare.util.Property", "flare.vis.data.Data"] },
    //        { "name": "flare.vis.operator.encoder.PropertyEncoder", "size": 4138, "imports": ["flare.animate.Transitioner", "flare.vis.data.DataList", "flare.vis.data.Data", "flare.vis.operator.encoder.Encoder", "flare.util.Filter", "flare.vis.operator.Operator"] },
    //        { "name": "flare.vis.operator.encoder.ShapeEncoder", "size": 1690, "imports": ["flare.util.palette.Palette", "flare.scale.ScaleType", "flare.util.palette.ShapePalette", "flare.vis.operator.encoder.Encoder", "flare.vis.data.Data"] },
    //        { "name": "flare.vis.operator.encoder.SizeEncoder", "size": 1830, "imports": ["flare.util.palette.Palette", "flare.scale.ScaleType", "flare.vis.operator.encoder.Encoder", "flare.util.palette.SizePalette", "flare.vis.data.Data"] },
    //        { "name": "flare.vis.operator.filter.FisheyeTreeFilter", "size": 5219, "imports": ["flare.animate.Transitioner", "flare.vis.data.NodeSprite", "flare.vis.data.DataSprite", "flare.vis.data.EdgeSprite", "flare.vis.data.Tree", "flare.vis.operator.Operator", "flare.vis.data.Data"] },
    //        { "name": "flare.vis.operator.filter.GraphDistanceFilter", "size": 3165, "imports": ["flare.animate.Transitioner", "flare.vis.data.NodeSprite", "flare.vis.operator.Operator", "flare.vis.data.DataSprite", "flare.vis.data.EdgeSprite"] },
    //        { "name": "flare.vis.operator.filter.VisibilityFilter", "size": 3509, "imports": ["flare.vis.operator.Operator", "flare.animate.Transitioner", "flare.util.Filter", "flare.vis.data.DataSprite", "flare.vis.data.Data"] },
    //        { "name": "flare.vis.operator.IOperator", "size": 1286, "imports": ["flare.animate.Transitioner", "flare.vis.Visualization", "flare.vis.operator.Operator"] },
    //        { "name": "flare.vis.operator.label.Labeler", "size": 9956, "imports": ["flare.animate.Transitioner", "flare.vis.data.DataSprite", "flare.display.TextSprite", "flare.vis.operator.Operator", "flare.util.Shapes", "flare.util.Filter", "flare.util.Property", "flare.util.IEvaluable", "flare.vis.data.Data"] },
    //        { "name": "flare.vis.operator.label.RadialLabeler", "size": 3899, "imports": ["flare.vis.operator.label.Labeler", "flare.util.Shapes", "flare.display.TextSprite", "flare.vis.data.DataSprite", "flare.vis.data.Data"] },
    //        { "name": "flare.vis.operator.label.StackedAreaLabeler", "size": 3202, "imports": ["flare.vis.operator.label.Labeler", "flare.display.TextSprite", "flare.vis.data.DataSprite", "flare.vis.data.Data"] },
    //        { "name": "flare.vis.operator.layout.AxisLayout", "size": 6725, "imports": ["flare.scale.ScaleType", "flare.vis.data.DataSprite", "flare.vis.axis.CartesianAxes", "flare.vis.data.ScaleBinding", "flare.util.Property", "flare.vis.operator.layout.Layout", "flare.vis.data.Data"] },
    //        { "name": "flare.vis.operator.layout.BundledEdgeRouter", "size": 3727, "imports": ["flare.animate.Transitioner", "flare.vis.data.NodeSprite", "flare.util.Arrays", "flare.vis.data.DataSprite", "flare.vis.data.EdgeSprite", "flare.util.Shapes", "flare.vis.operator.layout.Layout", "flare.vis.operator.Operator"] },
    //        { "name": "flare.vis.operator.layout.CircleLayout", "size": 9317, "imports": ["flare.vis.data.NodeSprite", "flare.vis.data.DataList", "flare.vis.data.ScaleBinding", "flare.util.Property", "flare.vis.operator.layout.Layout", "flare.vis.data.Data"] },
    //        { "name": "flare.vis.operator.layout.CirclePackingLayout", "size": 12003, "imports": ["flare.vis.data.NodeSprite", "flare.vis.data.render.ShapeRenderer", "flare.util.Shapes", "flare.util.Sort", "flare.vis.operator.layout.Layout", "flare.vis.data.Data"] },
    //        { "name": "flare.vis.operator.layout.DendrogramLayout", "size": 4853, "imports": ["flare.util.Property", "flare.vis.data.NodeSprite", "flare.util.Orientation", "flare.vis.operator.layout.Layout", "flare.vis.data.EdgeSprite"] },
    //        { "name": "flare.vis.operator.layout.ForceDirectedLayout", "size": 8411, "imports": ["flare.physics.Simulation", "flare.animate.Transitioner", "flare.vis.data.NodeSprite", "flare.vis.data.DataSprite", "flare.physics.Particle", "flare.physics.Spring", "flare.vis.operator.layout.Layout", "flare.vis.data.EdgeSprite", "flare.vis.data.Data"] },
    //        { "name": "flare.vis.operator.layout.IcicleTreeLayout", "size": 4864, "imports": ["flare.vis.data.NodeSprite", "flare.util.Orientation", "flare.vis.operator.layout.Layout"] },
    //        { "name": "flare.vis.operator.layout.IndentedTreeLayout", "size": 3174, "imports": ["flare.animate.Transitioner", "flare.vis.data.NodeSprite", "flare.util.Arrays", "flare.vis.operator.layout.Layout", "flare.vis.data.EdgeSprite"] },
    //        { "name": "flare.vis.operator.layout.Layout", "size": 7881, "imports": ["flare.animate.Transitioner", "flare.vis.data.NodeSprite", "flare.vis.data.DataList", "flare.vis.data.DataSprite", "flare.vis.data.EdgeSprite", "flare.vis.Visualization", "flare.vis.axis.CartesianAxes", "flare.vis.axis.Axes", "flare.animate.TransitionEvent", "flare.vis.operator.Operator"] },
    //        { "name": "flare.vis.operator.layout.NodeLinkTreeLayout", "size": 12870, "imports": ["flare.vis.data.NodeSprite", "flare.util.Arrays", "flare.util.Orientation", "flare.vis.operator.layout.Layout"] },
    //        { "name": "flare.vis.operator.layout.PieLayout", "size": 2728, "imports": ["flare.vis.data.DataList", "flare.vis.data.DataSprite", "flare.util.Shapes", "flare.util.Property", "flare.vis.operator.layout.Layout", "flare.vis.data.Data"] },
    //        { "name": "flare.vis.operator.layout.RadialTreeLayout", "size": 12348, "imports": ["flare.vis.data.NodeSprite", "flare.util.Arrays", "flare.vis.operator.layout.Layout"] },
    //        { "name": "flare.vis.operator.layout.RandomLayout", "size": 870, "imports": ["flare.vis.operator.layout.Layout", "flare.vis.data.DataSprite", "flare.vis.data.Data"] },
    //        { "name": "flare.vis.operator.layout.StackedAreaLayout", "size": 9121, "imports": ["flare.scale.TimeScale", "flare.scale.LinearScale", "flare.util.Arrays", "flare.scale.OrdinalScale", "flare.vis.data.NodeSprite", "flare.scale.Scale", "flare.vis.axis.CartesianAxes", "flare.util.Stats", "flare.util.Orientation", "flare.scale.QuantitativeScale", "flare.util.Maths", "flare.vis.operator.layout.Layout"] },
    //        { "name": "flare.vis.operator.layout.TreeMapLayout", "size": 9191, "imports": ["flare.animate.Transitioner", "flare.vis.data.NodeSprite", "flare.util.Property", "flare.vis.operator.layout.Layout"] },
    //        { "name": "flare.vis.operator.Operator", "size": 2490, "imports": ["flare.animate.Transitioner", "flare.vis.operator.IOperator", "flare.util.Property", "flare.util.IEvaluable", "flare.vis.Visualization"] },
    //        { "name": "flare.vis.operator.OperatorList", "size": 5248, "imports": ["flare.animate.Transitioner", "flare.util.Arrays", "flare.vis.operator.IOperator", "flare.vis.Visualization", "flare.vis.operator.Operator"] },
    //        { "name": "flare.vis.operator.OperatorSequence", "size": 4190, "imports": ["flare.animate.Transitioner", "flare.util.Arrays", "flare.vis.operator.IOperator", "flare.vis.operator.OperatorList", "flare.animate.FunctionSequence", "flare.vis.operator.Operator"] },
    //        { "name": "flare.vis.operator.OperatorSwitch", "size": 2581, "imports": ["flare.animate.Transitioner", "flare.vis.operator.OperatorList", "flare.vis.operator.IOperator", "flare.vis.operator.Operator"] },
    //        { "name": "flare.vis.operator.SortOperator", "size": 2023, "imports": ["flare.vis.operator.Operator", "flare.animate.Transitioner", "flare.util.Arrays", "flare.vis.data.Data"] },
    //        { "name": "flare.vis.Visualization", "size": 16540, "imports": ["flare.animate.Transitioner", "flare.vis.operator.IOperator", "flare.animate.Scheduler", "flare.vis.events.VisualizationEvent", "flare.vis.data.Tree", "flare.vis.events.DataEvent", "flare.vis.axis.Axes", "flare.vis.axis.CartesianAxes", "flare.util.Displays", "flare.vis.operator.OperatorList", "flare.vis.controls.ControlList", "flare.animate.ISchedulable", "flare.vis.data.Data"] }
    //    ]);
    //    data = JSON.parse( myjson );


     
    //        var mpr = chordMpr(data);

    //        _.each(data, function(elem) {
    //            mpr.addToMap(name(elem.name));
    //        });

    //        mpr.setFilter(function (row, a, b) {
    //            return (name(row.name) === a.name)
    //        })
    //          .setAccessor(function (recs, a, b) {
    //              if (!recs[0]) return 0;
    //              var n = 0;
    //              _.each(recs, function (r) {
    //                  _.each(r.imports, function (i) {
    //                      if (name(i) === b.name) n++;
    //                  });
    //              });
    //              return n;
    //          });
    //        drawChords(mpr.getMatrix(), mpr.getMap());

    //    function name(name) {
    //        return name.substring(0, name.lastIndexOf(".")).substring(6);
    //    }
    //    //*******************************************************************
    //    //  DRAW THE CHORD DIAGRAM
    //    //*******************************************************************

      
    //    function drawChords(matrix, mmap) {
    //        var w = 980, h = 800, r1 = h / 2, r0 = r1 - 100;
    //        debugger;
    //        var fill = d3.scale.ordinal()
    //            .range(['#c7b570', '#c6cdc7', '#335c64', '#768935', '#507282', '#5c4a56', '#aa7455', '#574109', '#837722', '#73342d', '#0a5564', '#9c8f57', '#7895a4', '#4a5456', '#b0a690', '#0a3542', ]);

    //        var chord = d3.layout.chord()
    //            .padding(.04)
    //            .sortSubgroups(d3.descending)
    //            .sortChords(d3.descending);

    //        var arc = d3.svg.arc()
    //            .innerRadius(r0)
    //            .outerRadius(r0 + 20);

    //        var svg = d3.select("#chartdiv").append("svg")
    //            .attr("width", w)
    //            .attr("height", h)
    //          .append("svg:g")
    //            .attr("id", "circle")
    //            .attr("transform", "translate(" + w / 2 + "," + h / 2 + ")");

    //        svg.append("circle")
    //            .attr("r", r0 + 20);

    //        var rdr = chordRdr(matrix, mmap);
    //        chord.matrix(matrix);

    //        var g = svg.selectAll("g.group")
    //            .data(chord.groups())
    //          .enter().append("svg:g")
    //            .attr("class", "group")
    //            .on("mouseover", mouseover)
    //            .on("mouseout", function (d) { d3.select("#tooltip").style("visibility", "hidden") });

    //        g.append("svg:path")
    //            .style("stroke", "black")
    //            .style("fill", function (d) { return fill(rdr(d).gname); })
    //            .attr("d", arc);

    //        g.append("svg:text")
    //            .each(function (d) { d.angle = (d.startAngle + d.endAngle) / 2; })
    //            .attr("dy", ".35em")
    //            .style("font-family", "helvetica, arial, sans-serif")
    //            .style("font-size", "10px")
    //            .attr("text-anchor", function (d) { return d.angle > Math.PI ? "end" : null; })
    //            .attr("transform", function (d) {
    //                return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")"
    //                    + "translate(" + (r0 + 26) + ")"
    //                    + (d.angle > Math.PI ? "rotate(180)" : "");
    //            })
    //            .text(function (d) { return rdr(d).gname; });

    //        var chordPaths = svg.selectAll("path.chord")
    //              .data(chord.chords())
    //            .enter().append("svg:path")
    //              .attr("class", "chord")
    //              .style("stroke", function (d) { return d3.rgb(fill(rdr(d).sname)).darker(); })
    //              .style("fill", function (d) { return fill(rdr(d).sname); })
    //              .attr("d", d3.svg.chord().radius(r0))
    //              .on("mouseover", function (d) {
    //                  d3.select("#tooltip")
    //                    .style("visibility", "visible")
    //                    .html(chordTip(rdr(d)))
    //                    .style("top", function () { return (d3.event.pageY - 170) + "px" })
    //                    .style("left", function () { return (d3.event.pageX - 100) + "px"; })
    //              })
    //              .on("mouseout", function (d) { d3.select("#tooltip").style("visibility", "hidden") });

    //        function chordTip(d) {
    //            var p = d3.format(".1%"), q = d3.format(",.2r")
    //            return "Chord Info:<br/>"
    //              + d.sname + " → " + d.tname
    //              + ": " + q(d.svalue) + "<br/>"
    //              + p(d.svalue / d.stotal) + " of " + d.sname + "'s Total (" + q(d.stotal) + ")<br/>"
    //              + p(d.svalue / d.mtotal) + " of Matrix Total (" + q(d.mtotal) + ")<br/>"
    //              + "<br/>"
    //              + d.tname + " → " + d.sname
    //              + ": " + q(d.tvalue) + "<br/>"
    //              + p(d.tvalue / d.ttotal) + " of " + d.tname + "'s Total (" + q(d.ttotal) + ")<br/>"
    //              + p(d.tvalue / d.mtotal) + " of Matrix Total (" + q(d.mtotal) + ")";
    //        }

    //        function groupTip(d) {
    //            var p = d3.format(".1%"), q = d3.format(",.2r")
    //            return "Group Info:<br/>"
    //                + d.gname + " : " + q(d.gvalue) + "<br/>"
    //                + p(d.gvalue / d.mtotal) + " of Matrix Total (" + q(d.mtotal) + ")"
    //        }

    //        function mouseover(d, i) {
    //            d3.select("#tooltip")
    //              .style("visibility", "visible")
    //              .html(groupTip(rdr(d)))
    //              .style("top", function () { return (d3.event.pageY - 80) + "px" })
    //              .style("left", function () { return (d3.event.pageX - 130) + "px"; })

    //            chordPaths.classed("fade", function (p) {
    //                return p.source.index != i
    //                    && p.target.index != i;
    //            });
    //        }
    //    }
    //});
});