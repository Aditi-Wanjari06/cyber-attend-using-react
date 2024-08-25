import React, { useState } from 'react'
import './Signup.css'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import { Link } from 'react-router-dom'
import './../../index.css'
import Navbar from '../../components/Navbar/Navbar'

function SignUp() {
    const [user, setUser] = useState({
        fullName: '',
        email: '',
        password: '',
        dob: '',
        date_of_joining: '',
        experience: '',
        position: '',
        profilePhoto: ''
    })


    const signup = async () => {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/signup`, {
            fullName: user.fullName,
            email: user.email,
            password: user.password,
            dob: user.dob,
            date_of_joining: user.date_of_joining,
            experience: user.experience,
            position: user.position,
            profilePhoto: user.profilePhoto
        })

        if (response.data.success) {
            toast.success(response.data.message)

            setUser({
                fullName: '',
                email: '',
                password: '',
                dob: '',
                date_of_joining: '',
                experience: '',
                position: '',
                profilePhoto: ''
            })
        }
        else {
            toast.error(response.data.success)
        }
    }


    return (
        <div>
            <Navbar />
            <h1 className='auth-heading'>Signup Form 🡆</h1>

            <form className='auth-form'>

                <p className='auth-form-heading'>
                    Enter Username:
                    <input
                        type=' text'
                        placeholder='fullName'
                        className='user-input'
                        value={user.fullName}
                        onChange={(e) => {
                            setUser({ ...user, fullName: e.target.value })
                        }}
                    />
                </p>

                <p className='auth-form-heading '>
                    Enter email:
                    <input
                        type='email'
                        id="email"
                        placeholder='email'
                        className='user-input input-email'
                        value={user.email}
                        onChange={(e) => {
                            setUser({ ...user, email: e.target.value })
                        }}
                    />
                </p>

                <p className='auth-form-heading'>Enter password:
                    <input
                        type='password'
                        id="password"
                        placeholder='password'
                        className='user-input input-password'
                        value={user.password}
                        onChange={(e) => {
                            setUser({ ...user, password: e.target.value })
                        }}
                    />
                </p>

                <p className='auth-form-heading'>Enter dob:
                    <input
                        type='date'
                        id="dob"
                        placeholder='date of birth'
                        className='user-input input-dob'
                        value={user.dob}
                        onChange={(e) => {
                            setUser({ ...user, dob: e.target.value })
                        }}
                    />
                </p>

                <p className='auth-form-heading'>Enter joining date:
                    <input
                        type='date'
                        id="joining"
                        placeholder='joining date'
                        className='user-input input-joining'
                        value={user.date_of_joining}
                        onChange={(e) => {
                            setUser({ ...user, date_of_joining: e.target.value })
                        }}
                    />
                </p>

                <p className='auth-form-heading'>Enter experience:
                    <input
                        type='text'
                        id="experience"
                        placeholder='experience'
                        className='user-input input-experience'
                        value={user.experience}
                        onChange={(e) => {
                            setUser({ ...user, experience: e.target.value })
                        }}
                    />
                </p>

                <p className='auth-form-heading'>Enter position:
                    <input
                        type='text'
                        id="poition"
                        placeholder='position'
                        className='user-input input-position'
                        value={user.position}
                        onChange={(e) => {
                            setUser({ ...user, position: e.target.value })
                        }}
                    />
                </p>

                <p className='auth-form-heading' >Upload a profile:
                    <input
                        type='file'
                        id="profile"
                        accept="image/*"
                        placeholder='Profile'
                        className='user-input input-profile'
                        value={user.profilePhoto}
                        onChange={(e) => {
                            setUser({ ...user, profilePhoto: e.target.value })
                        }}
                    />
                </p>



                <button
                    type='button'
                    className='auth-btn'
                    onClick={signup}>
                    Register
                </button>

                <div className='auth-link'>
                    <Link to='/login'>
                        Already have an account?Login
                    </Link>
                </div>
            </form>


            <Toaster />

        </div>
    )
}

export default SignUp