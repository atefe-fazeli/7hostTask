import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';

const TemplateLibrary = () => {
  return (
    <Container className="my-5">
      <Row className="bg-white rounded-4 p-4 align-items-center">
        <Col xs={12} lg={6} className="text-center text-lg-start mb-4 mb-lg-0">
          <h2 className="text-warning mb-3">Free template library included</h2>
          <p className="text-muted mb-4">
            We have got quite a few ready made templates for better project
            management that you can use now.
          </p>
          <Button variant="link" className="p-0 text-primary">
            Learn More <span>→</span>
          </Button>
        </Col>
        <Col xs={12} lg={6} className="position-relative">
          <div
            className="position-absolute rounded-circle"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '300px',
              height: '300px',
              background: 'rgba(255, 165, 0, 0.2)', // دایره نارنجی کم‌رنگ
              zIndex: 0,
            }}
          />
          <Image
            src="/template-graphic.png" // جایگزین با تصویر گرافیکی واقعی
            alt="Template Library Graphic"
            width={400}
            height={400}
            style={{ position: 'relative', zIndex: 1 }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default TemplateLibrary;