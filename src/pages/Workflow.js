import React, { useState } from "react";
import { data } from "../data";

const Workflow = ({ pageName }) => {
  const [selected, setSelected] = useState(null);
  return (
    <div className="flex flex-col  p-10 ">
      <div>
        <h2 className="text-2xl p-2 m-6">Liste des Workflow</h2>

        {data.map((tache) => {
          return (
            <div
              className="flex flex-col hover:cursor-pointer"
              onClick={() => {
                setSelected(tache);
              }}
            >
              <p>{tache.name}</p>
              <p className="text-blue-400">ID:{tache.id}</p>
            </div>
          );
        })}
      </div>
      {selected != null && (
        <div className="flex flex-col ">
          <h2 className="text-l m-2 text-blue-900">
            Etat de Workflow Selectionne
          </h2>
          <h2 className="text-xl m-2 text-blue-500">
            Prochain etats posibles du workflow ID : {selected.id}
          </h2>
          <div className="flex flex-row">
            <p className="font-bold text-xs ml-2">Nom ou Titre: </p>
            <p className="text-xs ml-2 ml-2">{selected.name}</p>
          </div>
          <div className="flex flex-row">
            <p className="font-bold text-xs ml-2">State ID: </p>
            <p className="text-xs ml-2">{selected.id}</p>
          </div>
          <div className="flex flex-row">
            <p className="font-bold text-xs ml-2">Nom ou Titre: </p>
            <p className="text-xs ml-2 ml-2">{selected.name}</p>
          </div>
          <div className="flex flex-row">
            <p className="font-bold text-xs ml-2">State ID: </p>
            <p className="text-xs ml-2">{selected.id}</p>
          </div>
          <div className="flex flex-row">
            <p className="font-bold text-xs ml-2">Nom ou Titre: </p>
            <p className="text-xs ml-2 ml-2">{selected.name}</p>
          </div>
          <div className="flex flex-row">
            <p className="font-bold text-xs ml-2">State ID: </p>
            <p className="text-xs ml-2">{selected.id}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Workflow;
