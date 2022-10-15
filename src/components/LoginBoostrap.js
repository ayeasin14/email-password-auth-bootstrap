import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router-dom';

const LoginBoostrap = () => {
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);


    }

    return (
        <div className='w-50 mx-auto my-5'>
            <h3 className='text-success'>Please Log In !!</h3>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Email address</label>
                    <input name='email' type="email" className="form-control" id="formGroupExampleInput" placeholder="Email address" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Password</label>
                    <input name='password' type="password" className="form-control" id="formGroupExampleInput2" placeholder="Password" required />
                </div>
                <button class="btn btn-primary" type="submit">Submit</button>
            </form>
            <p>New to this website? Please <Link to='/register'> Register</Link> </p>
        </div >
    );
};

export default LoginBoostrap;