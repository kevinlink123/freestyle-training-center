import React from 'react'

class SpinnerLoader extends React.Component {
    render() {
        return(
            <div className='h-10 w-10 border-2 border-t-8 border-red-800 animate-spin rounded-full '></div>
        )
    }
}

export default SpinnerLoader;