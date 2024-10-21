import React, { createContext, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import IconButton from './components/IconButton'
import ProfileHeader from './components/ProfileHeader'
import { PROFILE_DATA } from './Data'
import AddPostModal from './components/AddPostModal'

export const ProfileContext = createContext()

export default function App() {
  
  const [showModal, setShowModal] = useState(false)
  const closeModal = () => setShowModal(false)
  const openModal = () => setShowModal(true)
  return (
    <ProfileContext.Provider value={PROFILE_DATA}>
      <Row>
      <Col sm={1} className='d-flex flex-column justify-content-start align-items-center vh-100 bg-light' 
        style={{position: 'sticky', top: 0}}
      >
        <IconButton className='bi bi-instagram' isTop></IconButton>  
        <IconButton className='bi bi-house' ></IconButton>  
        <IconButton className='bi bi-search' ></IconButton>  
        <IconButton className='bi bi-compass' ></IconButton>  
        <IconButton className='bi bi-file' ></IconButton>  
        <IconButton className='bi bi-chat' ></IconButton>  
        <IconButton className='bi bi-heart' ></IconButton>  
        <IconButton className='bi bi-plus-square' onClick={openModal}></IconButton>  
        <IconButton className='bi bi-person-circle' ></IconButton>  
        <IconButton className='bi bi-list' isBottom></IconButton>  
      </Col>
      <Col sm={11}>
        <ProfileHeader />
        
        <AddPostModal show={showModal} handleClose={closeModal} />
      </Col>
      </Row>
    </ProfileContext.Provider>
  )
}
