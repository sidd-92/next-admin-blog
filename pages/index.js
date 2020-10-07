import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
export default class extends Component {
  static async getInitialProps() {
    const res = await fetch("https://simple-backend.vercel.app/posts/all");
    const data = await res.json();
    return { posts: data };
  }
  render() {
    return (
      <div>
        <div>Your Next App is Working</div>
        {this.props.posts.map((item, index) => (
          <div style={{ backgroundColor: "#ccc", padding: "10px", width: "180px", marginBottom: "5px" }} key={index}>
            <div style={{ fontWeight: "bold" }}>{item.title}</div>
            <div>{item.content}</div>
          </div>
        ))}
      </div>
    );
  }
}
