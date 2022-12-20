import React, { useState } from 'react';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';

function TicTacToe(props) {
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
  const [currentPlayer, setCurrentPlayer] = useState(props.symbol);
  const [winner, setWinner] = useState('');
  const [gameover, setGameover] = useState(false);

  const checkWinner = (table) => {
    const WINCHANCES = [    [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    for (let i=0; i<WINCHANCES.length; i=i+1){
      const [a,b,c] = WINCHANCES[i];
      
      if (table[a] && table[a] === table[b] && table[b] === table[c]){
        setGameover(true);
        return table[a];
      }
    }
  }
  
  const handleClick = (index) => {

    const winner = checkWinner(board);
    if (winner) {
      setWinner(winner); 
      setGameover(true); 
      return;
    }
    
    // Only allow a move if the space is not already occupied and the game is not over
    if (board[index] === '' && !gameover) { // check if game is over before allowing a move
      // Make a copy of the board to update
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
    
      // Switch to the other player
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }  
  }
  
  // Function to reset the game board, current player, and gameOver flag
  const resetGame = () => {
    setBoard(['', '', '', '', '', '', '', '', '']);
    setCurrentPlayer(props.symbol);
    setWinner(''); 
    setGameover(false); 
  }

  return (
    <Container id="root">
      <div className="col-7 mt-5 p-5" id="menu-container">
        <h2 id="white-text">Tic Tac Toe in React.js</h2>
        <h4
  className="pb-2 pt-3"
  id="white-text"
  style={{ color: winner ? '#456f53' : 'white' }}
>
  {winner ? (winner + ' wins!') : 'It is ' + currentPlayer + ' turn!'}
</h4>
      <Button className="btn-sm mb-2" variant="secondary" onClick={resetGame}>Start Over</Button>
      <Row>
        <Col gutter={0}>
          <Button id="grid" variant="primary" onClick={() => handleClick(0)}>{board[0]}</Button>
        </Col>
        <Col gutter={0} xs={4}>
          <Button id="grid" variant="primary" onClick={() => handleClick(1)}>{board[1]}</Button>
        </Col>
        <Col gutter={0} xs={4}>
          <Button id="grid" variant="primary" onClick={() => handleClick(2)}>{board[2]}</Button>
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <Button id="grid" variant="primary" onClick={() => handleClick(3)}>{board[3]}</Button>
        </Col>
        <Col xs={4}>
        <Button id="grid" variant="primary" onClick={() => handleClick(4)}>{board[4]}</Button>
        </Col>
        <Col xs={4}>
        <Button id="grid" variant="primary" onClick={() => handleClick(5)}>{board[5]}</Button>
        </Col>
        </Row>
        <Row>
        <Col xs={4}>
          <Button id="grid" variant="primary" onClick={() => handleClick(6)}>{board[6]}</Button>
        </Col>
        <Col xs={4}>
        <Button id="grid" variant="primary" onClick={() => handleClick(7)}>{board[7]}</Button>
        </Col>
        <Col xs={4}>
        <Button id="grid" variant="primary" onClick={() => handleClick(8)}>{board[8]}</Button>
        </Col>
        </Row>
        </div>
        </Container>  
        
  ) 
}
export default TicTacToe;
