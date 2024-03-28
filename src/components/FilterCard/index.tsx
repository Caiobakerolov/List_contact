import * as S from './styles'

export type Props = {
  active?: boolean
}

const FilterCard = (props: Props) => (
  <S.Card active={props.active}>
    <S.Counter>3</S.Counter>
    <S.Label>Pendents</S.Label>
  </S.Card>
)

export default FilterCard
