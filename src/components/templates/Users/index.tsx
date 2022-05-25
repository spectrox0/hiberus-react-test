import React, { FC, useEffect, useMemo, useState } from 'react'
import { Btn, Input, Text, Title } from '../../atoms'
import { CustomTable } from '../../organism'
import { useDispatch } from 'react-redux'
import { deleteUser, getUsers } from '../../../store/actions'
import { useAppSelector } from '../../../store/selector'
import { Box, IconButton } from '@mui/material'
import { DeleteOutline, EditOutlined, Search } from '@mui/icons-material'
import { User } from '../../../types/User'
import { Modal } from '../../molecules'
import { UserForm } from '../../organism/forms/User'

enum Option {
  CREATE,
  EDIT,
  DELETE,
}

export type ValueModal = {
  option: Option
  value?: User
}
export const UsersTemplate: FC = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUsers())
  }, [])
  const { users = [], currentUser } = useAppSelector((state) => ({ ...state.users, ...state.auth }))
  const [search, setSearch] = useState<string>('')
  const filterUsers = () =>
    useMemo<User[]>(
      () =>
        users.filter((item) => {
          const searchValue = search.trim().toLowerCase()
          return true
        }),
      [users],
    )
  const [modal, setModal] = useState<ValueModal>()
  return (
    <div>
      <Title variant={'h1'}>
        Welcome {currentUser?.name} {currentUser?.surname}
      </Title>
      <Title my={2} mx={'auto'}>
        Users
      </Title>
      <Btn onClick={() => setModal({ option: Option.CREATE })} sx={{ mb: 2 }}>
        Create
      </Btn>
      {users.length && (
        <Input icon={Search} value={search} onChange={({ target }) => setSearch(target.value)} />
      )}
      <Modal
        close={() => setModal(undefined)}
        title={'Delete User'}
        isOpen={modal?.option === Option.DELETE}
      >
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
          <Text textAlign={'center'}> Are you sure? </Text>

          <Btn
            fullWidth
            sx={{ my: 2 }}
            onClick={() => {
              dispatch(deleteUser({ id: modal?.value?.id as string }))
              setModal(undefined)
            }}
          >
            Delete
          </Btn>
        </Box>
      </Modal>
      <Modal
        close={() => setModal(undefined)}
        title={modal?.option === Option.CREATE ? 'Create User' : 'Edit User'}
        isOpen={modal?.option === Option.CREATE || modal?.option === Option.EDIT}
      >
        <UserForm callback={() => setModal(undefined)} user={modal?.value} />
      </Modal>
      <CustomTable
        data={users.map((item) => ({
          id: item.id,
          name: item.name,
          surname: item.surname,
          email: item.email,
          options: (
            <Box display={'flex'}>
              <IconButton
                onClick={() => setModal({ option: Option.EDIT, value: item })}
                color={'success'}
                sx={{ mr: 1, my: 1 }}
              >
                <EditOutlined />
              </IconButton>

              <IconButton
                onClick={() => setModal({ option: Option.DELETE, value: item })}
                color={'error'}
                sx={{ my: 1 }}
              >
                <DeleteOutline />
              </IconButton>
            </Box>
          ),
        }))}
        headers={['id', 'name', 'surname', 'email', 'options']}
      />
    </div>
  )
}
