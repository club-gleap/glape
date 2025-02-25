import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
	DeleteCommand,
	DynamoDBDocumentClient,
	GetCommand,
	PutCommand,
} from "@aws-sdk/lib-dynamodb";
import { marshall } from "@aws-sdk/util-dynamodb";
import { NextRequest, NextResponse } from "next/server";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export async function GET(
	request: NextRequest,
	{ params }: { params: { eventId: string } }
): Promise<NextResponse> {
	// event一括取得
	const eventId = params.eventId;

	if (eventId) {
		const command = new GetCommand({
			TableName: "GlapeEvents",
			Key: {
				EventId: eventId,
			},
		});
		const response = await docClient.send(command);
		return NextResponse.json({ response });
	} else {
		return NextResponse.json(
			{ error: "EventId is required." },
			{ status: 500 }
		);
	}
}

export async function POST(
	request: NextRequest,
	{ params }: { params: { eventId: string } }
): Promise<NextResponse> {
	// 新規イベント作成及び既存イベントの更新
	const eventId = params.eventId;
	const item = await request.json();
	item.EventId = eventId;
	console.log(marshall(item));

	const command = new PutCommand({
		TableName: "GlapeEvents",
		Item: item,
	});
	const response = await docClient.send(command);
	if (response.$metadata.httpStatusCode === 200) {
		return NextResponse.json({ message: "OK" });
	} else {
		console.log(response);
		return NextResponse.json(
			{ error: "Can't put EventData" },
			{ status: response.$metadata.httpStatusCode }
		);
	}
}

export async function DELETE(
	request: NextRequest,
	{ params }: { params: { eventId: string } }
) {
	const eventId = params.eventId;

	const command = new DeleteCommand({
		TableName: "GlapeEvents",
		Key: {
			EventId: eventId,
		},
	});
	const response = await docClient.send(command);
	console.log(response);
	if (response.$metadata.httpStatusCode === 200) {
		return NextResponse.json({ message: "OK" });
	} else {
		console.log(response);
		return NextResponse.json(
			{ error: "Can't delete EventData" },
			{ status: response.$metadata.httpStatusCode }
		);
	}
}
