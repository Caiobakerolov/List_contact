import { useDispatch, useSelector } from 'react-redux'
import FilterCard from '../../components/FilterCard'
import * as S from './styles'
import { RootReducer } from '../../store'
import { changeTerm } from '../../store/reducers/filter'
import * as enums from '../../Utils/enums/task'
import { Field } from '../../styles'

const SideBar = () => {
  const dispatch = useDispatch()
  const { term } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      <div>
        <Field
          type="text"
          placeholder="Search"
          value={term}
          onChange={(event) => dispatch(changeTerm(event.target.value))}
        />
        <S.Filters>
          <FilterCard
            value={enums.Priority.FRIENDS}
            criterion="priority"
            subtitle="friends"
          />
          <FilterCard
            value={enums.Priority.FAMILY}
            criterion="priority"
            subtitle="family"
          />
          <FilterCard
            value={enums.Priority.WORK}
            criterion="priority"
            subtitle="work"
          />
          <FilterCard
            value={enums.Priority.FAVORITE}
            criterion="priority"
            subtitle="favorite"
          />
          <FilterCard
            value={enums.Priority.EMERGENCY}
            criterion="priority"
            subtitle="emergency"
          />
          <FilterCard criterion="all" subtitle="all" />
        </S.Filters>
      </div>
    </S.Aside>
  )
}

export default SideBar
