import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
	DeleteCommand,
	DynamoDBDocumentClient,
	GetCommand,
	PutCommand,
} from "@aws-sdk/lib-dynamodb";
import { NextRequest, NextResponse } from "next/server";

const corsHeaders = {
	"Access-Control-Allow-Origin": "http://localhost:3000",
	"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
	"Access-Control-Allow-Headers": "Content-Type",
};

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

type EventIdSlug = Promise<{ eventId: string }>;

export async function GET(
	request: NextRequest,
	{ params }: { params: EventIdSlug }
): Promise<NextResponse> {
	// event一括取得
	const eventId = (await params).eventId;

	if (eventId) {
		const command = new GetCommand({
			TableName: "GlapeEvents",
			Key: {
				EventId: eventId,
			},
		});
		const response = await docClient.send(command);
		return NextResponse.json({ events: response }, { headers: corsHeaders });
	} else {
		return NextResponse.json(
			{ error: "EventId is required." },
			{ status: 500, headers: corsHeaders }
		);
	}
}

export async function POST(
	request: NextRequest,
	{ params }: { params: EventIdSlug }
): Promise<NextResponse> {
	// 新規イベント作成及び既存イベントの更新
	const eventId = (await params).eventId;
	const item = await request.json();
	item.EventId = eventId;

	const command = new PutCommand({
		TableName: "GlapeEvents",
		Item: item,
	});
	const response = await docClient.send(command);
	if (response.$metadata.httpStatusCode === 200) {
		return NextResponse.json({ message: "OK" }, { headers: corsHeaders });
	} else {
		console.log(response);
		return NextResponse.json(
			{ error: "Can't put EventData" },
			{ status: response.$metadata.httpStatusCode, headers: corsHeaders }
		);
	}
}

export async function DELETE(
	request: NextRequest,
	{ params }: { params: EventIdSlug }
) {
	const eventId = (await params).eventId;

	const command = new DeleteCommand({
		TableName: "GlapeEvents",
		Key: {
			EventId: eventId,
		},
	});
	const response = await docClient.send(command);
	console.log(response);
	if (response.$metadata.httpStatusCode === 200) {
		return NextResponse.json({ message: "OK" }, { headers: corsHeaders });
	} else {
		console.log(response);
		return NextResponse.json(
			{ error: "Can't delete EventData" },
			{ status: response.$metadata.httpStatusCode, headers: corsHeaders }
		);
	}
}

export async function OPTIONS() {
	return NextResponse.json({}, { headers: corsHeaders });
}
