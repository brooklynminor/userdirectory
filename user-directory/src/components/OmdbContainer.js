import React, { useState, useEffect } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import UserDetail from "./SearchDetail";
import API from "../utils/API";

function OmdbContainer() {
const [resultUsers, setResultUsers] = useState([]);
const [displayUsers, setDisplayUsers] = useState([]);
const [search, setSearch] = useState("");
  // When this component mounts, search for the movie "The Matrix"
  // add the searchUsers to run as soon as this component is mounted in the
  useEffect( function(){
    searchUsers()
  }, [] ) //send in empty set of variables

  async function searchUsers(){
    const res = await API.getUsers()
    console.log(res.data)
      setResultUsers( res.data.results )
      setDisplayUsers( res.data.results )
  }

  function handleInputChange( event ){
    console.log( `[handleINputChange] called value=${event.target.value}`)
    //update our search variable
    //call the 'searchUsers()' function
    setSearch( event.target.value )
  }

  function  handleFormSubmit( event ) {
    event.preventDefault();
    // call the 'searchUsers()' function
    const list = resultUsers.filter( user=>user.name.first.indexOf( search)>-1 )
    setDisplayUsers( list )
  }

    return (
      <Container>
        <Row>
           <Col size="md-12">
            <Card heading="Search">
              <SearchForm
                value={search}
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
        <Row>
           <Col size="md-12">
           <table class="table">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
  {displayUsers.map(user=>(
            <UserDetail 
            picture={user.picture.thumbnail}
              firstname={user.name.first}
              lastname={user.name.last}
              email={user.email}
            />
             ))}
  </tbody>
  </table>

             </Col>
        </Row>
      </Container>
    );
  }

export default OmdbContainer;
