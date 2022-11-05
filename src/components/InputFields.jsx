import { Stack } from "@mui/material"
import { useState } from "react";


const InputFields = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [error, setError] = useState(false);


  return (
		<form>
			<Stack className="input_fields" direction='column'spacing={2} >
					<Stack direction='row' spacing={2}>
						<Stack>
							<label>First Name </label>
							<input value={firstName} onChange={e => setFirstName(e.target.value )} placeholder='Enter your first name' />
							<span>first name is required</span>
						</Stack>
						
						<Stack>
							<label>Last Name</label>
							<input value={lastName} onChange={e => setLastName (e.target.value)} placeholder='Enter your last name' />
							<span>last name is required</span>
						</Stack>
					</Stack>
					<Stack>
							<label>Email</label>
							<input value={email} onChange={e => setEmail (e.target.value)} placeholder='yourname@email.com' type='email' required/>
					</Stack>
					<Stack>
						<label>Message</label>
						<input value={message} onChange={e => setMessage (e.target.value)} placeholder="Send me a message and I'll reply you as soon as possible..." type='email' />
						<span>Please enter a message</span>
					</Stack>
					<Stack direction='row'>
						<input type='checkbox'/> <span>You agree to providing your data to Eniola who may contact you.</span>
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