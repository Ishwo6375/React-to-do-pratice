
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
     <h1 className='todo-heading'>Ish's Todo List</h1>
   <header>
   
     <TodoList />
     <Form />
   </header>
    </div>
  );
}

export default App;
