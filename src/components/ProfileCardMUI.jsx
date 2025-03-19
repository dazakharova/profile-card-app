import { Card, Avatar, Typography, Button } from '@mui/material';

const ProfileCardMUI = () => {
  return (
      <Card sx={{bgcolor: '#f5f5f5', width: 300, display: 'flex', flexDirection: 'column', alignItems: 'center', border: 1, borderColor: '#e0e0e0', borderRadius: '8px', boxShadow: 'none', padding: '20px'}}>
        <Avatar src="https://picsum.photos/100/100" alt="avatar" sx={{width: 100, height: 100, marginBottom: '10px'}} />
        <Typography variant="h6" sx={{fontWeight: 'bold', marginBottom: '8px'}}>Matti Meikäläinen</Typography>
        <Typography variant="body2" color="textSecondary">Full-stack developer, passionate about coding and coffee</Typography>
        <Button variant="contained" sx={{padding: '8px 15px', marginBottom: '20px'}}>Contact Me</Button>
        <Typography variant="body2" color="textSecondary">Created with Material UI</Typography>
      </Card>
  )
}

export default ProfileCardMUI;