import React, { ChangeEventHandler, FC, useEffect, useMemo, useState } from 'react'
import { Btn, Input, Text, Title } from '../../atoms'
import { CustomTable } from '../../organism'
import { useDispatch } from 'react-redux'
import { deleteUser, getUsers } from '../../../store/actions'
import { useAppSelector } from '../../../store/selector'
import { Box, IconButton } from '@mui/material'
import { DeleteOutline, EditOutlined, PersonAdd, Search } from '@mui/icons-material'
import { User } from '../../../types/User'
import { Modal } from '../../molecules'
import { UserForm } from '../../organism/forms/User'
import Fuse from 'fuse.js'
import debounce from 'lodash.debounce'

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

  const filterUsers = useMemo<User[]>(() => {
    const fuse = new Fuse<User>(users, {
      keys: Object.keys(users?.[0] || {}),
    })
    return fuse.search(search).map((item) => ({ ...item.item }))
  }, [users, search])
  const changeHandler: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
    setSearch(event.target.value)
  }
  const debouncedChangeHandler = useMemo(() => debounce(changeHandler, 300), [])

  const [modal, setModal] = useState<ValueModal>()
  return (
    <div>
      <Title mt={2} variant={'h1'}>
        Welcome {currentUser?.name} {currentUser?.surname}
      </Title>
      <Box display={'flex'} flexWrap={'wrap'} justifyContent={'space-between'}>
        <Title variant={'h2'} my={2}>
          Users
        </Title>
        <Btn
          startIcon={<PersonAdd />}
          onClick={() => setModal({ option: Option.CREATE })}
          sx={{ mb: 2 }}
        >
          Create a user
        </Btn>
      </Box>
      {users.length && (
        <Input
          placeholder={'search'}
          sx={{ mb: 2 }}
          variant={'outlined'}
          icon={Search}
          onChange={debouncedChangeHandler}
        />
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
        data={(search.trim() ? filterUsers : users).map((item) => ({
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
