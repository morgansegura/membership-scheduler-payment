import React from 'react'
import { useStorage } from 'hooks'
import { authService } from 'api'
import styled from '@emotion/styled'

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'

type AuthorCardProps = {}

const AuthorCard: React.FC<AuthorCardProps> = () => {
  const theme = useTheme()
  const { getStorage } = useStorage()
  const [user, setUser] = React.useState(Boolean(getStorage('user')))

  const getUser = () => {
    if (user) {
      authService.authUser().then((res: any) => {
        const { username, role } = res
        console.log(res)
      })
    }
  }

  React.useEffect(() => {
    getUser()
  }, [user])

  const AuthorCardClass = styled.div`
    .MuiAuthorCard-root {
      width: 100%;
      /* max-width: 650px; */
      padding-right: 1.875rem;
    }
    .MuiAuthorCardInnerContainer-root {
      display: flex;
      gap: 1.875rem;
    }
    .MuiAuthorCardMedia-root {
      max-width: 250px;
      max-height: 265px;
    }
    .MuiAuthorCardContentContainer-root {
      display: flex;
      flex-direction: column;
      flex: 1 0 auto;
    }
    .MuiAuthorCardContent-root {
    }
    .MuiAuthorCardTitle-root {
      padding-top: 1rem;
      line-height: 1.5;
      font-size: 1.5rem;
      font-weight: 600;
    }
    .MuiAuthorCardSubtitle1-root {
      line-height: 1;
      font-size: 1rem;
      font-weight: 600;
      color: ${theme.palette.text.secondary};
    }
    .MuiAuthorCardSubtitle2-root {
      line-height: 1.25;
      font-size: 0.75;
      font-weight: 600;
      color: ${theme.palette.text.secondary};
    }
    .MuiDataDisplay-root {
      flex: 1 0 auto;
      display: flex;
      justify-content: space-between;
      border-radius: 6px;
      background-color: ${theme.palette.grey[100]};
      padding: 1.25rem 1.875rem 1rem 1.25rem;
      margin-top: 1.5rem;
    }
    .MuiDataDisplayGroupContainer-root {
    }
    .MuiDataDisplayMetaNumber-root {
      font-size: 1.5rem;
      font-weight: 600;
      line-height: 1.7;
    }
    .MuiAuthorCardActions-root {
      display: flex;
      gap: 20px;
      justify-content: space-between;
      width: 100%;
      padding: unset;
      margin-top: 1.25rem;
    }
    .MuiAuthorCardActionButton-root {
      text-transform: initial;
      padding-top: 1rem;
      padding-bottom: 1rem;
      min-width: 110px;
      flex: 1 0 auto;
      display: flex;

      &:not(:first-of-type) {
        margin-left: unset;
      }
    }
  `
  type TMeta = {
    title: string
    stats: number
  }

  interface IAuthor {
    id: string
    title: string
    image: string
    meta: TMeta[]
  }

  const authors: IAuthor = [
    {
      id: 'whndkfhfiipoweif09-0-00oi8989',
      title: 'Alex Morrison',
      avatar: '',
      meta: [
        { title: 'Articles', stats: 34 },
        { title: 'Followers', stats: 29 },
        { title: 'Rating', stats: 8.9 },
      ],
    },
  ]

  return (
    <AuthorCardClass>
      <Card className="MuiAuthorCard-root">
        <div className="MuiAuthorCardInnerContainer-root">
          <CardMedia
            className="MuiAuthorCardMedia-root"
            component="img"
            alt="green iguana"
            image="images/male-36.jpeg"
          />

          <div className="MuiAuthorCardContentContainer-root">
            <CardContent className="MuiAuthorCardContent-root">
              <div className="MuiAuthorCardTitle-root">Alex Morrison</div>
              <div className="MuiAuthorCardSubtitle1-root">Senior Web Developer</div>
            </CardContent>
            <div className="MuiDataDisplay-root">
              <div className="MuiDataDisplayGroupContainer-root">
                <div className="MuiAuthorCardSubtitle2-root">Articles</div>
                <div className="MuiDataDisplayMetaNumber-root">34</div>
              </div>
              <div className="MuiDataDisplayGroupContainer-root">
                <div className="MuiAuthorCardSubtitle2-root">Followers</div>
                <div className="MuiDataDisplayMetaNumber-root">34</div>
              </div>
              <div className="MuiDataDisplayGroupContainer-root">
                <div className="MuiAuthorCardSubtitle2-root">Rating</div>
                <div className="MuiDataDisplayMetaNumber-root">8.9</div>
              </div>
            </div>

            <CardActions className="MuiAuthorCardActions-root">
              <Button className="MuiAuthorCardActionButton-root" variant="outlined">
                Chat
              </Button>
              <Button
                className="MuiAuthorCardActionButton-root"
                variant="contained"
                disableElevation
              >
                Follow
              </Button>
            </CardActions>
          </div>
        </div>
      </Card>
    </AuthorCardClass>
  )
}

export default AuthorCard
