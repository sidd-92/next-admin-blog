import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";
import Link from "next/link";

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
          <title>Food Blog Demo</title>
          <link rel="icon" href="/eat.svg" />
        </Head>
        <Layout>
          <section className="text-gray-700 body-font">
            <div className="container px-5 py-4 mx-auto">
              <div class="flex flex-col text-center w-full mb-20">
                <h2 class="text-xs lg:text-sm text-indigo-500 tracking-widest font-medium title-font mb-1">Lorem Ipsum</h2>
                <div class="sm:text-5xl text-2xl font-medium title-font mb-4 text-gray-900">Food Blog Demo</div>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base lg:text-2xl text-justify">
                  Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard
                  of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.
                </p>
              </div>
              <div className="flex flex-col lg:flex-row items-center mb-20">
                <input
                  class="w-full lg:w-10/12 bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
                  placeholder="Search"
                  type="text"
                />
                <button class="w-full lg:w-2/12 text-white bg-indigo-500 mt-1 lg:mt-0 lg:ml-1 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Search
                </button>
              </div>
              <div className="font-bold text-4xl mb-8">Latest Articles</div>
              <div className="flex flex-wrap -m-4">
                {this.props.posts.map((item, index) => (
                  <Link href={`/posts/${index}`}>
                    <div key={index} className="lg:w-1/2 p-4 cursor-pointer">
                      <div className="bg-gray-100 p-6 rounded-lg transition-all duration-150 hover:shadow-2xl">
                        <img className="h-64 lg:h-72 rounded w-full object-cover object-center mb-6" src="/subji.jpeg" alt="content" />
                        <div className="tracking-widest text-indigo-500 text-xs font-medium title-font">{item.title}</div>
                        <div className="text-2xl text-gray-900 font-bold title-font mb-4">{item.title}</div>
                        <p className="leading-relaxed text-lg mb-6">{item.content}</p>

                        <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer">Learn More</a>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </Layout>
      </React.Fragment>
    );
  }
}
