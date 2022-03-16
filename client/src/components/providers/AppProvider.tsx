import React from 'react'
import axios from 'axios'
// [Providers]
import { AuthProvider, ThemesProvider } from 'components/providers'
// [Components]
import { Alert } from 'components'

type Props = {
  children?: any
}

const AppProvider: React.FC<Props> = ({ children }) => {
  axios.defaults.baseURL = `http://localhost:3001/api/admin/`
  axios.defaults.withCredentials = true

  return (
    <ThemesProvider>
      <Alert />
      <AuthProvider>{children}</AuthProvider>
    </ThemesProvider>
  )
}

export default AppProvider
