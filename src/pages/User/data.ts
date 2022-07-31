export type UserType = {
  _id: string
  firstname: string
  lastname?: string
  role: 'Тренер' | 'Спортсмен'
  login: string
  password: string
}

export const user: UserType = {
  _id: '23j3kfdksjkj9818ufkafjdslaf',
  firstname: 'Данил',
  lastname: 'Жаринов',
  role: 'Спортсмен',
  login: 'zharinov_danil',
  password: 'password',
}
