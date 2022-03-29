import React from 'react';
import Header from './Header';
import Card from '../shared/Card';
import Footer from './Footer';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
    <Header />
    <Navigation />
    <div className="container">
      <Card>
          <h1>About this application</h1>
          <p>This task manager allows users to add, delete, and search tasks in the Task list.</p>
      </Card>
  </div>
  <Footer />
  </>
  )
}
