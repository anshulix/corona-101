import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            backgroundColor: '#eee',
            color: '#444',
            lineHeight: '1',
            padding: '0.25em',
            textAlign: 'center',
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            backgroundColor: '#eee',
            color: '#444',
            lineHeight: '1',
            padding: '0.25em',
            textAlign: 'center',
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-7 is-offset-3">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title has-text-weight-bold is-size-2">{mainpitch.title}?</h1>
                  </div>
                  <div className="tile">
                    <p className="">{mainpitch.description}</p>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold">
                    What oath does a Corona-101 tribe member take?
                    </h3>
                    <p>I ______ will make sure that every member of this tribe is healthy during the time of Covid - physical health, mental health, economic health. I will work with other tribes to ensure our tribe, community, city, state and country rise above this pandemic to survive and thrive.</p>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold">
                    What's a Corona-101 tribe to do?
                    </h3>
                    <p>Bring 5-10-20 families around you into your tribe. Up to 101 people. <br/><br/>

                    Ensure that there are leads in the tribe for different functions that will be critical during the lockdown. <br/><br/>

                    Ensure that every day requests within the tribe are fulfilled. <br/><br/>

                    Ensure that any emergency requests are handled. <br/><br/>

                    Ensure that quarantine is kept for travelers (within India or from outside) <br/><br/>

                    Ensure that all different type of people are helped - medical staff, essential services staff, people who might be discriminated against, people of different economic strata, people who might struggle economically because of the lockdown.</p>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold">
                    Playbook
                    </h3>
                    <p>Hour 0-4: <br/>
                      <ul> 
                        <li>Find 5 most responsible people you know near you</li>
                        <li>Share this doc and ask them if they want to create a tribe with you</li>
                        <li>Perform the tribe creation ritual</li>
                        <li>Get each of first 5 people to own key areas</li>
                        <li>Coordinator calls each lead and ensures all updates are in place </li>
                      </ul>
                    </p><br/>
                    <p>Day 1: <br/>
                      <ul> 
                        <li>Identify critical supplies for tribe - medicine, masks, soap, food essentials, etc.</li>
                        <li>Make a safe plan to procure the essentials - minimize exposure, number of people traveling, order online if possible, prefer online payment, conserve cash, do not hoard</li>
                        <li>Each person takes stock of their area and does first update on excel sheet</li>
                        <li>Each lead sends daily update by 8am on the whatsapp group</li>
                        <li>By noon: Each person find 2 more responsible people to add to Tribe</li>
                        <li>By 6pm: Find two responsible people to create a new Tribe</li>
                      </ul>
                    </p><br/>
                    <p>Day 2-7 (What to do every week): <br/>
                      <ul> 
                        <li>Add more members and houses, until you reach 101 people (~20-40 households)</li>
                        <li>Ensure each tribe adds neighbors who are elderly/at-risk, poor/economic-risk, doctors/nurses, delivery people, essential services people</li>
                        <li>Include people from outside your own apartment complex - one maids family, one nearby petty shop keeper, one roadside vendor, daily wage labor.</li>
                        <li>Ensure that stocks of essentials, medicines, are with every tribe member</li>
                        <li>Ensure that economically impacted or weaker folks are taken care of</li>
                        <li>Ensure that tribe morale is kept up - activities like Aktakshari on group calls</li>
                        <li>Plan remote group activities for kids - arts and crafts, etc</li>
                      </ul>
                    </p><br/>
                    <p>Who's your tribe? <br/>
                      <ul> 
                        <li>People you know very well already</li>
                        <li>Neighbors who are elderly/at-risk, poor/economic-risk, doctors/nurses, delivery people, essential services people</li>
                      </ul>
                    </p><br/>
                    <p>Leads and delegation <br/>
                      <ul> 
                        <li>Delegation is key</li>
                        <li>Each lead adds one more responsible person</li>
                      </ul>
                    </p><br/>
                    <p>Leads to own one or more of the following for each household participating <br/>
                      <ul> 
                        <li>tribe membership</li>
                        <li>health check</li>
                        <li>food/essentials</li>
                        <li>medicine</li>
                        <li>economics/cash</li>
                        <li>self quarantine for any</li>
                        <li>emergency supplies/cash</li>
                      </ul>
                    </p><br/>
                    <p>Tribe creation ritual <br/>
                      <ul> 
                        <li>Find a name for your tribe</li>
                        <li>Create a Telegram group with that name</li>
                        <li>Share the tribe's oath and let everyone take it - voice note works</li>
                        <li>Let one volunteer copy the Excel templates and set it up</li>
                      </ul>
                    </p><br/>
                    <p>What to do after reaching 101 people? <br/>
                    Break the tribe into two or four roughly equal halves. Each tribe can then grow to 101 members. We do not want more than 101 members in a tribe because of <a href='https://en.wikipedia.org/wiki/Dunbar%27s_number' target='_blank'>Dunbar's number</a>.
                    </p><br/>
                  </div>
                  </div>
                {/* <Features gridItems={intro.blurbs} /> */}
            
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Examples and Important Links
                  </h3>
                  <BlogRoll />
                  {/* <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        heading2={frontmatter.heading2}
        description2={frontmatter.description2}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
