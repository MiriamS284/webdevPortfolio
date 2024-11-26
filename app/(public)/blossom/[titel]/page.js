import ResponsiveProjectDisplay from "../../../_components/ResponsiveProjectDisplay";
import { fetchProjectByTitle } from "../../../_lib/helpers";

export default async function Page({ params }) {
  const { titel } = await params;

  const project = await fetchProjectByTitle(titel);

  if (!project) {
    return (
      <div className="container mx-auto p-8">
        <h1 className="text-2xl font-bold">Projekt nicht gefunden</h1>
        <p>Das angeforderte Projekt existiert nicht.</p>
      </div>
    );
  }

  return <ResponsiveProjectDisplay project={project} />;
}
