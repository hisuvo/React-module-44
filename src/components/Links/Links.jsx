import React, { useEffect, useState } from 'react';
import { RiCloseLargeFill } from "react-icons/ri";
import { TiThMenu } from "react-icons/ti";
import Link from '../LInk/Link';

const Links = ({ ...handleToggle }) => {
    const [links, setLinks] = useState([])
    const [toggle, setToggle] = useState(false)
    useEffect(() => {
        fetch("../../../public/Link.json")
            .then(res => res.json())
            .then(data => setLinks(data))
    }, [])

    return (
        <>
            <div className='md:hidden text-2xl' onClick={() => setToggle(!toggle)}>
                {!toggle ? <TiThMenu /> : <RiCloseLargeFill />}
            </div>
            <ul className={`md:flex gap-4 duration-1000 px-10 space-y-4 py-6 border-b-2 absolute bg-blue-400 text-xl ${toggle ? "left-10 " : '-left-[20rem]'}`}>
                {
                    links.map((link, index) =>
                        <Link key={index} {...link} />
                    )
                }
            </ul>
        </>
    );
};

export default Links;