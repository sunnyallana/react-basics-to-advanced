import {useFormik, Formik} from "formik"

export default function FormikComponent() {
    
    function validateFunction(values) {
        const errors = {}
        if (!values.username) {
            errors.username = 'Required'
        } else if (values.username.length > 15) {
            errors.username = 'Must be 15 characters or less'
        }
        else if (values.username.length < 5) {
            errors.username = 'Must be 5 characters or more'
        }
        return errors;
    }
    
    
    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        },
        validate: validateFunction
    })
    
    return(
        <div>
            <form onSubmit={formik.handleSubmit}>
            <dl>
                <dt>Username</dt>
                <dd><input type="text" name="username" value={formik.values.username} onChange={formik.handleChange} required /></dd>
                <dd className="text-danger">{formik.errors.username}</dd>
                <dt>Password</dt>
                <dd><input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} required /></dd>
            </dl>
            <button type="submit">Submit</button>

            <h2>{formik.values.username} <br></br> {formik.values.password}</h2>
        </form>
        </div>
    )


}