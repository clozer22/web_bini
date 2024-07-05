import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import '../../font/font.css'

const page = ({ isOpen, setIsOpen }) => {
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
            className="bg-white  p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <div className="relative z-10">
             
              <h3 className="text-2xl font-black text-start mb-2 text-[#7ACAD2] tracking-wider" style={{fontFamily: 'HyperoRegular'}}>About BINI</h3>
              <p className="text-justify mb-6">
                Filipino pop phenomenon BINI features 8 multi-talented members,
                Aiah, Colet, Maloi, Gwen, Stacey, Mikha, Jhoanna, and Sheena.
                The girls have quickly become the biggest female Filipino artist
                in history, and second biggest artist overall in the
                Philippines, holding both the #1 & #2 spots on the top Filipino
                music charts simultaneously with the hits “Salamin, Salamin” and
                “Pantropiko.” <br/> <br/> BINI's sound is shaped by homegrown artists and
                global sensations alike. On the heels of their unprecedented
                growth in socials and in streaming listenership (30M +), the
                girls recently sold out their “BINIverse” tour in
                record-breaking time, and have been heralded as one of Teen
                Vogue's 2024 Girl Groups to watch!
              </p>
              {/* <div className="flex gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-transparent hover:bg-white/10 transition-colors text-black font-semibold w-full py-2 rounded"
                >
                  Nah, go back
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded"
                >
                  Understood!
                </button>
              </div> */}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default page;
