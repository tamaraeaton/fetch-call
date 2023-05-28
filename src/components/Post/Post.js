

const Post = ({ item }) => {
    return (
        <div>
            <span><h1 key={item.id}>Title</h1><li >{item.title}</li></span>
            <span><h3 key={item.id}>Body</h3><li >{item.body}</li></span>
        </div>

    )
}

export default Post