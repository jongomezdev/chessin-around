'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import './chessboard.css';

const Chessboard = () => {
  const [board, setBoard] = useState([
    [
      'blackRook',
      'blackKnight',
      'blackBishop',
      'blackQueen',
      'blackKing',
      'blackBishop',
      'blackKnight',
      'blackRook',
    ],
    Array(8).fill('blackPawn'),
    Array(8).fill(null),
    Array(8).fill(null),
    Array(8).fill(null),
    Array(8).fill(null),
    Array(8).fill('whitePawn'),
    [
      'whiteRook',
      'whiteKnight',
      'whiteBishop',
      'whiteQueen',
      'whiteKing',
      'whiteBishop',
      'whiteKnight',
      'whiteRook',
    ],
  ]);
  const renderSquare = (row: number, col: number, piece: string) => {
    const isLightSquare = (row + col) % 2 === 0;
    const squareClass = `square ${isLightSquare ? 'light' : 'dark'}`;

    const handleClick = () => {
      // Copy the current state
      const newBoard = [...board];

      // Move the piece (this is just an example, you'll need to implement the actual chess rules)
      newBoard[row][col] = null;
      newBoard[row + 1][col] = piece;

      // Update the state
      setBoard(newBoard);
    };

    return (
      <div className={squareClass} onClick={handleClick}>
        {piece && (
          <Image
            src={`/${piece}.svg`}
            alt={piece}
            layout="fill"
            objectFit="contain"
          />
        )}
      </div>
    );
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

  return (
    <div className="container">
      <div className="chessboard">{renderBoard(board)}</div>
    </div>
  );
};

export default Chessboard;
