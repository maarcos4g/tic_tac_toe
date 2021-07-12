const tic_tac_toe = {
    board: ['', '', '', '', '', '', '', '', ''],
    simbols: {
        options: ['X', 'O'],
        turn_index: 0,
        changed: function () {
            this.turn_index = (this.turn_index === 0 ? 1 : 0)
        }
    },

    container: null,
    gameover: false,
    winning_sequencies: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ],

    init: function (container) {
        this.container = container
    },

    play: function (position) {
        if (this.gameover) return false;
        if (this.board[position] === "") {
            this.board[position] = this.simbols.options[this.simbols.turn_index];
            this.draw();
            let ws_index = this.check_sequencies(this.simbols.options[this.simbols.turn_index]);
            if (ws_index >= 0) {
                this.game_is_over();
            } else {
                this.simbols.changed();
            }
            return true;
        } else {
            return false;
        };
    },

    game_is_over: function(){
        this.gameover = true,
        console.log('GAME OVER')
    },

    start: function() {
        this.board.fill('');
        this.draw();
        this.gameover = false;
    },

    check_sequencies: function (simbol) {
        for (i in this.winning_sequencies) {
            if (this.board[this.winning_sequencies[i][0]] === simbol &&
                this.board[this.winning_sequencies[i][1]] === simbol &&
                this.board[this.winning_sequencies[i][2]] === simbol
            ) {
                console.log('Sequência Vencedora: ' + i);
                alert('Parabéns. Você Venceu!');
                return i;
            }
        };
        return -1
    },

    draw: function () {
        let content = '';

        for (i in this.board) {
            content += '<div onclick="tic_tac_toe.play( ' + i + ' )">' + this.board[i] + '</div>';
        }

        this.container.innerHTML = content;
    }
};