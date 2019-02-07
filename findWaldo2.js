// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {

 arr.forEach(function(val,agg){

 if (val === "Waldo") {
   found();   // execute callback
   }
 });
}

function actionWhenFound() {
 console.log(`Found him at index ${agg}.`);
}
// function something (){
//   console.log('yah!')
//}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound(agg));