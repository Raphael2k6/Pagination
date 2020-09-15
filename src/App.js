import React, { Component } from "react";
import axios from "axios";
import Posts from "./Post"
import Paginate from "./Paginate";

class App extends Component {
    state = {
        posts: [],
        loading: false,
        currentPage: 1,
        postsPerPage: 10
    };

    componentDidMount() {
        const getPosts = async () => {
            this.setState({ loading: true });
            const results = await axios.get(
                "https://jsonplaceholder.typicode.com/posts"
            );
            this.setState({ posts: results.data });
            this.setState({ loading: false });
        };
        getPosts();
    }

    render() {
        const { currentPage, postsPerPage, posts, loading } = this.state;
        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

        const paginates = (pageNum) => this.setState({ currentPage: pageNum });
        const nextPage = () => this.setState({ currentPage: currentPage + 1 });
        const prevPage = () => {
            if (currentPage >= 1 && currentPage !== 0){
                this.setState({ currentPage: currentPage - 1 });
            }
        }

        return (
            <div className="container">
                <Posts posts={currentPosts} loading={loading} />
                <Paginate
                    postsPerPage={postsPerPage}
                    totalPosts={posts.length}
                    paginates={paginates}
                    nextPage={nextPage}
                    prevPage={prevPage}
                    currentPage={this.state.currentPage}
                />
            </div>
        );
    }
}

export default App;
