import FilterCard from '../../components/FilterCard'
import * as S from './styles'

const SideBar = () => (
  <S.Aside>
    <div>
      <S.Field type="text" placeholder="Search" />
      <S.Filters>
        <FilterCard subtitle="friends" counter={1} />
        <FilterCard subtitle="family" counter={2} />
        <FilterCard subtitle="work" counter={3} />
        <FilterCard subtitle="important" counter={4} />
        <FilterCard subtitle="emergency" counter={6} active />
      </S.Filters>
    </div>
  </S.Aside>
)

export default SideBar
