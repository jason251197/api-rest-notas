import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import Layout from "../../components/Layout";
import Loading from "../../components/Loading";
import { ICycle } from "../../interfaces/ICycle";
import { IStudent } from "../../interfaces/IStudent";
import {ICreateNote} from "../../interfaces/INotas";
import {getAllStudentAndCycles, RegistrarNotaAPI} from "../../helpers/notas";

const NewNotaPage = () => {
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [students, setStudents] = useState(new Array<IStudent>());
  const [cycles, setCycles] = useState(new Array<ICycle>());
  const [nota, setNota] = useState<ICreateNote>({
    writingnote: 0,
    listeningnote: 0,
    readingnote: 0,
    speakingnote: 0,
    middlexexamnote: 0,
    finalexamnote: 0,
    cycle_id: 0,
    student_id: 0,
  });

  const allStudentsAndCycles = () => {
    getAllStudentAndCycles()
      .then((res) => {
        setStudents(res.data.students);
        setCycles(res.data.cycles);
      })
      .catch((error) => {
        toast.error(
          error.response ? error.response.data.message : "Error de Servidor"
        );
      });
  };

  const isValid = (): boolean => {
    if (nota.student_id === 0) {
      toast.warn("Asigne un Estudiante");
      return false;
    } else if (nota.cycle_id === 0) {
      toast.warn("Asigne un Ciclo");
      return false;
    }
    return true;
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (isValid()) {
      setLoading(true);
      RegistrarNotaAPI(nota)
        .then((res) => {
          toast.success(res.data.message);
          history.push("/notes");
          setLoading(false);
        })
        .catch((error) => {
          toast.error(
            error.response ? error.response.data.message : "Error de Servidor"
          );
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    const init = () => {
      allStudentsAndCycles();
    };
    init();
  }, []);

  return (
      <Layout text="Ciclos" head="Creación de Nota">
        <Loading loading={loading} />
        <div className="leading-loose">
          <h1 className="text-4xl py-0 text-center">Registrar Nota</h1>

          <form
              className="max-w-xl m-4 p-10 bg-red-400 rounded shadow-xl container mx-auto"
              onSubmit={onSubmit}
              noValidate
          >

              <div className="mt-2">
              <label className="block text-sm text-gray-00">Estudiante</label>
              <div className="relative">
                <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                    onChange={(e: any) =>
                        setNota({
                          ...nota,
                          student_id: Number(e.target.value),
                        })
                    }
                    value={nota.student_id}
                >
                  <option value={0}>Seleccionar Alumno</option>
                  {students.map((student) => (
                      <option
                          key={student.id}
                          value={student.id}
                      >{`${student.name} ${student.lastname} - ${student.university_id ? student.university_id : 'Externo'}`}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="mt-2">
              <label className="block text-sm text-gray-00">Ciclo</label>
              <div className="relative">
                <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                    onChange={(e: any) =>
                        setNota({
                          ...nota,
                          cycle_id: Number(e.target.value),
                        })
                    }
                    value={nota.cycle_id}
                >
                  <option value={0}>Seleccionar Ciclo</option>
                  {cycles.map((cycle) => (
                      <option
                          key={cycle.id}
                          value={cycle.id}
                      >{`${cycle.schedule.language.name} ${cycle.schedule.language.level} ${cycle.name}`} </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-00">Nota Listening</label>
              <input
                  className="w-full px-5 py-2 text-gray-700 bg-gray-300 rounded"
                  id="listening"
                  name="listening"
                  type="number"
                  step="0.01"
                  required
                  onChange={(e: any) =>
                      setNota({
                        ...nota,
                        listeningnote: Number(e.target.value),
                      })}
                  //value={nota.listeningnote}
              />
            </div>

            <div>
              <label className="block text-sm text-gray-00">Nota Reading</label>
              <input
                  className="w-full px-5 py-2 text-gray-700 bg-gray-300 rounded"
                  id="reading"
                  name="reading"
                  type="number"
                  step="0.01"
                  required
                  onChange={(e: any) =>
                      setNota({
                        ...nota,
                        readingnote: Number(e.target.value),
                      })}
                  //value={nota.readingnote}
              />
            </div>
            <div>
              <label className="block text-sm text-gray-00">Nota Speaking</label>
              <input
                  className="w-full px-5 py-2 text-gray-700 bg-gray-300 rounded"
                  id="speaking"
                  name="speaking"
                  type="number"
                  step="0.01"
                  required
                  onChange={(e: any) =>
                      setNota({
                        ...nota,
                        speakingnote: Number(e.target.value),
                      })}
                  //value={nota.speakingnote}
              />
            </div>
            <div>
              <label className="block text-sm text-gray-00">Nota Middle Exam</label>
              <input
                  className="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded"
                  id="middle"
                  name="middle"
                  type="number"
                  step="0.01"
                  required
                  onChange={(e: any) =>
                      setNota({
                        ...nota,
                        middlexexamnote: Number(e.target.value),
                      })}
                  //value={nota.middlexexamnote}
              />
            </div>

            <div>
              <label className="block text-sm text-gray-00">Nota Writting</label>
              <input
                  className="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded"
                  id="writting"
                  name="writting"
                  type="number"
                  step="0.01"
                  required
                  onChange={(e: any) =>
                      setNota({
                        ...nota,
                        writingnote: Number(e.target.value),
                      })}
                  //value={nota.writingnote}
              />
            </div>

            <div>
              <label className="block text-sm text-gray-00">Nota Final Exam</label>
              <input
                  className="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded"
                  id="final"
                  name="final"
                  type="number"
                  step="0.01"
                  required
                  onChange={(e: any) =>
                      setNota({
                        ...nota,
                        finalexamnote: Number(e.target.value),
                      })}
                  //value={nota.finalexamnote}
              />
            </div>

            <div className="mt-4 text-center">
                <button
                    className="bg-black hover:bg-gray-800 font-light tracking-wider text-white font-bold py-1 px-4 rounded inline-flex items-center"
                    onClick={() => history.push("/notes")}
                >
                    Volver
                </button>

              <button
                  className="bg-black hover:bg-gray-800 text-white font-bold py-1 px-4 mx-4 rounded inline-flex items-center"
                  type="submit"
              >
                Registrar
              </button>
            </div>

          </form>

        </div>
      </Layout>
  );
};

export default NewNotaPage;
