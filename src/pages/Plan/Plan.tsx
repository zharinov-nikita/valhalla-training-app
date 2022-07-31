import { AimOutlined } from '@ant-design/icons'
import Card from '../../components/Card/Card'
import Task from '../../components/Card/Task/Task'
import Icon from '../../components/Icon/Icon'
import List from '../../components/List/List'
import { useFindQuery } from '../../redux/plan/plan.service'

export default function () {
  const { data, isError, isLoading } = useFindQuery('')

  if (isLoading) {
    return <>Загрузка...</>
  }

  if (isError || data?.length === 0) {
    return <>Планов нет</>
  }

  const workouts = data?.map(({ periods }) =>
    periods?.map(({ cycles }) =>
      cycles?.map(({ days }) =>
        days?.map(({ workouts }) => workouts?.map(({ exercises }) => exercises))
      )
    )
  )

  console.log(workouts)

  return <List>{''}</List>
}
