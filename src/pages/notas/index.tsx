import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { MdAdd, MdArrowDownward } from "react-icons/md";

import Layout from "../../components/Layout";
import Loading from "../../components/Loading";
import { ReportPDF } from "../../helpers/report";
import {AllNotesAPI} from "../../helpers/notas";
import {INotas} from "../../interfaces/INotas";

const NotaPage = () => {
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(new Array<INotas>());

  const loadList = () => {
    setLoading(true);
    AllNotesAPI()
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        toast.error(
          error.response ? error.response.data.message : "Error de Servidor"
        );
        setLoading(false);
      });
  };

  const report = async () => {
    try {
      const notaData = data.map((nota: INotas, i:number) => [
        i + 1,
        `${nota.student.name} ${nota.student.lastname}`,
        `${nota.cycle.schedule.language.name} ${nota.cycle.schedule.language.level}`,
        `${nota.cycle.name}`,
        nota.listeningnote,
        nota.readingnote,
        nota.speakingnote,
        nota.middlexexamnote,
        nota.writingnote,
        nota.finalexamnote,
        Math.round((nota.listeningnote+
              nota.readingnote+
              nota.speakingnote+
              nota.middlexexamnote+
              nota.writingnote+
              nota.finalexamnote)/6),
      ]);
      const headers = [
        "#",
        "Alumno",
        "Idioma",
        "Ciclo",
        "Listening",
        "Reading",
        "Speaking",
        "MiddleEx",
        "Writting",
        "FinalEx",
        "Promedio",
      ];
      ReportPDF({
        title: "Reporte de Notas",
        headers,
        data: notaData,
        name: "notas",
      });
    } catch (e) {
      alert("ERROR");
    }
  };

  useEffect(() => {
    const init = () => loadList();
    init();
  }, []);

  return (
      <Layout text="Nota" head="Administración de Notas">
        <Loading loading={loading} />
        <div className="container mx-auto">

          <h1 className="text-4xl py-4 mb-4">Registro de Notas</h1>

          <div className="text-center pb-4">

            <button
                className="bg-blue-500 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
                onClick={() => history.push("/notes/new")}
            >
              <MdAdd style={{ fontSize: "1.5em" }} />
              <span>Registrar Nota</span>
            </button>

            <button
                className="bg-blue-500 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mx-4 rounded inline-flex items-center"
                onClick={() => report()}
            >
              <MdArrowDownward style={{ fontSize: "1.5em" }} />
              <span>Reporte General</span>
            </button>
          </div>

          <div className="overflow-x-auto bg-white rounded-lg shadow overflow-y-auto relative">

            <table className="table border-collapse table-auto w-full whitespace-no-wrap table-striped  relative">
              <thead>
              <tr className="text-center">
                <th className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-800 font-bold tracking-wider uppercase text-xs bg-blue-300">
                  Alumno
                </th>
                <th className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-800 font-bold tracking-wider uppercase text-xs bg-blue-300">
                  Idioma
                </th>
                <th className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-800 font-bold tracking-wider uppercase text-xs bg-blue-300">
                  Ciclo
                </th>
                <th className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-800 font-bold tracking-wider uppercase text-xs bg-blue-300">
                  Listening
                </th>
                <th className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-800 font-bold tracking-wider uppercase text-xs bg-blue-300">
                  Reading
                </th>
                <th className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-800 font-bold tracking-wider uppercase text-xs bg-blue-300">
                  Speaking
                </th>
                <th className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-800 font-bold tracking-wider uppercase text-xs bg-blue-300">
                  MiddleExam
                </th>
                <th className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-800 font-bold tracking-wider uppercase text-xs bg-blue-300">
                  Writting
                </th>
                <th className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-800 font-bold tracking-wider uppercase text-xs bg-blue-300">
                  FinalExam
                </th>
                <th className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-800 font-bold tracking-wider uppercase text-xs bg-blue-300">
                  Promedio
                </th>
                <th className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-800 font-bold tracking-wider uppercase text-xs bg-blue-300">
                  Accion
                </th>
              </tr>
              </thead>

              <tbody >
              {data.map((nota) => {
                return (
                    <tr key={nota.id} className="hover:bg-gray-400">

                      <td className="border-dashed border-t border-gray-200 ">
                    <span className="text-gray-700 px-6 py-3 flex justify-center">
                      {`${nota.student.name} ${nota.student.lastname}`}
                    </span>
                      </td>

                      <td className="border-dashed border-t border-gray-200">
                    <span className="text-gray-700 px-6 py-3 flex justify-center">
                    {`${nota.cycle.schedule.language.name} ${nota.cycle.schedule.language.level}`}
                    </span>
                      </td>
                      <td className="border-dashed border-t border-gray-200">
                    <span className="text-gray-700 px-6 py-3 flex justify-center">
                    {`${nota.cycle.name}`}
                    </span>
                      </td>
                      <td className="border-dashed border-t border-gray-200">
                    <span className="text-gray-700 px-6 py-3 flex justify-center">
                      {nota.listeningnote}
                    </span>
                      </td>
                      <td className="border-dashed border-t border-gray-200">
                    <span className="text-gray-700 px-6 py-3 flex justify-center">
                      {nota.readingnote}
                    </span>
                      </td>
                      <td className="border-dashed border-t border-gray-200">
                    <span className="text-gray-700 px-6 py-3 flex justify-center">
                      {nota.speakingnote}
                    </span>
                      </td>
                      <td className="border-dashed border-t border-gray-200">
                    <span className="text-gray-700 px-6 py-3 flex justify-center">
                      {nota.middlexexamnote}
                    </span>
                      </td>

                      <td className="border-dashed border-t border-gray-200">
                    <span className="text-gray-700 px-6 py-3 flex justify-center">
                      {nota.writingnote}
                    </span>
                      </td>

                      <td className="border-dashed border-t border-gray-200">
                    <span className="text-gray-700 px-6 py-3 flex justify-center">
                      {nota.finalexamnote}
                    </span>
                      </td>

                      <td className="border-dashed border-t border-gray-200">
                    <span className="text-gray-700 px-6 py-3 flex justify-center">
                      {Math.round((nota.listeningnote+
                          nota.readingnote+
                          nota.speakingnote+
                          nota.middlexexamnote+
                          nota.writingnote+
                          nota.finalexamnote)/6)}
                    </span>
                      </td>


                      <button
                          className="bg-blue-500 hover:bg-blue-100 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"

                          onClick={() => history.push(`/notes/${nota.id}`)}
                      >
                        <span>Editar</span>
                      </button>

                    </tr>
                );
              })}
              </tbody>
            </table>
          </div>
        </div>
      </Layout>
  );
};



export default NotaPage;
