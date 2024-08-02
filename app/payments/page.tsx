'use client'
import axios from "axios"
import { Button } from "@/components/ui/button"
import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"
import { createContext, useEffect, useState } from "react"
import './style.css'

export const showAll = createContext<any>({
  Show: true,
  Hidden: {}
})

export default function DemoPage() {

  const [data, setData] = useState([])

  const [isShow, setIsShow] = useState(true)

  function Show() {
    setIsShow(false)
  }


  function Hidden() {
    setIsShow(true)
    console.log("hello")
  }


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setData(json))
  }, [])

  return (
    <>

      <div  className={` h-auto lightBox ${isShow ? "hidden" : "visible"} `} >
        <div  className="container mx-auto py-10">
          <showAll.Provider value={{Hidden , Show}}>
            <DataTable columns={columns} data={data} />
          </showAll.Provider>
        </div>
</div>

      <Button onClick={Show} >click here</Button>
 


    </>
  )
}
