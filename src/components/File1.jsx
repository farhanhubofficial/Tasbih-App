import React, { useState, useEffect } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import { GrPowerReset } from "react-icons/gr";
import { LuTimerReset } from "react-icons/lu";
import { AiFillSound } from "react-icons/ai";
import { PiVibrateLight } from "react-icons/pi";
import { IoColorPaletteSharp } from "react-icons/io5";
import { FaAffiliatetheme } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { IoIosRadioButtonOff } from "react-icons/io";
import { IoIosRadioButtonOn } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa6";
import { MdOutlineTouchApp } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import { GiDominoTiles } from "react-icons/gi";
import { IoMdMusicalNote } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { TiTick } from "react-icons/ti";
// import { DataTable } from "primereact/datatable";
// import { Column } from "primereact/column";
// import "primereact/resources/themes/lara-light-indigo/theme.css";
// import "primereact/resources/primereact.min.css";
// import "primeicons/primeicons.css";
// import "primeflex/primeflex.css";

// import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import Edit from "./Edit";

function File1() {
  // reserved

  const [displayDialog, setDisplayDialog] = useState(false);
  const [title, setTitle] = useState("");
  const [StartValue, setStartValue] = useState("");
  const [Reminder, setReminder] = useState("");
  const [Target, setTarget] = useState(0);
  const [Note, setNote] = useState("");
  const [Id, setId] = useState("");
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");
  const [displayDialog2, setDisplayDialog2] = useState(false);
  const [selectedItem2, setSelectedItem2] = useState(null);
  const [deleteBtn, setDelete] = useState("");
  const [countCheck, setCountCheck] = useState(false);
  const [EditEnable, setEditEnable] = useState(false);
  const [percentage, setpercentage] = useState(0);
  const showDialog = () => {
    setDisplayDialog(true);
    setCountCheck(false);
  };
  const showDialog2 = () => {
    setDisplayDialog2(true);
  };
  const hideDialog2 = () => {
    setDisplayDialog2(false);
  };

  const hideDialog = () => {
    setDisplayDialog(false);
    // setSelectedItem2(null);
    setTitle("");
    setStartValue("");
    setReminder("");
    setTarget("");
    setNote("");
  };

  const saveData = () => {
    if (selectedItem2 && EditEnable) {
      const updatedData = data.map((item) => {
        if (item === selectedItem2) {
          return {
            ...item,
            title,
            StartValue: selectedItem.StartValue,
            Id,
            Reminder,
            Note,
            Target,
          };
        } else {
          return item;
        }
      });
      SetCount(selectedItem2.StartValue);
      setData(updatedData);
    } else {
      const newData = {
        title,
        StartValue,
        Reminder,
        Note,
        Target,
        Id: data.length + 1,
        percentage,
      };
      setData([...data, newData]);
    }

    hideDialog();
    // setEditEnable(false)
    // setCountCheck(false)
  };
  console.log(selectedItem2);
  // const editItem = (item) => {
  //   setSelectedItem(item);
  //   setTitle(item.title);
  //   setStartValue(item.StartValue);
  //   setTarget(item.Target);
  //   setReminder(item.Reminder);
  //   setNote(item.Note);
  //   showDialog();

  // };

  function HandleEdit(item) {
    setSelectedItem2(item);
    showDialog2();
    setSelectedItem(item);
    setCountCheck(true);
    // setDelete(index)
  }

  // Reserved

  const [chevron, setChevron] = useState(false);
  const [Count, SetCount] = useState(0);
  const [align, setAlign] = useState(false);
  const [list, setList] = useState(false);
  const [enable, setEnable] = useState(false);
  const [touch, setTouch] = useState(false);
  const [theme, setTheme] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [Addnew, setAddNew] = useState(false);
  const customDataTableStyle = {
    backgroundColor: "red", // Change the color to your desired background color
  };
  function resetClick() {
    SetCount(Count - 1);
  }

  // useEffect(()=>{
  //   if (selectedItem2) {
  //     setSelectedItem2(prevSelectedItem2 => ({
  //       ...prevSelectedItem2,
  //       StartValue: prevSelectedItem2.StartValue + 1
  //     }));
  //   }
  // },[Count] )

  function handleClick() {
    SetCount((prevCount) => prevCount + 1);

    if (selectedItem2) {
      const updatedData = data.map((item) => {
        if (item.Id === selectedItem2.Id && item.StartValue === Count) {
          return {
            ...item,
            StartValue: selectedItem2.StartValue + 1,
            Reminder: selectedItem2.Reminder,
            Note: selectedItem2.Note,
            Target: selectedItem2.Target,
            percentage: Math.floor(
              (selectedItem2.StartValue / selectedItem2.Target) * 100
            ),
          };
        } else {
          return item;
        }
      });
      setData(updatedData);
      setSelectedItem2((prevSelectedItem2) => ({
        ...prevSelectedItem2,
        StartValue: prevSelectedItem2.StartValue + 1,
      }));

      if (Count === selectedItem2.Target) {
        alert("it is reached");
      }
    }
  }

  // useEffect(()=>{
  // handleClick()
  // },[Count])

  console.log("data", data);
  console.log("edit", EditEnable);

  console.log(selectedItem2);

  // function handleTitle() {
  //   if (selectedItem2) {
  //     return selectedItem2.title;
  //   } else return null;
  // }

  if (selectedItem2) {
  }

  console.log(percentage);

  return (
    <div className="bg-gray-950 w-[450px]  h-[720px] text-white rounded-2xl relative ml-96">
      <Dialog header="Header" visible={displayDialog2} onHide={hideDialog2}>
        <Edit
          selectedItem2={selectedItem2}
          setNote={setNote}
          setReminder={setReminder}
          setStartValue={setStartValue}
          setTitle={setTitle}
          showDialog={showDialog}
          setTarget={setTarget}
          setData={setData}
          data={data}
          deleteBtn={deleteBtn}
          setDelete={setDelete}
          hideDialog2={hideDialog2}
          list={list}
          setList={setList}
          SetCount={SetCount}
          Count={Count}
          selectedItem={selectedItem}
          handleClick={handleClick}
          countCheck={countCheck}
          setCountCheck={setCountCheck}
          setEditEnable={setEditEnable}
        />
      </Dialog>

      <div
        className={
          chevron
            ? "text-2xl bg-gray-950 h-44  px-2 rounded-2xl"
            : "text-2xl  h-44  px-2 rounded-2x "
        }
      >
        <div className="flex  justify-between">
          <button
            onClick={() => setAlign(!align)}
            className="bg-gray-900 rounded-full w-9  h-9 pl-1.5 "
          >
            <FiAlignJustify />
          </button>
          {/* <div onClick={()=>setAlign(!align)} className=''> <FiAlignJustify  bg-gray-900 rounded-full/></div> */}
          <div>
            <span className="ml-28">
              {selectedItem2 ? (
                selectedItem2.title
              ) : (
                <div>No Title available</div>
              )}
            </span>
            <div className="bg-red-600 w-[300px] ">
              {selectedItem2 &&
              selectedItem2.StartValue <= selectedItem2.Target ? (
                <div
                  style={{
                    width: `${percentage}%`,
                    backgroundColor: "green",
                    height: "10px",
                  }}
                ></div>
              ) : (
                <div
                  style={{
                    width: "100%",
                    backgroundColor: "gray",
                    height: "10px",
                  }}
                ></div>
              )}
            </div>
          </div>
          <div onClick={() => setChevron(!chevron)}>
            {!chevron ? <FiChevronDown /> : <FiChevronUp />}
          </div>
        </div>
        <div className={!chevron ? "hidden" : ""}>
          <div className="text-base ml-32">
            <span className="ml-28">
              {selectedItem2 ? (
                selectedItem2.Target
              ) : (
                <div>No target available</div>
              )}
            </span>
            <p>you have reached ur destination</p>
          </div>

          <div className="flex justify-between ">
            <button className="bg-black w-[140px] ml-6 h-[40px] rounded-3xl">
              End
            </button>
            <button className="bg-black w-[140px] mr-6 h-[40px] rounded-3xl ">
              Edit
            </button>
          </div>
        </div>
        <div className="  w-[240px] ml-20 text-5xl h-72 bg-black pt-4 mt-3 border border-gray-600 rounded-3xl ">
          <div className="pl-7 bg-white text-black  ml-16 mr-16   rounded-xl ">
            <h4 className="ml-1 text-2xl">{Count}</h4>
          </div>

          <div className="flex justify-between bg-black mt-12">
            <LuTimerReset onClick={resetClick} />
            <GrPowerReset onClick={() => SetCount(0)} />
          </div>

          <div
            className="ml-20 mr-16 mt-6 text-black bg-white pl-7  h-20 w-20 rounded-full"
            onClick={handleClick}
          ></div>
        </div>
        <div className="mt-20  flex justify-between text-3xl">
          <AiFillSound />
          <PiVibrateLight />
          <button onClick={() => setList(!list)}>List</button>
          <IoColorPaletteSharp />
          <FaAffiliatetheme onClick={() => setTheme(!theme)} />
        </div>
        <div
          className={
            align
              ? "bg-black w-[450px]  h-[720px] text-white rounded-2xl  absolute top-0 px-2 transition-transform duration-3000 ease-linear delay-1000   "
              : "bg-black w-[450px]  h-[600px] text-white rounded-2xl  absolute  bottom-[-100%] hidden "
          }
        >
          <div className="flex justify-between ">
            <button
              onClick={() => setAlign(!align)}
              className="text-4xl mt-0 bg-gray-900 rounded-full"
            >
              <IoIosClose />
            </button>
            <span>Menu</span>
            <FaUser />
          </div>
          <div className="bg-yellow-400  h-[120px] mt-8 rounded-xl">
            <h3 className=" ml-5  text-2xl w-[130px] text-black font-bold ">
              other Applications{" "}
            </h3>
            <p className="ml-5 text-gray-800">Recommended for you...</p>
          </div>

          <div
            className=" bg-gray-900 h-[70px] rounded-2xl mt-3 flex justify-between"
            onClick={() => setEnable(!enable)}
          >
            <div className="mt-3  flex ml-2">
              <IoIosNotifications className="mt-2 ml-4 text-2xl" />
              <div className="ml-6">
                <h1 className="font-semibold">Notifications</h1>
                {enable ? <p>Enabled</p> : <p>Disabled</p>}
              </div>
            </div>
            <div
              className={
                !enable
                  ? "bg-gray-600 h-6 w-[50px]  rounded-full text-black mt-4 mr-4"
                  : "bg-green-500 h-6 w-[50px]  rounded-full text-black mt-4 mr-4 pl-4"
              }
            >
              <IoIosRadioButtonOn />
            </div>
          </div>

          <div
            className=" bg-gray-900 h-[70px] rounded-2xl mt-3 flex justify-between"
            onClick={() => setTouch(!touch)}
          >
            <div className="mt-3  flex ml-2">
              <MdOutlineTouchApp className="mt-2 ml-4 text-2xl" />
              <div className="ml-6">
                <h1 className="font-semibold">Dynamic Touch</h1>
                {touch ? <p>Enabled</p> : <p>Disabled</p>}
              </div>
            </div>
            <div
              className={
                !touch
                  ? "bg-gray-600 h-6 w-[50px]  rounded-full text-black mt-4 mr-4  "
                  : "bg-green-500 h-6  w-[50px]   rounded-full text-black mt-4 mr-4 pl-4"
              }
            >
              <IoIosRadioButtonOn className="" />
            </div>
          </div>
          <div className=" bg-gray-900 h-[70px] rounded-2xl mt-3 flex justify-between">
            <div className="mt-3  flex ml-2">
              <FaRegEyeSlash className="mt-2 ml-4 text-2xl" />
              <div className="ml-6">
                <h1 className="font-semibold">Private Using Mod</h1>
                <p>Disabled</p>
              </div>
            </div>
            <div className="bg-gray-600 h-6 w-[50px]  rounded-full text-black mt-4 mr-4  ">
              <IoIosRadioButtonOn />
            </div>
          </div>

          <div className=" bg-gray-900 h-[70px] rounded-2xl mt-3 flex justify-between">
            <div className="mt-2  flex ml-2">
              <GiDominoTiles className="mt-2 ml-4 text-2xl" />
              <div className="ml-6">
                <h1 className="font-semibold">Appearance</h1>
                <p>Neon</p>
              </div>
            </div>
            <div className="bg-gray-900 h-6 w-10 pt-1 rounded-full text-gray-500  mt-4 ml-32 ">
              <FaChevronRight />
            </div>
          </div>

          <div className=" bg-gray-900 h-[70px] rounded-2xl mt-3 flex justify-between">
            <div className="mt-2  flex ml-2">
              <IoMdMusicalNote className="mt-2 ml-4 text-2xl" />
              <div className="ml-6">
                <h1 className="font-semibold">Counter Sounds</h1>
                <p>Default click</p>
              </div>
            </div>
            {/* <div className="bg-gray-900 h-6 w-10 pt-1 rounded-full text-gray-500  mt-4 ml-4 ">
              // <FaChevronRight />
            </div> */}
            <div className="text-gray-500">
              <FaChevronRight className="bg-gray-900 mt-4 mr-4" />
            </div>
          </div>
        </div>

        <div
          className={
            list
              ? "bg-black w-[450px]  h-[720px] text-white rounded-2xl  absolute top-0 px- ease-in-out duration-300  "
              : "bg-black w-[450px]  h-[600px] text-white rounded-2xl bottom-[-100%] absolute hidden"
          }
        >
          <div className="flex justify-between">
            <button
              onClick={() => setList(!list)}
              className="text-4xl mt-0 bg-gray-900 rounded-full"
            >
              <IoIosClose />
            </button>
            <span className="text-2xl font-semibold">List</span>
            <BiMenuAltLeft className="text-4xl mt-0 pt-1 bg-gray-900 rounded-full" />
          </div>
          <div className="bg-yellow-400  h-[120px] mt-8 rounded-xl mx-3">
            <h3 className=" ml-5  text-2xl w-[130px] text-black font-bold ">
              Track{" "}
            </h3>
            <h3 className="ml-5  text-2xl  text-black font-bold ">
              other Activities
            </h3>
            <p className="ml-5 text-gray-800">Additional features for Pro...</p>
          </div>
          <div className>
            <div>
              <div className="relative">
                <Button label="Add Data" onClick={showDialog} />
                <Dialog
                  className="absolute left-[385px] top-0 w-[450px] h-[700px] custom-dialog bg-slate-500"
                  visible={displayDialog}
                  onHide={hideDialog}
                  header={selectedItem2 ? "Edit Data" : "Add Data"}
                  headerClassName="custom-header"
                  closeOnEscape={false}
                >
                  <div className="p-grid p-fluid">
                    <div>
                      <div className="p-col-4">
                        <label className="text-gray-300 text-2xl">Title</label>
                      </div>
                      <div className="p-col-8">
                        <InputText
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          className="bg-slate-500 h-16 text-white text-2xl"
                        />
                      </div>
                    </div>

                    <div className="p-col-4">
                      <label className="text-gray-300 text-2xl">
                        Start Value
                      </label>{" "}
                    </div>
                    <div className="p-col-8">
                      <InputText
                        // type="number"
                        value={StartValue}
                        onChange={(e) => {
                          const value = parseFloat(e.target.value);
                          setStartValue(isNaN(value) ? 0 : value);
                        }}
                        className="bg-slate-500 h-16 text-white text-2xl"
                      />
                    </div>

                    <div className="p-col-4">
                      <label className="text-gray-300 text-2xl">Reminder</label>{" "}
                    </div>
                    <div className="p-col-8">
                      <InputText
                        id="city"
                        value={Reminder}
                        onChange={(e) => setReminder(e.target.value)}
                        className="bg-slate-500 h-16 text-white text-2xl"
                      />
                    </div>

                    <div className="p-col-4">
                      <label className="text-gray-300 text-2xl">
                        Target value
                      </label>{" "}
                    </div>
                    <div className="p-col-8">
                      <InputText
                        id="city"
                        value={Target}
                        onChange={(e) => {
                          const value = parseFloat(e.target.value);
                          setTarget(isNaN(value) ? 0 : value);
                        }}
                        className="bg-slate-500 h-16 text-white text-2xl"
                      />
                    </div>
                    <div className="p-col-4">
                      <label className="text-gray-300 text-2xl">Note</label>{" "}
                    </div>
                    <div className="p-col-8">
                      <InputText
                        id="city"
                        value={Note}
                        onChange={(e) => setNote(e.target.value)}
                        className="bg-slate-500 h-28 text-white text-2xl"
                      />
                    </div>
                  </div>

                  <div className="p-mt-2">
                    <Button
                      label="Save"
                      onClick={saveData}
                      className="text-gray-300 mr-[300px]"
                    />
                    <Button
                      label="Cancel"
                      onClick={hideDialog}
                      className="p-button-secondary p-ml-2 text-gray-300"
                    />
                  </div>
                </Dialog>
                <div className="relative">
                  {data.slice(0, 3).map((item, index) => {
                    return (
                      <div
                        key={index}
                        onClick={() => HandleEdit(item)}
                        className="   px-8  mt-4   bg-gray-900 h-[140px] rounded-2xl mx-3 "
                      >
                        <div className="flex justify-around w-[100%] px-7">
                          <h1 className="mt-   text-xl">{item.StartValue}</h1>
                          <div className="mt-4 ">
                            <span className="ml-[100px]">
                              {item === selectedItem2
                                ? selectedItem2.percentage
                                : item.percentage}
                              %
                            </span>
                            <div className="bg-green-600 h-2 w-[250px]  rounded-full"></div>
                          </div>
                        </div>
                        <div className=" ml-0 mt-3  ">
                          <h3 className="text-2xl font-bold ">{item.title}</h3>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default File1;
