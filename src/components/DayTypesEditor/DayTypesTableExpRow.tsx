import { Checkbox } from '@entur/form';
import {
  DataCell,
  ExpandableRow,
  ExpandRowButton,
  TableRow,
} from '@entur/table';
import DayType from 'model/DayType';
import React, { useState } from 'react';
import {useSelector} from "react-redux";
import {selectIntl} from "../../i18n";

export const DayTypesTableExpRow = ({
  dayType,
  selected,
  onSelect,
  numberOfServiceJourneys,
  children,
  openInitial = false,
}: {
  dayType: DayType;
  selected: boolean;
  onSelect: (selected: boolean) => void;
  numberOfServiceJourneys: number;
  children: any;
  openInitial?: boolean;
}) => {
  const [open, setopen] = useState(openInitial);
  const { formatMessage } = useSelector(selectIntl);

  return (
    <>
      <TableRow>
        <DataCell>
          <Checkbox
            name={dayType.name}
            checked={selected}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onSelect(event.target.checked)
            }
          />
        </DataCell>
        <DataCell>
          <ExpandRowButton onClick={() => setopen(!open)} open={open} />
        </DataCell>
        <DataCell>{dayType.id}</DataCell>
        <DataCell>{dayType.name || formatMessage('dayTypeNoName')}</DataCell>
        <DataCell>{numberOfServiceJourneys}</DataCell>
      </TableRow>
      <ExpandableRow colSpan={3} open={open}>
        {children}
      </ExpandableRow>
    </>
  );
};
