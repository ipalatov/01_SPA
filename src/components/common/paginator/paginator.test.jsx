import React from 'react';
import { create } from "react-test-renderer";
import Paginator from "./paginator";


describe('Paginator component test', () => {
    test("page count is 11 but should be diplayed 10 page buttons +2 navigation buttons", () => {
        const component = create(<Paginator totalItemsCount={11}
            pageSize={1}
            portionSize={10} />);
        const root = component.root;
        let buttons = root.findAllByType('button');
        expect(buttons.length).toBe(12);
    });

    
})


