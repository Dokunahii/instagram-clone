import React, { useContext } from 'react'
import { Button, Col, Image, Row } from 'react-bootstrap'
import { ProfileContext } from '../App'

export default function ProfileHeader() {

    const {image,
        name,
        posts_no,
        followers,
        following,
        subheader,
        account_type: accountType,
        description,
        link
    } = useContext(ProfileContext)
  return (
    <Row className='p-5'>
        <Col md={3} className='d-flex align-item-center justify-content-center'>
            <Image
                src={image}
                style={{height: "150px"}}
                roundedCircle
            />
        </Col>
        <Col md={9}>
            <span className='me-4' style={{fontSize: "20px"}}>
                {name}
            </span>
            <Button className='me-2'>Follow Back</Button>
            <Button className='light me-2'>Message</Button>
            <Button className='light me-2'>
                <i className='bi bi-person-plus'></i>
            </Button>
            <Button className='light'>
                <i className='bi bi-three-dots'></i>
            </Button>
            <br />
            <br />
            <p style={{ margin: 0, fontWeight: "bold"}}>{subheader}</p>
            <p style={{ margin: 0, color: "grey"}}>{accountType}</p>
            <p style={{ margin: 0, fontWeight: "bold"}}>{description}</p>
            <a href={link}>{link}</a>
        </Col>
    </Row>
  )
}
