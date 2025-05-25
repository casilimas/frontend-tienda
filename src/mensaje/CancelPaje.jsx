function CancelPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="text-center transform scale-[0.9] bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl md:text-3xl font-bold text-red-600 mb-4">
          Pago Cancelado ❌
        </h1>
        <p className="text-base md:text-lg mb-6 text-gray-700">
          Tu pago no se completó. Puedes intentarlo nuevamente.
        </p>
        <a
          href="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-300"
        >
          Volver al inicio
        </a>
      </div>
    </div>
  );
}

export default CancelPage;
