import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Header from '../components/Header'
import Nav from '../components/Nav'
import finInit from '../assets/images/fin-init-600-1.png'
import imgKeepCalm from '../assets/images/keep-calm-and-raise-a.png'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">

          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Comprehensive automation</h2>
                </header>
                <h3>Create your own cross-platform custom commands to
                  <ul>
                    <li>initialize local copy of the project in one step</li>
                    <li>run several complex builds in a sequence</li>
                    <li>compile and pack your theme</li>
                    <li>automate deployments to dev, stage, or CI server</li>
                  </ul>
                  Use  <i className="fas fa-terminal fa-xs"></i> Bash, <i className="fab fa-php fa-sm"></i> PHP,
                  or <i className="fab fa-node-js fa-sm"></i> Node out of the box, or extend Dockal stock
                  images with your custom Dockerfile and pre-install your favorite tool.</h3>
                <ul className="actions">
                  <li><Link to="/generic" className="button">Learn More</Link></li>
                </ul>
              </div>
              <span className="image"><img src={finInit} alt="" /></span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>OS Support</h2>
            </header>
            <ul className="features">
              <li>
                <a href="installation#macos" className="icon major style-macos fab fa-apple a"></a>
                <a href="installation#macos">
                <h3>macOS</h3>
                  <p>Boot2Docker or Docker for Mac</p>
                </a>
              </li>
              <li>
                <a href="installation#linux" className="icon major style-linux fab fa-linux a"></a>
                <a href="installation#linux">
                  <h3>Linux</h3>
                  <p>Ubuntu, Ubuntu-based, Alpine</p>
                </a>
              </li>
              <li>
                <a href="installation#windows" className="icon major style5 fab fa-windows a"></a>
                  <a href="#windows">
                <h3>Windows</h3>
                    <p>Boot2Docker or Docker for Windows</p>
                  </a>
              </li>
            </ul>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Boilerplates</h2>
              <p>Launch popular Content Management Systems in minutes</p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="fab fa-drupal fa-3x"></span>
                <strong>Drupal</strong> 7, 8
              </li>
              <li className="style2">
                <span className="fab fa-wordpress fa-3x"></span>
                <strong>Wordpress</strong> With wp-cli
              </li>
              <li className="style3">
                <span className="fab fa-laravel fa-3x"></span>
                <strong>Laravel</strong> Easy install
              </li>
              <li className="style4">
                <span className="fab fa-magento fa-3x"></span>
                <strong>Magento</strong> with sample content
              </li>
              <li className="style5">
                <span className="fab fa-node fa-3x"></span>
                <strong>Grav,</strong>Gatsby, Hugo, JAM
              </li>
            </ul>
            <p className="content">You always wanted to try out Drupal, Wordpress, or Laravel, but installing them is a hassle?
            CMS installation process can be quite involved, even if authors make an effort to make it easier.
            <codeblock><span className="fa fa-terminal fa-xs"></span>  fin project create</codeblock> With a single command you can easily spin up any of the above <a href="boilerplates">and more</a>.</p>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/boilerplates" className="button">Learn More</Link></li>
              </ul>
            </footer>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Install Docksal</h2>
              <h3>Check system requirements<br />
              and select installation options</h3>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/installation" className="button special">
                    <i className="fas fa-cogs fa-sm"></i> Choose Options and Install
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

          <section id="contribute" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>You can help</h2>
                </header>
                <h3>Docksal is the result of collective effort of people 
                  contributing their time and dedication, and organizations 
                  supporting those contributions. <br/>
                  Something is not working? Missing a feature? You can help by
                </h3>
                <ul>
                  <li>testing Docksal in different environments</li>
                  <li>reporting bugs in the <a href="https://github.com/docksal/docksal/issues">issue queue</a></li>
                  <li>raising <a href="https://github.com/docksal/docksal/pulls?q=is%3Apr+is%3Aclosed">pull requests</a> to contribute code or documentation</li>
                  <li>creating a <a href="https://github.com/docksal/addons">custom addon</a> and share it with a community</li>
                </ul>
              </div>
              <span className="image"><img src={imgKeepCalm} alt="" /></span>
            </div>
          </section>

          <section id="maintainers" className="main special">
            <header className="major">
              <h2>Maintainers</h2>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <a className="a icon" href="https://github.com/lmakarov">
                    <img className="image" src="https://avatars3.githubusercontent.com/u/1205005?s=64&v=4" /><br/>
                    Leonid Makarov
                  </a>
                </li>
                <li>
                  <a className="a icon" href="https://github.com/achekulaev">
                    <img className="image" src="https://avatars0.githubusercontent.com/u/402007?s=64&v=4" /><br/>
                    Oleksii Chekulaiev
                  </a>
                </li>
                <li>
                  <a className="a icon" href="https://github.com/sean-e-dietrich">
                    <img className="image" src="https://avatars2.githubusercontent.com/u/1564748?s=64&v=4" /><br/>
                    Sean Dietrich
                  </a>
                </li>
                <li>
                  <a className="a icon" href="https://github.com/david-hernandez">
                    <img className="image" src="https://avatars3.githubusercontent.com/u/1504038?s=64&v=4" /><br/>
                    David Hernandez
                  </a>
                </li>
              </ul>
            </footer>
          </section>

        </div>

      </div>
    )
  }
}

Index.propTypes = {
  route: React.PropTypes.object,
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
