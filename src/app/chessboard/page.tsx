import React from 'react';
import './chessboard.css';

const Chessboard = () => {
  const renderSquare = (row: number, col: number, piece: string) => {
    const isLightSquare = (row + col) % 2 === 0;
    const squareClass = `square ${isLightSquare ? 'light' : 'dark'}`;
    return <div className={squareClass}>{piece}</div>;
  };

  const renderBoard = (board: string[][]) => {
    const squares = [];
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        squares.push(renderSquare(row, col, board[row][col]));
      }
    }
    return squares;
  };

  const board = [
    ['8', '', ' ', ' ', ' ', ' ', '', ''],
    ['7', '', ' ', ' ', ' ', ' ', '', ''],
    ['6', '', ' ', ' ', ' ', ' ', '', ''],
    ['5', '', ' ', ' ', ' ', ' ', '', ''],
    ['4', '', ' ', ' ', ' ', ' ', '', ''],
    ['3', '', ' ', ' ', ' ', ' ', '', ''],
    ['2', '', ' ', ' ', ' ', ' ', '', ''],
    ['A1', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
  ];

  return <div className="chessboard">{renderBoard(board)}</div>;
};

export default Chessboard;
