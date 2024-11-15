import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");7

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
    const handleSubmit = async (e) => {
        e.preventDefault(); 
       
        const dataToSend = {
        ...formData,
        sessionId: uuidv4(),
        timestamp: new Date().toISOString() 
        };

        try {
            const response = await fetch('http://localhost:3001/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSend),
            })
            if(response.ok) {
                setSuccessMessage('Gracias por tu mensaje. Hemos recibido tus comentarios. ')
            
                setFormData({
                    name: "",
                    email: "",
                    message: "",
                });
            }else {
                console.log("Error sending message")
            }
        }catch (error) {
            console.error('Error sending message', error)
        }


        }

        return(
            <div className="p-4 bg-white rounded-lg shadow-md w-80">
                <h1 className="text-2xl font-bold text-center mb-4">Contacto</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block font-medium">Nombre</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-medium">Mensaje</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded"
                    >
                        Enviar
                    </button>
                </form>
                {successMessage && (
                    <div className="mt-4 bg-green-100 border border-green-400 text-green-700 p-4 rounded">
                        {successMessage}
                    </div>
                )}
            </div>
        )
    }


