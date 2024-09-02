/*eslint-disable */

import styles from './Login.module.css'

import SideImage from "../images/SideImage.png"

function Login() {
    return(
        <div className={styles.Container}>
            <img src={SideImage} alt="" />
            <form action="">
                <h1>Log in to Exclusive</h1>
                <p>Enter your details below</p>
                <input type="text" placeholder='Email or Phone Number' />
                <input type="text" placeholder='Password' />
                <div>
                    <button>Log In</button>
                    <p className={styles.forgetPassword}>Forget Password?</p>
                </div>
            </form>
        </div>
    )
}

export default Login