import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import Header from '../components/Header';
import {htmlToReact} from '../utils';
import Footer from '../components/Footer';

export default class Contact extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
              <Header {...this.props} site={this.props.pageContext.site} page={this.props.pageContext} img_path={_.get(this.props, 'pageContext.frontmatter.img_path')} />
              <div id="content" className="site-content">
                <main id="main" className="site-main inner">
                  <article className="post page post-full">
                    <header className="post-header">
                      <h1 className="post-title">{_.get(this.props, 'pageContext.frontmatter.title')}</h1>
                    </header>
                    {_.get(this.props, 'pageContext.frontmatter.subtitle') && 
                    <div className="post-subtitle">
                      {htmlToReact(_.get(this.props, 'pageContext.frontmatter.subtitle'))}
                    </div>
                    }
                    <div className="post-content">
                      {htmlToReact(_.get(this.props, 'pageContext.html'))}
                      <form name="contactForm" method="POST" netlify-honeypot="bot-field" data-netlify="true" id="contact-form"
                        className="contact-form">
                        <p className="screen-reader-text">
                          <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                        </p>
                        <p className="form-row">
                          <label className="form-label">Name *</label>
                          <input type="text" name="name" placeholder="Your name..." className="form-input"/>
                        </p>
                        <p className="form-row">
                          <label className="form-label">Email *</label>
                          <input type="email" name="email" placeholder="Your email address..." className="form-input"/>
                        </p>
                        <p className="form-row">
                          <label className="form-label">Message *</label>
                          <textarea name="message" placeholder="Your message..." className="form-textarea" rows="7" />
                        </p>
                        <input type="hidden" name="form-name" value="contactForm" />
                        <p className="form-row">
                          <button type="submit" className="button">Send Message</button>
                        </p>
                      </form>
                    </div>
                  </article>
                </main>
                <Footer {...this.props} site={this.props.pageContext.site} page={this.props.pageContext} img_path={_.get(this.props, 'pageContext.frontmatter.img_path')} />
              </div>
            </Layout>
        );
    }
}
