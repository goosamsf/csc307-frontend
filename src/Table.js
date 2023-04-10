import React from 'react'

function TableHeader()  {
  return (
  //<thead> </thead> : It defines set of row defining a head of column in the table 
    <thead>
      <tr> //<tr> </tr> : It defines a row of cell in the table
        <th>Name</th> //<th> </th> defines a cell as a header
        <th>Job</th>
      </tr>
    </thead>
  );
}

function TableBody(props) {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>         
        <td>{row.job}</td>
      </tr>
    );
   }
  );
  return (
      <tbody>
        {rows}
       </tbody>
   );
}

function Table(props) {
    return (
      <table>
        <TableHeader />
        <TableBody characterData={props.characterData} />
      </table>
    );
} 
export default Table;
