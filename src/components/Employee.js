import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

class Employee extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      employee: null,
    };
  }
 
  componentDidMount() {
    const id = this.props.match.params.id; 
    fetch("https://us-central1-ng-gae-app.cloudfunctions.net/employee?empId=" + id)
      .then((res) => res.json())
      .then(
        (result) => {          
          this.setState({
            isLoaded: true,
            employee: result,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error: true,
          });
          console.log("error occured..");
        }
      );
  }

render(){
  
  const { error, isLoaded, employee } = this.state;
  if (error) {
    return  <div className="m-3">Error occured..</div>;
  } else if(!isLoaded){
    return <div className="m-3">Loading...</div>; 
   } else if(employee){
  return (
    <div className="m-3">
      <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
        <thead className="text-white">
          <tr className="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Gender</th>
            <th className="p-3 text-left">Years of Experience</th>
            <th className="p-3 text-left">Designation</th>
          </tr>
        </thead>
        <tbody className="flex-1 sm:flex-none">
          <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
            <td className="border-grey-light border hover:bg-gray-100 p-3">
              {employee.eName}
            </td>
            <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">
              {employee.eEmail}
            </td>
            <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">
            {employee.eGender}
            </td>
            <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">
            {employee.eExp}
            </td>
            <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">
              {employee.eDesg}
            </td>
          </tr>
        </tbody>
      </table>      
      <div className="p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer flex justify-center">
        <Link className="p-3 bg-teal-500 border-teal-light border hover:bg-teal-600 text-white" to="/">Back</Link>
      </div>     
    </div>
  );
} 
}
}

export default Employee;
