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
    for (s in classList[iteration]) {
      if (!conflict(s, curr) &&
          path.every(function pathTestConf (element) {
            return (!conflict(element, s));
          })) {
            path.push(curr);
            findSchedules(path, s, iteration + 1, classList, foundpaths);
          }
    }
  }
}
