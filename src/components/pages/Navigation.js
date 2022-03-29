import React from 'react'
import Card from '../shared/Card'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/">
                    <Card>
                        <h3>Home</h3>
                    </Card>
                </Link>
            </li>
            <li>
                <Link to="/about">
                    <Card>
                        <h3>About</h3>
                    </Card>
                </Link>
            </li>
            <li>
                <Link to="/tasklist">
                    <Card>
                        <h3>Task List</h3>
                    </Card>
                </Link>
            </li>
        </ul>
    </nav>
  )
}
