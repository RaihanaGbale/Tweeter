const Tweeter = function () {

    postIdCounter = 2
    commentIdCounter = 0

    _posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]

    const addPost = (postText) => {
        this.postIdCounter +=1
        this._posts.push({ text: postText, id: "p" + this.postIdCounter ,comments:[] })
    }

    const removePost =  (postID) => {
        for (i in this._posts) {
            if (this._posts[i].id == postID) {
                this._posts.splice(i, 1)
            }
        }
    }

    const addComment =  (commentText, postID) => {
        for (let i in this._posts) {
            if (this._posts[i].id === postID) {
                this.commentIdCounter++
                this._posts[i].comments.push({ id: "c" + this.commentIdCounter, text: commentText })
            }
        }
    }

    const removeComment = (postID, commentID) => {
        for (i in this._posts) {
            if (this._posts[i].id == postID) {
                for (j in this._posts[i].comments) {
                    if (this._posts[i].comments[j].id == commentID) {
                        this._posts[i].comments.splice(j, 1)
                    }
                }
            }
        }
    }

    return {
        addComment,
        removeComment,
        addPost,
        removePost,
        posts: _posts
    }
}