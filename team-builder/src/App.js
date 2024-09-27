import React, { useEffect, useState } from 'react';

import logo from './logo.svg';
import './App.css';
import Form from './Form'
import { assertExpressionStatement } from '@babel/types';

const initialFormValues = {
  name: '',
  email: '',
  role: ''
}

function App() {
  const [team, setTeam] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [error, setError] = useState('');

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue});
  }

  const submitForm = () => {
    const newTeam = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
    if (!newTeam.name || !newTeam.email || !newTeam.role) {
      setError('Enure to fill all of the empty fields');
    }
    setTeam([...team, newTeam])
  }

  return (
    <div className="App">
      <h1>Apply for a team tryout:</h1>
      {/* <h3>{error}</h3> */}
      <Form
        values={formValues}
        updates={updateForm}
        submit={submitForm}
      />
      {
        team.map((member, index) => {
          return (
            <div key={index}>
            <h3>{member.name}</h3>
            <h3>{member.email}</h3>
            <h3>{member.role}</h3>
          </div>
          )
        })
      }
    </div>
  );
}

export default App;
