'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { UserButton } from '@clerk/nextjs'
import { Modal } from '@/components/ui/modal';

const SetupPage =  ()=> {



  return (
   <div >
     <Modal title='baha' description='waaa' isOpen={true} onClose={()=>{}}>
children </Modal>
      </div>
  )
}
export default SetupPage
