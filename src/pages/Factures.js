import React, { useState } from "react";
import { fclient, ffourniseure } from "../facture";

const Factures = ({ pageName }) => {
  const [selected, setSelected] = useState(null);
  const [fourniseure, setFourniseure] = useState(false);
  const [client, setClient] = useState(false);
  return (
    <div className="flex flex-row  p-10 ">
      <div>
        <h2 className="text-2xl p-2 m-6">
          {client
            ? `Listes des Factures des client`
            : fourniseure
            ? "Listes des Factueres des Fournissue"
            : "Listes des Factures "}
        </h2>
        <div className="flex flex-row justify-around mb-6 ">
          <button
            onClick={() => {
              setClient(true);
              setFourniseure(false);
            }}
            className="bg-blue-900 rounded-sm hover:bg-blue-950"
          >
            Facture Client
          </button>
          <button
            onClick={() => {
              setClient(false);
              setFourniseure(true);
            }}
            className="bg-blue-900 rounded-sm hover:bg-blue-950"
          >
            Facture Fournisseur
          </button>
        </div>

        {client
          ? fclient.map((tache) => {
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
            })
          : ffourniseure.map((tache) => {
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
            <p className="font-bold text-xs mr-1 mr-1">Nom: </p>
            <p className="text-xs">{selected.name}</p>
          </div>
          <div className="flex flex-row items-start justify-start">
            <p className="font-bold text-xs mr-1">Taille: </p>
            <p className="text-xs">{selected.taille}</p>
            <button className="bg-blue-900 mb-6 rounded-sm mt-6 text-white font-bold h-10 px-5 rounded hover:bg-blue-900 ">
              Telecharger{" "}
            </button>
          </div>

          <div className="flex flex-row">
            <p className="font-bold text-xs mr-1">Nom ou Titre: </p>
            <p className="text-xs">{selected.name}</p>
          </div>
          <div className="flex flex-row">
            <p className="font-bold text-xs mr-1">Modefier le: </p>
            <p className="text-xs">{selected.modifie.toISOString()}</p>
          </div>
          <div className="flex flex-row">
            <p className="font-bold text-xs mr-1">Ficher Simple: </p>
            <p className="text-xs">{selected.fichier}</p>
          </div>
          <div className="flex flex-row">
            <p className="font-bold text-xs mr-1">Statut modefie: </p>
            <p className="text-xs">{selected.modifie.toISOString()}</p>
          </div>
          <div className="flex flex-row">
            <p className="font-bold text-xs mr-1">Taille sur le serveur: </p>
            <p className="text-xs">{selected.taille}</p>
          </div>
          <div className="flex flex-row">
            <p className="font-bold text-xs mr-1">Workflow: </p>
            <p className="text-xs">{selected.worflow}</p>
          </div>
          <div className="flex flex-row">
            <p className="font-bold text-xs mr-1">Statut modefie: </p>
            <p className="text-xs">{selected.modifie.toISOString()}</p>
          </div>
          <div className="flex flex-row">
            <p className="font-bold text-xs mr-1">Taille sur le serveur: </p>
            <p className="text-xs">{selected.taille}</p>
          </div>
          <div className="flex flex-row">
            <p className="font-bold text-xs mr-1">Workflow: </p>
            <p className="text-xs">{selected.worflow}</p>
          </div>
          <div className="flex flex-row">
            <p className="font-bold text-xs mr-1">Statut modefie: </p>
            <p className="text-xs">{selected.modifie.toISOString()}</p>
          </div>
          <div className="flex flex-row">
            <p className="font-bold text-xs mr-1">Taille sur le serveur: </p>
            <p className="text-xs">{selected.taille}</p>
          </div>
          <div className="flex flex-row">
            <p className="font-bold text-xs mr-1">Workflow: </p>
            <p className="text-xs">{selected.worflow}</p>
          </div>
          <div className="flex flex-row">
            <p className="font-bold text-xs mr-1">Statut modefie: </p>
            <p className="text-xs">{selected.modifie.toISOString()}</p>
          </div>
          <div className="flex flex-row">
            <p className="font-bold text-xs mr-1">Taille sur le serveur: </p>
            <p className="text-xs">{selected.taille}</p>
          </div>
          <div className="flex flex-row">
            <p className="font-bold text-xs mr-1">Workflow: </p>
            <p className="text-xs">{selected.worflow}</p>
          </div>
          <div className="flex flex-row">
            <p className="font-bold text-xs mr-1">Statut modefie: </p>
            <p className="text-xs">{selected.modifie.toISOString()}</p>
          </div>
          <div className="flex flex-row">
            <p className="font-bold text-xs mr-1">Taille sur le serveur: </p>
            <p className="text-xs">{selected.taille}</p>
          </div>
          <div className="flex flex-row">
            <p className="font-bold text-xs mr-1">Workflow: </p>
            <p className="text-xs">{selected.worflow}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Factures;
