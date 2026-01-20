import React from 'react';
import { Flex } from '@dynatrace/strato-components/layouts';
import { TitleBar } from '@dynatrace/strato-components-preview/layouts';
import { convertToColumnsV2, DataTableV2 } from '@dynatrace/strato-components-preview/tables';
import { useDql } from '@dynatrace-sdk/react-hooks';
import { HARVESTER_ERROR_QUERY, PICK_CREATION_ERROR, STAGING_CONSUMER_ERROR} from 'app/queries';
import { useState } from 'react';

export const HostList = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const resultHarvester = useDql({
    query:HARVESTER_ERROR_QUERY(orderNumber)
  });
  const resultPick = useDql({
    query:PICK_CREATION_ERROR(orderNumber)
  });
  const resultStaging = useDql({
    query:STAGING_CONSUMER_ERROR(orderNumber)
  });

  const handleChange = (e) => {
    setOrderNumber(e.target.value)
  };

  return (
    <Flex width="100%" flexDirection="column" justifyContent="center" gap={16}>
      <TitleBar>
        <TitleBar.Title>Order Logs</TitleBar.Title>
      </TitleBar>
      <label>
        Order number: <input
          value={orderNumber}
          onChange={handleChange}/>
      </label>
      <h2>Harvester Consumer Prod</h2>
      {resultHarvester.data && <DataTableV2 
            data={resultHarvester.data.records} 
            columns={convertToColumnsV2(resultHarvester.data.types)} 
            fullWidth/>}
      <hr />
      <h2>Pick Creation</h2>
      {resultPick.data && <DataTableV2 
            data={resultPick.data.records} 
            columns={convertToColumnsV2(resultPick.data.types)} 
            fullWidth/>}
      <hr/>
      <h2>Staging Consumer Layer</h2>
      {resultStaging.data && <DataTableV2 
            data={resultStaging.data.records} 
            columns={convertToColumnsV2(resultStaging.data.types)} 
            fullWidth/>}
    </Flex>
  );
};