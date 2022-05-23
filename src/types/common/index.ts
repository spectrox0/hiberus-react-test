import { FC, PropsWithChildren } from 'react'

export type PropsOnlyWithChildren<T = unknown> = PropsWithChildren<T>

export type FCWithChildren<T = unknown> = FC<PropsOnlyWithChildren<T>>
