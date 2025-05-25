function SuccessPage() {
  return (
    <div className="flex items-center justify-center min-h-[80vh] px-4">
      <div className="text-center max-w-md">
        <h1 className="text-2xl sm:text-3xl font-bold text-green-600 mb-4">
          ✅🎉 ¡Pago Exitoso! 🎉✅
        </h1>
        <p className="text-base sm:text-lg mb-6 text-gray-700">
          Gracias por tu compra.
        </p>
        <a
          href="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition"
        >
          Volver al inicio
        </a>
      </div>
    </div>
  );
}

export default SuccessPage;
