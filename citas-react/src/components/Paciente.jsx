import React from 'react'

export const Paciente = () => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">Hook</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: <span className="font-normal normal-case">Daniel</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email:{" "}
        <span className="font-normal normal-case">daniel@daniel.com</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha alta:{" "}
        <span className="font-normal normal-case">10 de diciembre 2023</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas:{" "}
        <span className="font-normal normal-case">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa quos
          enim consequuntur voluptatem rerum dolorum amet beatae a id suscipit
          similique optio harum laboriosam voluptate, at magnam facilis esse in.
        </span>
      </p>
    </div>
  );
}
