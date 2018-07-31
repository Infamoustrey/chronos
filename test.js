import test from 'ava'
import chronos from './index'

test('add-month', t => {
    t.is(
        new chronos().add(1, 'month').format('MM'),
        '8'
    );
})

test('add-year', t => {
    t.is(
        new chronos().add(1, 'day').format('DD'),
        '1'
    );
})

test('add-year', t => {
    t.is(
        new chronos().add(1, 'year').format('YYYY'),
        '2019'
    );
})