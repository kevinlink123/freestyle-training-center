import { User } from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import authService from "../services/auth.service";
import LinkButton from "./linkButton";
import LinkButtonRGB from "./linkButtonRGB";

interface Props {
	user: User | null
}
interface State {
	navBarIsOpen: boolean
}

class Navbar extends React.Component<Props, State> {
	constructor(props: any) {
		super(props);
		this.state = {
			navBarIsOpen: false
		}
		this.logout = this.logout.bind(this);
		this.openNavbar = this.openNavbar.bind(this);
	}

	logout() {
		authService.logout();
	}

	openNavbar() {
		this.setState((prevState) => ({
			navBarIsOpen: !prevState.navBarIsOpen
		}));
	}

	render(): React.ReactNode {
		return (
			<nav className='flex items-center justify-between flex-wrap bg-gradient-to-r from-black to-red-900 mb-10 xl:divide-x'>
				<div className="logo mr-4 px-2 py-4">
					<Link to="/">
						<img
							height={70}
							width={70}
							src="https://i.ibb.co/ZGcPF6J/freestyle-training-center-logo-1.png"
							alt=""
						/>
					</Link>
				</div>
				<div className="xl:hidden block mx-3">
					<button onClick={this.openNavbar} className="flex items-center px-5 py-6 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
						<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
					</button>
				</div>
				<div hidden={!this.state.navBarIsOpen} className="buttons-container h-0 w-full z-50 xl:divide-y-0 xl:w-auto xl:flex xl:flex-grow xl:justify-between">

					<div className="w-full bg-gradient-to-r from-black to-red-900 p-1 divide-y divide-teal-200 divide-dashed xl:flex xl:justify-between xl:divide-none">
						<div className="buttons mb-6 xl:my-0 xl:flex xl:justify-start xl:items-center px-2">
							<div className="mb-4 xl:m-0">
								<LinkButton text="BEATS" destination='/beats' />
							</div>
							<div>
								<LinkButton text="TRAINER" destination='/trainer' />
							</div>
						</div>
						{this.props.user &&
							<div className='record-button-container xl:my-0 xl:flex justify-center items-center xl:mr-20'>
								<div className="mt-6 -mb-2 xl:m-0">
									<LinkButtonRGB text="RECORD NEW POST" destination="/record" />
								</div>
							</div>
						}
						{
							this.props.user ?
								<div className="user-account-buttons-container my-10 xl:my-0 xl:flex xl:justify-end xl:items-center">
									<div className="my-4 xl:m-0">
										<LinkButton text="MY PROFILE" destination='/profile' />
									</div>
									<div>
										<LinkButtonRGB onClick={this.logout} text="LOGOUT" destination='/' />
									</div>
								</div>
								:
								<div className="user-account-buttons-container my-10 xl:my-0 xl:flex xl:justify-end xl:items-center">
									<div className="my-4 xl:m-0">
										<LinkButton text="LOGIN" destination='/login' />
									</div>
									<div>
										<LinkButtonRGB text="REGISTER" destination='/register' />
									</div>
								</div>
						}
					</div>
				</div>
			</nav>
		)
	}
}

export default Navbar;