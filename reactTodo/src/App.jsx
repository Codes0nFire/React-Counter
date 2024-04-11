import { useState } from "react"
import 'remixicon/fonts/remixicon.css'


function App() {


  
  
var [title,settitle]= useState("");
var [task,settask] =useState([]);


//handleing The Submit functionality
function submitHandler(event){
  event.preventDefault();
  let newTask={title,completed:false};
  
  settitle("");

  settask([...task,newTask]);

}

//checkboxHandler

function checkboxHandler(e,i){
 

  e.target.classList.toggle(`bg-green-500`);
  e.target.classList.toggle(`border`);
  e.target.nextSibling.classList.toggle(`line-through`);

  let copyTasks = [...task];
   copyTasks[i].completed = !task[i].completed;
        settask(copyTasks);


        // console.log(task);

}

let doneTask=task.filter((t) => t.completed === true).length
// console.log(doneTask)


var taskRender= <h1>ADD SOME TASKS </h1> 
//rendering by using map method
if(task.length>0){
  taskRender = task.map((task,index)=>{
    
    // console.log(elem,index);
    // console.log(`task is ${task.title},index is: ${index}`);
    return (
       <li key={index} className=" text-2xl shadow-lg bg-slate-700 leading-6 px-4 py-2 my-3
        flex items-center justify-between gap-8" >
       <div className="flex items-center gap-2">
        <div onClick={(e)=>checkboxHandler(e,index)} className="checkbox w-6 h-6 rounded-full border"></div>
       <p className="font-light text-xl " >{task.title.toUpperCase()}</p>
       </div>
        <div>
        <i className=" text-lg ri-pencil-line px-2 cursor-pointer"></i>
        <i className= " text-lg ri-delete-bin-6-fill cursor-pointer "></i>
        </div>
       </li>
    ) 

  })
}


  return (
    <>

    <div 
     className="    flex gap-5 items-center justify-center w-screen h-screen bg-slate-600 flex-col text-white" >

      <h1 className="text-white text-8xl" >Todo {doneTask}/{task.length}</h1>

      <form onSubmit={submitHandler} className="flex gap-3 flex-col items-center justify-center" >
        <input
        required
         className="text-black border-none outline-none py-3 px-10" 
         type="text"
         placeholder="enter your task"
         value={title}
          onChange={(e)=>{
            // console.log(e.target.value);
            return settitle(e.target.value);
            //for two wy binding purpose
          }}
        
         /> 
        <button className="px-6 py-2 rounded-lg border border-white">Add</button>
      </form>

      <h1 className="text-white text-6xl ">Tasks</h1>

      <ul>
       {taskRender}
      </ul>


    </div>
     
    </>
  )
}

export default App
