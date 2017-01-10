var chaine = [ 0, 0, 0.55, 0, 0, 2, 0.55, 8 ];
var found = false;
var removedList = [];
while (chaine.length != 0){
  var removed = chaine.splice(0,1);
  if (chaine.indexOf(removed[0]) == -1 && removedList.indexOf(removed[0]) == -1){
    console.log(removed[0]);
  }
  removedList.push(removed[0]);
}
