import React, { useEffect, useState } from "react";

import "./styles.css";
import api from "./services/api";



export default function App() {

  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get('repositories').then( response => {
      setRepositories(response.data)
    })
  },[]);

  async function handleAddRepository() {
    const response = await api.post('repositories',{
      title: `Reacjs`,
      url: 'http',
      techs: ['abc','123'],
    });
     
    const repository = response.data;
    setRepositories([...repositories,repository]);
  
  }
  
  async function handleRemoveRepository(id) {
  await api.delete('repositories/'+ id);
  setRepositories([]);

  //  await api.get('repositories').then( response => {
    
  //});

  
  };


  return (
    <div>

      
      <ul data-testid="repository-list">
        
      {repositories.map(repository =>         <li key={repository.id}>{repository.title}
          <button onClick={() => handleRemoveRepository(repository.id)}>
            Remover
          </button>

          </li>)}
          
      </ul>
      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}



















//   return (
//     <div>
//       {repositories.map(repository =>
      
//       <ul key={repository.id} data-testid="repository-list">
        
//          <li key={repository.id}>{repository.title}
//           <button onClick={() => handleRemoveRepository(repository.id)}>
//             Remover
//           </button>

//           </li>
          
//       </ul>)}
//       <button onClick={handleAddRepository}>Adicionar</button>
//     </div>
//   );
// }

