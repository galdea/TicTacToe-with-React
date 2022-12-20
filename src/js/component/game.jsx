import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

function TicTacToe(props) {
  // Declare state variables for the game board, current player, and winner message
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
  const [currentPlayer, setCurrentPlayer] = useState(props.symbol);
  const [winner, setWinner] = useState(''); // Declare a state variable for the winner message
  const [gameOver, setGameOver] = useState(false); // Declare a state variable to track if the game is over

  const handleClick = (index) => {
    // Check if the current player has won the game
    if (checkWinner()) {
      setWinner(currentPlayer); // Update the winner with the current player's name
      setGameOver(true); // Set the gameOver flag to true
      return;
    }
  
    // Only allow a move if the space is not already occupied and the game is not over
    if (board[index] === '' && !gameOver) {
      // Make a copy of the board to update
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
  
      // Switch to the other player
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  }
  

  // Function to check if the current player has won the game
  const checkWinner = () => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (const combination of winningCombinations) {
      if (board[combination[0]] === currentPlayer &&
          board[combination[1]] === currentPlayer &&
          board[combination[2]] === currentPlayer) {
        return true;
      }
    }
    return false;
  }

  // Function to reset the game board, current player, and gameOver flag
  const resetGame = () => {
    setBoard(['', '', '', '', '', '', '', '', '']);
    setCurrentPlayer(props.symbol);
    setWinner(''); // Reset the winner message
    setGameOver(false); // Reset the gameOver flag
  }

  return (
    <Container id="root">
      <div className="col-5 mt-5 pb-5 pt-4" id="menu-container">
        <h2 id="white-text">Tic Tac Toe in React.js</h2>
        {winner ? (
          <h4 className="pb-5" id="white-text">{winner} wins!</h4>
      ) : (
        <h4 className="pb-5" id="white-text">It is {currentPlayer} turn!</h4>
      )}
      <Row>
        <Col xs={4}>
          <Button variant="primary" onClick={() => handleClick(0)}>{board[0]}</Button>
        </Col>
        <Col xs={4}>
          <Button variant="primary" onClick={() => handleClick(1)}>{board[1]}</Button>
        </Col>
        <Col xs={4}>
          <Button variant="primary" onClick={() => handleClick(2)}>{board[2]}</Button>
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <Button variant="primary" onClick={() => handleClick(3)}>{board[3]}</Button>
        </Col>
        <Col xs={4}>
        <Button variant="primary" onClick={() => handleClick(4)}>{board[4]}</Button>
        </Col>
        <Col xs={4}>
        <Button variant="primary" onClick={() => handleClick(5)}>{board[5]}</Button>
        </Col>
        </Row>
        <Row>
        <Col xs={4}>
          <Button variant="primary" onClick={() => handleClick(6)}>{board[6]}</Button>
        </Col>
        <Col xs={4}>
        <Button variant="primary" onClick={() => handleClick(7)}>{board[7]}</Button>
        </Col>
        <Col xs={4}>
        <Button variant="primary" onClick={() => handleClick(8)}>{board[8]}</Button>
        </Col>
        </Row>
        </div>
        </Container>  
        
  ) 
}
export default TicTacToe;
