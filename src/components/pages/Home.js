import React from 'react';
import Tasks from '../Tasks/Tasks';
import AddTask from "../Tasks/AddTask";
import Header from './Header';
import Footer from './Footer';

export default function Home() {
    return (
      <>
        <Header />
        <div className="container">
          <AddTask />
          <Tasks />
      </div>
      <Footer />
      </>
  )
}
