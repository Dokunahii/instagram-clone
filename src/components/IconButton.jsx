import React from 'react'
import { Button } from 'react-bootstrap'

export default function IconButton({ isTop, isButtom, className, onClick}) {
    var margin = 'light'

    if (isTop) {
        margin = 'light my-4'
    } else if (isButtom) {
        margin = 'light mt-auto mb-3'
    }

  return (
    <Button variant={margin} style={{ marginBottom: "7px"}} onClick={onClick}>
          <i className={className} style={{ 'fontSize': '24px'}}></i>
    </Button>  
  )
}
