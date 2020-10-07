import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";

import Head from "next/head";

export default class extends Component {
  static async getInitialProps() {
    const res = await fetch("https://simple-backend.vercel.app/posts/all");
    const data = await res.json();
    return { posts: data };
  }
  render() {
    return (
      <React.Fragment>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/eat.svg" />
        </Head>
        <Layout>
          <section class="text-gray-700 body-font">
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-wrap w-full mb-20">
                <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                  <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Test Food Blog</h1>
                  <div class="h-1 w-20 bg-indigo-500 rounded"></div>
                </div>
                <p class="lg:w-1/2 w-full leading-relaxed text-base">All the below data is coming from API</p>
              </div>
              <div class="flex flex-wrap -m-4">
                {this.props.posts.map((item, index) => (
                  <div key={index} class="xl:w-1/4 md:w-1/2 p-4">
                    <div class="bg-gray-100 p-6 rounded-lg">
                      <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />
                      <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">{item.title}</h3>
                      <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{item.title}</h2>
                      <p class="leading-relaxed text-base">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Layout>
      </React.Fragment>
    );
  }
}
