import { usePakistaNftContract } from '@/composables/contracts'
import { constants } from 'ethers'
import { useQuery } from 'vue-query'

interface IUseBalanceOf {
  account?: string | undefined
  tokenType: number
}

export const useBalanceOf = ({ account, tokenType }: IUseBalanceOf) => {
  const pakistaNftContract = usePakistaNftContract()

  const query = useQuery(
    ['total-supply-query', pakistaNftContract],
    () => pakistaNftContract.balanceOf(account ?? constants.AddressZero, tokenType),
    {
      onError: (error) => console.error(error),
      onSuccess: (data) =>
        console.log(`useBalanceOf
 | onSuccess | ${data}`),
    }
  )

  return query
}