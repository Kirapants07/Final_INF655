import React from 'react';
import Header from './Header';
import Card from '../shared/Card';
import Footer from './Footer';

export default function About() {
  return (
    <div>
      <Header />
      <Card>
          <h1>About this application</h1>
          <h2>This task manager allows users to add, delete, and search tasks in the Task list.</h2>
      </Card>
      <Footer />
    </div>
  )
}
