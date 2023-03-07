import React from "react";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControl/FormsControls";

const Login = (props) => {
    const onSubmit = (FormData) => {
        console.log(FormData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'login'} 
                validate={[required]}
                component={Input} />
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} 
                validate={[required]}
                component={Input} />
            </div>
            <div>
                <Field type={"checkbox"} name={'remember me'} component={Input} /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


export default Login; 