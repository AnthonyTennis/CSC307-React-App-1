import React from 'react'
import Table from './Table'

const characters = [
    {
      name: 'Charlie',
      job: 'Call of Duty',
    },
    {
      name: 'Mac',
      job: 'Bouncer',
    },
    {
      name: 'DeeDee',
      job: 'Aspring actress',
    },
    {
      name: 'Dennis',
      job: 'Bartender',
    },
];

function MyApp() {
    return (
        <div className="container">
          <Table characterData={characters} />
        </div>
      );
}

export default MyApp;
