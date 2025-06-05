

const Login = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Chat App</span>
                <span className="title">Login</span>
                <form>
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />
                    
                    <button>Sign Up</button>
                </form>
                {/* <button>Sign Up</button> */}
                <p>You don't have an account? Register</p>
                {/* <form>
                    <input type="text" placeholder="display Name" />
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="Password" />
                    <input type="file" />

                </form> */}

            </div>
        </div>
    )

}

export default Login;