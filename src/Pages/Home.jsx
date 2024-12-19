import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Home() {
  const [toDos, setToDos] = useState([]); 
  const [completedItems, setCompletedItems] = useState([]); 
  const [deletedItems, setDeletedItems] = useState([]);
  const [toDo, setToDo] = useState("");

  return (
    <div className="min-h-screen flex flex-col  text-white bg-[url('src/assets/background-img.jpg')] bg-no-repeat bg-cover bg-center bg-fixed ">
      <Navbar/>
     

     
      <main className="flex-grow  pt-20">
        <div className="container mx-auto p-4">
          <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-6 ">
           
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-gray-800">Organize Your Day</h2>
              <p className="text-gray-600">
                Keep track of your goals and stay efficient!
              </p>
            </div>

          
            <div className="input mt-4 flex items-center">
              <input
                value={toDo}
                onChange={(e) => setToDo(e.target.value)}
                type="text"
                placeholder="🖊️ Add a new task..."
                className="flex-1 text-black p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#213555]"
              />
              <button
                onClick={() => {
                  if (toDo.trim()) {
                    setToDos([...toDos, { id: Date.now(), text: toDo }]);
                    setToDo("");
                  }
                }}
                className="ml-2 bg-[#213555] text-white px-3 py-2 rounded-full hover:bg-cyan-700"
              >
                <FontAwesomeIcon icon={faPlus} className="text-xl" />
              </button>
            </div>

           
            <div className="todos mt-6 space-y-3">
              <h3 className="text-xl font-semibold text-gray-800">Tasks</h3>
              {toDos.length === 0 && (
                <p className="text-center text-gray-600">No tasks yet. Start adding some!</p>
              )}
              {toDos.map((obj) => (
                <div
                  key={obj.id}
                  className="flex items-center justify-between bg-gray-100 p-3 rounded-lg shadow-sm"
                >
                  <div className="flex items-center">
                    <input
                      onChange={(e) => {
                        if (e.target.checked) {
                          setCompletedItems([...completedItems, obj]);
                          setToDos(toDos.filter((todo) => todo.id !== obj.id));
                        }
                      }}
                      type="checkbox"
                      className="mr-2 h-5 w-5 text-teal-500 focus:ring-teal-400"
                    />
                    <p className="text-gray-700">{obj.text}</p>
                  </div>
                  <button
                    onClick={() => {
                      setDeletedItems([...deletedItems, obj]); 
                      setToDos(toDos.filter((todo) => todo.id !== obj.id));
                    }}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                </div>
              ))}
            </div>

            
            {completedItems.length > 0 && (
              <div className="completed-todos mt-8">
                <h3 className="text-xl font-semibold pb-2 text-gray-800">Completed Tasks</h3>
                <div className="space-y-3">
                  {completedItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between bg-[#81DAE3] opacity-50 p-3 rounded-lg shadow-sm"
                    >
                      <p className="text-gray-700 line-through">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            
            {deletedItems.length > 0 && (
              <div className="deleted-todos mt-8">
                <h3 className="text-xl font-semibold text-gray-800 pb-2">Deleted Tasks</h3>
                <div className="space-y-3">
                  {deletedItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between bg-red-100 p-3 rounded-lg shadow-sm"
                    >
                      <p className="text-gray-700">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

    <Footer/>
    </div>
  );
}

export default Home;
