import React, {memo, useMemo, useState} from 'react';
import {string} from "prop-types";

export default {
    component: 'users',
};

export const Users = (props: {users: Array<string>}) => {
    console.log('Render Users')
    return (
        <div>
            {props.users.map((u, i) => <div key={i}>{u}</div>)}
        </div>
    )
}

const UsersMemo = memo(Users)

export const helpToReactMemo = () => {
    console.log('Render helpToReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Kris', 'Kris', 'Kris', 'Kris'])

    return (
        <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
            <UsersMemo users={users}/>
        </>
    )
}