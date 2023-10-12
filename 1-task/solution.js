export type Add = (x: number, y: number) => number;

export const add: Add = (x, y) => {
if (typeof x !== 'number' || typeof y !== 'number' || isNaN(x) || isNaN(y) || !isFinite(x) || !isFinite(y)) {
throw new Error('WrongType');
}
return x + y;
};
