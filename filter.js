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
    for (var s of classList[curr.classIdx + 1].sections) {
      if (!conflict(indexToSection(classList, curr), s) &&
          path.every(function pathTestConf (element) {
             return !conflict(indexToSection(classList, element), s)
          })) {
        path.push(curr);
        findSchedules(path, s, classList, foundpaths);
      }
    }
  }
}
