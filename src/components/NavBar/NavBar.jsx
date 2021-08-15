
import React from 'react'
import { Link } from 'react-router-dom'
import SearchForm from '../SearchForm/SearchForm'

const NavBar = ({ user, handleLogout, history }) => {
	return (
		<>
			{user ? (
				<nav>
					<div>
						<ul>
							<Link to="/">Welcome, {user.name}</Link>
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
