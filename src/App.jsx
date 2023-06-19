import {FiSearch} from"react-icons/fi";
import {AiFillPlusCircle}from"react-icons/ai";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCars from "./components/ContactCars";
import Modal from "./components/Modal";
import AddAndUpdateCotact from "./components/AddAndUpdateCotact";

const App = () => {
  const [contacts, setContacts]= useState([]);
  const [isOpen, setOpen]= useState(false);
  const onOpen= ()=> {
    setOpen(true);
  };
   const onClose=()=>{
    setOpen(false);
  };

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        const contactsSnapshot = await getDocs(contactsRef);
        const contactLists = contactsSnapshot.docs.map((doc)=>{
          return{
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(contactLists);
      } catch (error) {
        console.log(error);
      }
 
    };

   getContacts();
 },[]);
  
  return (
    <>
    <div className="mx-auto max-w[370px] px-4">
      <Navbar/>
      <div className="flex gap-2">
        <div className="relative flex flex-grow items-center">
         <FiSearch className=" absolute ml-1 text-3xl text-white"/>
          <input
           type="text" className="h-10 flex-grow rounded-md border
            border-white  bg-transparent pl-9 text-white" />
        </div>
          <AiFillPlusCircle onClick={onOpen} className="cursor-pointer text-5xl text-white" />
      </div>
      <div className="mt-4 flex flex-col gap-4">{
          contacts.map((contact) =>(
            <ContactCars key={contact.id} contact={contact}/>
            )) }
      </div>
    </div>
    <AddAndUpdateCotact onClose={onClose} isOpen={isOpen}/>
    </>
  );
};

export default App;
