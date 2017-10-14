//The actual program

var indexToSection = function(classList, index) {
  return classList[index.classIdx].sections[index.sectionIdx];
}

//path :: [{classIdx, sectionIdx}]
//curr :: {classIdx, sectionIdx}
//classList :: [{[{Section}]}]
//foundpaths :: [[{classIdx, sectionIdx}]]
function findSchedules(path, curr, classList, foundpaths) {
  if (curr.classIdx === classList.length - 1) {
    path.push(curr);
    foundpaths.push(path);
  }
  else {
    for (var s = {classIdx: curr.classIdx + 1, sectionIdx: 0};
         s.sectionIdx < classList[curr.classIdx + 1].sections.length;
         s.sectionIdx++) {
      var sectionToCheck = indexToSection(classList, s);
      if (!conflict(indexToSection(classList, curr), sectionToCheck) &&
          path.every(function pathTestConf (element) {
             return !conflict(indexToSection(classList, element),
                              sectionToCheck);
          })) {
        path.push(curr);
        findSchedules(path, s, classList, foundpaths);
      }
    }
  }
}
