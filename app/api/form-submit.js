// pages/api/form-submit.js

export default function handler(req, res) {
  if (req.method === 'POST') {
    const formData = req.body;
    // Aquí puedes procesar los datos recibidos en `formData`
    console.log(formData);
    res.status(200).json({ message: 'Formulario recibido correctamente' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Método ${req.method} no permitido`);
  }
}
