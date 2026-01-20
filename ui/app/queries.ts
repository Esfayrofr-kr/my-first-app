export function HARVESTER_ERROR_QUERY (orderNumber:String) { 
    return `fetch logs
| filter matchesValue(routingKey, "harvester-consumer-prod") AND matchesValue(messageDetail.orderNumber, "${orderNumber}")
| sort timestamp desc`;
};

export function PICK_CREATION_ERROR (orderNumber:String){
    return `fetch logs,scanLimitGBytes:-1 ,from:-2h, to: now()
| filter matchesValue(routingKey, "kcp-pickcreation-prod") AND matchesValue(messageDetail.OrderNo, "${orderNumber}")`;
}

export function STAGING_CONSUMER_ERROR (orderNumber:String){
    return `fetch logs,scanLimitGBytes:-1 ,from:-1h, to: now()
| filter matchesValue(routingKey, "staging-consumer-layer") AND matchesValue(messageDetail.OrderNo, "${orderNumber}")`;
}