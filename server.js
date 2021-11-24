const express = require('express');
const mysql = require('mysql2');
const input = require('input');
const inquirer = require('inquirer');
const cTable = require('console.table');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const choices = ['View all Employees', 'View all Roles', 'View all Departments', 'Add an Employee', 'Add a Role', 'Add a Department', 'Update an Employee']
var roleIds;
var selection = 0;
var done = false;
var temp = [];

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'onelovefamily',
      database: 'employer_db'
    },
    console.log('Connection to the data base successful')
);
const view = (table) => {
    if(table == 1){
        let sql = `SELECT * FROM employee;`;
        db.execute(sql, function(err, result) {
            
            if(err) throw err;
            /*console.log(result);*/
            result.forEach((res) => {
                let table = cTable.getTable(res);
                console.log(table);
            })

            input.confirm('Would you like to complete another task?').then((response) => {
                console.log(response);
                if(response == false){  
                    done = true 
                }
                run();
            });

        });  
    }

    if(table == 2){
        let sql = `SELECT * FROM role;`;
        db.execute(sql, function(err, result) {
            
            if(err) throw err;
            /*console.log(result);*/
            result.forEach((res) => {
                let table = cTable.getTable(res);
                console.log(table);
            })
            input.confirm('Would you like to complete another task?').then((response) => {
                console.log(response);
                if(response == false){  
                    done = true 
                }
                run();            
            });
            
        }); 
    }
    
    if(table == 3){
        let sql = `SELECT * FROM department;`;
        db.execute(sql, function(err, result) {
            
            if(err) throw err;
            /*console.log(result);*/
            result.forEach((res) => {
                let table = cTable.getTable(res);
                console.log(table);
            })
            input.confirm('Would you like to complete another task?').then((response) => {
                console.log(response);
                if(response == false){  
                    done = true 
                }
                run();
            })
            
        }); 
    }

};
const add = (oneOfThree) => {
    if(oneOfThree == 1){
        console.log(temp);
        for(var j = 0; j < 2; j++){

            if(j == 1){
                console.log('in j = 1');
                var sql = "INSERT INTO `employer_db`.`employee` (`first_name`, `last_name`, `role_id`, `manager_id`) VALUES ('"+`${temp[0]}`+"', '"+`${temp[1]}`+"', '"+`${temp[2]}`+"', '"+`${temp[3]}`+"');"
                ;
                
            }

            if(j == 0){
                console.log('in j = 0');
                var sql = "SELECT * FROM `employer_db`.`employee`;"
                ;
            }
            
            db.execute(sql, function(err, result) {

                if(err) throw err;
                (res, result) => {
                    let table = cTable.getTable(res);
                   // console.log(table);
                };
            });  
        }
        input.confirm('Would you like to complete another task?').then((response) => {
            console.log(response);
            if(response == false){  
                done = true;
                
            }
        }).then(() => run())
    }

    if(oneOfThree == 2){
        console.log(temp);
        for(var j = 0; j < 2; j++){

            if(j == 1){
                console.log('in j = 1');
                var sql = "INSERT INTO `employer_db`.`role` (`title`, `salary`, `department_id`) VALUES ('"+`${temp[0]}`+"', '"+`${temp[1]}`+"', '"+`${temp[2]}`+"');"
                ;
                
            }

            if(j == 0){
                console.log('in j = 0');
                var sql = "SELECT * FROM `employer_db`.`role`;"
                ;
            }
            
            db.execute(sql, function(err, result) {

                if(err) throw err;
                (res, result) => {
                    let table = cTable.getTable(res);
                   // console.log(table);
                };
            });  
        }
        input.confirm('Would you like to complete another task?').then((response) => {
            console.log(response);
            if(response == false){  
                done = true;
                
            }
        }).then(() => run());
    }
    
    if(oneOfThree == 3){
        console.log(temp);
        for(var j = 0; j < 2; j++){

            if(j == 1){
                console.log('in j = 1');
                var sql = "INSERT INTO `employer_db`.`department` (`name`) VALUES ('"+`${temp[0]}`+"');"
                ;
            }

            if(j == 0){
                console.log('in j = 0');
                var sql = "SELECT * FROM `employer_db`.`department`;"
                ;
            }
            
            db.execute(sql, function(err, result) {

                if(err) throw err;
                (res, result) => {
                    let table = cTable.getTable(res);
                   // console.log(table);
                };
            });  
        }
        input.confirm('Would you like to complete another task?').then((response) => {
            console.log(response);
            if(response == false){  
                done = true;
                
            }
        }).then(() => run());
    }
};
const update = () => {
    let sql = "UPDATE `employer_db`.`employee` SET `role_id` = `"+`${temp[2]}`+"` WHERE (`employee`.`first_name` = `"+`${temp[0]}`+"` AND `employee`.`last_name` = `"+`${temp[1]}`+"`);";
    db.execute(sql, (err, result) => {
        if(err) throw err;
        (res, result) => {
            let table = cTable.getTable(res);
           // console.log(table);
        }; 
    })
    input.confirm('Would you like to complete another task?').then((response) => {
        console.log(response);
        if(response == false){  
            done = true;
        }
    })
    .then(() => run());
};
async function selector(selection) {
    if(selection == 0){
        view(1);
    }else if(selection == 1){
        view(2);
    }else if(selection == 2){
        view(3);
    }else if(selection == 3){
        roleIds++;
        let firstName = await input.text('What is the first name of the employee')
        .then(async (response) => {
            temp[0] = response;
        });
        let lastName = await input.text('What is the last name of the employee')
        .then(async (response) => {
            temp[1] = response;
        });
        let role_id = await input.text('What is the role id of the employee')
        .then(async (response) => {
            temp[2] = response;
        });
        let manager_id= await input.text('What is the departmente id of this role(default recomended)',
        {default: roleIds}
        )
        .then(async (response) => {
            temp[3] = response;
        })
        .then((response) => {
            console.log(JSON.stringify(temp));
            add(1);
        });
    }else if(selection == 4){
        let title = await input.text('What is the name of the role.')
        .then(async (response) => {
            temp[0] = response;
        });
        let salary = await input.text('What is the salary for this role.')
        .then(async (response) => {
            temp[1] = response;
        });
        let department_id = await input.text('What is the department id of the employee.')
        .then(async (response) => {
            temp[2] = response;
        }).then((response) => {
            console.log(JSON.stringify(temp));
            add(2);
        });
    }else if(selection == 5){
        let name = await input.text('What is the name of the department')
        .then(async (response) => {
            temp[0] = response;
        })
        .then((response) => {
            console.log(JSON.stringify(temp));
            add(3);
        });
    }else if(selection == 6){
        let firstName = await input.text('What is the first name of the employee')
        .then(async (response) => {
            temp[0] = response;
        });
        let lastName = await input.text('What is the last name of the employee')
        .then(async (response) => {
            temp[1] = response;
        })
        let roleName = await input.text(`What role would you like to assign ${temp[0]} ${temp[1]} `) 
        .then(async (response) => {
            temp[2] = response;
        }).then(() => {
            update();        
        });    
    }else{
        alert("Im sorry but your selection has not been recorded. Please try again.");
        return;
    };
};
async function QnA() {
    task = await input.select( 'What would you like to get done today?', 
        choices
    )
    .then((response) => {
        console.log(response);
        for(let i = 0; i < 7; i++) {
            if(response == choices[i]){
                selection = i;
                selector(selection);
                return;
            }
        }
    });
};
const run = () => 
done == true ? 
console.log('Untill next time. \npress [control] & [c]') : 
QnA();

run();

app.listen(process.env.PORT || 3001);
