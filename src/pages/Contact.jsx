import React from 'react';

function sendEmail(e) {
  e.preventDefault();
  alert('Mensaje enviado!');
}

const Contacto = () => {
  return (
    <div className="max-w-4xl mx-auto py-32 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Contacto</h2>
      
      {/* Información de Contacto */}
      <div className="mb-8 text-center">
        <p><strong>Dirección:</strong> Frankfurt am Main, Alemania</p>
        <p>
          <strong>Teléfono:</strong>{" "}
          <a href="https://wa.me/NUMERO_TELEFONO" className="text-green-600 underline">
            +XX XXXXXXXX
          </a>
        </p>
        <p><strong>Email:</strong> soporte@ejemplo.com</p>
      </div>

      {/* Botón de WhatsApp */}
      <div className="text-center mb-8">
        <a
          href="https://wa.me/NUMERO_TELEFONO"
          className="bg-green-500 text-white px-6 py-2 rounded-full shadow-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          📲 Contactar por WhatsApp
        </a>
      </div>

      {/* Formulario de Contacto */}
      <form onSubmit={sendEmail} className="space-y-4 max-w-lg mx-auto">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          className="border rounded p-2 w-full"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          className="border rounded p-2 w-full"
          required
        />
        <textarea
          name="mensaje"
          placeholder="Mensaje"
          className="border rounded p-2 w-full"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-blue-600 transition"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contacto;
