export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key));
  };

// creating a task

export const createTask = ({
  state , department , task , subtask , assingee , taskdescription
}) => {
  const newItem = {
    id: Math.floor((Math.random() * 99999999) + 1) ,
    createdAt : Date.now() ,
    state : state ,
    department : department ,
    task : task , 
    subtask : subtask ,
    assingee : assingee ,
    taskdescription : taskdescription
    
  }

  const existingTasks = fetchData("tasks") ?? [] ;
  return localStorage.setItem("tasks" , JSON.stringify([...existingTasks , newItem]))
}

 // get all items from local storage
  
 export const getItems = ({
  state , tasks}) =>{
    const data = fetchData("tasks");
    if(data)
      return data.filter((item) => item.state === state);
    else return [] 
  };

  // format date

export const formatDateToLocaleString = (epoch) =>
new Date().toLocaleDateString('en-us', {day :"numeric", month:"short"})

// random number generate
 export const ran = () => {
  return Math.floor((Math.random() * 10) + 1);;
 }

 // change task state

 export const changetaskState = (id , tostate) =>{
  console.log('id', id);
  const tasks = fetchData('tasks');
  console.log(tasks);
  const list = tasks.map(item => {
    if(item.id.toString() === id){
      console.log('triggerd');
      
      let it = {...item};
      it.state = tostate;
      return it;
    }
    return item;
  })
  console.log('taagdkas', list);
  localStorage.setItem('tasks', JSON.stringify([...list]))

 }