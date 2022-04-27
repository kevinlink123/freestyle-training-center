import React from 'react'

interface Props {
    value: string,
    onChange(e: React.ChangeEvent<HTMLInputElement>): any,
    placeholder: string,
    type: string,
    id: string,
    label?: string
}

class Input extends React.Component<Props> {
    render(): React.ReactNode {
        return (
            <div className='w-1/2 flex flex-col justify-center'>
                <label className='block text-left text-gray-700 text-lg' htmlFor={this.props.id}>{this.props.label}</label>
                <input
                    value={this.props.value}
                    onChange={this.props.onChange}
                    placeholder={this.props.placeholder}
                    type={this.props.type}
                    className='border-b-2 border-red-900 rounded-xl py-4 pl-6'
                    id={this.props.id}
                />
            </div>
        )
    }
}

export default Input;