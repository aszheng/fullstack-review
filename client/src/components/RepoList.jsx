import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <table>
      <thead>
        <tr>
          <td><strong>ID</strong></td>
          <td><strong>Owner</strong></td>
          <td><strong>Repo Name</strong></td>
          <td><strong>Description</strong></td>
          <td><strong>Created_at</strong></td>
        </tr>
      </thead>
      <tbody>
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
    </table>
  </div>
)

export default RepoList;