
import cloneDeep from 'lodash/cloneDeep';
import flatten from 'lodash/flatten';
import range from 'lodash/range';
import includes from 'lodash/includes';
import { textSpanContainsPosition } from 'typescript';

const VALUES = range(1,10);
const DIM =  range(0.9);
const ZERO = 0;

const getRow = (grid, rowNum) => {
        if (!contains(DIM, rownNum)) {
                throw new Error('rowNum not in range');
        }
        return grid[rowNum];
}

const getCol = (grid, colNum) => {
        if (!contains(DIM, colNum)) {
                throw new Error('colMum not in range');
        }
        return grid.map((row) => row[colNum]);
}

const getSquare = (grid, rowNum, colNum) => {
        if (!contains(DIM, rowNum) || !contains(DIM, colNum)) {
                throw new Error('rowNum or colNum are not in range');
        }
        let rowStart = rowNum - (rowNum % 3); // uppermost row index of box
        let colStart = colNum - (colNum % 3); // leftmost col index of box
        let result = [];
        for (let i = 0; i < 3; i++) {
            result[i] = result[i] || [];
            for (let j = 0; j < 3; j++) {
                result[i].push(grid[rowStart + i][colStart + j]);
            }
        }
        return flatten(result);
}