import React, { useState } from "react";
import { data } from "../data";

const Taches = ({ pageName }) => {
  const [selected, setSelected] = useState(null);
  return (
    <div className="flex flex-row  p-10 ">
      <div>
        <h2 className="text-2xl p-2 m-6">Liste des taches affectuer a vous</h2>

        {data.map((tache) => {
          return (
            <div
              className="flex flex-col hover:cursor-pointer"
              onClick={() => {
                setSelected(tache);
              }}
            >
              <p>{tache.name}</p>
              <p className="text-blue-400">
                ID:{tache.id} | modefie le : {tache.modifie.toISOString()} |
                creerle : {tache.statutmodefie.toISOString()}
              </p>
            </div>
          );
        })}
      </div>
      {selected != null && (
        <div className="flex flex-col p-10 ml-10 ">
          <h2 className="text-2xl m-2">Propriets</h2>
          <div className="flex flex-row">
            <p className="font-bold text-xs ml-2">Nom ou Titre: </p>
            <p className="text-xs ml-2 ml-2">{selected.name}</p>
          </div>
          <div className="flex flex-row">
            <p className="font-bold text-xs ml-2">Modefier le: </p>
            <p className="text-xs ml-2">{selected.modifie.toISOString()}</p>
          </div>
          <div className="flex flex-row">
            <p className="font-bold text-xs ml-2">Ficher Simple: </p>
            <p className="text-xs ml-2">{selected.fichier}</p>
          </div>
          <div className="flex flex-row">
            <p className="font-bold text-xs ml-2">Statut modefie: </p>
            <p className="text-xs ml-2">{selected.modifie.toISOString()}</p>
          </div>
          <div className="flex flex-row">
            <p className="font-bold text-xs ml-2">Taille sur le serveur: </p>
            <p className="text-xs ml-2">{selected.taille}</p>
          </div>
          <div className="flex flex-row">
            <p className="font-bold text-xs ml-2">Workflow: </p>
            <p className="text-xs ml-2">{selected.worflow}</p>
          </div>
          <div className="flex flex-row">
            <p className="font-bold text-xs ml-2">Statut modefie: </p>
            <p className="text-xs ml-2">{selected.modifie.toISOString()}</p>
          </div>
          <div className="flex flex-row">
            <p className="font-bold text-xs ml-2">Taille sur le serveur: </p>
            <p className="text-xs ml-2">{selected.taille}</p>
          </div>
          <div className="flex flex-row">
            <p className="font-bold text-xs ml-2">Workflow: </p>
            <p className="text-xs ml-2">{selected.worflow}</p>
          </div>
          <div className="flex flex-row">
            <p className="font-bold text-xs ml-2">Statut modefie: </p>
            <p className="text-xs ml-2">{selected.modifie.toISOString()}</p>
          </div>
          <div className="flex flex-row">
            <p className="font-bold text-xs ml-2">Taille sur le serveur: </p>
            <p className="text-xs ml-2">{selected.taille}</p>
          </div>
          <div className="flex flex-row">
            <p className="font-bold text-xs ml-2">Workflow: </p>
            <p className="text-xs ml-2">{selected.worflow}</p>
          </div>
          <div className="flex flex-row">
            <p className="font-bold text-xs ml-2">Statut modefie: </p>
            <p className="text-xs ml-2">{selected.modifie.toISOString()}</p>
          </div>
          <div className="flex flex-row">
            <p className="font-bold text-xs ml-2">Taille sur le serveur: </p>
            <p className="text-xs ml-2">{selected.taille}</p>
          </div>
          <div className="flex flex-row">
            <p className="font-bold text-xs ml-2">Workflow: </p>
            <p className="text-xs ml-2">{selected.worflow}</p>
          </div>
          <div className="flex flex-row">
            <p className="font-bold text-xs ml-2">Statut modefie: </p>
            <p className="text-xs ml-2">{selected.modifie.toISOString()}</p>
          </div>
          <div className="flex flex-row">
            <p className="font-bold text-xs ml-2">Taille sur le serveur: </p>
            <p className="text-xs ml-2">{selected.taille}</p>
          </div>
          <div className="flex flex-row">
            <p className="font-bold text-xs ml-2">Workflow: </p>
            <p className="text-xs ml-2">{selected.worflow}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Taches;
