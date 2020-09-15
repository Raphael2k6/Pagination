import React, { Component } from 'react';
class Posts extends Component {
    render() {
        const { posts, loading } = this.props;
        if (loading) {
            return <h1>Loading</h1>
        }
        return (
            <div>
                {posts.map(post => {
                    return(
                    <div key={post.id}>
                        <h4>{post.title}</h4>
                        <p>{post.body}</p>
                    </div>)
                })}
            </div>
        )
    }
}
export default Posts;