

jQuery(document).ready(function () {
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

        var prov = $("#prov").val();   // Province ID
        var teh = $("#teh").val();     // Tehsil ID
        var att = $("#att").val();     // Attribute ID
        var y = $(this).val();

        if (prov != null && teh != null && att != null) {
            var data = {};
            data.Prov_ID = prov;
            data.Teh_ID = teh;
            data.Attr_Name = att;
            data.Dist_ID = y;

            $.ajax({
                url: "/Home/changeAttribute",
                type: "POST",
                data: JSON.stringify(data),
                dataType: "JSON",
                contentType: "Application/JSON",
                async: true,
                success: function (d) {

                    var data0 = d[0]; //2007,2008,2009
                    var data1 = d[1]; //never married
                    var data2 = d[2]; // values 4
                    var data3 = d[3]; //never married
                    var data4 = d[4]; // values 4
                    var data5 = d[5]; //never married
                    var data6 = d[6]; // values 4

                    //------------------------------------------------------

                    var text = document.getElementById('att').options[document.getElementById('att').selectedIndex].text;

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
                    $("#s1").html("<h2>Line Chart For " + text + "</h2>");
                    $("#shery1").html("");

                    $(function () {

                        var options = {
                            legend: {
                                show: true
                            }, series: {
                                lines: {
                                    show: true
                                },
                                points: {
                                    show: false
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
                        plot = $.plot("#shery1", zee, options);
                        $(function () {

                            var legends = $("#shery1 .legendLabel");

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

                            $("#shery1").bind("plothover", function (event, pos, item) {
                                latestPosition = pos;
                                if (!updateLegendTimeout) {
                                    updateLegendTimeout = setTimeout(updateLegend, 50);
                                }
                            });


                        });
                    });

                    //---chord Graph---
                    $(function () {
                        var matrix = [
                                [11975, 500, 800, 2868],
                                [1951, 10048, 2060, 6171],
                                [8010, 16145, 8090, 8045],
                                [1013, 990, 940, 6907]
                        ];

                        var chord = d3.layout.chord()
                            .padding(.05)
                            .sortSubgroups(d3.descending)
                            .matrix(matrix);

                        var width = 600,
                            height = 300,
                            innerRadius = Math.min(width, height) * .41,
                            outerRadius = innerRadius * 1.1;

                        var fill = d3.scale.ordinal()
                            .domain(d3.range(4))
                            .range(["#000000", "#FFDD89", "#957244", "#F26223"]);

                        var svg = d3.select("#shary7").append("svg")
                            .attr("width", width)
                            .attr("height", height)
                          .append("g")
                            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

                        svg.append("g").selectAll("path")
                            .data(chord.groups)
                          .enter().append("path")
                            .style("fill", function (d) { return fill(d.index); })
                            .style("stroke", function (d) { return fill(d.index); })
                            .attr("d", d3.svg.arc().innerRadius(innerRadius).outerRadius(outerRadius))
                            .on("mouseover", fade(.1))
                            .on("mouseout", fade(1));

                        var ticks = svg.append("g").selectAll("g")
                            .data(chord.groups)
                          .enter().append("g").selectAll("g")
                            .data(groupTicks)
                          .enter().append("g")
                            .attr("transform", function (d) {
                                return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")"
                                    + "translate(" + outerRadius + ",0)";
                            });

                        ticks.append("line")
                            .attr("x1", 1)
                            .attr("y1", 0)
                            .attr("x2", 5)
                            .attr("y2", 0)
                            .style("stroke", "#000");

                        ticks.append("text")
                            .attr("x", 8)
                            .attr("dy", ".35em")
                            .attr("transform", function (d) { return d.angle > Math.PI ? "rotate(180)translate(-16)" : null; })
                            .style("text-anchor", function (d) { return d.angle > Math.PI ? "end" : null; })
                            .text(function (d) { return d.label; });

                        svg.append("g")
                            .attr("class", "chord")
                          .selectAll("path")
                            .data(chord.chords)
                          .enter().append("path")
                            .attr("d", d3.svg.chord().radius(innerRadius))
                            .style("fill", function (d) { return fill(d.target.index); })
                            .style("opacity", 1);

                        // Returns an array of tick angles and labels, given a group.
                        function groupTicks(d) {
                            var k = (d.endAngle - d.startAngle) / d.value;
                            return d3.range(0, d.value, 1000).map(function (v, i) {
                                return {
                                    angle: v * k + d.startAngle,
                                    label: i % 5 ? null : v / 1000 + "k"
                                };
                            });
                        }

                        // Returns an event handler for fading a given chord group.
                        function fade(opacity) {
                            return function (g, i) {
                                svg.selectAll(".chord path")
                                    .filter(function (d) { return d.source.index != i && d.target.index != i; })
                                  .transition()
                                    .style("opacity", opacity);
                            };
                        }
                    });

                    //------------------------------------------------------
                    var arr = new Array();

                    for (var c = 0; c < data1.length; c++) {
                        var abc = {};
                        abc.value = data2[c];
                        abc.label = data1[c];
                        arr.push(abc);
                    }
                    //----------------------------

                    $("#s2").html("<p>" + text + " %age In 2007</p>");
                    $("#shery2").html("");
                    Morris.Donut({
                        element: 'shery2',

                        data: arr,
                        formatter: function (x) { return x }
                    }).on('click', function (i, row) {
                        console.log(i, row);
                    });
                    //------------------------------------------------------
                    var arr2 = new Array();

                    for (var c = 0; c < data1.length; c++) {
                        var abc = {};
                        abc.x = data1[c];
                        abc.y = data2[c];

                        arr2.push(abc);
                    }
                    //---------------------------

                    $("#s3").html("<p>" + text + " %age In 2007</p>");
                    $("#shery3").html("");
                    Morris.Bar({
                        element: 'shery3',
                        data: arr2,
                        xkey: "x",
                        ykeys: ["y"],
                        labels: ['%age'],
                        barColors: function (row, series, type) {
                            if (type == 'bar') {
                                var red = Math.ceil(255 * row.y / this.ymax);
                                return 'rgb(' + red + ',0,0)';
                            }
                            else {
                                return '#000';
                            }
                        }
                    });
                    //------------------------------------------------------
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

                    $("#s4").html("<p>" + text + " %age VS Years</p>");
                    $("#shery4").html("");
                    Morris.Bar({
                        element: 'shery4',
                        axes: false,

                        data: arr01,

                        xkey: 'x',
                        ykeys: ['y', 'a', 'b', 'c', 'd', 'e', 'f'],
                        labels: ['Y', data1[0], data1[1], data1[2], data1[3], data1[4], data1[5]]
                    });
                    //------------------------------------------------------

                    $("#s5").html("<p>" + text + " %age VS Years</p>");
                    $("#shery5").html("");
                    Morris.Area({
                        element: 'shery5',
                        axes: false,

                        data: arr01,

                        xkey: 'x',
                        ykeys: ['y', 'a', 'b', 'c', 'd', 'e', 'f'],
                        labels: ['Y', data1[0], data1[1], data1[2], data1[3], data1[4], data1[5]]
                    });
                    //------------------------------------------------------
                    $("#s6").html("<h2>Line Chart For " + text + "</h2>");
                    $("#shery6").html("");

                    Morris.Line({
                        element: 'shery6',

                        data: arr0,

                        xkey: 'y',
                        ykeys: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
                        labels: [data1[0], data1[1], data1[2], data1[3], data1[4], data1[5], data1[6]],
                        pointSize: [1],
                        hideHover: ['always'],

                    });
                }
            });
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

        var prov = $("#prov").val();   // Province ID
        var dist = $("#dist").val();   // District ID
        var att = $("#att").val();     // Attribute ID
        var y = $(this).val();

        if (prov != null && dist != null && att != null) {
            var data = {};
            data.Prov_ID = prov;
            data.Dist_ID = dist;
            data.Teh_ID = y;
            data.Attr_Name = att;

            $.ajax({
                url: "/Home/changeAttribute",
                type: "POST",
                data: JSON.stringify(data),
                dataType: "JSON",
                contentType: "Application/JSON",
                async: true,
                success: function (d) {

                    var data0 = d[0]; //2007,2008,2009
                    var data1 = d[1]; //never married
                    var data2 = d[2]; // values 4
                    var data3 = d[3]; //never married
                    var data4 = d[4]; // values 4
                    var data5 = d[5]; //never married
                    var data6 = d[6]; // values 4

                    //------------------------------------------------------

                    var text = document.getElementById('att').options[document.getElementById('att').selectedIndex].text;

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
                    $("#s1").html("<h2>Line Chart For " + text + "</h2>");
                    $("#shery1").html("");

                    $(function () {

                        var options = {
                            legend: {
                                show: true
                            }, series: {
                                lines: {
                                    show: true
                                },
                                points: {
                                    show: false
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
                        plot = $.plot("#shery1", zee, options);
                        $(function () {

                            var legends = $("#shery1 .legendLabel");

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

                            $("#shery1").bind("plothover", function (event, pos, item) {
                                latestPosition = pos;
                                if (!updateLegendTimeout) {
                                    updateLegendTimeout = setTimeout(updateLegend, 50);
                                }
                            });


                        });
                    });

                    //---chord Graph---
                    $(function () {
                        var matrix = [
                                [11975, 500, 800, 2868],
                                [1951, 10048, 2060, 6171],
                                [8010, 16145, 8090, 8045],
                                [1013, 990, 940, 6907]
                        ];

                        var chord = d3.layout.chord()
                            .padding(.05)
                            .sortSubgroups(d3.descending)
                            .matrix(matrix);

                        var width = 600,
                            height = 300,
                            innerRadius = Math.min(width, height) * .41,
                            outerRadius = innerRadius * 1.1;

                        var fill = d3.scale.ordinal()
                            .domain(d3.range(4))
                            .range(["#000000", "#FFDD89", "#957244", "#F26223"]);

                        var svg = d3.select("#shary7").append("svg")
                            .attr("width", width)
                            .attr("height", height)
                          .append("g")
                            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

                        svg.append("g").selectAll("path")
                            .data(chord.groups)
                          .enter().append("path")
                            .style("fill", function (d) { return fill(d.index); })
                            .style("stroke", function (d) { return fill(d.index); })
                            .attr("d", d3.svg.arc().innerRadius(innerRadius).outerRadius(outerRadius))
                            .on("mouseover", fade(.1))
                            .on("mouseout", fade(1));

                        var ticks = svg.append("g").selectAll("g")
                            .data(chord.groups)
                          .enter().append("g").selectAll("g")
                            .data(groupTicks)
                          .enter().append("g")
                            .attr("transform", function (d) {
                                return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")"
                                    + "translate(" + outerRadius + ",0)";
                            });

                        ticks.append("line")
                            .attr("x1", 1)
                            .attr("y1", 0)
                            .attr("x2", 5)
                            .attr("y2", 0)
                            .style("stroke", "#000");

                        ticks.append("text")
                            .attr("x", 8)
                            .attr("dy", ".35em")
                            .attr("transform", function (d) { return d.angle > Math.PI ? "rotate(180)translate(-16)" : null; })
                            .style("text-anchor", function (d) { return d.angle > Math.PI ? "end" : null; })
                            .text(function (d) { return d.label; });

                        svg.append("g")
                            .attr("class", "chord")
                          .selectAll("path")
                            .data(chord.chords)
                          .enter().append("path")
                            .attr("d", d3.svg.chord().radius(innerRadius))
                            .style("fill", function (d) { return fill(d.target.index); })
                            .style("opacity", 1);

                        // Returns an array of tick angles and labels, given a group.
                        function groupTicks(d) {
                            var k = (d.endAngle - d.startAngle) / d.value;
                            return d3.range(0, d.value, 1000).map(function (v, i) {
                                return {
                                    angle: v * k + d.startAngle,
                                    label: i % 5 ? null : v / 1000 + "k"
                                };
                            });
                        }

                        // Returns an event handler for fading a given chord group.
                        function fade(opacity) {
                            return function (g, i) {
                                svg.selectAll(".chord path")
                                    .filter(function (d) { return d.source.index != i && d.target.index != i; })
                                  .transition()
                                    .style("opacity", opacity);
                            };
                        }
                    });

                    //------------------------------------------------------
                    var arr = new Array();

                    for (var c = 0; c < data1.length; c++) {
                        var abc = {};
                        abc.value = data2[c];
                        abc.label = data1[c];
                        arr.push(abc);
                    }
                    //----------------------------

                    $("#s2").html("<p>" + text + " %age In 2007</p>");
                    $("#shery2").html("");
                    Morris.Donut({
                        element: 'shery2',

                        data: arr,
                        formatter: function (x) { return x }
                    }).on('click', function (i, row) {
                        console.log(i, row);
                    });
                    //------------------------------------------------------
                    var arr2 = new Array();

                    for (var c = 0; c < data1.length; c++) {
                        var abc = {};
                        abc.x = data1[c];
                        abc.y = data2[c];

                        arr2.push(abc);
                    }
                    //---------------------------

                    $("#s3").html("<p>" + text + " %age In 2007</p>");
                    $("#shery3").html("");
                    Morris.Bar({
                        element: 'shery3',
                        data: arr2,
                        xkey: "x",
                        ykeys: ["y"],
                        labels: ['%age'],
                        barColors: function (row, series, type) {
                            if (type == 'bar') {
                                var red = Math.ceil(255 * row.y / this.ymax);
                                return 'rgb(' + red + ',0,0)';
                            }
                            else {
                                return '#000';
                            }
                        }
                    });
                    //------------------------------------------------------
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

                    $("#s4").html("<p>" + text + " %age VS Years</p>");
                    $("#shery4").html("");
                    Morris.Bar({
                        element: 'shery4',
                        axes: false,

                        data: arr01,

                        xkey: 'x',
                        ykeys: ['y', 'a', 'b', 'c', 'd', 'e', 'f'],
                        labels: ['Y', data1[0], data1[1], data1[2], data1[3], data1[4], data1[5]]
                    });
                    //------------------------------------------------------

                    $("#s5").html("<p>" + text + " %age VS Years</p>");
                    $("#shery5").html("");
                    Morris.Area({
                        element: 'shery5',
                        axes: false,

                        data: arr01,

                        xkey: 'x',
                        ykeys: ['y', 'a', 'b', 'c', 'd', 'e', 'f'],
                        labels: ['Y', data1[0], data1[1], data1[2], data1[3], data1[4], data1[5]]
                    });
                    //------------------------------------------------------
                    $("#s6").html("<h2>Line Chart For " + text + "</h2>");
                    $("#shery6").html("");

                    Morris.Line({
                        element: 'shery6',

                        data: arr0,

                        xkey: 'y',
                        ykeys: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
                        labels: [data1[0], data1[1], data1[2], data1[3], data1[4], data1[5], data1[6]],
                        pointSize: [1],
                        hideHover: ['always'],

                    });
                }
            });
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
        var attribute = $(this).val();

        if (prov != null)
        {
            //var data = {};
            //data.Prov_ID = prov;
            //data.Dist_ID = dist;
            //data.Teh_ID = teh;
            //data.Attr_Name = attribute;

            //$.ajax({
            //    url: "/Home/OnlyProvince",
            //    type: "POST",
            //    data: JSON.stringify(data),
            //    dataType: "JSON",
            //    contentType: "Application/JSON",
            //    async: true,
            //    success: function (d) {
            //        alert("Success = " + d);
            //    },
            //    error: function (d) {
            //        alert("Error = " + d);
            //    }
            //});
        }
        if (prov != null && dist != null)
        {
            //var data = {};
            //data.Prov_ID = prov;
            //data.Dist_ID = dist;
            //data.Teh_ID = teh;
            //data.Attr_Name = attribute;

            //$.ajax({
            //    url: "/Home/OnlyProvinceAndDistrict",
            //    type: "POST",
            //    data: JSON.stringify(data),
            //    dataType: "JSON",
            //    contentType: "Application/JSON",
            //    async: true,
            //    success: function (d) {
            //        alert("Success = " + d);
            //    },
            //    error: function (d) {
            //        alert("Error = " + d);
            //    }
            //});
        }

        if (prov != null && dist != null && teh != null) {
            var data = {};
            data.Prov_ID = prov;
            data.Dist_ID = dist;
            data.Teh_ID = teh;
            data.Attr_Name = attribute;

            $.ajax({
                url: "/Home/changeAttribute",
                type: "POST",
                data: JSON.stringify(data),
                dataType: "JSON",
                contentType: "Application/JSON",
                async: true,
                success: function (d) {

                    var data0 = d[0]; //2007,2008,2009
                    var data1 = d[1]; //never married
                    var data2 = d[2]; // values 4
                    var data3 = d[3]; //never married
                    var data4 = d[4]; // values 4
                    var data5 = d[5]; //never married
                    var data6 = d[6]; // values 4

                    alert(data0);
                    alert(data1);
                    alert(data2);

                    //------------------------------------------------------

                    var text = document.getElementById('att').options[document.getElementById('att').selectedIndex].text;

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
                    $("#s1").html("<h2>Line Chart For " + text + "</h2>");
                    $("#shery1").html("");

                    $(function () {

                        var options = {
                            legend: {
                                show: true
                            }, series: {
                                lines: {
                                    show: true
                                },
                                points: {
                                    show: false
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
                        plot = $.plot("#shery1", zee, options);
                        $(function () {

                            var legends = $("#shery1 .legendLabel");

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

                            $("#shery1").bind("plothover", function (event, pos, item) {
                                latestPosition = pos;
                                if (!updateLegendTimeout) {
                                    updateLegendTimeout = setTimeout(updateLegend, 50);
                                }
                            });


                        });
                    });

                    //---chord Graph---
                    $(function () {
                        var matrix = [
                                [11975, 500, 800, 2868],
                                [1951, 10048, 2060, 6171],
                                [8010, 16145, 8090, 8045],
                                [1013, 990, 940, 6907]
                        ];

                        var chord = d3.layout.chord()
                            .padding(.05)
                            .sortSubgroups(d3.descending)
                            .matrix(matrix);

                        var width = 600,
                            height = 300,
                            innerRadius = Math.min(width, height) * .41,
                            outerRadius = innerRadius * 1.1;

                        var fill = d3.scale.ordinal()
                            .domain(d3.range(4))
                            .range(["#000000", "#FFDD89", "#957244", "#F26223"]);

                        var svg = d3.select("#shary7").append("svg")
                            .attr("width", width)
                            .attr("height", height)
                          .append("g")
                            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

                        svg.append("g").selectAll("path")
                            .data(chord.groups)
                          .enter().append("path")
                            .style("fill", function (d) { return fill(d.index); })
                            .style("stroke", function (d) { return fill(d.index); })
                            .attr("d", d3.svg.arc().innerRadius(innerRadius).outerRadius(outerRadius))
                            .on("mouseover", fade(.1))
                            .on("mouseout", fade(1));

                        var ticks = svg.append("g").selectAll("g")
                            .data(chord.groups)
                          .enter().append("g").selectAll("g")
                            .data(groupTicks)
                          .enter().append("g")
                            .attr("transform", function (d) {
                                return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")"
                                    + "translate(" + outerRadius + ",0)";
                            });

                        ticks.append("line")
                            .attr("x1", 1)
                            .attr("y1", 0)
                            .attr("x2", 5)
                            .attr("y2", 0)
                            .style("stroke", "#000");

                        ticks.append("text")
                            .attr("x", 8)
                            .attr("dy", ".35em")
                            .attr("transform", function (d) { return d.angle > Math.PI ? "rotate(180)translate(-16)" : null; })
                            .style("text-anchor", function (d) { return d.angle > Math.PI ? "end" : null; })
                            .text(function (d) { return d.label; });

                        svg.append("g")
                            .attr("class", "chord")
                          .selectAll("path")
                            .data(chord.chords)
                          .enter().append("path")
                            .attr("d", d3.svg.chord().radius(innerRadius))
                            .style("fill", function (d) { return fill(d.target.index); })
                            .style("opacity", 1);

                        // Returns an array of tick angles and labels, given a group.
                        function groupTicks(d) {
                            var k = (d.endAngle - d.startAngle) / d.value;
                            return d3.range(0, d.value, 1000).map(function (v, i) {
                                return {
                                    angle: v * k + d.startAngle,
                                    label: i % 5 ? null : v / 1000 + "k"
                                };
                            });
                        }

                        // Returns an event handler for fading a given chord group.
                        function fade(opacity) {
                            return function (g, i) {
                                svg.selectAll(".chord path")
                                    .filter(function (d) { return d.source.index != i && d.target.index != i; })
                                  .transition()
                                    .style("opacity", opacity);
                            };
                        }
                    });

                    //------------------------------------------------------
                    var arr = new Array();

                    for (var c = 0; c < data1.length; c++) {
                        var abc = {};
                        abc.value = data2[c];
                        abc.label = data1[c];
                        arr.push(abc);
                    }
                    
                    //----------------------------
                    $("#s2").html("<p>" + text + " %age In 2007</p>");
                    $("#shery2").html("");
                    Morris.Donut({
                        element: 'shery2',

                        data: arr,
                        formatter: function (x) { return x }
                    }).on('click', function (i, row) {
                        console.log(i, row);
                    });
                    //------------------------------------------------------
                    var arr2 = new Array();

                    for (var c = 0; c < data1.length; c++) {
                        var abc = {};
                        abc.x = data1[c];
                        abc.y = data2[c];

                        arr2.push(abc);
                    }
                    //---------------------------
                    var teh_nam = $("#teh option:selected").text();
                    $("#s3").html("<p>" + text + " of " + teh_nam + " In 2007</p>");
                    $("#shery3").html("");
                    //alert(JSON.stringify(arr2));
                    
                      Morris.Bar({
                        title: 'Pakistan',
                        subtitle: 'Marital Status',
                        element: 'shery3',
                        data: arr2,
                        xkey: "x",
                        ykeys: ["y"],
                        labels: ['No of People'],
                        barColors: ['#1b9e77', '#d95f02', '#7570b3']
                    });

                    //------------------------------------------------------
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

                    $("#s4").html("<p>" + text + " %age VS Years</p>");
                    $("#shery4").html("");
                    Morris.Bar({
                        element: 'shery4',
                        data: arr01,
                        xkey: 'x',
                        ykeys: ['y', 'a', 'b', 'c', 'd', 'e', 'f'],
                        labels: ['Y', data1[0], data1[1], data1[2], data1[3], data1[4], data1[5]]
                    });
                    //------------------------------------------------------
                    $("#s5").html("<p>" + text + " %age VS Years</p>");
                    $("#shery5").html("");
                    Morris.Area({
                        element: 'shery5',
                        axes: false,

                        data: arr01,

                        xkey: 'x',
                        ykeys: ['y', 'a', 'b', 'c', 'd', 'e', 'f'],
                        labels: ['Y', data1[0], data1[1], data1[2], data1[3], data1[4], data1[5]]
                    });
                    //------------------------------------------------------
                    $("#s6").html("<h2>Line Chart For " + text + "</h2>");
                    $("#shery6").html("");
                   Morris.Line({
                        element: 'shery6',

                        data: arr0,

                        xkey: 'y',
                        ykeys: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
                        labels: [data1[0], data1[1], data1[2], data1[3], data1[4], data1[5], data1[6]],
                        pointSize: [1],
                        hideHover: ['always'],

                    });

                    //------------------------------------------------------
                    $("#s7").html("<h3>Map Pointer For " + text + "</h3>");
                    $("#shery7").html("");
                    var teh_name = $("#teh option:selected").text();
                    fn();
                    function fn() {
                        
                        google.setOnLoadCallback(drawMap());
                        function drawMap() {
                            var data = google.visualization.arrayToDataTable([
                              ['City', 'Population'],
                              [teh_name, 27000],
                              [teh_name, 37000],
                              [teh_name, 47000]
                            ]);

                            var options = {};
                            options['region'] = 'PK';
                            options['colors'] = [0xFF8747, 0xFFB581, 0xc06000]; //orange colors
                            options['dataMode'] = 'markers';

                            var container = document.getElementById('shery7');
                            var geomap = new google.visualization.GeoMap(container);
                            geomap.draw(data, options);
                        };
                    }
                    

                }
            });
        }
    });

    $("#sub_attribute").on("change", function () {

        var prov = $("#prov").val();   // Province ID
        var dist = $("#dist").val();   // District ID
        var teh = $("#teh").val();     // Tehsil ID
        var sat = $(this).val();       // sub_attribute ID
        var gnd = $("#gndr").val();    // gender

        var att = $("#att").val();       // Attribute

        if (prov != null && dist != null && teh != null && att != null) {
            var data = {};
            data.Prov_ID = prov;
            data.Dist_ID = dist;
            data.Teh_ID = teh;
            data.Attr_Name = att;
            data.Gender = gnd;
            data.SubAttr = sat;

            $.ajax({
                url: "/Home/changeSubAttribute",
                type: "POST",
                data: JSON.stringify(data),
                dataType: "JSON",
                contentType: "Application/JSON",
                async: true,
                success: function (d) {
                    //alert(d);
                    var data0 = d[0];
                    var data1 = d[1];
                    var data2 = d[2];
                    var data3 = d[3];
                    var data4 = d[4];
                    var data5 = d[5];
                    var data6 = d[6];
                    //------------------------------------------------------

                    var text = document.getElementById('att').options[document.getElementById('att').selectedIndex].text;

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
                            abc.h = data2[7];
                            abc.i = data2[8];
                            abc.j = data2[9];
                            abc.k = data2[10];
                            abc.l = data2[11];
                            abc.m = data2[12];
                        }
                        if (c == 1) {
                            abc.a = data4[0];
                            abc.b = data4[1];
                            abc.c = data4[2];
                            abc.d = data4[3];
                            abc.e = data4[4];
                            abc.f = data4[5];
                            abc.g = data4[6];
                            abc.h = data4[7];
                            abc.i = data4[8];
                            abc.j = data4[9];
                            abc.k = data4[10];
                            abc.l = data4[11];
                            abc.m = data4[12];
                        }
                        if (c == 2) {
                            abc.a = data6[0];
                            abc.b = data6[1];
                            abc.c = data6[2];
                            abc.d = data6[3];
                            abc.e = data6[4];
                            abc.f = data6[5];
                            abc.g = data6[6];
                            abc.h = data6[7];
                            abc.i = data6[8];
                            abc.j = data6[9];
                            abc.k = data6[10];
                            abc.l = data6[11];
                            abc.m = data6[12];
                        }

                        arr0.push(abc);
                    }
                    $("#s1").html("<h2>Line Chart For " + text + "</h2>");
                    $("#shery1").html("");

                    $(function () {


                        var options = {
                            legend: {
                                show: true
                            }, series: {
                                lines: {
                                    show: true
                                },
                                points: {
                                    show: false
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
                        plot = $.plot("#shery1", zee, options);

                        $(function () {
                            var legends = $("#shery1 .legendLabel");

                            //legends.each(function () {
                            //    // fix the widths so they don't jump around
                            //    $(this).css('width', $(this).width());
                            //});



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

                            $("#shery1").bind("plothover", function (event, pos, item) {
                                latestPosition = pos;
                                if (!updateLegendTimeout) {
                                    updateLegendTimeout = setTimeout(updateLegend, 50);
                                }
                            });


                        });
                    });
                    //--------------------------------------------chord Graph

                    $(function () {
                        var matrix = [
                                [11975, 500, 800, 2868],
                                [1951, 10048, 2060, 6171],
                                [8010, 16145, 8090, 8045],
                                [1013, 990, 940, 6907]
                        ];

                        var chord = d3.layout.chord()
                            .padding(.05)
                            .sortSubgroups(d3.descending)
                            .matrix(matrix);

                        var width = 600,
                            height = 300,
                            innerRadius = Math.min(width, height) * .41,
                            outerRadius = innerRadius * 1.1;

                        var fill = d3.scale.ordinal()
                            .domain(d3.range(4))
                            .range(["#000000", "#FFDD89", "#957244", "#F26223"]);

                        var svg = d3.select("#shary7").append("svg")
                            .attr("width", width)
                            .attr("height", height)
                          .append("g")
                            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

                        svg.append("g").selectAll("path")
                            .data(chord.groups)
                          .enter().append("path")
                            .style("fill", function (d) { return fill(d.index); })
                            .style("stroke", function (d) { return fill(d.index); })
                            .attr("d", d3.svg.arc().innerRadius(innerRadius).outerRadius(outerRadius))
                            .on("mouseover", fade(.1))
                            .on("mouseout", fade(1));

                        var ticks = svg.append("g").selectAll("g")
                            .data(chord.groups)
                          .enter().append("g").selectAll("g")
                            .data(groupTicks)
                          .enter().append("g")
                            .attr("transform", function (d) {
                                return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")"
                                    + "translate(" + outerRadius + ",0)";
                            });

                        ticks.append("line")
                            .attr("x1", 1)
                            .attr("y1", 0)
                            .attr("x2", 5)
                            .attr("y2", 0)
                            .style("stroke", "#000");

                        ticks.append("text")
                            .attr("x", 8)
                            .attr("dy", ".35em")
                            .attr("transform", function (d) { return d.angle > Math.PI ? "rotate(180)translate(-16)" : null; })
                            .style("text-anchor", function (d) { return d.angle > Math.PI ? "end" : null; })
                            .text(function (d) { return d.label; });

                        svg.append("g")
                            .attr("class", "chord")
                          .selectAll("path")
                            .data(chord.chords)
                          .enter().append("path")
                            .attr("d", d3.svg.chord().radius(innerRadius))
                            .style("fill", function (d) { return fill(d.target.index); })
                            .style("opacity", 1);

                        // Returns an array of tick angles and labels, given a group.
                        function groupTicks(d) {
                            var k = (d.endAngle - d.startAngle) / d.value;
                            return d3.range(0, d.value, 1000).map(function (v, i) {
                                return {
                                    angle: v * k + d.startAngle,
                                    label: i % 5 ? null : v / 1000 + "k"
                                };
                            });
                        }

                        // Returns an event handler for fading a given chord group.
                        function fade(opacity) {
                            return function (g, i) {
                                svg.selectAll(".chord path")
                                    .filter(function (d) { return d.source.index != i && d.target.index != i; })
                                  .transition()
                                    .style("opacity", opacity);
                            };
                        }
                    });

                    //------------------------------------------------------
                    var arr = new Array();

                    for (var c = 0; c < data1.length; c++) {
                        var abc = {};
                        abc.value = data2[c];
                        abc.label = data1[c];
                        arr.push(abc);
                    }
                    //----------------------------

                    $("#s2").html("<p>" + text + " %age In 2007</p>");
                    $("#shery2").html("");
                    Morris.Donut({
                        element: 'shery2',

                        data: arr,
                        formatter: function (x) { return x }
                    }).on('click', function (i, row) {
                        console.log(i, row);
                    });
                    //------------------------------------------------------
                    var arr2 = new Array();

                    for (var c = 0; c < data1.length; c++) {
                        var abc = {};
                        abc.x = data1[c];
                        abc.y = data2[c];

                        arr2.push(abc);
                    }
                    //---------------------------

                    $("#s3").html("<p>" + text + " %age In 2007</p>");
                    $("#shery3").html("");
                    Morris.Bar({
                        element: 'shery3',
                        data: arr2,
                        xkey: "x",
                        ykeys: ["y"],
                        labels: ['%age'],
                        barColors: function (row, series, type) {
                            if (type == 'bar') {
                                var red = Math.ceil(255 * row.y / this.ymax);
                                return 'rgb(' + red + ',0,0)';
                            }
                            else {
                                return '#000';
                            }
                        }
                    });
                    //------------------------------------------------------
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

                    $("#s4").html("<p>" + text + " %age VS Years</p>");
                    $("#shery4").html("");
                    Morris.Bar({
                        element: 'shery4',
                        axes: false,

                        data: arr01,

                        xkey: 'x',
                        ykeys: ['y', 'a', 'b', 'c', 'd', 'e', 'f'],
                        labels: ['Y', data1[0], data1[1], data1[2], data1[3], data1[4], data1[5]]
                    });
                    //------------------------------------------------------

                    $("#s5").html("<p>" + text + " %age VS Years</p>");
                    $("#shery5").html("");
                    Morris.Area({
                        element: 'shery5',
                        axes: false,

                        data: arr01,
                        
                        xkey: 'x',
                        ykeys: ['y', 'a', 'b', 'c', 'd', 'e', 'f'],
                        labels: ['Y', data1[0], data1[1], data1[2], data1[3], data1[4], data1[5]]
                    });
                    //------------------------------------------------------
                    $("#s6").html("<h2>Line Chart For " + text + "</h2>");
                    $("#shery6").html("");

                    Morris.Line({
                        element: 'shery6',

                        data: arr0,

                        xkey: 'y',
                        ykeys: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
                        labels: [data1[0], data1[1], data1[2], data1[3], data1[4], data1[5], data1[6]],
                        pointSize: [1],
                        hideHover: ['always'],

                    });
                }
            });
        }
    });
});