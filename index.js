var details = {
    "#1 New York City, NY ": 8398748,
    "#2 Los Angeles, CA ": 3990456,
    "#3 Chicago, IL ": 2705994,
    "#4 Houston, TX ": 2325502,
    "#5 Phoenix, AZ ": 1660272,
    "#6 Philadelphia, PA ": 1584138,
    "#7 San Antonio, TX ": 1532233,
    "#8 San Diego, CA ": 1425976,
    "#9 Dallas, TX ": 1345047,
    "#10 San Jose, CA ": 1030119,
    "#11 Austin, TX ": 964254,
    "#12 Jacksonville, FL ": 903889,
    "#13 Fort Worth, TX": 895008,
    "#14 Columbus, OH": 892533,
    "#15 San Francisco, CA": 883305,
    "#16 Charlotte, NC": 872498,
    "#17 Indianapolis, IN": 867125,
    "#18 Seattle, WA": 744955,
    "#19 Denver, CO": 716492,
    "#20 Washington, D.C.": 702455,
    "#21 Boston, MA": 694583,
    "#22 El Paso, TX": 682669,
    "#23 Detroit, MI": 672662,
    "#24 Nashville, TN": 669053,
    "#25 Portland, OR": 653115,
    "#26 Memphis, TN": 650618,
    "#27 Oklahoma City, OK": 649021,
    "#28 Las Vegas, NV": 644644,
    "#29 Louisville, KY": 620118,
    "#30 Baltimore, MD": 602495,
    "#31 Milwaukee, WI": 592025,
    "#32 Albuquerque, NM": 560218,
    "#33 Tucson, AZ": 545975,
    "#34 Fresno, CA": 530093,
    "#35 Mesa, AZ": 508958,
    "#36 Sacramento, CA": 508529,
    "#37 Atlanta, GA": 498044,
    "#38 Kansas City, MO": 491918,
    "#39 Colorado Springs, CO": 472688,
    "#40 Miami, FL": 470914,
    "#41 Raleigh, NC": 469298,
    "#42 Omaha, NE": 468262,
    "#43 Long Beach, CA": 467354,
    "#44 Virginia Beach, VA": 450189,
    "#45 Oakland, CA": 429082,
    "#46 Minneapolis, MN": 425403	,
    "#47 Tulsa, OK": 400669,
    "#48 Arlington, TX": 398112,
    "#49 Tampa, FL": 392890,
    "#50 New Orleans, LA": 391006,
};


$(document).ready(function() {
    
    $("#slider").slider({max:9000000, range:true, values:[1000000, 9000000],
                        change:function(event, ui) {
                            getDetails(ui.values[0], ui.values[1]);
                        }
                    });
    var current = $("#slider").slider("option", "values");
    getDetails(current[0], current[1])
});


function getDetails (minimum, maximum) {
    $("#range").text(minimum + " pop." + " - " + maximum + " pop.");
    var result = `<table> 
                    <tr>  
                     <th> 
                       City
                     </th> 
                     <th>
                       Population
                     </th>
                    </tr>`;
    for (var item in details) {
        if (details[item] >= minimum && details[item] <= maximum) {
            result += "<tr><td>" + item  + "</td><td>" + details[item] + "</td></tr>";
        }
    }
    result += "</table>";
    $("#output").html(result);
}