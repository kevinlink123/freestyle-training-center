import React from "react";
import { Link } from 'react-router-dom'

type Props = {
    text: string
    destination: string,
    onClick?(): void,
}

class LinkButton extends React.Component<Props> {
    render(): React.ReactNode {
        const { text } = this.props;
        const { destination } = this.props;

        return(
            <Link to={destination} onClick={this.props.onClick} className="block mx-20 xl:mx-2 px-8 py-4 transition hover:scale-105 hover:-translate-y-1 scale border-2 border-red-700 bg-gradient-to-t from-black via-black to-red-700 hover:from-blue-800 hover:via-black hover:text-white rounded-full text-center text-teal-200 font-bold">{text}</Link>
        )
    }
}

export default LinkButton;