import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";
import { unmarshall } from "@aws-sdk/util-dynamodb";
import { NextRequest, NextResponse } from "next/server";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export async function GET(): Promise<NextResponse> {
	// event一括取得
	const command = new ScanCommand({
		TableName: "GlapeEvents",
	});
	const response = await docClient.send(command);
	if (response.$metadata.httpStatusCode === 200) {
		const unmarshalledData = response.Items!.map((item) => {
			return unmarshall(item);
		});
		return NextResponse.json({ events: unmarshalledData });
	} else {
		console.log(response);
		return NextResponse.json(
			{ error: "Can't fetch EventData" },
			{ status: 500 }
		);
	}
}
