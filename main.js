#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
let todolist = [];
let conditions = true;
console.log(chalk.yellow.bold("\n \t welcome to codewithmariya - Todo-list Application"));
while (conditions) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your New Task :"
        }
    ]);
    todolist.push(addTask.task);
    console.log(`${addTask.task} Task added in Todo-list sucessfully`);
    let addMoreTask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: "Do you want to add more task ?",
            default: "False",
        }
    ]);
    conditions = addMoreTask.addmore;
}
console.log("your updated Todo-list:", todolist);
