/*eslint-disable */

import { Link } from 'react-router-dom'
import styles from './SignUp.module.css'

import SideImage from "../images/SideImage.png"
import Google from "../images/Icon-Google.png"

function SignUp() {
    return(
        <div className={styles.Container}>
            <img src={SideImage} alt="" />
            <form action="">
                <h1>Create an account</h1>
                <p>Enter your details below</p>
                <input type="text" placeholder='Name' />
                <input type="text" placeholder='Email or Phone Number' />
                <input type="text" placeholder='Password' />
                <button className={styles.create}>Create Account</button>
                <button className={styles.signUp}> <img src={Google} alt="" /><p>Sign up with Google</p></button>
                <p className={styles.logIn}>Already have account? <Link to="/Login"><span>Log in</span></Link></p>
            </form>
        </div>
    )
}

export default SignUp