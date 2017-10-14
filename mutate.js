//Turns the initial JSON into a better json

function mutate (jsonObj) {
  var total = [];
  for (var clSection of jsonObj.searchResults) {
    var cl = {

    };
    total.push(cl);
  }
  return total;
}
