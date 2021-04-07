const Habit = require('../../../models/habits')

const db = require('../../../dbConfig/init');

const pg = require('pg');
jest.mock('pg');

describe('Habit', () => {
    beforeEach(() => jest.clearAllMocks())
    
    afterAll(() => jest.resetAllMocks())

describe('all', () => {
        test('it resolves with habits on successful db query', async () => {
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({ rows: [{}, {}, {}, {}]});
            const all = await Habit.all;
            expect(all).toHaveLength(4)
        })

        test('it resolves with a habit with a property of id on a successful db query', async () => {
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({ rows: [{}]});
            const all = await Habit.all;
            expect(all[0]).toHaveProperty('id')
 
    });
})

    describe('create', () => {
        test('it resolves with habit on successful db query', async () => {
            let habitData = { habit_name: "Sleep", frequency: 4, user_id:3}
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({rows: [{...habitData, id: 1}]});
            const result = await Habit.create(habitData);
            expect(result).toHaveProperty('id')
        })
    });

    describe('updateStreak', () => {
        test('it gets the frequency data from each users habits if they are true', async () =>{
            let habitData = { habit_name: "Sleep", frequency: 1, user_id:3, completed: true}
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({rows: [{...habitData, }]})
            
        })
    })

})


