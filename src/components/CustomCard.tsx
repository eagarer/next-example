import React from 'react'
import { Card, CardBody, CardLink, CardSubtitle, CardText, CardTitle } from "react-bootstrap";


function CustomCard({ commentHeader, commentDesc }: any) {
  console.log("customCard rendered");
  
  return (
    <Card style={{ width: '18rem' }}>
      <CardBody>
        <CardTitle>{commentHeader}</CardTitle>
        <hr />
        {/* <CardSubtitle className="mb-2 text-muted">Card Subtitle</CardSubtitle> */}
        <CardText>
          {commentDesc}
        </CardText>
        {/* <CardLink href="#">Card Link</CardLink>
        <CardLink href="#">Another Link</CardLink> */}
      </CardBody>
    </Card>
  )
}

export default CustomCard