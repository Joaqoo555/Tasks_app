import './App.css'
import { useAppSelector, useAppDispatch } from './app/hooks'


function App() {
  const dispatch = useAppDispatch()
  const tasks = useAppSelector((state)=> state.tasks)
  console.log(tasks);
  return (
    <div className="App">
      
    </div>
  )
}

export default App
