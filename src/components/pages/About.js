import React from 'react';
import Header from './Header';
import Card from '../shared/Card';
import Footer from './Footer';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <Header />
      <Card>
          <h1>About this application</h1>
          <h2>This task manager allows users to add, delete, and search tasks in the Task list.</h2>
          <p>
            <Link to="/">Back to Home</Link>
          </p>
      </Card>
      <Footer />
    </div>
  )
}
