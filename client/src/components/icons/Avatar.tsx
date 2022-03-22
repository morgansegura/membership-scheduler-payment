import React from 'react'
import { userService } from 'api'
import { IconContainer, UserImage, UserText } from 'styles/Avatar'
import { userInitials } from 'utils'
import { useStorage } from 'hooks'
import { MdAddAPhoto, MdNoPhotography } from 'react-icons/md'
import { string } from 'yup'

type AvatarProps = {
  size?: string
  type?: string
  withOptions?: boolean
}

const Avatar: React.FC<AvatarProps> = ({ size, type, withOptions }) => {
  const { getStorage } = useStorage()
  const [user, setUser] = React.useState(Boolean(getStorage('accessToken')))
  const [userInitial, setUserInitial] = React.useState('W')
  const [userImage, setUserImage] = React.useState('')
  const [selectedImage, setSelectedImage] = React.useState('')
  //   const [selectedImage, setSelectedImage] = React.useState(
  //     'https://api.uifaces.co/our-content/donated/1H_7AxP0.jpg',
  //   )

  const getUser = () => {
    if (user) {
      userService.me().then((res: any) => {
        const { username } = res
        const initial = userInitials(`${username}`)
        setUserInitial(initial)
      })
    }
  }

  interface IUpdateUser {
    avatar?: any
    // [rest: string]: any
  }

  const uploadAvatar = (file: any) => {
    userService.upload(file).then((res: any) => {
      console.log(res)
      const { avatar } = res
      setSelectedImage(avatar)
    })
  }

  const uploadImage = async (e: any) => {
    if (!userImage) {
      const files = e.target.files
      const data = new FormData()
      data.append('file', files[0])
      // data.append('upload_preset', 'UserAvatars')

      const res = await fetch('https://api.cloudinary.com/v1_1/segurallc/image/upload', {
        method: 'post',
        body: data,
      })

      const file = await res.json()
      console.log(file.secure_url)
      setSelectedImage(file.secure_url)
      uploadAvatar(file.secure_url)
    } else {
      // delete image
      setSelectedImage('')
    }
  }

  const imageSelector = () => {
    console.log('User has images or just wants to keep initials')
  }

  React.useEffect(() => {
    getUser()
  }, [])

  return (
    <UserImage size={size}>
      {selectedImage ? (
        <img src={selectedImage} alt="Avatar" />
      ) : (
        <UserText>{userInitial}</UserText>
      )}
      {withOptions && !selectedImage && (
        <>
          <input type="file" accept=".jpg, .jpeg, .png" onChange={uploadImage} />
          <IconContainer>{!selectedImage ? <MdAddAPhoto /> : <MdNoPhotography />}</IconContainer>
        </>
      )}
    </UserImage>
  )
}

export default Avatar
