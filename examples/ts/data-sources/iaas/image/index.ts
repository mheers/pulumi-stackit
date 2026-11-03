import * as pulumi from "@pulumi/pulumi";
import * as stackit from "@mheers/pulumi-stackit";

export const example = stackit.getImageOutput({
    projectId: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",      // Replace with your actual project ID
    imageId: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",        // Replace with your actual image ID
});
