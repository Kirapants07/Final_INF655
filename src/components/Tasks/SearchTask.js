import React from 'react'
import Card from '../shared/Card'

export default function SearchTask({search, setSearch}) {
  return (
    <Card>
      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
          <label htmlfor="search">Search</label>
            <input id="search" type="text" role="searchbox" placeholder="Search Tasks" 
            onChange ={(e) => setSearch(e.target.value)} />
      </form>
    </Card>
  )
}
