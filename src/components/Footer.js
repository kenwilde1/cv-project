import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <p>created by kenwilde</p>
        <form
          action="https://github.com/kenwilde1"
          className="github-logo"
          target="_blank"
        >
          <button>
            <i class="fab fa-github"></i>
          </button>
        </form>
      </footer>
    );
  }
}

export default Footer;
