// var one = 3 ;

// var two = 2 ;

// var three = one * two ;

// console.log(three);

// var num = 3 ;

// var num_two = 2 ;

// var num_three = num + num_two ;

// console.log(num_three);

// var string_one = 'My favorite food is ';

// var string_two = 'wingstop';

// var string_three = string_one + string_two;

// console.log(string_three);



// var hoursOfSleep = 8 ;


// if ( hoursOfSleep <= 6) {
// 	console.log("i am groggy");
// } else {
// 	console.log("i feel fantastic");
// }


// var nextLocation = "home";

// if (nextLocation === "home") {
// 	console.log("Its been a long day, lets go home")
// } else {
// 	console.log("Good morning, finding the fastest route to work!" )
// }

// console.log("Wow, it worked!");

// var movie = "my favorite movie is ";

// var movie_one = "spiderman";

// var movie_two = movie + movie_one ;

// console.log(movie_two);



// ? Grading Scale
    // A=100-90
    // B=89-80
    // C=79-70
    // D= 69-60
    // F= 59-0
    ​
    ​
    ​
    //  Create a variable that contains the student’s grade (it should be a number). Then using
    // an if/else statement compare the students grade to the grading system to determine the
    // letter grade the student received
	var grade = 90
    ​
	if (grade > 89) {
	    console.log("A")
	} else if (grade > 79 && grade < 90) {
	    console.log("B")
	} else if (grade > 69 && grade < 80) {
	    console.log("C")
	} else if (grade > 60 && grade < 70) {
	    console.log("D")
	} else {
	    console.log("F")
	}
    ​
    // Now it is time to create a function that can be reused to return the student’s letter grade.
    // Take the above if/else statement for the grading system and put it into a function. The
    // function should take one parameter and return the student’s letter grade.
    ​
    var gradeScale = function(grade) {
	if (grade > 89) {
	    console.log("A")
	} else if (grade > 79 && grade < 90) {
	    console.log("B")
	} else if (grade > 69 && grade < 80) {
	    console.log("C")
	} else if (grade > 60 && grade < 70) {
	    console.log("D")
	} else {
	    console.log("F")
	}
    }
    ​
    gradeScale(50)


    