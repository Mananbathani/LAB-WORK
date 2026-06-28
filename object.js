// ---------- QUESTION:-1 ----------


        var student = {
            RollNumber: 12,
            Name: "Manan",
            Course: "Full Stack Development",
            Marks: 38

        }

        // 1. Display all student details.

        console.log("Display All Students Details:-", student);

        // 2. Update the marks.

        student.Marks = 44;

        console.log("Update the marks:-", student);


        // 3. Add a new property `grade`.

        student.grade = "A";
        console.log("Add Grade:-", student);


        // 4. Delete the `course` property.

        delete student.Course;
        console.log("Delete The Course:-", student);


        // ---------- QUESTION:-2 ----------

        var product = {

            ProductId: 9788734093413,
            ProductName: "Books",
            ProductPrice: 110,
            ProductStock: 45,

            // Productinfo Methode 

            productinfo: function () {

                console.log(`ProductId:${this.ProductId},ProductName:${this.ProductName},ProductPrice:${this.ProductPrice},ProductStock:${this.ProductStock}`)

            }

        }

        //1. Display product details.

        console.log("Display All Products Details:-", product);

        //2. Change the price.

        product.ProductPrice = 90;
        console.log("Change Products Price:-", product);

        // 3. Add a property `category`.

        product.ProductCatagory = "Since";
        console.log("Add Product Catagory:-", product);

        // 4. Remove the `stock` property.

        delete product.ProductStock;
        console.log("Delete Products Stock:-", product);

        // 5. Create a method `productInfo()` that displays all product information.

        console.log("Product Information:-");
        product.productinfo();


        // ---------- QUESTION:-3 ----------


        var employee = {

            EmployeeId: 1101,
            EmployeeName: "Denish",
            EmployeeDepartment: "IT",
            EmployeeSalary: 20000,

            showDetails: function () {

                console.log(`EmployeeId:${this.EmployeeId},EmployeeName:${this.EmployeeName},EmployeeDepartment"${this.EmployeeDepartment}, EmployeeSalary:${this.EmployeeSalary},EmployeeExperience:${this.EmployeeExperience}`)
            }
        }

        // // 1. Display employee details.

        console.log("Display employee details:-", employee);


        // // 2. Increase salary by 10%.

        employee.EmployeeSalary = employee.EmployeeSalary + (employee.EmployeeSalary * 10 / 100);
        console.log("Increase salary by 10%:", employee);

        // // 3. Add a property `experience`.

        employee.EmployeeExperience = "3 Years";
        console.log(employee);


        // // 4. Delete the `department` property.

        delete employee.EmployeeDepartment;
        console.log("Delete the department:-", employee);



        // // 5. Create a method `showDetails()` to display employee information.

        console.log("Employee information:-");
        employee.showDetails();


        // ---------- QUESTION:-4 ----------


        var Account = {

            AccountNumber: 36376499291,
            HolderName: "Alpesh",
            AccountBalance: 25000,

            checkbalance: function () {

                console.log(`Current Balance:${this.deposit}`)

            }

        }


        // 1. Display account details.

        console.log("Display Account details:-", Account);

        // 2. Deposit ₹5000 into the balance.

        Account.deposit = Account.AccountBalance + 5000;
        console.log("Add deposit :-", Account);



        // 3. Add a property `accountType`.

        Account.AccountType = "SavingAccount";
        console.log("Add AccountType:-", Account);

        // 4. Delete the `accountType` property.

        delete Account.AccountType;
        console.log("Delete AccountType:-", Account);


        // 5. Create a method `checkBalance()` that displays the current balance.

        console.log("Current Account balance:-")
        Account.checkbalance();



        // ---------- QUESTION:-5 ----------


        var Movie = {

            Moviename: "The Jungle Book",
            TicketPrice: 320,
            AvailableSeats: 50,
            TheatreName: "Connplex Cinemas",

            Movienfo: function () {

                console.log(`MovieName:-${this.Moviename},TicketPrice:-${this.TicketPrice},AvailableSeats:-${this.AvailableSeats},TheatreName:-${this.TheatreName},ShowTime:-${this.showTime}`)
            }

        }

        // 1. Display movie details.

        console.log("Movie Details:-", Movie);


        // 2. Update the ticket price.

        Movie.TicketPrice = 500;
        console.log("Update Price:-", Movie);


        // 3. Add a property `showTime`.

        Movie.showTime = "9:00 to 11:30";
        console.log("ShowTime:-", Movie);

        // 4. Delete the `theatreName` property.

        delete Movie.TheatreName;
        console.log("Delete TheatreName:-", Movie);

        // 5. Create a method `movieInfo()` that displays complete movie information.

        console.log("Movie Information:-");
        Movie.Movienfo();