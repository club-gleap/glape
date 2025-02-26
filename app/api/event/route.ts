import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { unmarshall } from "@aws-sdk/util-dynamodb";
import { NextResponse } from "next/server";

const corsHeaders = {
	"Access-Control-Allow-Origin": "http://localhost:3000",
	"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
	"Access-Control-Allow-Headers": "Content-Type",
};

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
		return NextResponse.json(
			{ events: unmarshalledData },
			{ headers: corsHeaders }
		);
	} else {
		console.log(response);
		return NextResponse.json(
			{ error: "Can't fetch EventData" },
			{ status: 500, headers: corsHeaders }
		);
	}
}

export async function OPTIONS() {
	return NextResponse.json({}, { headers: corsHeaders });
}
