import React from 'react'
import Resizer from 'react-image-file-resizer'
import { usersService, authService, alertService } from 'api'
import { IconContainer, UserImage, UserText } from 'styles/Avatar'
import { userInitials } from 'utils'
import { useStorage } from 'hooks'
import { MdAddAPhoto, MdNoPhotography } from 'react-icons/md'
import AvatarEditor from 'react-avatar-editor'
import Button from 'components/inputs/Button'
import { emptyObject } from 'utils'

type AvatarTypeProps = {
  src: string
  initial: string
}

const AvatarType: React.FC<AvatarTypeProps> = ({ src, initial }) => {
  return src ? <img src={src} alt="Avatar image" /> : <UserText>{initial}</UserText>
}

type AvatarProps = {
  size?: string
  type?: string
  withOptions?: boolean
}

const Avatar: React.FC<AvatarProps> = ({ size, type, withOptions }) => {
  const { getStorage } = useStorage()
  const [user, setUser] = React.useState(Boolean(getStorage('user')))
  const [userInitial, setUserInitial] = React.useState(';)')
  const [showAvatarCropper, setShowAvatarCropper] = React.useState<any>()
  const [croppedImage, setCroppedImage] = React.useState<any>()
  const [selectedImage, setSelectedImage] = React.useState<any>('')
  const EditorRef = React.useRef<any>(null)

  const getUser = () => {
    if (user) {
      authService.authUser().then((res: any) => {
        const { username, avatar } = res
        const initial = userInitials(`${username?.toUpperCase()}`)
        avatar === null || avatar === undefined || emptyObject(avatar)
          ? ''
          : setCroppedImage(avatar.url)
        setUserInitial(initial)
      })
    }
  }

  const handleAvatarCropper = (e: any) => {
    let file = e.target.files[0]
    setSelectedImage(file)
    setShowAvatarCropper(true)
  }

  const resizeFile = (file: any) =>
    new Promise(resolve => {
      Resizer.imageFileResizer(
        file,
        100,
        100,
        'png',
        100,
        0,
        uri => {
          resolve(uri)
        },
        'file',
      )
    })

  const handleProcessImage = async () => {
    // Resize File
    const image: any = await resizeFile(selectedImage)
    setSelectedImage(image)
    // Crop File
    if (EditorRef.current) {
      const imgScaled = EditorRef.current?.getImageScaledToCanvas().toDataURL()
      setCroppedImage(imgScaled)
    }
    // Set FormData
    const data = new FormData()
    data.append('file', image)
    // Send image to server
    await usersService.addAvatar(data).then(() => {
      alertService.success(`👍🏽  &nbsp Avatar successfully updated.`, {
        keepAfterRouteChange: true,
      })
    })
    // Reset views and image containers
    setShowAvatarCropper(false)
  }

  React.useEffect(() => {
    getUser()
  }, [user])

  return (
    <>
      <UserImage size={size}>
        <AvatarType src={croppedImage} initial={userInitial} />
        {withOptions && !selectedImage && (
          <>
            <input type="file" name="avatar" accept="image/*" onChange={handleAvatarCropper} />
            <IconContainer>{!selectedImage ? <MdAddAPhoto /> : <MdNoPhotography />}</IconContainer>
          </>
        )}
      </UserImage>

      {withOptions && showAvatarCropper && (
        <>
          <AvatarEditor
            ref={EditorRef}
            image={selectedImage}
            width={150}
            height={150}
            border={50}
            scale={1.2}
          />
          <Button onClick={handleProcessImage}>Crop</Button>
        </>
      )}
    </>
  )
}

export default Avatar
