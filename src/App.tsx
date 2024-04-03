import { Provider } from 'react-redux'

import StyleGlobal, { Container } from './styles'
import ListTasks from './containers/ListTasks'
import SideBar from './containers/SideBar'
import store from './store/index'

function App() {
  return (
    <Provider store={store}>
      <StyleGlobal />
      <Container>
        <SideBar />
        <ListTasks />
      </Container>
    </Provider>
  )
}

export default App
