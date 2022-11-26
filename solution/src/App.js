import { useFormik } from 'formik';

function App() {
  const validate = values => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'First Name is Required';
    } 
  
    if (!values.lastName) {
      errors.lastName = 'Last Name is Required';
    } 
  
    if (!values.email) {
      errors.email = 'Email is Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.password) {
      errors.password = 'Password is Required';
    } 
  
  
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      firsName: "",
      lastName: "",
      email: "",
      password:"",
    },
    validate,
    onSubmit: values => {
      alert("Form successfully submitted");
    },
  });

  return (
    <>
    <div className="showcase">
      <div className="overlay">
        <article>
          <h1>Learning to code by watching others</h1>
          <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
  but understanding how developers think is invaluable. </p>
        </article>
        <article>
          <p className="tag"><strong>Try it free 7 days</strong> the $20/mo.thereafter</p>

          <form  className="form" onSubmit={formik.handleSubmit}>
            <input type="text" name="firstName" id="firstName" placeholder="First Name" 
             onChange={formik.handleChange}
             value={formik.values.firstName}
            />
            {formik.errors.firstName ? <div className='red'>{formik.errors.firstName}</div> : null}
            <input type="text" name="lastName" id="lastName" placeholder="Last Name"
             onChange={formik.handleChange}
             value={formik.values.lastName} />
             {formik.errors.lastName ? <div className='red'>{formik.errors.lastName}</div> : null}
            <input type="email" name="email" id="email" placeholder="Email Address"
             onChange={formik.handleChange}
             value={formik.values.email} />
             {formik.errors.email ? <div className='red'>{formik.errors.email}</div> : null}
            <input type="password" name="password" id="password" placeholder="Password" 
             onChange={formik.handleChange}
             value={formik.values.password}/>
             {formik.errors.password ? <div className='red'>{formik.errors.password}</div> : null}
            <button type="submit">CLAIM YOUR FREE TRIAL</button>
            <small>By clicking the button, you are agreeing to our <span >Terms and Services</span></small>
          </form>
        </article>
      </div>
    </div>
    
    
    
    </>
  );
}

export default App;
