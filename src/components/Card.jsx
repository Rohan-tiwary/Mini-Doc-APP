import React ,{useRef} from 'react'
import { TbFileSpreadsheet } from "react-icons/tb";
import { FiDownload } from "react-icons/fi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion"

const Card = ({data,reference}) => {

    return (
        <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={0.1} dragTransition={{bounceStiffness:100 ,bounceDamping:30}} className=' relative w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
            <TbFileSpreadsheet />
            <p className='text-sm mt-5 font-semibold leading-tight'>{data.desc}</p>
            <div className='footer absolute bottom-0 w-full left-0'>
                <div className='flex items-center justify-between mb-3 py-3 px-8 '>
                    <h5>{data.filesize}</h5>
                    <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                        {data.close ? <IoIosCloseCircleOutline/> : <FiDownload  size=".7em" color="#fff"/>}
                    </span>
                </div>
                {
                    data.tag.isOpen ? (
                        <div className={`tag w-full ${data.tag.tagcolor==="blue" ? "bg-blue-600":"bg-green-600"} flex justify-center py-4`}>
                        <h3 text-sm font-semibold >{data.tag.tagtitle}</h3>
                       </div>
                    ):null
                }
               

            </div>
        </motion.div>
    )
}

export default Card