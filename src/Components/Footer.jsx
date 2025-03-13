import React, {useState, useEffect, useContext } from 'react'
import {Nav, Navbar, Row, Col, Stack, Container, Button, Form, NavDropdown, Card} from 'react-bootstrap';
import { Outlet, useNavigate} from 'react-router'

  function Footer() {
  return(
    <footer>
      <container fluid>
        <Row className="bg-primary text-white">
          <Col className="mx-5">
            <Stack>
              <h2>Website Name</h2>
            </Stack>
            Column 1
          </Col>
          <Col>
            Column 2
          </Col>
          <Col>
            Column 3
          </Col>
        </Row>
      </container>
    </footer>
    )
  }
     export default Footer; 
