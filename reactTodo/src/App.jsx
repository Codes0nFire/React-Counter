import { useState } from "react"


function App() {


  
  
var [title,settitle]= useState("");
var [task,settask] =useState("");



function submitHandler(event){
  event.preventDefault();
  let newTask={title,completed:false};
  
  settitle("");

  settask([...task,newTask]);


  // console.log(task);


  

}




var taskRender= <h1>No tasks</h1>

if(task.length>0){
  taskRender = task.map((task,index)=>{
    
    // console.log(elem,index);
    return (
       <li key={index} >
        <p>{task.title}</p>
       </li>
    )

  })
}
console.log(taskRender);

  return (
    <>

    <div 
     className="    flex gap-5 items-center justify-center w-screen h-screen bg-black flex-col text-white" >

      <h1 className="text-white text-8xl" >Todo</h1>

      <form onSubmit={submitHandler} className="flex gap-3 flex-col items-center justify-center" >
        <input
         className="text-blue-700 border-none outline-none" 
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
