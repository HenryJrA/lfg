
import React from 'react'
import { Link } from 'react-router-dom'
import {
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react'

const NavBar = ({ user, handleLogout, history }) => {
	const [visible, setVisible] = React.useState(false)

	return (
		<>
			{user ? (
		 <Grid columns={1}>
		 <Grid.Column>
			 <Checkbox
				 checked={visible}
				 label={{ children: <code>visible</code> }}
				 onChange={(e, data) => setVisible(data.checked)}
			 />
		 </Grid.Column>

		 <Grid.Column style={{minHeight: '100vm'}}>
			 <Sidebar.Pushable as={Segment}>
				 <Sidebar
					 as={Menu}
					 animation='overlay'
					 icon='labeled'
					 inverted
					 onHide={() => setVisible(false)}
					 vertical
					 visible={visible}
					 width='thin'
				
				 >
					 <Menu.Item 
					 as={Link}
					 name='home'
					 to='/'
					 >
						 <Icon name='home' />
						 Home
					 </Menu.Item>
					 <Menu.Item as={Link} name='events' to='/events'>
						 <Icon name='gamepad' />
						 Events
					 </Menu.Item>
					 <Menu.Item as={Link} name='users' to='/users'>
						 <Icon name='user' />
						 Users
					 </Menu.Item>
					 <Menu.Item as={Link} onClick={handleLogout}>
						 <Icon name='log out' />
						 Logout
					 </Menu.Item>
				 </Sidebar>

				 <Sidebar.Pusher>
					 <Segment basic>
						 <Header as='h3'>Application Content</Header>
						 <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
					 </Segment>
				 </Sidebar.Pusher>
			 </Sidebar.Pushable>
		 </Grid.Column>
	 </Grid>
			) : (
				<Grid columns={1}>
				<Grid.Column>
					<Checkbox
						checked={visible}
						label={{ children: <code>visible</code> }}
						onChange={(e, data) => setVisible(data.checked)}
					/>
				</Grid.Column>
	
				<Grid.Column>
					<Sidebar.Pushable as={Segment}>
						<Sidebar
							as={Menu}
							animation='overlay'
							icon='labeled'
							inverted
							onHide={() => setVisible(false)}
							vertical
							visible={visible}
							width='thin'
						>
							<Menu.Item as={Link} to='/login'>
								<Icon name='sign in' />
								Login
							</Menu.Item>
							<Menu.Item as={Link} name='users' to='/users'>
								<Icon name='users' />
								Users
							</Menu.Item>
							<Menu.Item as={Link} name='signup' to='/signup'>
								<Icon name='signup' />
								Sign Up
							</Menu.Item>
						</Sidebar>
	
						<Sidebar.Pusher>
							<Segment basic>
								<Header as='h3'>Application Content</Header>
								<Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
							</Segment>
						</Sidebar.Pusher>
					</Sidebar.Pushable>
				</Grid.Column>
			</Grid>
			)}
		</>
	)
}

export default NavBar
