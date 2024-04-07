import BtnAdd from '../../components/ButtonAdd'
import ListTasks from '../../containers/ListTasks'
import SideBar from '../../containers/SideBar'

const Home = () => (
  <>
    <SideBar showFilters />
    <ListTasks />
    <BtnAdd />
  </>
)

export default Home
