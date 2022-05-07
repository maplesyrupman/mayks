import Head from 'next/head'
import Image from 'next/image'

export default function UnderConstruction() {
  return (
    <div className='under-construction'>
      <Head>
        <title>Tedesco Group</title>
      </Head>
      <div className='flex flex-col justify-center items-center pt-6'>
        <div className=''>
          <Image src='/images/logo.png' width={500} height={250} alt="blue and white grid"/>
        </div>
        <div className='p-4 '>
        <h1 className='text-3xl text-center'>
          Coming Soon!
        </h1>
        <p className='text-center'>
          Our website is currently under construction, please check back shortly. 
        </p>
        </div>
      </div>
    </div>
  )
}