import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {
  const ref=useRef(null);
  const data = [
    { desc: "I am Rohan of Branch CSE-III of Gandhi Insititue of Technological Advanacement", 
      filesize: ".9mb", 
      close: false, 
      tag: { isOpen: true, tagtitle: "Download Now", tagcolor: "green" } ,
    },

    { desc: "I am Rohan of Branch CSE-III of Gandhi Insititue of Technological Advanacement ", 
      filesize: ".9mb", 
      close: false, 
      tag: { isOpen: true, tagtitle: "Download Now", tagcolor: "blue" } ,
    },
    { desc: "I am Rohan of Branch CSE-III of Gandhi Insititue of Technological Advanacement ", 
      filesize: ".9mb", 
      close: true, 
      tag: { isOpen: false, tagtitle: "Upload", tagcolor: "green" } ,
    },
  ];
  return (
    <div ref={ref} className=' fixed top-0 left-0 w-full h-full z-[3] flex gap-10 flex-wrap p-5'>
      {data.map((item,index)=>(
        <Card data={item} reference={ref}/>
      ))}

    </div>
  )
}

export default Foreground