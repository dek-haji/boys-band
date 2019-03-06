// Eventhough the assignment was to loop the random scores and console.log how many each i used 
// .filter() 

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
const A_student = scores.filter(A => A > 90);
console.log(" A grade students are", A_student.length)
const B_student = scores.filter(B => B > 80 && B < 90)
console.log("B grade students are", B_student.length)
const C_student = scores.filter(C => C > 70 && C < 80)
console.log("C grade students are", C_student.length)
const D_student = scores.filter(C => C > 60 && C < 70)
console.log("D grade students are", D_student.length)
const F_student = scores.filter(C => C > 50 && C < 60)
console.log("F grade students are", F_student.length)
const minimum = Math.min(...scores)
const max = Math.max(...scores)
console.log("the lowest grade is", minimum)
console.log("the maximum grade is", max);

///////////////////////////////////////////////////////////////////////////
/* I used for loop and else if conditional statement */
for (var i = 0; i < scores.length; i++){
    var sum = scores[i]
    console.log(sum)
    if(sum > 50 && sum < 60){
        console.log("F student", sum)

    }else if(
        sum >= 60 && sum <= 70
    ){
        console.log("D student", sum)
    }else if(
        sum >= 70 && sum <= 80
    ){
        console.log("C students", sum)
    }else if(
        sum >= 80 && sum <= 90
    ){
        console.log("B Students", sum)
    }else if(
        sum >= 90 && sum <= 100
    ){
        console.log("A students", sum)
    }
}
/* let me try another method */
for (var i = 0; i < scores.length; i++){
    var sum = scores[i]
    if(sum > 50 && sum < 60){
        var A = sum
    console.log(A)
}
}

