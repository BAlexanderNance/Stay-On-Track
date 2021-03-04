import React from 'react';
import Todo from './Todo.jsx';
import Table from './Table.jsx';
import Dashboard from './Dashboard.jsx';
import AddContact from './AddContact.jsx';
import Contacts from './Contacts.jsx';
import AddEngagement from './AddEngagement.jsx';

const ComponentCard = (props) => {






  return (
    <div className="comp">
      <Todo />
      <Table />
      <Dashboard />
      <Contacts />
      <AddContact />
      <AddEngagement />
    </div>
  )
};
export default ComponentCard;
