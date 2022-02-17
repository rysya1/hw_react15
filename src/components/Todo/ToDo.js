import './ToDo.css'
import { Component } from 'react'
class ToDo extends Component {
	render() {
		return (
			<div key={this.props.todo.id} className='item-todo'>
				<div className='item-todo2'>
					<div>{this.props.todo.task}</div>
					<div
						className='item-delete'
						onClick={() =>
							this.props.removeTask(this.props.todo.id)
						}
					>
						<img src='https://jonmgomes.com/wp-content/uploads/2020/03/Trash-Icon.gif'></img>
					</div>
				</div>
			</div>
		)
	}
}

export default ToDo
