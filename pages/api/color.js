let currentColor = "#9945FF"; // Default color

export default function handler(req, res) {
  if (req.method === 'POST') {
    currentColor = req.body.color;
    res.status(200).json({ message: 'Color updated successfully' });
  } else if (req.method === 'GET') {
    res.status(200).json({ color: currentColor });
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}