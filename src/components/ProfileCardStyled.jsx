import styled from 'styled-components';

const Card = styled.div`
    background-color: rgb(225, 225, 225);
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
`

const Avatar = styled.img`
    border-radius: 50%;
    margin-bottom: 10px;
`

const Name = styled.h2`
    font-size: 1.5rem;
    color: black;
    margin-bottom: 8px;
`

const Text = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.8rem;
    color: #737373;
`

const Button = styled.button`
    background-color: #326eea;
    color: white;
    padding: 8px 15px;
    border: none;
    border-radius: 5px;
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