import React from 'react'
import Form from './components/Form'
import { schema } from "../validations/FormValidations";

type FormData = z.infer<typeof schema>;

const App = () => {
  return (
    <>
      <Form />       //ඕනි න Form component එක ඇතුලත් කරලා ගන්න පුළුවන් 
    </>
  );
}

export default App