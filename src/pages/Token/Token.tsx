import { FC } from 'react'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'
import { appSlice } from '../../redux/app/app.slice'

const Token: FC = () => {
  const dispatch = useAppDispatch()
  const { user } = useAppSelector((state) => state.app)
  const { updateUser } = appSlice.actions
  return (
    <div>
      <button
        onClick={() => {
          localStorage.setItem(
            'token',
            'eyJzdWIiOiJkZmFhc2RmZmRzYSIsIm5hbWUiOiJkYXNmc2RhIGFkc2ZmYXNkIiwiaWF0IjoxMjM0NDEyNDMxMjE0Mn0'
          )
          dispatch(
            updateUser({
              ...user,
              token:
                'eyJzdWIiOiJkZmFhc2RmZmRzYSIsIm5hbWUiOiJkYXNmc2RhIGFkc2ZmYXNkIiwiaWF0IjoxMjM0NDEyNDMxMjE0Mn0',
            })
          )
        }}
      >
        Token
      </button>
    </div>
  )
}

export default Token
