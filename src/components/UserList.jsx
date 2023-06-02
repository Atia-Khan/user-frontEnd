import React, { useEffect, useState } from 'react'

function UserList() {
    const [showList, setShowList] = useState(false)
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:8080/users/list')
            .then((response) => response.json())
            .then((result) => {
                setData(result);
                setLoading(false);
            })
    }, [showList])

    function handleList() {
        setShowList(!showList)
    }
    return (
        <>
            <h1>User List</h1>
            <button onClick={handleList}>Show List</button>
            <ul>

                {showList === true && data.map((item) => {
                    return <li key={item.id}>
                        <h3>Name: {item.uName}</h3>
                        <h4>password: {item.password}</h4>
                        <h5>Date: {item.cDate}</h5>
                    </li>
                })}
            </ul>
        </>
    )
}

export default UserList