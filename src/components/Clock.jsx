import React, { useEffect, useState } from 'react'
import moment from "moment";
import { Card } from 'react-bootstrap';

const Clock = () => {
    const [time, setTime] = useState(moment())

    useEffect(() => {
        setInterval(() => {
            setTime(moment())
        }, 1000);
    }, [])

    return (
        <Card className='w-50 h-100 minWidth234'>
            <Card.Header className='bg-primary text-white'>
                <h1>
                    Clock
                </h1>
            </Card.Header>

            <Card.Body className='d-flex justify-content-center align-items-center'>
                <div className='text-center fs40px'>
                    {time.format("HH")} : {time.format("mm")} : {time.format("ss")}
                </div>
            </Card.Body>
        </Card>
    )
}

export default Clock