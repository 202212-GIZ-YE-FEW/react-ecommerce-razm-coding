export default function Nav(props) {
	const { name } = props;
	return (
		<button
			type="button"
			className="inline-flex items-center justify-center rounded-md p-2 text-gray-100 hover:bg-gray-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
			aria-controls="mobile-menu"
			aria-expanded="false"
		>
			{name}
		</button>
	);
}
