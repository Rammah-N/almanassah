export default function handler(req, res) {
	axios.get("http://localhost:1337/Reports").then((response) => {
		console.log(response);
    res.status(200).json(response);
	});
}
