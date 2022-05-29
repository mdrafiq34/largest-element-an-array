
// using for loop
var arr = [3, 6, 2, 56, 32, 5, 89, 32];
var largest = arr[0];

for (var i = 0; i < arr.length; i++) {
    if (largest < arr[i] ) {
        largest = arr[i];
    }
}
document.write(largest);


// using function
function largest2(arr) {
	var large = arr[0];
	for(var i=1; i<arr.length; i++) {
		if(large < arr[i]) {
			large = arr[i];
		}
	}
	return large;
}

var input = [10, 30, 85, 43, 70];
var output = largest2(input);

document.write(output); 