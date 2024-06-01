import { createBrowserRouter } from 'react-router-dom'
import CharactersList from './pages/CharactersList'
import DetailCharacter from './pages/DetailCharacter'
import CharactersByLocation from './pages/CharactersByLocation'

const route = createBrowserRouter([
    {
        path: '/',
        element: <CharactersList/>
    }, 
    {
        path: '/:id',
        element: <DetailCharacter/>
    },
    {
        path: '/characters',
        element: <CharactersByLocation/>
    }
])

export default route