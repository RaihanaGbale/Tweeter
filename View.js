function Renderer() {
    postContainer.empty()
    renderPosts()
    addListeners()
}

function renderPosts() {
    for (post of tweeter.posts) {
        let newpost = `
                    <div id="${post.id}" class="post">
                    
                    <div class="post-text">
            
                        ${post.text}</div>

                    <div id="comments">
                        ${renderComments(post)}
                    </div>

                    <div id="CommentWrite">
                        <input type="text" placeholder="write a comment!">
                        <button type="submit">Comment</button>
                    </div>

                    <div class="delete">Delete</div>
                    
                    </div>
                    `
        postContainer.append(newpost)
    }
}

function renderComments(post) {
    let newcomment = ""
    for (comment of post.comments) {
        newcomment += `
                    <div class="comment">
                    <i class="fa-solid fa-xmark delete-comment"></i>
                    <div class="comments" id=${comment.id}>${comment.text}</div>
                    </div>
                    `
    }
    return newcomment
}

function addListeners(){
    $(".delete-comment").click(deleteComment)
    $("button").click(addNewComment)//what to put in $
    $(".delete").click(deletePost)
}