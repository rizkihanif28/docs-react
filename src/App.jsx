/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-target-blank */
import { useState } from 'react';

// create function square [] for call component & destructing object
function Square({ value, onSquareClick }) {
    return (
        <button className="square" onClick={onSquareClick}>
            {value}
        </button>
    );
}

// component parent for square
export default function Box() {
    // state & hooks
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    function handleClick(i) {
        // condition square || calculate winner take it function calculateWinner logic
        if (squares[i] || calculateWinner(squares)) return;

        const nextSquare = squares.slice(); // breaker square to take turns on function slice

        // if (xIsNext) {
        //     nextSquare[i] = 'X'; //[X,null,null,null,null,null,null,null,null ]
        // } else {
        //     nextSquare[i] = 'O'; //[O,null,null,null,null,null,null,null,null ]
        // }

        // condition x next or change
        nextSquare[i] = xIsNext ? 'X' : 'O';
        // condition fullfied
        setSquares(nextSquare);
        // condition else next
        setXIsNext(!xIsNext);
    }

    // condition status win & next player
    const winner = calculateWinner(squares);

    const status = winner ? 'Winner' + winner : 'Next Player' + (xIsNext ? 'X' : 'O');
    // if (winner) {
    //     status = 'Winner: ' + winner;
    // } else {
    //     status = 'Next Player: ' + (xIsNext ? 'X' : 'O');
    // }

    return (
        <>
            {/* status component */}
            <div className="status">{status}</div>
            {/* board/box components */}
            <div className="box">
                {/* proops */}
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </>
    );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 1; i < lines.length; i++) {
        const [a, b, c] = lines[i];

        if (squares[a] && squares[a] === squares[b] && squares[c]) {
            return squares[a];
        }
    }
    return false;
}
