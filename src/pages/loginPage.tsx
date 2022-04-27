import React from 'react'
import { Navigate } from 'react-router-dom';
import Input from '../components/input';
import SpinnerLoader from '../components/spinnerLoader';
import authService from '../services/auth.service';

interface Props { }
interface State {
    email: string,
    password: string,
    loading: boolean,
    success: boolean
}

class LoginPage extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loading: false,
            success: false
        }

        this.handleLogin = this.handleLogin.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            email: e.target.value
        });
    }

    handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            password: e.target.value
        });
    }

    async handleLogin(e: React.FormEvent) {
        e.preventDefault();
        try {
            this.setState({
                loading: true
            })

            const { email, password } = this.state;
            await authService.login(email, password);
            this.setState({
                success: true
            });
        } catch (err) {
            console.log(err);
        }
    }

    render(): React.ReactNode {
        return (
            <div className='login-page main-component-container m-auto'>
                {this.state.success && <Navigate to='/' />}

                <div className='lg:w-4/6 lg:m-auto mx-10 border-4 rounded-2xl m-auto'>
                    <div className='flex flex-col justify-center items-center mt-10'>
                        <img
                            className='invert'
                            src="https://i.ibb.co/ZGcPF6J/freestyle-training-center-logo-1.png"
                            alt=""
                            width={100}
                            height={100}
                        />
                        <div className='text-2xl w-1/3 font-hiphop tracking-widest uppercase'>Login into your Freestyle Training Center account</div>
                    </div>
                    <form className='' onSubmit={this.handleLogin}>
                        <div className='input-container flex flex-col'>
                            <div className='my-10 flex justify-center items-center'>
                                <Input value={this.state.email} onChange={this.handleEmailChange} id="email" label='Email Adress' placeholder='Type your email' type='email' />
                            </div>
                            <div className='my-10 flex justify-center items-center'>
                                <Input value={this.state.password} onChange={this.handlePasswordChange} id='password' label='Password' placeholder='Type your password' type='password' />
                            </div>
                        </div>
                        <button
                            disabled={this.state.loading}
                            className='w-1/3 mt-14 mb-10 px-8 py-4 tracking-widest bg-blue-600 hover:bg-blue-700 active:bg-blue-900 rounded-xl text-center text-gray-200 font-bold disabled:bg-blue-400'
                        >
                            {!this.state.loading ?
                                <div className='flex justify-center items-center'>
                                    <SpinnerLoader />
                                </div>
                                :
                                "LOGIN"
                            }
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginPage;