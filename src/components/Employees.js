import React from "react";
import { Link } from "react-router-dom";

class Employees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      employees: [],
    };
  }

  componentDidMount() { 
    fetch("https://us-central1-ng-gae-app.cloudfunctions.net/employees")
      .then((res) => res.json())
      .then(
        (result) => {          
          console.log("Result", result);
          this.setState({
            isLoaded: true,
            employees: result.employees,
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
        }
      );
  }

  render() {
    const { error, isLoaded, employees } = this.state;
    if (error) {
      return  <div className="m-3">Error occured..</div>;
    }else if(!isLoaded){
      return  <div className="m-3">Loading...</div>;
    }
    else if(employees && employees.length > 0){
      return (
        <div className="m-3">
          <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
            <thead className="text-white">
              {employees.map(function (emp) {
                return (
                  <tr className="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                    <th className="p-3 text-left">Name</th>
                    <th className="p-3 text-left">Email</th>
                    <th className="p-3 text-left" width="110px">
                      Actions
                    </th>
                  </tr>
                );
              })}
            </thead>
            <tbody className="flex-1 sm:flex-none">
              {employees.map(function (emp) {
                return (
                  <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                    <td className="border-grey-light border hover:bg-gray-100 p-3">
                      {emp.eName}
                    </td>
                    <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">
                      {emp.eEmail}
                    </td>
                    <td className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
                      <Link to={"/employee/" + emp.eId}>View</Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    } 
  }
}

export default Employees;
