import './App.css'
import {useForm} from 'react-hook-form';
import {useState} from 'react'

function App(){

  const[submission, setSubmission] = useState(false)

  const {register, handleSubmit, formState: {errors}} = useForm()

  const onSubmit =(values)=>{
    console.log(values)
    setSubmission(true)
  }

  return(
    <div className='app'>
      <div className='container'>
        
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        {submission && <p>Registration Successful!</p>}

        <label>First Name:</label>
        <input type='text' name='firstName'{...register("firstName", {required:'First Name is Required!'})}/>
        {errors.firstName && <p>{errors.firstName.message}</p>}

        <label>Last Name:</label>
        <input type='text' name='lastName'{...register("lastName", {required:'Last Name is Required!'})}/>
        {errors.lastName && <p>{errors.lastName.message}</p>}

        <label>Email:</label>
        <input type='email' name='email'{...register("email", {required:'Email is Required!', pattern: {value: /^\S+@\S+$/i,message: "Invalid email"},})}/>
        {errors.email && <p>{errors.email.message}</p>}

        <label>Password:</label>
        <input type='password' name='password'{...register("password", {required:'Password is Required!', minLength:{value:5, message:"Password must be more than 4 characters"},
            maxLength: {value:20, message:"Password must be less than 20 characters"}})}/>
        {errors.password && <p>{errors.password.message}</p>}


        <input type='submit' value="Submit" className='button'/>
        </form>
      </div>

    </div>
  )
}

export default App
