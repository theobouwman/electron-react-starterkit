import dispatcher from '../dispatcher'

export function createBookMark(text, url) {
    dispatcher.dispatch({
        type: "CREATE_BOOKMARK",
        text,
        url
    })
}