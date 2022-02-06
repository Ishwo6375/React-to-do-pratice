
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
   <header>
     <h1>Ish's Todo List</h1>
     <Form />
     <TodoList />
   </header>
    </div>
  );
}

export default App;
