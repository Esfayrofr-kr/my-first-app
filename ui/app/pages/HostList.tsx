import React from 'react';
import { Flex } from '@dynatrace/strato-components/layouts';
import { TitleBar } from '@dynatrace/strato-components-preview/layouts';
import { convertToColumnsV2, DataTableV2 } from '@dynatrace/strato-components-preview/tables';
import { useDql } from '@dynatrace-sdk/react-hooks';
import { HARVESTER_ERROR_QUERY } from 'app/queries';

export const HostList = () => {
    const result = useDql({
        query: HARVESTER_ERROR_QUERY,
    });
  return (
    <Flex width="100%" flexDirection="column" justifyContent="center" gap={16}>
      <TitleBar>
        <TitleBar.Title>Hosts Insights</TitleBar.Title>
      </TitleBar>
       {result.data && (
        <DataTableV2 data={result.data.records} columns={convertToColumnsV2(result.data.types)} fullWidth>
        </DataTableV2>
      )}
    </Flex>
  );
};