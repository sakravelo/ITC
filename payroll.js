let payroll = [];

      // Event listener for adding an employee
      document.getElementById("btnadd").addEventListener("click", function() {
        let name = document.getElementById("empname").value;
        let daysWorked = document.getElementById("empdays").value * 1;
        let dailyRate = document.getElementById("empdaily").value * 1;
        let deduction = document.getElementById("empdeduction").value * 1;

        if (name && daysWorked > 0 && dailyRate > 0 && deduction >= 0) {
          let grossPay = (daysWorked * dailyRate).toFixed(2);
          let netPay = (grossPay - deduction).toFixed(2);

          let employee = {
            name: name,
            daysworked: daysWorked,
            dailyrate: dailyRate,
            grosspay: grossPay,
            deduction: deduction,
            netpay: netPay,
          };

          payroll.push(employee);
          showEmployees();
          // Reset inputs after adding
          document.getElementById("empname").value = '';
          document.getElementById("empdays").value = '';
          document.getElementById("empdaily").value = '';
          document.getElementById("empdeduction").value = '';
        } else {
          alert("Please fill out all fields correctly.");
        }
      });

      // Event listener for deleting an employee
      document.getElementById("btndelete").addEventListener("click", function() {
        let empNum = document.getElementById("delemployee").value * 1 - 1;

        if (empNum >= 0 && empNum < payroll.length) {
          document.getElementById("dlgmsg").innerHTML = "Delete the employee " + (empNum + 1) + " " + payroll[empNum].name + "?";
          document.getElementById("dlgConfirmCancel").showModal();
        } else {
          alert("Invalid employee number.");
        }
      });

      // Event listener for confirming deletion
      document.getElementById("btnConfirm").addEventListener("click", function() {
        let empNum = document.getElementById("delemployee").value * 1 - 1;
        payroll.splice(empNum, 1);
        showEmployees();
        document.getElementById("delemployee").value = '';
        document.getElementById("dlgConfirmCancel").close();
      });

      // Event listener for canceling deletion
      document.getElementById("btnCancel").addEventListener("click", function() {
        document.getElementById("delemployee").value = '';
        document.getElementById("dlgConfirmCancel").close();
      });

      // Show employees in table
      function showEmployees() {
        let tb = "";
        let lno = 1;
        let tgpay = 0.00, tded = 0.00, tnetpay = 0.00;

        payroll.forEach(emp => {
          let trec = "<tr>"
            + '<td style="text-align:right">' + lno.toFixed(0) + "</td>"
            + "<td>" + emp.name + "</td>"
            + '<td class="ndata">' + emp.daysworked.toFixed(2) + "</td>"
            + '<td class="ndata">' + emp.dailyrate.toFixed(2) + "</td>"
            + '<td class="ndata">' + emp.grosspay + "</td>"
            + '<td class="ndata">' + emp.deduction.toFixed(2) + "</td>"
            + '<td class="ndata">' + emp.netpay + "</td>"
            + "</tr>";

          tb += trec;
          tgpay += emp.grosspay * 1;
          tded += emp.deduction;
          tnetpay += emp.netpay * 1;
          lno++;
        });

        document.getElementById("tablebody").innerHTML = tb;

      }

      document.addEventListener("DOMContentLoaded", function() {
        let emp1 = {
          name: "Dave Davis Davidson",
          daysworked: 10.00,
          dailyrate: 500.00,
          grosspay: (10.00 * 500.00).toFixed(2),
          deduction: 100.00,
          netpay: ((10.00 * 500.00) - 100.00).toFixed(2),
        };
        payroll.push(emp1);

        let emp2 = {
          name: "Bob Babbage",
          daysworked: 12.00,
          dailyrate: 600.00,
          grosspay: (12.00 * 600.00).toFixed(2),
          deduction: 200.00,
          netpay: ((12.00 * 600.00) - 200.00).toFixed(2),
        };
        payroll.push(emp2);

        let emp3 = {
          name: "John Johnson",
          daysworked: 15.00,
          dailyrate: 550.00,
          grosspay: (15.00 * 550.00).toFixed(2),
          deduction: 200.00,
          netpay: ((15.00 * 550.00) - 200.00).toFixed(2),
        };
        payroll.push(emp3);

        showEmployees();
      });