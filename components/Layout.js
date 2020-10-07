import Link from "next/link";
import React from "react";
import { withRouter } from "next/router";
class Layout extends React.Component {
  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  render() {
    return (
      <div>
        <header className="hidden lg:block text-gray-700 body-font bg-gray-100">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <img src="/eat.svg" className="w-12" />
            <span className="hidden lg:flex lg:flex-grow" />
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-2xl justify-center">
              <Link href="/">
                <a className={`mr-5 hover:text-gray-900 ${this.props.router.asPath === "/" ? "border-b-2 border-purple-500 text-purple-700" : ""}`}>Posts</a>
              </Link>
              <a className="mr-5 hover:text-gray-900">Second Link</a>
              <a className="mr-5 hover:text-gray-900">Third Link</a>
              <a className="mr-5 hover:text-gray-900">Fourth Link</a>
            </nav>
          </div>
        </header>
        <div id="mySidenav" class="sidenav">
          <a href="javascript:void(0)" class="closebtn removeHighlight" onClick={this.closeNav}>
            &times;
          </a>
          <Link href="/">
            <a onClick={this.closeNav} className={`text-purple-700 removeHighlight`}>
              Posts
            </a>
          </Link>
        </div>
        <header className="flex lg:hidden text-gray-700 body-font bg-gray-100 p-4">
          <div className="lg:hidden text-2xl cursor-pointer removeHighlight" onClick={this.openNav}>
            &#9776;
          </div>
          <span className="flex-grow" />
          <img src="/eat.svg" className="w-8 mr-3" />
        </header>

        <main className="container mx-auto min-h-screen lg:mt-8 lg:mb-10">{this.props.children}</main>
        <section className="antialiased font-sans w-full bg-gray-300 text-left text-black py-8"></section>
      </div>
    );
  }
}

export default withRouter(Layout);
