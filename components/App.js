import React, {useEffect} from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import ContainerPeople from '../containers/ContainerPeople'


const App = () => {
  return (
  <div>
    <ContainerPeople/>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)}

 
export default App
 