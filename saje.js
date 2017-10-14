//console.log("classes (long form)", classesLong);
//var classList = mutate(classesLong);
//console.log("classes (short form)", classList);

var compare = function(a, b) {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
};

var compareNumSections = function(class1, class2) {
        return compare(class1.sections.length, class2.sections.length);
};

var sortClasses = function(classList) {
  return classList.sort(compareNumSections);
};

//console.log("sorted classes", sortClasses(classList));

var timesConflict = function(time1, time2) {
        return ((time1.start > time2.start) && (time1.start < time2.end)) ||
               ((time1.start < time2.start) && (time2.start < time1.end));
};

var conflict = function(section1, section2) {
        for (var day in section1.schedules) {
                if ((day in section2.schedules) &&
                    (timesConflict(section1.schedules[day],
                                   section2.schedules[day]))) {
                        return true;
                }
        }
        return false;
};

////test
//for (var i = 0; i < 10; i++) {
//        var class1 = classList[Math.floor(Math.random() * classList.length)];
//        var class2 = classList[Math.floor(Math.random() * classList.length)];
//        var section1 = class1.sections[
//               Math.floor(Math.random() * class1.sections.length)];
//        var section2 = class2.sections[
//               Math.floor(Math.random() * class2.sections.length)];
//        var result = conflict(section1, section2);
//        console.log("Test", {s1: section1, s2: section2, conflict: result});
//}
//
//var foundpaths = [];
//var classesToSchedule = [
//         classList[1900], classList[1920], classList[1940], classList[1960],
//         classList[1970], classList[1972]
//];
//console.log("Classes to schedule", classesToSchedule);
//console.log("Running...");
//for (var s of classesToSchedule[0].sections) {
//        findSchedules([], s, 0, classesToSchedule, foundpaths);
//}
//console.log("Done.");
//console.log("foundpaths", foundpaths);

