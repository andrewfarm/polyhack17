//path :: [{Section}]
//curr :: {Section}
//iteration :: Int    --starts at 0
//classList :: [{[{Section}]}]
//foundpaths :: [[{Section}]]
function findSchedules(path, curr, iteration, classList, foundpaths) {
  if (isEmptyObject(curr.schedules)) return 0;
  //If you reach the end, you won!
  if(iteration === classList.length - 1) {
    var newpath = path.slice();
    newpath.push(curr);
    foundpaths.push(newpath);
    return 1;
  }
  //Otherwise you do work
  else {
    var combos = 0;
    for (var s of classList[iteration + 1].sections) {
      if (!isEmptyObject(curr.schedules) &&
          !conflict(curr, s) &&
          path.every(function(element) {
            return (!conflict(element, s));
          })) {
            var newpath = path.slice();
            newpath.push(curr);
            combos += findSchedules(newpath, s, iteration + 1, classList, foundpaths);
      }
    }
    return combos;
  }
}

function isEmptyObject(obj) {
        for (var name in obj) {
                return false;
        }
        return true;
}


function fullOnFilter (listOfFullClasses) {
  for (classes in listOfFullClasses) {
    for (curr in clasess.schedules) {
      findSchedules([], curr, 0, listOfFullClasses, [])
    }
  }
}
