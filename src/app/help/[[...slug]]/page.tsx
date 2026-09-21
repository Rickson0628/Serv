export default async function HelpPage({
  params,
}: {
  params: Promise<{
    slug?: string[];
  }>;
}) {
  const { slug } = await params;

  return (
    <main>
      <h1>Serv Help Center</h1>

      <p>
        Current path:
        {slug?.join(" > ") ?? "Help Home"}
      </p>
    </main>
  );
}