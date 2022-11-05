import { Stack } from "@mui/material"
import { useState } from "react";


const InputFields = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [checkBox, setCheckBox] = useState(false)
	const [error, setError] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault()
		if (firstName.length === 0 ||
			lastName.length === 0 ||
			message.length === 0 ||
			checkBox === false) {
			setError(true)
		}
	}

  return (
		<form onSubmit={handleSubmit} >
			<Stack className="input_fields" direction='column'spacing={2} >
					<Stack direction='row' spacing={2}>
						<Stack>
							<label>First Name </label>
							<input value={firstName} onChange={e => setFirstName(e.target.value )} placeholder='Enter your first name' />
							{error && firstName.length <= 0
								? <span>First name is required</span>
								: ''}
						</Stack>
						
						<Stack>
							<label>Last Name</label>
							<input value={lastName} onChange={e => setLastName (e.target.value)} placeholder='Enter your last name' />
							{error && lastName.length <= 0
								? <span>Last name is required</span>
								: ''
							}
						</Stack>
					</Stack>
					<Stack>
							<label>Email</label>
							<input value={email} onChange={e => setEmail (e.target.value)} placeholder='yourname@email.com' type='email' required/>
					</Stack>
					<Stack>
						<label>Message</label>
						<input value={message} onChange={e => setMessage (e.target.value)} placeholder="Send me a message and I'll reply you as soon as possible..." type='text' />
						{error && message.length <= 0
							? <span>Please enter a message</span>
							: ''
						}
					</Stack>
					<Stack direction='row'>
						<input value={checkBox} onChange={e => setCheckBox(!checkBox)} type='checkbox'/> <p className='check_para' >You agree to providing your data to Eniola who may contact you.</p><br></br>
						{error && checkBox === false
							? <span>* this is required</span>
							: ''
						}
					</Stack>
					<Stack>
						<button>
							Send message
						</button>
					</Stack>
			</Stack>
		</form>
  )
}

export default InputFields