const {getPeople, isCity } = require('./script');
const fetch = require("node-fetch");

test('calls swapi to get people with a promisse',  () => {
  expect.assertions(2)
   return getPeople(fetch)
      .then(data => {
        expect(data.count).toEqual(82),
          expect(data.count).not.toEqual(42);
      })
    })

    
    test('testing captured calls', () => {
      const mock = jest.fn();

      let result = mock('foo');
      expect(mock).toHaveBeenCalled();
      expect(mock).toHaveBeenCalledTimes(1);
      expect(mock).toHaveBeenCalledWith('foo'); 
    })

    test('mock return value', () => {
      const mock = jest.fn();
      mock.mockReturnValue('bar');

      expect(mock('foo')).toBe('bar');
      expect(mock).toHaveBeenCalledWith('foo');
    })

    //Mocks is used dependecy injection. So that means you create the behavior 
    //that you expect and then inject it into your function as dependency.
    test('test getPeople with dependecy injection', () => {
      /* same process, callbacks function and then inside of here 
      will setup our mock fetch. So, instead of using a normal fetch, 
      we're actually going to use a mock fetch: */
      const mockFetch = jest.fn()
      .mockReturnValue(Promise.resolve({
        json: () => Promise.resolve({
          count: 87,
          results: [1,2,3,4,5]
        })
      }))
      expect.assertions(5);
      return getPeople(mockFetch).then(data => {
        expect(mockFetch.mock.calls.length).toEqual(1);
        expect(mockFetch).toBeCalled();
        expect(mockFetch).toHaveBeenCalledTimes(1);
        expect(mockFetch).toHaveBeenCalledWith('https://swapi.dev/api/people');
        expect(data.count).toEqual(87);
      });
    })

   /* initializing or closing a database, Jest actually provides us with 
   a some really useful helper function to handle this. Let's say, for example,
   that we have some kind of imaginary database. */
   let db = [];
   const initDb = () => db = ['Vienna', 'London', 'Lisbon', 'Paris'];
   const closeDb = () => db = [];

   beforeEach(() => initDb());
   afterEach(() => closeDb());

  //  bebofeAll(() => initDb());
  //  afterAll(() => closeDb());
   
   test('city db has Vienna', () => {
    //expect(isCity('Cienna', db)).toBeTruthy();
      expect(isCity('Vienna', db)).toBeTruthy();
   })

