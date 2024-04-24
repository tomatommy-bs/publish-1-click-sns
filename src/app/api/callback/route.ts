import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  const obj = {
    message: "Hello World",
  };
  return NextResponse.json(obj);
}
