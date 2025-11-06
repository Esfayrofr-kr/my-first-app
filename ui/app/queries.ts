export const HARVESTER_ERROR_QUERY = `fetch logs
| filter matchesValue(routingKey, "harvester*") AND matchesValue(content, "*staging*") AND NOT matchesValue(content, "Associate scanned same staging zone that the current container is already in.") AND matchesValue(type, "ERROR")
| makeTimeseries count(), by:{status}`;