import './Modal.css'
import { Component } from 'react'
class Modal extends Component {
	render() {
		return (
			<>
				<div onClick={this.props.onConfirm} className='backdrop' />
				<div className='modal'>
					<header className='header'>
						<h3>{this.props.title}</h3>
					</header>
					<div className=''>
						<p>
							{this.props.message}{' '}
							<img
								className='strong'
								src='https://www.pinclipart.com/picdir/big/527-5272372_registration-form-icon-png-clipart.png'
								alt=''
							/>
						</p>
					</div>
					<div className='ok'>
						<button onClick={this.props.onConfirm}>Okey</button>
					</div>
				</div>
			</>
		)
	}
}
export default Modal
