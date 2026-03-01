const CLOUDFLARE_ACCOUNT_ID = process.env.CF_ACCOUNT_ID!;
const D1_DATABASE_ID = process.env.D1_DATABASE_ID!;
const CF_API_TOKEN = process.env.CF_API_TOKEN!;

export async function queryD1(sql: string, params: any[] = []) {
  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/d1/database/${D1_DATABASE_ID}/query`,
    {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${CF_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sql,
        params,
      }),
    }
  );

  const data = await response.json();
  return data.result[0];
}