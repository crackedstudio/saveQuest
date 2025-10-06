import React, { createContext, useContext, useMemo, useState } from 'react'

export type TokenType = 'USDT' | 'USDC' | 'BTC'
export type GroupType = 'closed' | 'open'

export type Member = { id: string; handle: string }

export type CreatePoolState = {
  poolName: string
  token: TokenType
  groupType: GroupType
  members: Member[]
  monthlyContribution: number
  startDateISO: string
}

const defaultState: CreatePoolState = {
  poolName: '',
  token: 'USDT',
  groupType: 'closed',
  members: [],
  monthlyContribution: 500,
  startDateISO: new Date().toISOString(),
}

type Ctx = {
  state: CreatePoolState
  setState: React.Dispatch<React.SetStateAction<CreatePoolState>>
  reset: () => void
}

const PoolCreateContext = createContext<Ctx | null>(null)

export const usePoolCreate = (): Ctx => {
  const ctx = useContext(PoolCreateContext)
  if (!ctx) throw new Error('usePoolCreate must be used within PoolCreateProvider')
  return ctx
}

export const PoolCreateProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<CreatePoolState>(defaultState)
  const value = useMemo(() => ({ state, setState, reset: () => setState(defaultState) }), [state])
  return <PoolCreateContext.Provider value={value}>{children}</PoolCreateContext.Provider>
}


