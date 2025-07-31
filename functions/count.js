export async function onRequest() {
  const T0 = new Date("2025-07-24T00:00:00.000Z").getTime();
  const Tnow = Date.now();
  const interval = 1000;

  const currentCount = Math.floor((Tnow - T0) / interval);

  return new Response(currentCount.toString(), {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "no-store",
    },
  });
}
