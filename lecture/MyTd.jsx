import React, {memo, useCallback, useEffect, useMemo, useRef} from "react";

const MyTd = memo(({ rowIndex, cellIndex, dispatch, cellData }) => {


    return (
        <td></td>
    )
});

MyTd.displayName = 'Td';

export default MyTd;