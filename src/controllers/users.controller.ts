import prisma from '@/src/utils/prisma'

export const getAllUsers = async () => {
  const allUsers = prisma.users.findMany()
  return allUsers
  // Get current user
  // const hi = req.body.username
  // const currentUser = await prisma.users.findUnique({
  //   where: { name: hi },
  //   include: {
  //     follows: true,
  //     followedBy: true,
  //     authored: true,
  //     favorites: true
  //   }
  // })
  // if (!currentUser) return res.sendStatus(404)

  // const { email, first_name, last_name } = currentUser
  // const userView = {
  //   user: {
  //     firstName: first_name,
  //     lastName: last_name,
  //     email: email
  //   }
  // }
  // return userView
}
