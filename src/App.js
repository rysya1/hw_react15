import ToDo from './components/Todo/ToDo'
import ToDoForm from './components/Todoform/TodoForm'
import './App.css'
import { Component } from 'react'
class App extends Component {
	constructor() {
		super()
		this.state = {
			todos: [],
		}
	}

	addTask = (userInput) => {
		const newItem = {
			id: Math.random().toString(),
			task: userInput,
			complete: false,
		}
		this.setState({ todos: [...this.state.todos, newItem] })
		console.log(this.state.todos)
	}
	componentDidUpdate() {
		const localData = localStorage.getItem('data')
		this.setState(JSON.parse(localData) || [])
	}
	componentDidUpdate(){
		localStorage.setItem('data', JSON.stringify(this.state.todos))
	}
	removeTask = (id) => {
		this.setState({
			todos: [...this.state.todos.filter((todo) => todo.id !== id)],
		})
	}
	render() {
		return (
			<div className='App'>
				<header>
					<h1>
						Список задач: {this.state.todos.length}{' '}
						<img
							className='imgTask'
							src='https://cdn-icons.flaticon.com/png/512/1069/premium/1069189.png?token=exp=1645091359~hmac=ff4e5f933cc7bfab4576a9846e5a01c5'
							alt=''
						/>
					</h1>
				</header>
				<ToDoForm addTask={this.addTask} />
				{this.state.todos.map((todo) => {
					return (
						<ToDo
							todo={todo}
							key={todo.id}
							removeTask={this.removeTask}
						/>
					)
				})}
			</div>
		)
	}
}

export default App
