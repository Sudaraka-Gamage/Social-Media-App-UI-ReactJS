import "./register.css";

export default function Register() {
    return (
        <div className="login">
            <div className="loginWrapper">

                <div className="loginLeft">
                    <h3 className="loginLogo">MySpace-Social</h3>
                    <span className="loginDesc">
                        Connects with the friends and world around you on MySpace-Social.
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Email" type="text" className="loginInput" />
                        <input placeholder="User Name" type="text" className="loginInput" />
                        <input placeholder="Password" type="text" className="loginInput" />
                        <input placeholder="Confirm Password" type="text" className="loginInput" />
                        <button className="loginButton">Sign Up</button>
                        <button className="loginRegisterButton">
                            Log into Your Account
                        </button>
                    </div>
                </div>

            </div>      
        </div>
    )
}
