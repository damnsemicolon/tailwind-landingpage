import React from 'react'
import {
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare
} from 'react-icons/fa'

const Footer = () => {
    return(
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
                <h1 className='w-full text-3xl font-bold text-[#008adf]'>Tailwind.</h1>
                <p className='py-4'>This is an exercise to use tailwind in React. Initial thoughts: very easy to use, especially the flexibility in setting css for each item. Too bad it looks messy though.</p>
                <div className='flex md:w-[75%] my-6 justify-between'>
                    <FaFacebookSquare size={30}/>
                    <FaInstagram size={30}/>
                    <FaTwitterSquare size={30}/>
                    <FaGithubSquare size={30}/>
                </div>
            </div>
            <div className='lg:col-span-2 flex justify-between mt-6'>
                {/* Col 1 */}
                <div>
                    <h6 className='font-medium, text-gray-400'>Solutions</h6>
                    <ul>
                        <li className='py-2 text-sm'><a href="Analytics">Analytics</a></li>
                        <li className='py-2 text-sm'><a href="Marketing">Marketing</a></li>
                        <li className='py-2 text-sm'><a href="Commerce">Commerce</a></li>
                        <li className='py-2 text-sm'><a href="Insights">Insights</a></li>

                    </ul>
                </div>

                 {/* Col 2 */}
                 <div>
                    <h6 className='font-medium, text-gray-400'>Support</h6>
                    <ul>

                        <li className='py-2 text-sm'><a href="Pricing">Pricing</a></li>
                        <li className='py-2 text-sm'><a href="Documentation">Documentation</a></li>
                        <li className='py-2 text-sm'><a href="Guides">Guides</a></li>
                        <li className='py-2 text-sm'><a href="API Status">Pricing</a></li>
                    </ul>
                </div>

                 {/* Col 3 */}
                 <div>
                    <h6 className='font-medium, text-gray-400'>Company</h6>
                    <ul>
                        <li className='py-2 text-sm'><a href="About">About</a></li>
                        <li className='py-2 text-sm'><a href="Blog">Blog</a></li>
                        <li className='py-2 text-sm'><a href="Careers">Careers</a></li>
                        <li className='py-2 text-sm'><a href="Press">Press</a></li>
                        <li className='py-2 text-sm'><a href="Jobs">About</a></li>
                    </ul>
                </div>

                 {/* Col 4 */}
                 <div>
                    <h6 className='font-medium, text-gray-400'>Legal</h6>
                    <ul>
                        <li className='py-2 text-sm'><a href="Claim">Claim</a></li>
                        <li className='py-2 text-sm'><a href="Terms">Terms</a></li>
                        <li className='py-2 text-sm'><a href="Privacy Policy">Privacy Policy</a></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Footer