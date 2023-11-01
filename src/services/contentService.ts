export async function fetchContent(page: number): Promise<any> {
  try {
    const response = await fetch(
      `https://test.create.diagnal.com/data/page${page}.json`
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }
    const data = await response.json();
    return data.page["content-items"].content;
  } catch (error) {
    throw new Error(`Error fetching data`);
  }
}
