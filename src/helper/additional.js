export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key));
  };

// creating a task

export const createTask = ({
  state , department , task , subtask
}) => {
  const newItem = {
    id: crypto.randomUUID() ,
    createdAt : Date.now() ,
    state : state ,
    department : department ,
    task : task , 
    subtask : subtask ,
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