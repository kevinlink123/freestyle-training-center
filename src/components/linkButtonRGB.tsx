import React from "react";
import { Link } from "react-router-dom";

type Props = {
    text: string,
    destination: string,
    onClick?(): void,
}

class LinkButtonRGB extends React.Component<Props> {
    render(): React.ReactNode {

        const { text } = this.props;
        const { destination } = this.props;

        return(
            <Link to={destination} onClick={this.props.onClick} className="rgb-effect block mx-20 xl:mx-2 transition before:rounded-full px-10 py-4 rounded-full font-bold text-teal-200 after:rounded-full after:bg-gray-900 hover:text-white hover:scale-105 hover:-translate-y-1">{text}</Link>
        )
    }
}

export default LinkButtonRGB;