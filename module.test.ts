import { someCheck } from './module';

const mockSomeConstantValueGetter = jest.fn();

jest.mock('./constants', () => (
    {
        get someConstantValue() {
            return mockSomeConstantValueGetter();
        },
    })
);

describe('someCheck', () => {
    it('returns "true" if someConstantValue is true', () => {
        mockSomeConstantValueGetter.mockReturnValue(true);
        expect(someCheck()).toEqual('true');
    });

    it('returns "false" if someConstantValue is false', () => {
        mockSomeConstantValueGetter.mockReturnValue(false);
        expect(someCheck()).toEqual('false');
    });
});