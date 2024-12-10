import { Conf } from '@/assets'
import React from 'react'

const ImportantDatesHighCommittee = () => {
  return (
    <div className="w-full relative my-[50px] h-full py-10 overflow-hidden animate-slidein300">
    {/* Background Image */}
    <div
      className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${Conf})` }}
    >
        <h1 className='text-2xl font-bold'>Important Dates</h1>
        <div>
            <div>
                <h1></h1>
                <p></p>
            </div>
        </div>
    </div>

    {/* Gradient Overlay */}
    <div className="w-full absolute inset-0 bg-gradient-to-r from-uni-green2 to-uni-green2-light opacity-90"></div>
    </div>

  )
}

export default ImportantDatesHighCommittee