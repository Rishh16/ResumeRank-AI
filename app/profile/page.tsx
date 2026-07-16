export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white p-10">

      <h1 className="text-4xl font-bold mb-8">
        👤 My Profile
      </h1>

      <div className="bg-slate-800 rounded-2xl p-8 max-w-2xl">

        <div className="flex items-center gap-6">

          <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center text-4xl font-bold">
            R
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              Rishika Nakirtha
            </h2>

            <p className="text-slate-400">
              AI & ML Student
            </p>

            <p className="text-slate-400">
              Resume Rank User
            </p>
          </div>

        </div>

      </div>

    </main>
  );
}