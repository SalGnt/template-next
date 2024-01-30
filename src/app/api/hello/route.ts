export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(request: Request) {
  return Response.json(
    { name: "John Doe" },
    {
      status: 200,
    }
  );
}
