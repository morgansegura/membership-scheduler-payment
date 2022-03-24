import React from 'react'

// [Auth]
import { RegisterForm } from 'auth'
// [Comonents]
import { AuthorCard, Base as Layout, HeadContent } from 'components/layouts'
// [Utils]
import { siteMetadata } from 'utils'
import { SuperLabel, UList } from 'styles/Typography'
import { Cell, UserImage, Grid, Panel } from 'styles/Dashboard'
import Link from 'next/link'

type Props = {}

const DashboardPage: React.FC<Props> = () => {
  return (
    <>
      <HeadContent
        title="Registration Page"
        description="This is the Registration Page"
        canonicalUrl={`${siteMetadata.siteUrl}/register`}
      />
      <Layout>
        <AuthorCard />
        <Grid>
          <Cell colWidth="1/7">
            <Panel>
              <Grid>
                <Cell>
                  <UserImage>
                    <img src="https://api.uifaces.co/our-content/donated/1H_7AxP0.jpg" alt="" />
                  </UserImage>
                </Cell>
                <Cell colWidth="2 / 4">
                  <SuperLabel>Player</SuperLabel>
                  <p>Adrian Segura</p>
                </Cell>
                <Cell colWidth="4 / 6">
                  <SuperLabel>Contact</SuperLabel>
                  <p>
                    <Link href="mailto:morgansegura@gmail.com">
                      <a>morgansegura@gmail.com</a>
                    </Link>
                  </p>
                </Cell>
              </Grid>
            </Panel>
          </Cell>
          <Cell colWidth="7/13">
            <Panel>
              <Grid>
                <Cell>
                  <UserImage>
                    <img src="https://api.uifaces.co/our-content/donated/1H_7AxP0.jpg" alt="" />
                  </UserImage>
                </Cell>
                <Cell colWidth="2 / 4">
                  <SuperLabel>Player</SuperLabel>
                  <p>Adrian Segura</p>
                </Cell>
                <Cell colWidth="4 / 6">
                  <SuperLabel>Contact</SuperLabel>
                  <p>
                    <Link href="mailto:morgansegura@gmail.com">
                      <a>morgansegura@gmail.com</a>
                    </Link>
                  </p>
                </Cell>
              </Grid>
            </Panel>
          </Cell>
        </Grid>
        <UList>
          <li>
            <h3>Team</h3>
            <p>Below is a list of options under Team</p>
            <br />
          </li>
          <UList>
            <li>
              <h4>Roster</h4>
              <p>Lists the team roster and staff</p>
              <br />
            </li>
            <li>
              <h4>Schedule</h4>
              <p>Schedule of the team</p>
              <br />
            </li>
            <li>
              <h4>Player Availability</h4>
              <p>Tracks player availability</p>
              <br />
            </li>
            <li>
              <h4>Tracking</h4>
              <p>Tracks activities people have done</p>
              <br />
            </li>
          </UList>
        </UList>
        <UList>
          <li>
            <h3>Create New Team</h3>
            <p>CRUD button for ceating an new team</p>
            <br />
          </li>
        </UList>
        <UList>
          <li>
            <h3>My Teams</h3>
            <p>A dropdown list of teams I am associated with or I have created</p>
            <br />
          </li>
        </UList>
        <UList>
          <li>
            <h3>Account</h3>
            <p>Dropdown of links associated with my account</p>
            <br />
          </li>
          <UList>
            <li>
              <h4>My Account</h4>
              <p>Lists the team roster and staff</p>
              <br />
            </li>
            <li>
              <h4>My Household</h4>
              <p>CRUD people in my family associated with a player or team</p>
              <br />
            </li>
            <li>
              <h4>Player Availability</h4>
              <p>Tracks player availability</p>
              <br />
            </li>
            <li>
              <h4>Tracking</h4>
              <p>Tracks activities people have done</p>
              <br />
            </li>
          </UList>
        </UList>
      </Layout>
    </>
  )
}

export default DashboardPage
