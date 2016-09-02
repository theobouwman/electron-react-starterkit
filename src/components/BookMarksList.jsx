import React from 'react'
import Bookmark from './Bookmark'
import BookmarkStore from '../stores/BookmarkStore'
import * as BookmarkActions from '../actions/BookMarkActions'

class BookMarksList extends React.Component {
    constructor() {
        super()
        this.state = {
            bookmarks: BookmarkStore.getAll()
        }
    }

    newBookmark = () => {
        BookmarkActions.createBookMark('text', 'nu.nl')
    }

    getBookmarks() {
        this.setState({
            bookmarks: BookmarkStore.getAll()
        })
    }

    componentWillMount() {
        BookmarkStore.on('bookmarks_changed', () => this.getBookmarks())
    }

    render() {
        const bookmarks = this.state.bookmarks

        const BookmarkComponents = bookmarks.map((bm) => {
            return <Bookmark key={bm.id} {...bm}/>;
        });

        return(
            <div>
                <button onClick={this.newBookmark}>Add bookmark</button>
                <ul>{BookmarkComponents}</ul>
            </div>
        )
    }
}

export default BookMarksList