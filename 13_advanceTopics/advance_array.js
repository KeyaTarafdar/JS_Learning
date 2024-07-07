/*
 Types of Array------------------------------------------------------------------------
1. Packed Array: Array with Continuous values(array with values on each index)
ex — [1,2,3,4,5,6]
2. Holey Array: Array where some index are not having any values
ex — [1,2, ,4,5,6]

## Packed Array && Holey Array------------------------------------------------------------------------
Both have further subcategory based on Elements present in array

1. SMI ELEMENTS (small integers) — If Array Having Integer Values on each index
    a.Packed Array — [1,2,3,4,5] 
    b. Holey Array — [1,2,,4,5]
2. DOUBLE_ELEMENTS- If Array vaving float Values also in array
    a. Packed Array — [1,2,6.0]
    b. Holey Array — [1,,6.0]
3. PACKED_ELEMENTS — If Array Having all kinds of Valuesalso in array
    a. Packed Array — [1,2,6.0, ‘hello’]
    b. Holey Array — [1,,6.0, ‘hello’]

## Optimisation on Packed Array && Holey Array------------------------------------------------------------------------
1. Optimisation on Packed array is most effective
    ## Reason —
        If elements are present on each index(packed) then whenever we look for that elements it get’s returned with that value
        const arr = [1,2,3,4,5], arr[1] =2
2. Optimisation on Holey array is most costly
    # Reason —
        The V8 engine has to perform a series of operations in order to execute a statement => to access an hole in the array.
        The operations are---
            1. bound check
            2. hasOwnProperty(arra_name , index)
            3. hasOwnProperty(arra_name.prototype , index)
            4. hasOwnProperty(Object.prototype , index)
    # holes are very expensive.

## SMI > Double > Packed

## if we push an double value in an SMI array => then array will be downgraded
## a downgraded array can't be ungraded.
*/

const arr1 = new Array(3);
arr1[0] = 0;
arr1[1] = 1;
arr1[2] = 2;

const arr2 = []; //Optimized method then previous
arr2.push(1);
arr2.push(2);
