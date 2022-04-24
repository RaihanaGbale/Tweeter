const tweeter = Tweeter()
const postContainer = $("#TweeterPostsContainer")
$("#post").click(twitClicked)
Renderer()

function twitClicked() {
    let newPostText = $("#input").val()
    tweeter.addPost(newPostText)
    Renderer()
}

function addNewComment() {
    let newCommentText = $(this).siblings("input").val()
    let postID = $(this).closest(".post").attr("id")
    tweeter.addComment(newCommentText, postID)
    Renderer()
}

function deleteComment() {
    let commentID = $(this).closest(".comment").find(".comments").attr("id")
    let postID = $(this).closest(".post").attr("id")
    tweeter.removeComment(postID, commentID)
    Renderer()
}

function deletePost() {
    let postID = $(this).closest(".post").attr("id")
    tweeter.removePost(postID)
    Renderer()
}