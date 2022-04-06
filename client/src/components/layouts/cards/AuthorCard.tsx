import React from 'react'
import { useStorage } from 'hooks'
import { authService } from 'api'
import { StyledAuthorCard } from 'styles/AuthorCard'

import { Button, Card, CardActions, CardContent, CardMedia } from '@mui/material'
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
    <StyledAuthorCard theme={theme}>
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
    </StyledAuthorCard>
  )
}

export default AuthorCard
