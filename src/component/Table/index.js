import React, {useEffect,useState} from "react";
import axios from "axios"
import Table from 'react-bootstrap/Table';
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
// } from "react-router-dom";

const NewTable = () => {
    const [theme, setTheme] = useState("default")
    const [posts, setPosts] = useState([])
    const [order, setOrder] = useState("ASC")
    const [value, setValue] = useState("")
    useEffect(() => {
        const fetchPostsList = async () => {
            const { data} = await axios("https://swapi.dev/api/people")
            setPosts(data.results)
        }
        fetchPostsList()
    }, [setPosts])

    const sortingText = (col,id) => {
      setTheme(id)
      if (order === "ASC") {
        const sorted = posts.sort((a,b) =>{
        return  a[col].toLowerCase() > b[col].toLowerCase() ? -1 : 1
        })
        setPosts(sorted)
        setOrder("DSC")
      } else if (order === "DSC") {
        const sorted = posts.sort((a,b) =>{
          return  a[col].toLowerCase() < b[col].toLowerCase() ? -1 : 1
        })
        setPosts(sorted)
        setOrder("ASC")
      }
    }
    const sortingNums = (col,id) => {
      setTheme(id)
      if (order === "ASC") {
        const sorted = posts.sort((a,b) =>{
        return  a[col].toLowerCase() - b[col].toLowerCase()
        })
        setPosts(sorted)
        setOrder("DSC")
      } else if (order === "DSC") {
        const sorted = posts.sort((a,b) =>{
          return   b[col].toLowerCase() - a[col].toLowerCase() 
        })
        setPosts(sorted)
        setOrder("ASC")
      }
    }

    const filteredNames = posts.filter(name => {
      return name.name.toLowerCase().includes(value.toLocaleLowerCase())
    })
    
    // const 

    const valueChangeHandler = () => {
      setPosts(filteredNames);
    }

    return (
        <div className="divBody">
          <div className="input-search">
            <div className="input-group mb-4">
          <input onChange={(event) => setValue(event.target.value)} value={value} type="text" id="input-text" className="form-control" placeholder="Type name here" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
          <div className="input-group-append">
            <button onClick={(event) => valueChangeHandler()} className="btn" id="buttonFind" type="button">Search</button>
          </div>
        </div>
          </div>
        <Table striped bordered hover className="tableTab">
  <thead>
  <tr>
      <th>
        <div id="container">Name 
        <div id="romb">
          <span className={`glyphicon glyphicon-triangle-top ${theme  === 1 ? "purple-background" : "default-color"}`} onClick={() => sortingText("name",1)}></span>
      <span className={`glyphicon glyphicon-triangle-bottom  ${theme  === 2 ? "purple-background" : "default-color"}`}  onClick={() => sortingText("name",2)}></span>
        </div></div>
        </th>
        <th>
        <div id="container">Birth Year
        <div id="romb">
        <span className={`glyphicon glyphicon-triangle-top ${theme  === 3 ? "purple-background" : "default-color"}`} onClick={() => sortingText("birth_year",3)}></span>
      <span className={`glyphicon glyphicon-triangle-bottom  ${theme  === 4 ? "purple-background" : "default-color"}`} onClick={() => sortingText("birth_year",4)}></span>
        </div></div>
        </th>
        <th>
        <div id="container">Height 
        <div id="romb">
        <span className={`glyphicon glyphicon-triangle-top ${theme  === 5 ? "purple-background" : "default-color"}`} onClick={() => sortingNums("height",5)}></span>
      <span className={`glyphicon glyphicon-triangle-bottom  ${theme  === 6 ? "purple-background" : "default-color"}`} onClick={() => sortingNums("height",6)}></span>
        </div></div>
        </th>
        <th>
        <div id="container">Mass 
        <div id="romb">
        <span className={`glyphicon glyphicon-triangle-top ${theme  === 7 ? "purple-background" : "default-color"}`} onClick={() => sortingNums("mass",7)}></span>
      <span className={`glyphicon glyphicon-triangle-bottom  ${theme  === 8 ? "purple-background" : "default-color"}`} onClick={() => sortingNums("mass",8)}></span>
        </div></div>
        </th>
    </tr>
  </thead>
  <tbody>    
  
      { 
    posts &&  posts.map((item) => (
          <tr key={item.name}>
      <td>{item.name}</td>
      <td>{item.birth_year}</td>
      <td>{item.height}</td>
      <td>{item.mass}</td>
      </tr>
        ))
      }
  </tbody>
</Table>
        </div>
    )
}

export default NewTable

