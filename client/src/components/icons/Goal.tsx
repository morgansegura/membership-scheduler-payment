import React from 'react'
import { useTheme } from '@mui/material/styles'
import { useScrollPosition } from 'hooks'

type GoalProps = {}

const Goal: React.FC<GoalProps> = () => {
  const theme = useTheme()
  const pos = useScrollPosition()

  const src = pos > 30 ? 'goal.png' : 'goal.gif'
  const height = pos > 30 ? '47' : '60'
  return (
    <>
      {theme.palette.mode === 'dark' ? (
        <img
          style={{ mixBlendMode: 'lighten', filter: 'grayscale(0) invert(1) saturate(10)' }}
          height={height}
          src={`/images/${src}`}
        />
      ) : (
        <img height={height} src={`/images/${src}`} />
      )}
    </>
  )
}

export default Goal
