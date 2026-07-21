import * as pulumi from "@pulumi/pulumi";
import * as stackit from "@mheers/pulumi-stackit";

export const example = stackit.getServerOutput({
    projectId: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",      // Replace with your actual project ID
    serverId: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",       // Replace with your actual server ID
});
