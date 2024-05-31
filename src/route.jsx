import { createBrowserRouter } from 'react-router-dom'
import CharactersList from './pages/CharactersList'
import DetailCharacter from './pages/DetailCharacter'

const route = createBrowserRouter([
    {
        path: '/',
        element: <CharactersList/>
    }, 
    {
        path: '/:id',
        element: <DetailCharacter/>
    }
])

export default route