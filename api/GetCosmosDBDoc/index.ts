import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    var documents = context.bindings.documents;
    for (var i = 0; i < documents.length; i++) {
        var document = documents[i];
        // operate on each document
        context.log(document)

    }
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: documents
    }
    context.done();
};

export default httpTrigger;