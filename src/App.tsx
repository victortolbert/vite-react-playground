import { AppProvider, Page } from '@shopify/polaris'
import enTranslations from '@shopify/polaris/locales/en.json'
import { HelloPolaris } from './components/HelloPolaris'

import './App.css'

function App() {
  return (
    <AppProvider i18n={enTranslations}>
      <Page title="Polaris App">
        <HelloPolaris />
      </Page>
    </AppProvider>
  )
}

export default App
