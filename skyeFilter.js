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
                     console.log("Checking:");
                     console.log("element", element);
                     console.log("s", s);
                     console.log("!conflict(element, s)", !conflict(element, s));
            return (!conflict(element, s));
          })) {
            path.push(curr);
            findSchedules(path, s, iteration + 1, classList, foundpaths);
      }
    }
  }
}


function fullOnFilter (listOfFullClasses) {
  for (classess in listOfFullClasses) {
    for (curr in classess.schedules) {
      findSchedules([], curr, 0, listOfFullClasses, [])
    }
  }
}
