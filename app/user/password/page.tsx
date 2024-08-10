import React from 'react'
import ResetPassword from './ResetPassword'
import { auth } from '@/auth'
import { redirect} from 'next/navigation';

const page =async  () => {
    const session = await auth();
    const email=session?.user?.email
    if(email){
        return (

            <ResetPassword email={email}/>
        )
    }
    else{
        redirect('/user/signin')
    }

}

export default page