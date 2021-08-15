import { createEvent } from '@testing-library/react'
import React from 'react'
import { Link } from 'react-router-dom'
import SearchForm from '../SearchForm/SearchForm'
import CreateEventForm from '../CreateEventForm/CreateEventForm'
const NavBar = ({ user, handleLogout, history }) => {
	return (
		<>
			{user ? (
				<nav>
					<div>
						<ul>
							<li>Welcome, {user.name}</li>
							<li>
                <Link to="/users">Users</Link>
              </li>
							<li>
								<Link to='' onClick={handleLogout}>LOG OUT</Link>
							</li>
							<li>
							<Link to="/events">Events</Link>
							</li>
							<li>
								<Link to='/CreateEvent'>Create Event</Link>
							</li>
							<SearchForm 
								history={history}
							/>
			
						</ul>
					</div>
				</nav>
			) : (
				<nav>
					<div>
						<ul>
							<li>
								<Link to="/login">Log In</Link>
							</li>
							<li>
                <Link to="/users">Users</Link>
              </li>
							<li>
								<Link to="/signup">Sign Up</Link>
							</li>
						</ul>
					</div>
				</nav>
			)}
		</>
	)
}

export default NavBar
