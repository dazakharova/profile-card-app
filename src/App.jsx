import './App.css'
import ProfileCardMUI from './components/ProfileCardMUI'
import ProfileCardTailwind from './components/ProfileCardTailwind'
import ProfileCardStyled from './components/ProfileCardStyled'
import ProfileCardVanilla from './components/ProfileCardVanilla'


function App() {

  return (
    <div className="container">
      <ProfileCardMUI />
      <ProfileCardTailwind />
      <ProfileCardStyled />
      <ProfileCardVanilla />
    </div>
  )
}

export default App
