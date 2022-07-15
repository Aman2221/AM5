import React from 'react'
import Link from "next/Link"

const route = () => {

    let dynamicRoutes : string[] = [
        "https://nextjs.org/", "https://nextjs.org/"
    ]
  return (
    <>
        { 
            dynamicRoutes.map((route, index) => {
                return <ul key={index}><li><Link href={route}><a>{route}{index}</a></Link></li></ul>
            })
        }
    </>
  )
}

export default route