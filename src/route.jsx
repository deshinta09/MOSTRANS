import { createBrowserRouter } from 'react-router-dom'
import CharactersList from './pages/CharactersList'

const route = createBrowserRouter([
    {
        path: '/',
        element: <CharactersList/>
    }, 
])

export default route