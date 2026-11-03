import * as pulumi from "@pulumi/pulumi";
import * as stackit from "@mheers/pulumi-stackit";

export const example = stackit.getRoutingTableOutput({
    organizationId: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",     // Replace with your actual organization ID
    networkAreaId: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",      // Replace with your actual network area ID
    routingTableId: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",     // Replace with your actual routing table ID
});
