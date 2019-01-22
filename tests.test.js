const fizzbuzz = require('./fizzbuzz');
const leapYeap = require('./leapYear');

describe('fizzbuzz', ()=>{
    test('divisible by 3', ()=>{
        expect(fizzbuzz(3)).toBe('fizz')
    })

    test('divisible by 5', ()=>{
        expect(fizzbuzz(5)).toBe('buzz')
    })

    test('divisible by 3 and 5', ()=>{
        expect(fizzbuzz(15)).toBe('fizzbuzz')
    })

    test('divisible by negative', ()=>{
        expect(fizzbuzz(-15)).toBe('fizzbuzz')
    })

    test('divisible by none', ()=>{
        expect(fizzbuzz(8)).toBe(8)
    })

})

describe('leapYear', ()=>{
    test('divisible by 4',()=>{
        expect(leapYeap(4)).toBe(true)
    })

    test('divisible by 400',()=>{
        expect(leapYeap(400)).toBe(true)
    })

    test('divisible by 400',()=>{
        expect(leapYeap(800)).toBe(true)
    })

    test('not divisible by 100',()=>{
        expect(leapYeap(100)).toBe(false)
    })
})