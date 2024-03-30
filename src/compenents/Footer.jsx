import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,

} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-2 gap-8 text-gray-300'>
        <div>
            <h1 className='w-16 text-3xl cursor-pointer font-bold text-[#00df9a]'>React.</h1>
            <p className='py-4'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div className='flex justify-between md:w-[75%] my-6'>
        
                 <FaGithubSquare   size={30} className='cursor-pointer' />
                 <FaFacebookSquare size={30} className='cursor-pointer' />
                 <FaInstagram      size={30} className='cursor-pointer' />
                 <FaTwitterSquare  size={30} className='cursor-pointer' />
                 <FaDribbbleSquare size={30} className='cursor-pointer' />

                </div>
        </div>
        <div className='lg:cols-span-2 flex justify-between mt-6'>
        <div>
                <h6 className='cursor-pointer w-4 font-medium text-gray-400'>Solutions</h6>
                <ul>
                    <li className='cursor-pointer w-4 py-2 text-sm'>Analitics</li>
                    <li className='cursor-pointer w-4 py-2 text-sm'>Marketing</li>
                    <li className='cursor-pointer py-2 text-sm'>E-commerce</li>
                    <li className='cursor-pointer w-4 py-2 text-sm'>Insights</li>
                </ul>
            </div>
            <div>
                <h6 className='cursor-pointer w-4 font-medium text-gray-400'>Support</h6>
                <ul>
                    <li className='cursor-pointer w-4 py-2 text-sm'>Pricing</li>
                    <li className='cursor-pointer w-4 py-2 text-sm'>Documentations</li>
                    <li className='cursor-pointer w-4 py-2 text-sm'>Guides</li>
                    <li className='cursor-pointer py-2 text-sm'>API Status</li>
                </ul>
            </div> 
            <div>
                <h6 className='cursor-pointer w-4 font-medium text-gray-400'>Company</h6>
                <ul>
                    <li className='cursor-pointer w-4 py-2 text-sm'>About</li>
                    <li className='cursor-pointer w-4 py-2 text-sm'>Blogs</li>
                    <li className='cursor-pointer w-4 py-2 text-sm'>Jobs</li>
                    <li className='cursor-pointer w-4 py-2 text-sm'>Press</li>
                    <li className='cursor-pointer w-4 py-2 text-sm'>Careers</li>
                </ul>
            </div>
            <div>
                <h6 className='cursor-pointer w-4 font-medium text-gray-400'>Legal</h6>
                <ul>
                    <li className='cursor-pointer w-4 py-2 text-sm'>Claim</li>
                    <li className='cursor-pointer w-4 py-2 text-sm'>Policy</li>
                    <li className='cursor-pointer w-4 py-2 text-sm'>Terms</li>
                   
                </ul>
            </div>   

        </div>
    </div>
  )
}

export default Footer

//utk column= kalu type tanpa ada spacing clomn ye jd xpaka conth= <p className='py-4'>jajajajshfhlhhhhhhhhhhhhhhmsmsjsnsjsnsbsxgsuajdkdms</p> cer tular kekgi ye xmasuk.