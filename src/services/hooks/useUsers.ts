import { useQuery } from "react-query"
import { api } from "../axios/api"

type User = {
  id: string
  name: string
  email: string
  createdAt: string
}

type GetUsers = {
  users: User[]
  totalCount: number
}


async function getUsers(page: number): Promise<GetUsers> {
  const { data, headers } = await api.get('/users', {
    params: {
      page
    }
  })

  const totalCount = Number(headers['x-total-count'])

  const users = data.users.map((user: User) => {
    return {
      ...user,
      createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }
  })
  return { users, totalCount }



}

export const useUsers = (page: number) => {
  const { data, isLoading, isError, isFetching } = useQuery(['users', page], () => getUsers(page), {
    staleTime: 1000 * 60 * 10 // 10 minutes
  }
  )

  return {
    data, isLoading, isError, isFetching
  }
}