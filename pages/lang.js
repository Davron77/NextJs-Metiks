import React from 'react'
import { useTranslation } from 'react-i18next'

function App() {
  const { t, i18n } = useTranslation()

  return <h2 className="text-center">{t('title')}</h2>
}

export default App
