import './App.css'
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider, Page, LegacyCard, Button} from '@shopify/polaris';

function App() {
  return (
    <AppProvider i18n={enTranslations}>
      <Page title="Example app">
        <LegacyCard sectioned>
          <Button onClick={() => alert('Button clicked!')}>Example button</Button>
        </LegacyCard>
      </Page>
    </AppProvider>
  )
}

export default App
