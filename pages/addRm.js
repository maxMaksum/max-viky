import React from 'react'
import Display from '../components/Display'
import Form3 from '../components/Form3'
import Headers from '../components/Headers'
import Table from '../components/Table'
import TableAdd from '../components/TableAdd'
import TableNew from '../components/TableNew'
import Template from '../components/Template'

function addRm() {
  return (
    <div className="w-full relative bg-gray-50">
      <Headers />
      <div className='w-100 flex items-center justify-center mt-8'>
  {/* <Template /> */}

<Form3/>
</div>
      <div className='flex flex-col items-center justify-center w-100'>
        <TableNew/>
        {/* <TableAdd/> */}
    </div> 
    </div>
    
  )
}

export default addRm