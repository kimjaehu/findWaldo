var index;
function findWaldo(arr, found) {

//  for (var i = 0; i < arr.length; i++) {
  arr.forEach(function(val, agg) {
    if (val === "Waldo") {
      index = agg;

      found();   // execute callback

    }
  });
}

function actionWhenFound() {
  console.log(`Found Waldo at index: ${index}`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);