import './TodoForm.css'
import Modal from '../Todo/Modal.jsx'
import { Component } from 'react'

class ToDoForm extends Component {
	constructor() {
		super()
		this.state = {
			userInput: '',
			modalTodo: null,
		}
	}
	handleChange = (e) => {
		this.setState({ userInput: e.currentTarget.value })
	}

	handleSubmit = (e) => {
		e.preventDefault()
		if (this.state.userInput.length === 0) {
			this.setState({
				modalTodo: {
					title: 'Модальное окно',
					message: 'Заполните строку',
				},
			})
			return
		}
		this.props.addTask(this.state.userInput)
	}

	render() {
		const ErrorHandler = () => {
			this.setState({ modalTodo: null })
		}
		return (
			<>
				{this.state.modalTodo && (
					<Modal
						title={this.state.modalTodo.title}
						message={this.state.modalTodo.message}
						onConfirm={ErrorHandler}
					/>
				)}
				<form onSubmit={this.handleSubmit}>
					<input
						type='text'
						value={this.state.userInput}
						onChange={this.handleChange.bind(this)}
						placeholder='Введите значение...'
					/>

					<button className='btn'>Сохранить</button>
				</form>
			</>
		)
	}
}

export default ToDoForm
