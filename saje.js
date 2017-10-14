console.log("classes (long form)", classesLong);
console.log("classes (short form)", mutate(classesLong));

var compare = function(a, b) {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
};

var compareNumSections = function(class1, class2) {
        return compare(class1.sections.length, class2.sections.length);
};

console.log("sorted classes", mutate(classesLong).sort(compareNumSections));
