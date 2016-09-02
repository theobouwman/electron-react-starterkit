import EventEmitter from 'events'
import dispatcher from '../dispatcher'

class BookmarkStore extends EventEmitter {
    constructor() {
        super()
        this.bookmarks = [
            {
                id: 1223,
                text: 'NU',
                url: 'www.nu.nl',
            },
            {
                id: 1234,
                text: 'NOS',
                url: 'www.nos.nl'
            }
        ]
    }

    getAll() {
        return this.bookmarks
    }

    handleActions(action) {
        switch(action.type) {
            case "CREATE_BOOKMARK": {
                console.log(action)
                this.bookmarks.push({
                    id: Date.now(),
                    text: action.text,
                    url: action.url
                })
                this.emit('bookmarks_changed')
            }
        }
    }
}

const bookMarkStore = new BookmarkStore()

dispatcher.register(bookMarkStore.handleActions.bind(bookMarkStore))

export default bookMarkStore