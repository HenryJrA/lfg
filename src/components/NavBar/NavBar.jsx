
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
import MapCard from '../MapCard/MapCard'
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout, history }) => {
	const [visible, setVisible] = React.useState(false)

	return (
		<>
			{user ? (
		//  <Grid columns={1}>
		//  <Grid.Column>
		// 	 <Checkbox
		// 		 checked={visible}
		// 		 label={{ children: <code>🏠</code> }}
		// 		 onChange={(e, data) => setVisible(data.checked)}
		// 	 />
		//  </Grid.Column>

		//  <Grid.Column style={{minHeight: '100vm'}}>
			 <Sidebar.Pushable as={Segment}>
				 <Sidebar
					 as={Menu}
					 animation='overlay'
					 icon='labeled'
					 inverted
					//  onHide={() => setVisible(false)}
					 vertical
					 visible
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
						 <Image 
						 className={styles.center}
						 src='data:image/jpeg;base64,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'/>
					 <Image className={styles.small} src='https://www.wpp.com/-/media/project/wpp/images/voices/gaming-wt-intelligence.jpg?width=2568&height=1445' />
					 </Segment>
				 </Sidebar.Pusher>
			 </Sidebar.Pushable>
	// 	 </Grid.Column>
	//  </Grid>
			) : (
				// <Grid columns={1}>
				// <Grid.Column>
				// 	<Checkbox
				// 		checked={visible}
				// 		label={{ children: <code>🏠</code> }}
				// 		onChange={(e, data) => setVisible(data.checked)}
				// 	/>
				// </Grid.Column>
	
				<Grid.Column>
					<Sidebar.Pushable as={Segment}>
						<Sidebar
							as={Menu}
							animation='overlay'
							icon='labeled'
							inverted
							// onHide={() => setVisible(false)}
							vertical
							visible
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
							<Image src='https://www.wpp.com/-/media/project/wpp/images/voices/gaming-wt-intelligence.jpg?width=2568&height=1445' />
							</Segment>
						</Sidebar.Pusher>
					</Sidebar.Pushable>
				</Grid.Column>
			// </Grid>
			)}
		</>
	)
}

export default NavBar
