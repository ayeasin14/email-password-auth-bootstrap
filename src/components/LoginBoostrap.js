import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../firebase/firebase.init';

const auth = getAuth(app);

const LoginBoostrap = () => {
    const [success, setSuccess] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const handleSubmit = event => {
        event.preventDefault();
        setSuccess(false);

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess(true);
                form.reset();
            })
            .catch(error => {
                console.error('error: ', error);

            })
    }

    const handleEmailBlur = event => {
        const email = event.target.value;
        setUserEmail(email);
        console.log(email);
    }

    const handleForgetPassword = () => {
        if (!userEmail) {
            alert('Please enter your email address.');
            return;
        }

        sendPasswordResetEmail(auth, userEmail)
            .then(() => {
                alert('Password reset email sent. Please check your email')
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className='w-50 mx-auto my-5'>
            <h3 className='text-success'>Please Log In !!</h3>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Email address</label>
                    <input onBlur={handleEmailBlur} name='email' type="email" className="form-control" id="formGroupExampleInput" placeholder="Email address" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Password</label>
                    <input name='password' type="password" className="form-control" id="formGroupExampleInput2" placeholder="Password" required />
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
            {
                success && <p className='text-success'>Successfully Log in your account</p>
            }
            <small><p>New to this website? Please <Link to='/register'> Register</Link> </p></small>
            <small> <p>Forgot your password? <button onClick={handleForgetPassword} type="button" className="btn btn-link">Reset Password</button></p></small>
        </div >
    );
};

export default LoginBoostrap;