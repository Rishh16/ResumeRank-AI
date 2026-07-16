import { prisma } from "@/lib/prisma";

export default async function HistoryPage() {
  const history = await prisma.resumeAnalysis.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen bg-slate-900 text-white p-10">

      <h1 className="text-4xl font-bold mb-8">
        📜 Resume History
      </h1>

      {history.length === 0 ? (
        <div className="bg-slate-800 rounded-2xl p-8">
          <p className="text-slate-400">
            No previous resume analyses available.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">

          <table className="w-full border border-slate-700 rounded-xl overflow-hidden">

            <thead className="bg-slate-800">

              <tr>

                <th className="p-4 text-left">Date</th>
                <th className="p-4 text-left">Role</th>
                <th className="p-4 text-left">ATS Score</th>
                <th className="p-4 text-left">Matched Skills</th>
                <th className="p-4 text-left">Missing Skills</th>

              </tr>

            </thead>

            <tbody>

              {history.map((item) => (

                <tr
                  key={item.id}
                  className="border-t border-slate-700 hover:bg-slate-800"
                >

                  <td className="p-4">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </td>

                  <td className="p-4">
                    {item.role}
                  </td>

                  <td className="p-4 font-bold text-cyan-400">
                    {item.score}%
                  </td>

                  <td className="p-4 text-green-400">
                    {item.matchedSkills}
                  </td>

                  <td className="p-4 text-red-400">
                    {item.missingSkills}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>
      )}

    </main>
  );
}