document.getElementById("compute").addEventListener("click", function () {
        // Get taxable income and implicitly convert to number
        var it;
        let ti = document.getElementById("tax").value*1;

        // Calculate income tax based on the tax brackets
        if (ti < 250000) {
            it = 0; // No tax
        } else if (ti <= 400000) {
            it = 0.20 * (ti - 250000);
        } else if (ti <= 800000) {
            it = 30000 + 0.25 * (ti - 400000);
        } else if (ti <= 2000000) {
            it = 130000 + 0.30 * (ti - 800000);
        } else if (ti <= 8000000) {
            it = 490000 + 0.32 * (ti - 2000000);
        } else {
            it = 2410000 + 0.35 * (ti - 8000000);
        }

        // Display the result
        document.getElementById("incometax").value = it.toFixed(2);
    });

    document.getElementById("clear").addEventListener("click", function () {
        document.getElementById("tax").value ='';
        document.getElementById("incometax").value ='';
    });
