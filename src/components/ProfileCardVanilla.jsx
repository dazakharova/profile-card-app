import '../styles/ProfileCardVanilla.css';

const ProfileCardVanilla = () => {
  return (
      <div className="profile-card">
        <img src="https://picsum.photos/100/100" alt="avatar" />
        <h2>Matti Meikäläinen</h2>
        <p>Full-stack developer, passionate about coding and coffee</p>
        <button>Contact Me</button>
        <p>Created with Vanilla CSS</p>
      </div>
  )
}

export default ProfileCardVanilla;