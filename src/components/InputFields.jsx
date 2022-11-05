import { Stack } from "@mui/material"
import { useState } from "react";
import Toast from "./Toast";

const InputFields = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [checkBox, setCheckBox] = useState(false)
	const [error, setError] = useState(false);
	const [open, setOpen] = useState(false)

	const handleSubmit = (e) => {
		e.preventDefault()
		if (firstName.length === 0 ||
			lastName.length === 0 ||
			message.length === 0 ||
			email.length === 0 ||
			checkBox === false) {
			setError(true)
			setOpen(false)
		}else {
			setFirstName('')
			setLastName('')
			setCheckBox(false)
			setMessage('')
			setEmail('')
			setOpen(true)
			setError(false)
		}
	}

	const handleClose = (e, reason) =>{
		if(reason === 'clickaway'){
			return;
		}else if (error === true){
			setOpen(false)
		}{
			setOpen(false)
		}
	}

  return (
	<Stack direction='row'  className="input_fields">
		<form onSubmit={handleSubmit} >

			<Stack direction='column'spacing={3} >

					<Stack direction='row' spacing={2}>
						<Stack>
							<label>First Name </label>
							<input id='first_name' value={firstName} onChange={e => setFirstName(e.target.value )} placeholder='Enter your first name' />
							{error && firstName.length <= 0
								? <span>First name is required</span>
								: ''}
						</Stack>
						
						<Stack>
							<label>Last Name</label>
							<input id='last_name' value={lastName} onChange={e => setLastName (e.target.value)} placeholder='Enter your last name' />
							{error && lastName.length <= 0
								? <span>Last name is required</span>
								: ''
							}
						</Stack>
					</Stack>
					<Stack>
							<label>Email</label>
							<input id='email' className='email_input' value={email} onChange={e => setEmail (e.target.value)} placeholder='yourname@email.com' type='email'/>
							{error && email.length === 0
							? <span>* Email is required</span>
							: ''
						}
					</Stack>
					<Stack className='message_div' >
						<label>Message</label>
						<textarea id='message' value={message} className='message_input' onChange={e => setMessage (e.target.value)} placeholder="Send me a message and I'll reply you as soon as possible..."/>
						{error && message.length <= 0
							? <span>Please enter a message</span>
							: ''
						}
					</Stack>
					<Stack direction='column'>
						<Stack direction='row' className='checkBox_div'  spacing={1}>
							<input value={checkBox} onChange={e => setCheckBox(!checkBox)} type='checkbox'/> <p className='checkBox_para' >You agree to providing your data to Eniola who may contact you.</p>
						</Stack>
						{error && checkBox === false
							? <span>* This is required</span>
							: ''
						}
					</Stack>
					<Stack>
						<button id='btn__submit'>
							Send message
						</button>
						<Toast value={open} hide={4000} close={handleClose}/>
					</Stack>
			</Stack>
		</form>
	</Stack>
  )
}

export default InputFields