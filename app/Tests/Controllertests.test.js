import { describe, expect, it, jest } from '@jest/globals';
import { cusWithMostOrders } from '../controller/customerController';


const expectedMostOrders =
    '[{"O_CUSTKEY" : "TJ", "CountedOrders": "2"}],' +
    '{"O_CUSTKEY" : "J.K Rowling", "CountedOrders": "1"},' +
    '{"O_CUSTKEY" : "Media Markt - Worms", "CountedOrders": "1"},' +
    '{"O_CUSTKEY" : "Quavo", "CountedOrders": "1"}]';


jest.mock('../controller/customerController.js', () => {
    return {
        cusWithMostOrders: jest.fn().mockResolvedValue(expectedMostOrders)
    };
});

describe('GetTopOrders', () => {
    it("Should get top 5 orders", async () => {
        const output = await cusWithMostOrders();
        expect(output).toStrictEqual(expectedMostOrders);
    })
})