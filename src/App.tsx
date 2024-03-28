import StyleGlobal, { Container } from './styles'
import ListTasks from './containers/ListTasks'
import SideBar from './containers/SideBar'

function App() {
  return (
    <>
      <StyleGlobal />
      <Container>
        <SideBar />
        <ListTasks />
      </Container>
    </>
  )
}

export default App
