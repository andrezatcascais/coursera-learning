const functions = require('./functions');

//Description here what we are doing 
it('is defined', () => {
    //what we are waiting to happen
    expect(functions.getAge("Andreza", 42)).toBeDefined();
})

//Description here what you are doing
test('2 + 2 is equal to 4', () => {
    /**
     * Most importantly, just is using matches 
     * the the way to test values in different ways.
     * It is trying to be specific about what we're trying to match.*/
    expect(functions.add(2, 2)).toBe(4);
})

it('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    //To use for an object to be would be the right match to use for primitive values
    expect(data).toEqual({one: 1, two: 2});

    //here we run a test here, get failure ont the test
   // expect(data).not.toEqual({one: 1, two: 2});
})

test('test isNull', () => {
    expect(functions.isNull()).toBeFalsy();
    //expect(functions.isNull()).toBeUndefined();
})

it('test isUndefined', () => {
    expect(functions.isUndefined()).toBeFalsy();    
})

/*
toBeNUll
toBeDefined
toBeUndefined
toBeTruthy
toBeFalsy

we can also have multiple 'expect' statements inside of one particular test
*/

test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
})

it('two plus two', () => {
    const value = 2 + 2;
    //gt =>  ' > '
    expect(value).toBeGreaterThan(3);
    //gte => ' >= '
    expect(value).toBeGreaterThanOrEqual(3.5);
    //lt =>  '< '
    expect(value).toBeLessThan(5);
    //lte =>'<= '
    expect(value).toBeLessThanOrEqual(4.5);

    expect(value).toBe(4);
    //eq => '='
    expect(value).toEqual(4);
})

test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    expect(value).toBeCloseTo(0.3);
})

it('there is no I in team', () => {
    //expect('team').not.toMatch(/^team$/i);
    expect('team').toMatch(/^team$/i);
})

test('the shopping list has t-shirt on it', () => {
    const shoppingList = [
        'nappies', 
        'toilet roll', 
        'bin bags', 
        't-shirt'
    ];
    //it works both ways
    expect(shoppingList).toContain('t-shirt');
    expect(new Set(shoppingList)).toContain('t-shirt');
})



it ('compiling android goes as expected', () => {
   expect(functions.compileAndroidCode).toThrow();
   expect(functions.compileAndroidCode).toThrow(/are/);
})
