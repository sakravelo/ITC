document.getElementById("calculate").addEventListener("input", function() {
    var n = document.getElementById("calculate").value * 1;

    let factorial = 1;
    let i = 1;
    while (i <= n) {
        factorial *= i;
        i++;
    }

    let sum = 0;
    let j = 1;
    do {
        sum += j;
        j++;
    } while (j <= n);

    let average = 0;
    for (let k = 1; k <= n; k++) {
        average += k;
    }
    average = average / n;

    document.getElementById("fact").innerHTML = "The factorial of the first " + n + " natural numbers is " + factorial;
    document.getElementById("sum").innerHTML = "The sum of the first " + n + " natural numbers is " + sum;
    document.getElementById("ave").innerHTML = "The average of the first " + n + " natural numbers is " + average;
});
