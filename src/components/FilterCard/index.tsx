import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { changeFilter } from '../../store/reducers/filter'
import * as enums from '../../Utils/enums/task'
import { RootReducer } from '../../store'

export type Props = {
  active?: boolean
  subtitle: string
  criterion: 'priority' | 'all'
  value?: enums.Priority
}

const FilterCard = ({ subtitle, criterion, value }: Props) => {
  const dispatch = useDispatch()
  const { filter, tasks } = useSelector((state: RootReducer) => state)

  const checkIsActive = () => {
    const sameCriterion = filter.criterion === criterion
    const sameValue = filter.value === value

    return sameCriterion && sameValue
  }

  const counterTasks = () => {
    if (criterion === 'all') return tasks.itens.length
    if (criterion === 'priority') {
      return tasks.itens.filter((item) => item.priority === value).length
    }
  }

  const filtered = () => {
    dispatch(
      changeFilter({
        criterion,
        value
      })
    )
  }

  const counter = counterTasks()
  const active = checkIsActive()

  return (
    <S.Card active={active} onClick={filtered}>
      <S.Counter>{counter}</S.Counter>
      <S.Label>{subtitle}</S.Label>
    </S.Card>
  )
}

export default FilterCard
