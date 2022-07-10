import Link from "next/link";

function Card(props) {
  console.log(props);
  return (
    <Link href={`/browse/${props.props.uuid}`}>
      <div
        className="max-w-sm rounded overflow-hidden shadow-lg m-4"
        key={props.props.uuid}
      >
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2"> {props.props.title}</div>
          <p className="text-gray-700 text-base">{props.props.description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {props.props.category.name}
          </span>
        </div>
        <div className="px-6">
          <span className="inline-block bg-green-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Penyedia : {props.props.owner.name}
          </span>
        </div>
        <div className="px-6 pb-2">
          <span className="inline-block bg-green-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {props.props.status}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default Card;
