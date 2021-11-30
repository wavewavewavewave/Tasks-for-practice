import React, {ChangeEvent, useState, KeyboardEvent} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}: GreetingContainerPropsType) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        const trimmed = e.currentTarget.value.trim()
        if (trimmed) {
            setName(trimmed)
            setError('')
        } else {
            setName('')
            setError('NEPRAVELNII TITLE!!')
        }


        // need to fix
    }
    const addUser = () => {
        addUserCallback(name)
        alert(`Hello ${name} !`) // need to fix
    }

    const addFromButton = (e: KeyboardEvent<HTMLInputElement>) => {
        setError('')
        if (e.charCode === 13) {
            addUser()
        }
    }

    const totalUsers = users.length  // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            addFromButton={addFromButton}
        />
    )
}


export default GreetingContainer
