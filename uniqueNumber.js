var chaine = [ 0, 0, 0.55, 0, 0, 2 ];
var found = false;
while (!found){
  var removed = chaine.splice(0,1);
  if (chaine.indexOf(removed[0]) == -1){
    found = true;
    console.log(removed[0]);
  }
}
