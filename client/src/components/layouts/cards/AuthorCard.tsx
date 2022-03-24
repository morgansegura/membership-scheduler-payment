import React from 'react'
import { Avatar } from 'components/icons'
import { useStorage } from 'hooks'
import { CardWrapper, CardContent, Cell } from 'styles/Card'
import { SuperLabel } from 'styles/Typography'
import { authService } from 'api'

type AuthorCardProps = {}

const AuthorCard: React.FC<AuthorCardProps> = () => {
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

  return (
    <CardWrapper transparent>
      <CardContent>
        <Avatar size="md" withOptions={true} />
        <Cell>
          <SuperLabel>Username</SuperLabel>
          <div>Adrian</div>
        </Cell>
        <Cell>
          <SuperLabel>Role</SuperLabel>
          <div>Moderator</div>
        </Cell>
      </CardContent>
    </CardWrapper>
  )
}

export default AuthorCard
