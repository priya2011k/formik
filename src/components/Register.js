import React from 'react'
import { useFormik } from 'formik'

const Register = () => {

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      chekbox: 'false',
      gender:'',
      city: '',
      phone: '',
    },
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm(values);
    },
  });

  return (
    <div className='text-center body'>

      <h2 className='py-5' style={{color:'rgb(64, 114, 114)'}}>!! Student Registration !!</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className='py-2'>First Name :
          <input id="firstName" name="firstName" type="text" onChange={formik.handleChange} value={formik.values.firstName} className='mx-2'/>
        </div>

        <div className='py-2'>Last Name :
          <input id="lastName" name="lastName" type="text" onChange={formik.handleChange} value={formik.values.lastName} className='mx-2'/>
        </div>

        <div className='py-2'>password :
          <input id="password" name="password" type="password" className='mx-2' onChange={formik.handleChange} value={formik.values.password} />
        </div>

        <div className='py-2'>Email Id :
          <input id="email" name="email" type="email" onChange={formik.handleChange} value={formik.values.email} className='mx-2'/>
        </div>


        <div className='py-2'>Phone No :
          <input name="phone" id='clear' type="text" onChange={formik.handleChange} title='error Message' pattern='[1-9]{1}[0-9]{9}' className='mx-2'/>
        </div>

        <div className='py-2'> Hobby :
          <input type="checkbox" id='clear' name="checkbox" onChange={formik.handleChange} value="writing" className='mx-2' />
          <label>Writing</label>

          <input type="checkbox" id='clear' name="checkbox" onChange={formik.handleChange} value="reding" className='mx-2' />
          <label>Reading</label>

          <input type="checkbox" id='clear' name="checkbox" onChange={formik.handleChange} value="drawing" className='mx-2' />
          <label>Drawing</label>
        </div>

        <div className='py-2 mx-2'> Gender :
          <input type='radio' id='clear' name='gender' value='male' className='mx-2' onChange={formik.handleChange}/>
          <label>Male</label>
          <input type='radio' id='clear' name='gender' value='female' className='mx-2'  onChange={formik.handleChange}/>
          <label>Female</label>
        </div>

        <div className='py-2'>City :
        <select name="city" onChange={formik.handleChange} value={formik.values.city} className='mx-2'>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
          <option value="chennai">Chennai</option>
        </select>
        </div>

        <div className='py-4'>
          <button type="submit" className='btn' style={{backgroundColor:'rgb(64, 114, 114)', color:'#fff'}}>Submit</button>
        </div>

      </form>
    </div>
  )
}

export default Register