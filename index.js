const AWS = require('aws-sdk');
const uuid = require('uuid');
AWS.config.update({ region: 'ap-south-1' });
const orgId = uuid.v4();

const dynamodb = new AWS.DynamoDB.DocumentClient();

var params = {
    TableName: 'SAAF',
    Item: {
        PKey: `ORG#${orgId}`,
        SKey: `#METADATA#${orgId}`,
        name: 'SAAF Inc',
        tier: 'Basic'
    }
};

dynamodb.put(params, function (err, data) {
    if (err) console.log(err);
    else console.log(data);
});