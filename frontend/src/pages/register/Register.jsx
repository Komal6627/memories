import { Link } from "react-router-dom"
import "./register.scss"

const Register = () => {
  return (
    <div className="register">
          <div className="card">
            <div className="left">
                <h1>Social App</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae culpa sed numquam officia, commodi animi voluptatum eum sequi labore amet molestiae maiores eius vel pariatur qui accusantium odit quas quos!</p>
                <span>Do you have account?</span>
                <Link to="/login">
                     <button>Login</button>
                </Link>
            </div>
            <div className="right">
                <h1>Register</h1>
                <form>
                    <input type="text" placeholder="Username" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="text" placeholder="Name" />
                    <button>Register</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register