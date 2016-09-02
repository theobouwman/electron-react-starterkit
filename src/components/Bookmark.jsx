import React from 'react'

class Bookmark extends React.Component {
    constructor() {
        super()
    }

    render() {
        const { text, url } = this.props;

        return(
            <li><a href={url} target="_blank">{text}</a></li>
        )
    }
}

export default Bookmark