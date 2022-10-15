import React from 'react';

const RegisterBootstrap = () => {
    const handleSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.taget.password.value;
        console.log(email, password);
    }

    return (
        <div className='w-50 mx-auto my-5'>
            <h3 className='text-primary'>From Booststrap</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input name='email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input name='password' type="password" className="form-control" id="exampleInputPassword1" />
                </div>

                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    );
};

export default RegisterBootstrap;