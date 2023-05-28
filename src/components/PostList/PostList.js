import React, { useState, useEffect } from 'react'
import Post from '../Post/Post'
import './PostList.css'

function PostList() {

    const [data, setData] = useState([])

    const apiGet = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setData(data)
            });
    }

    useEffect(() => {
        apiGet()
    }, [])


    return (
        <div >


            <h1 className='bet-list-title'>My API</h1>
            {/* <button onClick={apiGet}>Fetch API</button> */}
            {/* <pre> {JSON.stringify(data, null, 2)}</pre> */}

            <table>
                <thead>
                    <tr className='betlist-head-row'>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => {
                            return (
                                <tr key={item.id} className="betlist-head-row bet-item">
                                    <td className='custom-border custom-font'>{item.title}</td>
                                    <td>{item.body}</td>
                                </tr>
                            )
                        }
                        )

                    }
                </tbody>
            </table>

            <div>
                <ul>
                    {data.map(item =>
                        <>
                            {/* <span><h1>Title</h1><li key={item.id}>{item.title}</li></span>
                            <span><h3>Body</h3><li key={item.body}>{item.body}</li></span> */}
                            <Post item={item} />
                        </>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default PostList
