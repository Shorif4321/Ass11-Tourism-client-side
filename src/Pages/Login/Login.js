import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { error, singInUsingGoogle } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_Uri = location.state?.from || '/home';

    const landleGoogleLogin = () => {
        singInUsingGoogle()
            .then(result => {
                history.push(redirect_Uri)
            })
    }



    return (
        <div className="container w-75">
            <h2 className="text-secondary mt-3">Please Login</h2>
            <h3 className="text-danger mt-3">{error}</h3>
            <div className="mb-3 text-start mt-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input onBlur="" type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Email@gmail.com" required />
            </div>

            <div className="mb-3 text-start">
                <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                <input onBlur="" type="password" className="form-control" id="exampleFormControlInput1" placeholder="Type your Valid password" />

                <div className="mt-3 d-md-flex">
                    <button onClick="" className=" btn btn-primary me-3">Sign In</button>

                </div>
            </div>

            <div className="py-3 mb-3">
                <button onClick={landleGoogleLogin} className="buttonAll"><i className="fab fa-google"></i> Sign In With Google </button>
            </div>
        </div>
    );
};

export default Login;