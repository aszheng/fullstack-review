import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <span>
      {props.repos.map((repo, index) => {
        return (<div key={index} > {repo.name} </div>
      )})}
    </span>
  </div>
)

export default RepoList;