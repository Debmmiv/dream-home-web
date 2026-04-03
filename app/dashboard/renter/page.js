export default function RenterDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome Home!</h1>
        <p className="text-gray-600 mb-6">
          Your renter account was successfully created and you are fully logged in.
        </p>
        <div className="p-4 bg-green-50 text-green-700 rounded-lg text-sm font-medium border border-green-200">
          Backend trigger & Auth flow successful 🚀
        </div>
      </div>
    </div>
  );
}