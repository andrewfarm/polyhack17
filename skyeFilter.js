//path :: [{Section}]
//curr :: {Section}
//iteration :: Int    --starts at 0
//classList :: [{[{Section}]}]
//foundpaths :: [[{Section}]]
function findSchedules(path, curr, iteration, classList, foundpaths) {
  //If you reach the end, you won!
  if(iteration === classList.length - 1) {
    path.push(curr);
    foundpaths.push(path);
  }
  //Otherwise you do work
  else {
    for (var s of classList[iteration + 1].sections) {
      if (!conflict(curr, s) &&
          path.every(function (element) {
            return (!conflict(element, s));
          })) {
            var newpath = path.slice();
            newpath.push(curr);
            findSchedules(newpath, s, iteration + 1, classList, foundpaths);
      }
    }
  }
}


function fullOnFilter (listOfFullClasses) {
  for (classes in listOfFullClasses) {
    for (curr in clasess.schedules) {
      findSchedules([], curr, 0, listOfFullClasses, [])
    }
  }
}
