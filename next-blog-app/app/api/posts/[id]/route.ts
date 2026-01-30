import { NextResponse } from "next/server";
import { headers, cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  //   redirect("/blog"); возврат на страницу блога после удаления

  const headerList = headers(); // только readonly
  const type = (await headerList).get("Content-Type");

  const cookieList = cookies(); // только readonly
  const myCookie = (await cookieList).get("Cookie_1")?.value

  // логика удаления поста по id
  return NextResponse.json({ id,type, myCookie });
}
