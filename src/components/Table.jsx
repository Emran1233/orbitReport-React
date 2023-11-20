const Table = ({ sat }) => {
  return (
    <table>
    <thead>
     <tr>  
       <th> Name </th> 
       <th> Type of Satellite  </th> 
       <th> Status </th>
       <th> Launch Date </th>
     </tr>
     </thead>
     <tbody>  
      {
        sat.map((data, id) => {
        return (
        <tr> 
          key={id}   
          <td>{data.name}</td> 
          <td>{data.type}</td>  
          <td>{data.status}</td> 
          <td>{data.launchDate}</td>
        </tr>  
        ); 
        }
        ) 

      }
     
       
     </tbody>
   </table>
  );
};

export default Table;
