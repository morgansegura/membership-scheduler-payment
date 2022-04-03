import React from 'react'
import { useTheme } from '@mui/material/styles'
import { useScrollPosition } from 'hooks'
import { isAbsolute } from 'path'

type BallProps = {}

const Ball: React.FC<BallProps> = () => {
  const theme = useTheme()
  const pos = useScrollPosition()

  const src = pos > 30 ? 'ball.png' : 'ball.gif'
  const width = pos > 30 ? '45px' : '55px'

  return (
    <div style={{ position: 'relative', width: width, display: 'flex', marginRight: '15px' }}>
      {theme.palette.mode === 'dark' ? (
        <img
          style={{
            maxWidth: '100%',
            mixBlendMode: 'lighten',
            filter: 'grayscale(0) invert(1) saturate(10)',
          }}
          src={`/images/${src}`}
        />
      ) : (
        <img style={{ maxWidth: '100%' }} src={`/images/${src}`} />
      )}
    </div>
  )
}

export default Ball
