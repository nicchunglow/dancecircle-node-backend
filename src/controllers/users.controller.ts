import UserModel from '@/src/models/users.model'

export const getUsers = async () => {
  const users = await UserModel.findAll()
  return users
}
