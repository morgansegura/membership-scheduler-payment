import React from 'react'
import { useStorage } from 'hooks'
import { authService } from 'api'

import { Avatar, Card, CardMedia, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { StyledPostCard } from 'styles/PostCard'

type PostCardProps = {}

const PostCard: React.FC<PostCardProps> = () => {
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

  interface IPost {
    id: string
    title: string
    image: string
    meta: TMeta[]
  }

  const posts: IPost = [
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
    <StyledPostCard theme={theme}>
      <Card className="MuiPostCard-root">
        <div className="MuiPostCardInnerContainer-root">
          <CardMedia
            className="MuiPostCardMedia-root"
            component="img"
            alt="green iguana"
            image="images/soccer-field1.jpeg"
          />
          <div className="MuiPostCardContentContainer-root">
            <Typography className="MuiPostCardTitle-root" variant="h5">
              Greenplants are going to Extinct about 500 times faster than they should, Study finds
            </Typography>
            <Typography className="MuiPostCardBody1-root" variant="body1">
              If you are the sort of person who just can not keep a plant alive, you are not alone
              according to a new study published June 10 in the journal Nature [...]
            </Typography>
            <div className="MuiPostCardAuthorContainer-root">
              <Avatar className="MuiPostCardAuthorAvatar-root" />
              <div className="MuiPostCardAuthorContent-root">
                <Typography variant="h5" className="MuiPostCardAuthorTitle-root">
                  Alexander Parkinson
                </Typography>
                <Typography variant="body1" className="MuiPostCardAuthorDate-root">
                  Jun 20, 2019
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </StyledPostCard>
  )
}

export default PostCard
