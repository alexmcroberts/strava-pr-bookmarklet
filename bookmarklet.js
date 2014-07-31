javascript: (function() {
    var totalPr = 0;
    var total3rd = 0;
    var total2nd = 0;
    var prs = Array.prototype.slice.call(document.getElementsByClassName('achievement md'));
    prs.forEach(function(pr) {
        if (pr.title == "PR" || pr.title.indexOf("overall") > -1) {
            totalPr = totalPr + 1;
        }
        if (pr.title == "3rd fastest time") {
            total3rd = total3rd + 1;
        }
        if (pr.title == "2nd fastest time") {
            total2nd = total2nd + 1;
        }
    });
    alert("There were " + total3rd + " 3rd fastest times on this activity\nThere were " + total2nd + " 2nd fastest times on this activity\nThere were " + totalPr + " PR's on this activity")
})()
