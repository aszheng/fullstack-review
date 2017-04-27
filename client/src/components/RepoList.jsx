import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.

    <thead class='thead'>
      <td>ID</td>
      <td>Owner</td>
      <td>Repo Name</td>
      <td>description</td>
      <td>Created_At</td>
    </thead>
    <tbody class='tbody'>
      {props.repos.map((repo, index) => {
        return (
          <tr key={index} > 
            <td>{repo.id} </td>
            <td>{repo.owner} </td>
            <td>{repo.name} </td>
            <td>{repo.description} </td>
            <td>{repo.created_at} </td>
          </tr>
      )})}
    </tbody>
  </div>
)

export default RepoList;