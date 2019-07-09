import Square from './Square'
import React, { Component } from 'react';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: [null, null, null, 
                    null, null, null, 
                    null, null, null],
            isFirstPlayer: true,
            winner: null,
            isDraw: false,
            xScore: 0,
            oScore: 0
        }
    }

    squareClickHandler = (i) => {
        if(!this.state.squares[i] && !this.state.winner){
        const newSquares = [...this.state.squares]
        newSquares[i] = this.state.isFirstPlayer ? 'O' : 'X'

        this.setState({
            squares: newSquares,
            isFirstPlayer: !this.state.isFirstPlayer
        })}
    }
    calculateDraw(){
        const newSquares = [...this.state.squares]
        for(let i=0; i< 9; i++){
            if(!newSquares[i]){
                return
            }
        }
        this.setState({
            isDraw: true
        })
    }
    calculateWinner = () => {
        const { squares } = this.state

        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for(let i=0; i<lines.length; i++){
            const [ a, b, c] =  lines[i]
            if( squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
                let xAdd =0, oAdd=0;
                if(squares[a] === 'O'){
                    oAdd = 1
                }
                else{
                    xAdd = 1
                }
                this.setState({
                    winner: squares[a],
                    xScore: this.state.xScore + xAdd,
                    oScore: this.state.oScore + oAdd
                })
            }
        }
    }
    componentDidUpdate(){
        if(this.state.winner === null)
            this.calculateWinner();
        if(this.state.isDraw === false)
            this.calculateDraw()
        //console.log(this.state.isDraw)
    }
    renderSquares = (i) => {
        return (<Square
            index={i}
            value={this.state.squares[i] || '-'}
            clickHandler={this.squareClickHandler}
        ></Square>);

    }
    restart = () => {
        //newSquares[i] = this.state.isFirstPlayer ? 'O' : 'X'

        this.setState({
            squares: [null, null, null, null, null, null, null, null, null],
            isFirstPlayer: true,
            isDraw: false,
            winner: null
        })   
    }

    render() {
        return (<div>
            <div>
                <h3>{this.state.winner ? "" : 
                    this.state.isFirstPlayer ? "Turn 0" : "Turn X"}</h3>
                <h3>{this.state.winner ? "The Game has been Won by "+ this.state.winner : ""}</h3>
                <h3>{this.state.isDraw ? "The game has been drawn": ""}</h3>
            </div>
            <div>
                {this.renderSquares(0)}
                {this.renderSquares(1)}
                {this.renderSquares(2)}
            </div>
            <div>
                {this.renderSquares(3)}
                {this.renderSquares(4)}
                {this.renderSquares(5)}
            </div>
            <div>
                {this.renderSquares(6)}
                {this.renderSquares(7)}
                {this.renderSquares(8)}
            </div>
            <div>
                <h1>Result </h1>
                <button value="restart" onClick={this.restart} >Restart</button>
                <h2>Score of X: {this.state.xScore}</h2>
                <h2>Score of O: {this.state.oScore}</h2>
            </div>
        </div>);
    }
}

export default Board;