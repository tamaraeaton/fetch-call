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
                                    <Post item={item} />
                                </tr>
                            )
                        }
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default PostList
