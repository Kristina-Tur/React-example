import React, {memo, useMemo, useState} from 'react';

export default {
    component: 'useMemo',
};

export const useMemoExample = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        for(let i = 1; i <= a; i++){
            let fake = 0
            while(fake < 1000000){
                fake++
                const fakeValue = Math.random()
            }
            resultA = resultA * i
        }
        return resultA
    }, [a])


    for(let i = 1; i <= b; i++){
        resultB = resultB * i
    }

    return (
        <>
            <input value={a} onChange={(event) => setA(+event.currentTarget.value)}/>
            <input value={b} onChange={(event) => setB(+event.currentTarget.value)}/>
            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for b: {resultB}
            </div>

        </>
    )
}

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
    const [users, setUsers] = useState(['Kris', 'Vadim', 'Jo', 'Anna'])

    const newArray = useMemo(() => users.filter(u => u.indexOf('a') > -1), [users])

    const addUser = () => {
        setUsers([...users, 'Sveta'])
    }
    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => addUser()}>add user</button>
            {counter}
            <UsersMemo users={newArray}/>
        </>
    )
}