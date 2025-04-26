import './App.css'
import { UserUseCaseProvider } from './context/UserUseCaseProvider'
import UsersPage from './presentation/pages/UsersPage'

function App() {

  return (
    
    <UserUseCaseProvider>
      <UsersPage />
    </UserUseCaseProvider>

  )
}

export default App
