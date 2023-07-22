import React from 'react'
import Search from "../components/Search"
import Category from "../components/Category"
import Pages from "../pages/Pages"
function Dashboard() {
  return (
    <div>
        <Search/>
        <Category/>
        <Pages/>
    </div>
  )
}

export default Dashboard