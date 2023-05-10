import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function BookingForm() {
  const [bookingData, setBookingData] = useState({
    tower: '',
    floor: '',
    room: '',
    date: '',
    time: '',
    comment: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(bookingData, null, 2));
  };

  const handleReset = () => {
    setBookingData({
      tower: '',
      floor: '',
      room: '',
      date: '',
      time: '',
      comment: '',
    });
  };

  return (
    <Form onSubmit={handleSubmit} onReset={handleReset}>
      <Form.Group className="m-3">
        <Form.Label>Башня</Form.Label>
        <Form.Control
          as="select"
          name="tower"
          value={bookingData.tower}
          onChange={handleInputChange}
          required
        >
          <option value="">Выберите башню</option>
          <option value="A">Башня А</option>
          <option value="B">Башня Б</option>
        </Form.Control>
      </Form.Group>

      <Form.Group className="m-3">
        <Form.Label>Этаж</Form.Label>
        <Form.Control
          as="select"
          name="floor"
          value={bookingData.floor}
          onChange={handleInputChange}
          required
        >
          <option value="">Выберите этаж</option>
          {[...Array(25)].map((_, i) => (
            <option key={i} value={i + 3}>
              {i + 3}
            </option>
          ))}
        </Form.Control>
      </Form.Group>

      <Form.Group className="m-3">
        <Form.Label>Переговорная</Form.Label>
        <Form.Control
          as="select"
          name="room"
          value={bookingData.room}
          onChange={handleInputChange}
          required
        >
          <option value="">Выберите переговорную</option>
          {[...Array(10)].map((_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </Form.Control>
      </Form.Group>

      <Form.Group className="m-3">
        <Form.Label>Дата</Form.Label>
        <Form.Control
          type="date"
          name="date"
          value={bookingData.date}
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Form.Group className="m-3">
        <Form.Label>Время</Form.Label>
        <Form.Control
          type="time"
          name="time"
          value={bookingData.time}
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Form.Group className="m-3">
        <Form.Label>Комментарий</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="comment"
          value={bookingData.comment}
          onChange={handleInputChange}
        />
      </Form.Group>

      <div className="d-grid gap-2 d-md-block">
        <Button
          type="submit"
          variant="primary"
          className="m-2"
        >
          Отправить
        </Button>
        <Button
          type="reset"
          variant="secondary"
          className="m-2"
        >
          Очистить
        </Button>
      </div>
    </Form>
  );
}
