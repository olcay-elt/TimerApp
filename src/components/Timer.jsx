import React, { useEffect, useState } from 'react'
import { Stack, Card, Button } from 'react-bootstrap';

const Timer = () => {
    const [count, setCount] = useState(0)
    const [isStarted, setIsStarted] = useState(false)
    const [isStopped, setIsStopped] = useState(true)
    const [isStartButton, setIsStartButton] = useState(true)

    useEffect(() => {
        let interval = null

        if (isStarted && !isStopped) {
            interval = setInterval(() => {
                setCount(count => count + 1)
            }, 1000)
        } else {
            clearInterval(interval)
        }

        return () => {
            clearInterval(interval)
        }
    }, [isStarted, isStopped])

    const handleStartStop = () => {
        (isStartButton) ? start() : stop()
        setIsStartButton(!isStartButton);
    }

    const start = () => {
        setIsStarted(true)
        setIsStopped(false)
    }

    const stop = () => {
        setIsStopped(true)
    }

    const reset = () => {
        setCount(0)
        setIsStarted(false)
        setIsStopped(true)
        setIsStartButton(true)
    }

    return (
        <Card className='w-50 h-100 minWidth234'>
            <Card.Header className='bg-primary text-white'>
                <h1>
                    Timer
                </h1>
            </Card.Header>

            <Card.Body className='d-flex justify-content-center align-items-center w-100'>
                <h1>
                    {count}
                </h1>
            </Card.Body>

            <Card.Footer>
                <Stack direction="horizontal" gap={3}>
                    <Button variant={isStartButton ? 'info' : 'warning'} onClick={handleStartStop} className='w-50'>
                        {
                            isStartButton ? 'Start' : 'Stop'
                        }
                    </Button>

                    <Button variant='danger' className='w-50' onClick={reset}>
                        Reset
                    </Button>
                </Stack>
            </Card.Footer>
        </Card>
    )
}

export default Timer