import React, {useState} from 'react'
import {v1} from 'uuid'
import GreetingContainer from './GreetingContainer'


// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    let user = v1()

    const [users, setUsers] = useState<UserType[]>([{_id: user, name: 'Nikita'}]) // need to fix any
    const addUserCallback = (name: string) => { // need to fix any
        setUsers([{_id: user, name: name}, ...users]) // need to fix
    }

    /*    const newTodolistId = v1()
        setTodolists([{id: newTodolistId, title: title, filter: "all"},...todolists])
        setTasks({...tasks, [newTodolistId]: []})*/

    return (
        <div>
            <hr/>
            homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3
