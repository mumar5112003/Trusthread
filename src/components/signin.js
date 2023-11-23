import React, { useState, useRef } from 'react';

function Signin() {
    const [isRegistration, setIsRegistration] = useState(false);

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);
    const fullNameRef = useRef(null);

    const toggleForm = () => {
        setIsRegistration(!isRegistration);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const emailValue = emailRef.current.value;
        const passwordValue = passwordRef.current.value;

        if (isRegistration) {
            const confirmPasswordValue = confirmPasswordRef.current.value;
            const fullNameValue = fullNameRef.current.value;

            alert(`You have registered!\nEmail: ${emailValue}\nPassword: ${passwordValue}\nConfirm Password: ${confirmPasswordValue}\nFull Name: ${fullNameValue}`);
            setIsRegistration(false); // Switch back to sign in form
        } else {
            // Perform login logic here
            alert(`You have logged in!\nEmail: ${emailValue}\nPassword: ${passwordValue}`);
        }
    }

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <form className="border p-4" style={{maxWidth: '500px', width: '100%'}} onSubmit={handleFormSubmit}>
                <h2 className="mb-4">{isRegistration ? 'Register' : 'Sign In'}</h2>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="name@example.com" ref={emailRef} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" ref={passwordRef} />
                </div>
                {isRegistration && (
                    <>
                        <div className="mb-3">
                            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" id="confirmPassword" ref={confirmPasswordRef} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="fullName" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="fullName" ref={fullNameRef} />
                        </div>
                    </>
                )}
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="rememberMe" />
                    <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
                </div>
                <div className="d-grid gap-2">
                    <button className="btn btn-dark" type="submit">
                        <span style={{color : "#FFDE59"}}>{isRegistration ? 'Register' : 'Log In'}</span>
                    </button>
                    <button className="btn btn-dark" type="button" onClick={toggleForm}>
                        <span style={{color : "#FFDE59"}}>{isRegistration ? 'Back to Sign In' : 'Register'}</span>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Signin;
