import React from 'react'
import Input from '../components/input';

interface Props {}
interface State {
    email: string,
    username: string,
    password: string
}

class RegisterPage extends React.Component<Props, State> {
    constructor(props: any){
        super(props);
        this.state = {
            email: '',
            username: '',
            password: ''
        }

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            email: e.target.value
        });
    }

    handleUsernameChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            username: e.target.value
        });
    }

    handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            password: e.target.value
        });
    }

    handleLogin = (e: React.FormEvent): void => {
        e.preventDefault();
        console.log("LOGIN");
    }

    render(): React.ReactNode {
        return (
            <div className='register-page main-component-container m-auto'>
                <div className='lg:w-4/6 lg:m-auto mx-10 border-4 rounded-2xl p-10 mb-10'>
                    <div className='flex flex-col justify-center items-center'>
                        <img
                        className='invert'
                        src="https://i.ibb.co/ZGcPF6J/freestyle-training-center-logo-1.png" 
                        alt="" 
                        width={100}
                        height={100}
                        />
                        <div className='text-2xl w-1/3 font-hiphop tracking-widest uppercase'>Register a new Freestyle Training Center's account</div>
                    </div>
                    <form className='' onSubmit={this.handleLogin}>
                        <div className='input-container flex flex-col'>
                            <div className='my-10 flex justify-center items-center'>
                                <Input value={this.state.email} onChange={this.handleEmailChange} id="email" label='Email Adress' placeholder='example@example.com' type='email' />
                            </div>
                            <div className='my-10 flex justify-center items-center'>
                                <Input value={this.state.username} onChange={this.handleUsernameChange} id='username' label='Username' placeholder='BigMac' type='text' />
                            </div>
                            <div className='my-10 flex justify-center items-center'>
                                <Input value={this.state.password} onChange={this.handlePasswordChange} id='password' label='Password' placeholder='Type your password' type='password' />
                            </div>
                        </div>
                        <button
                            className='w-1/3 mt-14 px-8 py-4 tracking-widest bg-blue-600 hover:bg-blue-700 active:bg-blue-900 rounded-xl text-center text-gray-200 font-bold'
                        >
                                REGISTER
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default RegisterPage;