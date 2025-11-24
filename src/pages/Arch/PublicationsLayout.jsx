import { Outlet, NavLink } from 'react-router-dom'

export default function PublicationsLayout() {
  const activeStyle = {
    border: '1px solid #000000'
  }

  return (
    <div>
      <nav>
        <NavLink
          to='.'
          end
          style={({ isActive }) => isActive ? activeStyle : null}
        >
          the violinist
        </NavLink>
        <NavLink
          to='propylaeum'
          style={({ isActive }) => isActive ? activeStyle : null}
        >
          propylaeum
        </NavLink>
        <NavLink
          to='arch'
          style={({ isActive }) => isActive ? activeStyle : null}
        >
          arch
        </NavLink>
        <NavLink
          to='interiors'
          style={({ isActive }) => isActive ? activeStyle : null}
        >
          interiors
        </NavLink>
        <NavLink
          to='paper'
          style={({ isActive }) => isActive ? activeStyle : null}
        >
          paper architecture
        </NavLink>
      </nav>
      <Outlet />
    </div>
  )
}