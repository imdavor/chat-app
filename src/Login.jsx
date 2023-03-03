import React from "react";

export const Login = () => {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>ŠČat</span>
                <span className='title'>Register</span>
                <form>
                    <input
                        type='email'
                        placeholder='email'
                    />
                    <input
                        type='password'
                        placeholder='password'
                    />

                    <button>Sign in</button>
                </form>
                <p>You dont have an account? Register</p>
            </div>
        </div>
    );
};
