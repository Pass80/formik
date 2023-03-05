import React from 'react';
import './BasicForm.css';
import { useFormik } from 'formik';
import { basicSchema } from '../../schemas/schema';

const onSubmit = () => {
    console.log('suibmitted');
}

const BasicForm = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            lastName: '',
            city: '',
            email: '',
            password: '',
            confirmPassword: '',

        },
        validationSchema: basicSchema,
        onSubmit,
    })
    console.log(formik);
    console.log(formik.errors)
    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="input-container">
                <label htmlFor='name' >Name</label>
                <input id='name' value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter your Name' />
            </div>
            <div className="input-container">
                <label htmlFor='lastName' >Last Name</label>
                <input id='lastName' value={formik.values.lastName} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter your Last Name' />
            </div>
            <div className="input-container">
                <label htmlFor='city' >City</label>
                <input id='city' value={formik.values.city} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter City' />
            </div>
            <div className="input-container">
                <label htmlFor='email' >E-mail</label>
                <input id='email' type='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter your email' className={formik.errors.email && formik.touched.email ? 'input-error' : ''} />
            </div>
            <div className="input-container">
                <label htmlFor='password' >Password</label>
                <input id='password' type='password' value={formik.values.password} onChange={formik.handleChange}
                    onBlur={formik.handleBlur} placeholder='Enter a password ' className={formik.errors.password && formik.touched.password ? 'input-error' : ''} />
            </div>
            <div className="input-container">
                <label htmlFor='confirmPassword' >Password</label>
                <input id='confirmPassword' type='password' value={formik.values.confirmPassword} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='confirm password' className={formik.errors.confirmPassword && formik.touched.confirmPassword ? 'input-error' : ''} />
            </div>
            <button type='submit'>Submit</button>


        </form >
    )
}

export default BasicForm