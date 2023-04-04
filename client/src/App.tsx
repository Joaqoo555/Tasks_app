import './App.css'
import { useGetAllTasksQuery } from './apis/tasksApi'
import { useAppSelector, useAppDispatch } from './app/hooks'


function App() {
  // const dispatch = useAppDispatch()
  // const tasks = useAppSelector((state)=> state.tasks)
  // console.log(tasks);

  //const {data, error, isError, isLoading} = useGetAllTasksQuery()

  console.log(useGetAllTasksQuery());
  return (
    <div className="App">
      
    </div>
  )
}

export default App
