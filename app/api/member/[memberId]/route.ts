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

type MemberIdSlug = Promise<{ memberId: string }>;

export async function GET(
	request: NextRequest,
	{ params }: { params: MemberIdSlug }
): Promise<NextResponse> {
	// member一括取得
	const memberId = (await params).memberId;

	if (memberId) {
		const command = new GetCommand({
			TableName: "GlapeMembers",
			Key: {
				MemberId: memberId,
			},
		});
		const response = await docClient.send(command);
		return NextResponse.json({ member: response }, { headers: corsHeaders });
	} else {
		return NextResponse.json(
			{ error: "memberId is required." },
			{ status: 500, headers: corsHeaders }
		);
	}
}

export async function POST(
	request: NextRequest,
	{ params }: { params: MemberIdSlug }
): Promise<NextResponse> {
	// 新規イベント作成及び既存イベントの更新
	const memberId = (await params).memberId;
	const item = await request.json();
	item.MemberId = memberId;

	const command = new PutCommand({
		TableName: "GlapeMembers",
		Item: item,
	});
	const response = await docClient.send(command);
	if (response.$metadata.httpStatusCode === 200) {
		return NextResponse.json({ message: "OK" }, { headers: corsHeaders });
	} else {
		console.log(response);
		return NextResponse.json(
			{ error: "Can't put MemberData" },
			{ status: response.$metadata.httpStatusCode, headers: corsHeaders }
		);
	}
}

export async function DELETE(
	request: NextRequest,
	{ params }: { params: MemberIdSlug }
) {
	const memberId = (await params).memberId;

	const command = new DeleteCommand({
		TableName: "GlapeMembers",
		Key: {
			MemberId: memberId,
		},
	});
	const response = await docClient.send(command);
	console.log(response);
	if (response.$metadata.httpStatusCode === 200) {
		return NextResponse.json({ message: "OK" }, { headers: corsHeaders });
	} else {
		console.log(response);
		return NextResponse.json(
			{ error: "Can't delete MemberData" },
			{ status: response.$metadata.httpStatusCode, headers: corsHeaders }
		);
	}
}

export async function OPTIONS() {
	return NextResponse.json({}, { headers: corsHeaders });
}
