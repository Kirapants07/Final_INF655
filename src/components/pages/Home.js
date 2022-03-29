import React from 'react';
import Tasks from '../Tasks/Tasks';
import AddTask from "../Tasks/AddTask";
import Header from './Header';
import Footer from './Footer';

export default function Home() {
    return (
        <div className="container">
        <Header />
        <AddTask />
        <Tasks />
        <Footer />
      </div>
  )
}
