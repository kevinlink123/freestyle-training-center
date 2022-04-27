import { User } from "firebase/auth";
import React from "react";
import MainPostsWrapper from "../components/mainPostsWrapper";

interface Props {
    user: User | null
}

class MainPage extends React.Component<Props> {
    render(): React.ReactNode {
        return (
            <div className="main-component-container border-8">
                {!this.props.user ? 
                <div>
                    PLEASE LOGIN
                </div>
                :
                <MainPostsWrapper />
                }
            </div>
        )
    }
}

export default MainPage;