import EventPageHeader from 'components/Headers/EventPageHeader'
import MainNavbar from 'components/Navbars/MainNavbar'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import React from 'react'
import DateTimePicker from 'react-datetime-picker'
import { Container, Input, Row, FormGroup, Label, Form, Button, Col } from 'reactstrap'
import csegsaApi from 'api/csegsaApi'

const AddItem = () => {
  const [startTime, onStartTimeChange] = useState(new Date())
  const [endTime, onEndTimeChange] = useState(new Date())
  const [eventName, setEventName] = useState('')
  const [eventDescription, setEventDescription] = useState('')
  const [eventLocation, setEventLocation] = useState('')
  const history = useHistory()

  const handleSubmit = e => {
    e.preventDefault()
    console.log(startTime)
    console.log(endTime)
    console.log(eventName)
    csegsaApi
      .post('/events', {
        name: eventName,
        location: eventLocation,
        description: eventDescription,
        start_time: startTime,
        end_time: endTime
      })
      .then(res => {
        console.log(res)
        history.push('/events')
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <>
      <MainNavbar />
      <EventPageHeader></EventPageHeader>
      <Container>
        Event Details <br />
        <br />
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="Name">Name</Label>
            <Input
              id="Name"
              name="Name"
              placeholder="Event Name"
              type="plaintext"
              value={eventName}
              onChange={e => setEventName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Container>
              <Row>
                <Label for="Name">Location</Label>
                <Input
                  id="Name"
                  name="Name"
                  placeholder="Event Name"
                  type="plaintext"
                  value={eventLocation}
                  onChange={e => setEventLocation(e.target.value)}
                />
              </Row>
              <Row>
                <Col md="6">
                  <Label for="StartTime">StartTime :</Label>
                  <br></br>
                  <DateTimePicker id="StartTime" onChange={onStartTimeChange} value={startTime} />
                </Col>
                <Col md="6">
                  <Label for="EndTime">EndTime :</Label>
                  <br></br>
                  <DateTimePicker id="EndTime" onChange={onEndTimeChange} value={endTime} />
                </Col>
              </Row>
            </Container>
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              id="description"
              name="text"
              type="textarea"
              value={eventDescription}
              onChange={e => setEventDescription(e.target.value)}
            />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </Container>
    </>
  )
}

export default AddItem
