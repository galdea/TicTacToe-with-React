import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

const TicTacToe = () => {
  const [board, setBoard] = React.useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]);
  const [currentPlayer, setCurrentPlayer] = React.useState('X');

  const handleClick = (row, col) => {
    if (board[row][col] !== '') {
      return;
    }
    const newBoard = [...board];
    newBoard[row][col] = currentPlayer;
    setBoard(newBoard);
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  const renderCell = (row, col) => {
    return (
      <Button
        variant="outline-primary"
        onClick={() => handleClick(row, col)}
        style={{ width: '100%', height: '100%' }}
      >
        {board[row][col]}
      </Button>
    );
  };

  return (
    <Container id="root">
      <Row>
        <Col>{renderCell(0, 0)}</Col>
        <Col>{renderCell(0, 1)}</Col>
        <Col>{renderCell(0, 2)}</Col>
      </Row>
      <Row>
        <Col>{renderCell(1, 0)}</Col>
        <Col>{renderCell(1, 1)}</Col>
        <Col>{renderCell(1, 2)}</Col>
      </Row>
      <Row>
        <Col>{renderCell(2, 0)}</Col>
        <Col>{renderCell(2, 1)}</Col>
        <Col>{renderCell(2, 2)}</Col>
      </Row>
    </Container>
  );
};

export default TicTacToe;
