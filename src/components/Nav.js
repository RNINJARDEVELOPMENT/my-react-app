import React from "react";
import react from "../react.svg";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.changeOpenState = this.changeOpenState.bind(this);
  }

  changeOpenState() {
    this.setState({ isOpen: this.state.isOpen ? false : true });
  }

  render() {
    return (
      <header className="bg-teal-500 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
        <div className="flex items-center justify-between px-4 py-3 sm:p-0">
          <div>
            <img className="h-12" src={react} alt="Employee" />
          </div>
          <div className="sm:hidden">
            <button
              onClick={this.changeOpenState}
              type="button"
              className="block text-white focus:text-white focus:outline-none"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {this.state.isOpen ? (
                  <path
                    fillRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        <nav
          className={`${
            this.state.isOpen ? "block" : "hidden"
          } px-2 pt-2 pb-4 sm:flex sm:p-0 sm:block`}
        >
          `
          <Link
            to="/"
            className="block px-2 py-1 text-teal-100 font-semibold rounded hover:text-white"
            onClick={this.changeOpenState}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-2 py-1 text-teal-100 font-semibold rounded hover:text-white"
            onClick={this.changeOpenState}
          >
            About
          </Link>
          <a
            href="https://twitter.com/askudhay"
            className="mt-1 block px-2 py-1 border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white sm:mt-0 sm:ml-2"
            onClick={this.changeOpenState}
          >
            Contact
          </a>
        </nav>
      </header>
    );
  }
}

export default Nav;
