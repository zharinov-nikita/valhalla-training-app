import { FC } from 'react'
import Card from '../../../../components/Card/Card'
import List, { ListPropsType } from '../../../../components/Card/List/List'
import Icon from './Icon'

const list: ListPropsType = {
  props: {
    list: [{ id: 1, key: 'Вид спорта', value: 'Бег' }],
  },
}

const Property: FC = () => {
  return (
    <Card props={{ icon: <Icon />, title: 'Выполнение', visible: false }}>
      <List props={list.props} />
    </Card>
  )
}

export default Property
