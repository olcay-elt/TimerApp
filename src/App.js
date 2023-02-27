import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Clock from './components/Clock';
import Timer from './components/Timer';
import { Stack } from 'react-bootstrap';

function App() {
    return (
        <div className="App">
            <div className='h250px text-center'>
                <Stack className='h-100' direction="horizontal" gap={3}>
                    <Clock />
                    <Timer />
                </Stack>
            </div>
        </div>
    );
}

export default App;
