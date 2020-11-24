import React from "react";

function SearchDetail(props) {
  return (
    <tr>
      <td><img src={props.picture} alt={props.firstname}></img></td>
  <td>{props.firstname}</td>
      <td>{props.lastname}</td>
  <td>{props.email}</td>
    </tr>
  );
}

export default SearchDetail;
