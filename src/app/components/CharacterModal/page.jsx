import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import '../../font/font.css'

const page = ({ isOpen, setIsOpen, full_name, screenName, birthday }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white  p-6 rounded-lg w-full max-w-sm shadow-xl cursor-default relative overflow-hidden"
          >
            <div className="relative z-10">
             
              <h3 className="text-[2rem] text-center font-black  mb-2 text-[#F2A0B9]" style={{fontFamily: 'HyperoRegular'}}> BINI  <span className="text-[#7ACAD2]  text-[3rem] tracking-widest " >{screenName}</span></h3>
              <div className="flex justify-center items-center gap-2">
               <label htmlFor="" className="font-bold">Full Name: </label>
               <h4>{full_name}</h4>
              </div>
              <div className="flex justify-center items-center gap-2">
               <label htmlFor="" className="font-bold">Birthday: </label>
               <h4>{birthday}</h4>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default page;
