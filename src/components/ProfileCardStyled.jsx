import styled from 'styled-components';

const Card = styled.div`
    background-color:  #f5f5f5;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
`

const Avatar = styled.img`
    border-radius: 50px;
    margin-bottom: 10px;
`

const Name = styled.h2`
    font-size: 20px;
    color: black;
    font-weight: bold;
    margin-bottom: 8px;
`

const Text = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    color: #666;
`

const Button = styled.button`
    background-color: #1976d2;
    color: white;
    width: 120px;
    border-right: 4px;
    padding: 8px 15px;
    margin-bottom: 20px;
    border: none;
`

const ProfileCardStyled = () => {
  return (
      <Card>
        <Avatar src="https://picsum.photos/100/100" alt="avatar" />
        <Name>Matti Meikäläinen</Name>
        <Text>Full-stack developer, passionate about coding and coffee</Text>
        <Button>Contact Me</Button>
        <Text>Created with Styled components</Text>
      </Card>
  )
}

export default ProfileCardStyled;