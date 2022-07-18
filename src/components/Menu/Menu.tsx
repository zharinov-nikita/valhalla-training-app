import {
  AimOutlined,
  BarChartOutlined,
  DingtalkOutlined,
  GithubOutlined,
  IssuesCloseOutlined,
  ProjectOutlined,
} from '@ant-design/icons'
import { FC, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'
import { menuSlice } from '../../redux/menu/menu.slice'
import css from './Menu.module.scss'

const Menu: FC = () => {
  const [click, setClick] = useState<number>(1)
  const dispatch = useAppDispatch()
  const { hide } = menuSlice.actions
  const { visible } = useAppSelector((state) => state.menu)

  useEffect(() => {
    if (click) {
      dispatch(hide())
    }
  }, [click])

  return (
    <div className={css.menu} data-visible={visible}>
      <div className={css.wrapper}>
        <div className={css.list}>
          <Link
            to={'/plan'}
            onClick={() => setClick(Number(Date.now()))}
            className={css.item}
          >
            <div className={css.icon}>
              <ProjectOutlined />
            </div>
            <div className={css.text}>
              <span>План</span>
            </div>
          </Link>
          <Link
            to={'/day/?cycleId=62d27db3e8abbafbac301b53'}
            onClick={() => setClick(Number(Date.now()))}
            className={css.item}
          >
            <div className={css.icon}>
              <AimOutlined />
            </div>
            <div className={css.text}>
              <span>Моя неделя</span>
              <span className={css.tag}>beta</span>
            </div>
          </Link>
          <div className={css.item}>
            <div className={css.icon}>
              <IssuesCloseOutlined />
            </div>
            <div className={css.text}>
              <span>Проблемы</span>
              <span className={css.tag}>dev</span>
            </div>
          </div>
          <div className={css.item}>
            <div className={css.icon}>
              <BarChartOutlined />
            </div>
            <div className={css.text}>
              <span>Статистика</span>
              <span className={css.tag}>dev</span>
            </div>
          </div>
          <a
            target={'_blank'}
            href={'https://github.com/zharinov-nikita'}
            className={css.item}
          >
            <div className={css.icon}>
              <GithubOutlined />
            </div>
            <div className={css.text}>
              <span>GitHub</span>
            </div>
          </a>
        </div>
        <div className={css.footer}>
          <a
            href="https://github.com/zharinov-nikita/valhalla-training-app"
            target={'_blank'}
            className={css.version}
          >
            v2.3.2
          </a>
          <div className={css.tag}>latest</div>
        </div>
      </div>
    </div>
  )
}

export default Menu
