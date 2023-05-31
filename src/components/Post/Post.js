

const Post = ({ item }) => {
    return (
        <div>
            <span><h1 key={item.id}>Title</h1>{item.title}</span>
            <span><h3 key={item.id}>Body</h3>{item.body}</span>
        </div>

    )
}

export default Post