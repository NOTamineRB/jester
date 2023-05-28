import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./Login";
import Welcome from "./pages/Welcome";
import Placeholder from "./pages/Placeholder";
import {
  AiFillFolderOpen,
  AiOutlineUser,
  AiFillDatabase,
  AiOutlineSolution,
  AiFillShop,
} from "react-icons/ai";
import Taches from "./pages/Taches";
import Clients from "./pages/Clients";
import Factures from "./pages/Factures";
import Rapports from "./pages/Rapport";
import Workflow from "./pages/Workflow";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [selected, setSelected] = useState(0);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div className="App">
        <div className="flex bg-blue-900 w-screen h-20 justify-center items-center">
          <h1 className="text-white text-4xl font-bold">M-Files</h1>
        </div>
        {!isLoggedIn ? (
          <Login onLogin={handleLogin} />
        ) : (
          <div className="flex flex-row h-screen w-full p-10 ">
            <div className="">
              <div className="flex flex-col justify-center items-center p-5 ">
                <p className="text-green-700 text-2xl">Alex Kramer</p>
                <p className="text-blue-400">Alexk ID:25</p>
                <p className="text-blue-900">Coffre demo</p>
                <p className="text-blue-900 text-xs ">
                  QSDFGHK-DFGHJ-5FERTGH-FGH65
                </p>
                <button
                  onClick={() => {
                    setIsLoggedIn(!isLoggedIn);
                  }}
                  className="mt-2 bg-red-500 hover:bg-red-500"
                >
                  Déconexion
                </button>
              </div>
              <ul>
                <li>
                  <Link to="/">Welcome</Link>
                </li>
                <li
                  onClick={() => {
                    // setSelected(1);
                  }}
                  className={`flex flex-row items-center text-gray-500 `}
                >
                  <AiOutlineSolution />
                  <Link className="ml-4" to="/taches">
                    Taches
                  </Link>
                </li>
                <li className={`flex flex-row items-center text-gray-500 `}>
                  <AiOutlineUser />
                  <Link className="ml-4" to="/clients">
                    Clients
                  </Link>
                </li>
                <li className={`flex flex-row items-center text-gray-500 `}>
                  <AiFillFolderOpen />
                  <Link className="ml-4" to="/factures">
                    Factures
                  </Link>
                </li>
                <li className={`flex flex-row items-center text-gray-500 `}>
                  <AiFillDatabase />
                  <Link className="ml-4" to="/rapport">
                    Rapport
                  </Link>
                </li>
                <li className={`flex flex-row items-center text-gray-500 `}>
                  <AiFillShop />
                  <Link className="ml-4" to="/workflow">
                    Workflow
                  </Link>
                </li>
              </ul>
            </div>
            <div className="content w-full">
              <Switch>
                <Route path="/" exact component={Welcome} />
                <Route
                  path="/taches"
                  render={() => <Taches pageName="Taches" />}
                />
                <Route
                  path="/clients"
                  render={() => <Clients pageName="Clients" />}
                />
                <Route
                  path="/factures"
                  render={() => <Factures pageName="Factures" />}
                />
                <Route
                  path="/rapport"
                  render={() => <Rapports pageName="Rapport" />}
                />
                <Route
                  path="/workflow"
                  render={() => <Workflow pageName="Workflow" />}
                />
              </Switch>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;
