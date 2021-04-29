let inputBox=document.querySelector(".input-box");  // from here we are selecting input-box content using document which is having all html contents
let taskList=document.querySelector(".task-list");
console.log("Before");

inputBox.addEventListener("keypress",function(e)  // this is an async function  * using addEventListener we have the access of all events and we could know that which key is pressed and we can do all the work which we want. keypress is  keyword which gives us events about which key is pressed and all the information about that event is in "e" which is passed in function.
{
    console.log("Inside function");
    
    console.log(e);   // this will give you the information of all you have pressed the key you can see it in your browser console.
   
    if(e.key=="Enter"&& inputBox.value!="")       // e.key is having the information that which key is pressed in input-box.
    {
    console.log("content is",inputBox.value);  // here we are accessing the inputbox value so that we can use all we want.
    
    let task=inputBox.value;    // in this line we are storing the value which is written in input box in task.
    
    let taskElem=document.createElement("li");  // using document.createElement we can create any type of element so here we are creating li element using this and this property is stored in taskElem.
    
    taskElem.setAttribute("class","task"); // and here we are setting attr. using .setAttribute which is key value pair type . here we are adding class which is task so we can say that class is key and value is task.
    
    taskElem.innerText=task;  // here we are adding text to li tag . If you will see carefully here we did not used taskElem.value to add new text because value is for input box but for paragraph tag / for li tag we use .innerText.
    
    taskList.appendChild(taskElem); // here we are appending the li tag as a child in task-list class. to add this child firstly you should have the access of that class so for getting access we write the 2nd line of code .
    
    inputBox.value="";  // here we are setting the value as empty in input box because after geeting the value we don't need to see the same text in input box.


        // features 
        // 1. if we double click  on the text which is added in task so it should be deleted.
    taskElem.addEventListener("dblclick",function(){
        taskElem.remove();// this remove function will remove the li elem from your task lists.
    })
    }
})